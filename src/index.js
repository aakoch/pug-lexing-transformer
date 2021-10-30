import stream from 'stream'
import path from 'path';
import parser from 'pug-line-lexer'
import debugFunc from 'debug'
import { inspect } from 'util';
import debug from 'debug';
const streamDebug = debugFunc('pug-lexing-transformer:line-analyzer')
const transformerDebug = debugFunc('pug-lexing-transformer')
import { Worker } from 'worker_threads';

if (typeof String.fill !== 'function') {
  String.fill = function (length, char) {
    return ''.padStart(length, char || ' ')
  }
}

Array.prototype.peek = function () {
  return this[this.length - 1]
}

class LexingTransformer extends stream.Transform {
  first = true;
  currentIndent = 0;
  state = []
  stack = {
    internalArr: [],
    debug: debugFunc('stack'),
    push: function (txt) {
      // this.debug('pushing: ', txt)
      this.length++
      // this.debug('length: ', this.length)
      this.internalArr.push(txt)
    },
    pop: function () {
      let txt = this.internalArr.pop()
      // this.debug('popping: ', txt)
      this.length--
      // this.debug('length: ', this.length)
      return txt
    },
    length: 0
  }
  lineNo = 0
  buffer = []
  useAbsolutePath = true
  filesToAlsoParse = []

  constructor(filename) {
    transformerDebug('entering constuctor')
    super({ decodeStrings: true, encoding: 'utf-8' })
    this.filename = filename
    this.stack.push({ symbol: ']' })
  }
  _flush(callback) {
    transformerDebug('entering _flush')
    while (this.stack.length > 0) {
      this.push(this.stack.pop().symbol)
    }
    callback()
  }
  _transform(str, enc, callback) {
    transformerDebug('entering _transform')
    if (str instanceof Buffer) {
      str = str.toString()
    }
    if (typeof str === 'string') {
      transformerDebug('str=', str)
      try {
        const lines = str.split('\n')
        transformerDebug('lines=', lines)
        lines.filter(line => line.length).forEach(line => {
          this.push(this.processLine.call(this, line))
        })
        callback();
      }
      catch (e) {
        console.error(e)
        callback(new Error('Error parsing line number ' + this.lineNo + ' of ' + this.filename + ': ' + str.replace(/(IN|NO|DE)\d+ /, '') + '\nCause: ' + e.message, { cause: e }, null, (this != undefined ? this.lineNo : 'unknown')));
      }
    }
    else {
      callback(new Error('Expected a string but got ' + typeof str + '\nobj=' + inspect(str)))
    }
  }

  _final(callback) {
    transformerDebug('entering _final')
    // indentTransformer.ended = true
    // this.ended = true
    process.nextTick(function(filesToAlsoParse) { console.log("\n\nFiles to also parse: " + filesToAlsoParse.join(', ')) }, this.filesToAlsoParse)
    callback()
  };

  processLine(inputString) {
    transformerDebug('inputString=', inputString)
    let ret = []
    // let dedentCount = 0

    const regex = /(?<INDENT>IN)?(?<DEDENT>DE)?(?<NODENT>NO)?(?<LINENO>\d+) (?<text>.*)/
    const matches = inputString.match(regex)
    transformerDebug('matches=', matches)

    if (matches && matches.groups) {
      // transformerDebug('matches.groups=', matches.groups)
      this.lineNo = parseInt(matches.groups.LINENO, 10)
      // transformerDebug('lineNo=' + this.lineNo)

      this.handleDents(matches, ret);

      this.parseLineAndCreateString(matches, ret);
    }
    else {
      throw new Error('Malformed string: ' + inputString.substring(0, 120))
      // ret.push(inputString)
    }
    let retString = ret.join(' \n')
    if (typeof retString != 'string') {
      error('lexingTransformer', typeof retString)
    }
    transformerDebug('retString=' + retString)
    return retString
  }

  handleDents(matches, ret) {
    if (matches.groups.INDENT) {
      ret.push(', "children":[');
      this.stack.push({ obj: 'children', symbol: ']' });

      // transformerDebug('matches.groups.INDENT=', matches.groups.INDENT)
      this.currentIndent++;

      if (this.state.peek() == 'TEXT_START') {
        this.state.pop();
        this.state.push('TEXT');
      }
      else if (this.state.peek() == 'TEXT') {
        this.state.push('TEXT');
      }
      else if (this.state.peek() == 'CODE_START') {
        this.state.pop();
        this.state.push('UNBUF_CODE');
      }
      else if (this.state.peek() == 'UNBUF_CODE') {
        this.state.push('UNBUF_CODE');
      }
    }
    else if (matches.groups.DEDENT) {
      ret.push(this.stack.pop().symbol + this.stack.pop().symbol);

      if (matches.groups && matches.groups.text.length) {
        ret.push(this.stack.pop().symbol + ', ');
      }

      this.currentIndent--;

      let lastState = this.state.pop();
      if (lastState === 'MULTI_LINE_ATTRS') {
        this.state.push('MULTI_LINE_ATTRS_END');
      }
    }
    else {
      // need to handle the very first element
      transformerDebug('stack=', this.stack);
      if (this.stack.length == 1) {
        ret.push('[');
      }
      else {
        ret.push(this.stack.pop().symbol + ', ');
      }

      if ((this.state.peek() ?? '').endsWith('_START')) {
        this.state.pop();
      }
    }
  }

  parseLineAndCreateString(matches, ret) {
    const text = matches.groups.text;
    transformerDebug(text);
    if (text.trim().length > 0) {
      transformerDebug('before state=', this.state);
      const newObj = this.analyzeLine((this.state.length > 0 ? '<' + this.state.peek() + '>' : '') + text);

      // transformerDebug('newObj=', newObj)
      let nestedChildren = '';
      if (newObj.hasOwnProperty('state')) {
        if (newObj.state == 'NESTED') {
          if (newObj.children[0].hasOwnProperty('state')) {
            this.state.push(newObj.children[0].state);
          }
          const childrenStr = JSON.stringify(newObj.children[0]);
          transformerDebug('childrenStr=' + childrenStr);
          delete newObj.children;
          nestedChildren = ', "children":[' + childrenStr + ']';
        }
        else if (newObj.type == 'MULTI_LINE_ATTRS_END') {
          // MULTI_LINE_ATTRS_END is a one-time use state. If the parser doesn't thrown an error then we should just pop it
          this.state.pop();
          this.state.pop();
        }
        else {
          this.state.push(newObj.state);
        }
      }
      transformerDebug('after state=', this.state);
      delete newObj.state;

      if (newObj.type === 'pug_keyword' && (newObj.name === 'include' || newObj.name === 'extends')) {
        debug("newObj.filename=" + newObj)
        this.filesToAlsoParse.push(path.resolve(newObj.source, newObj.val))
      }

      const newObjStringified = JSON.stringify(newObj);
      ret.push(String.fill(this.currentIndent * 2) + '{"source":"' + (this.useAbsolutePath ? path.resolve(this.filename) : path.relative('', this.filename)) + '",' + newObjStringified.substring(1, newObjStringified.length - 1) + ',"lineNumber": ' + this.lineNo + nestedChildren);

      this.stack.push({ obj: (newObj.type == 'tag' || newObj.type == 'unknown' ? newObj.name : newObj.type), symbol: '}' });
    }
  }

  analyzeLine(el) {
    streamDebug('sending to parser: ' + el)
    const returnedObj = parser.parse(el)
    streamDebug('returned from parser: ', returnedObj)
    return returnedObj
  }
}

export default (filename) => {
  return new LexingTransformer(filename)
}