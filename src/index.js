import fs from 'fs'
import path, { parse } from 'path'
import stream from 'stream'
import util from 'util'
import concat from 'concat-stream'
import indentTransformer from 'indent-transformer';
import WrapLine from '@jaredpalmer/wrapline'
import parser from 'pug-line-lexer'
import debugFunc from 'debug'
const streamDebug = debugFunc('pug-lexing-transformer:line-analyzer')
const transformerDebug = debugFunc('pug-lexing-transformer')
let nestingTransformer = {}

if (typeof String.fill !== 'function') {
  String.fill = function (length, char) {
    return ''.padStart(length, char || ' ')
  }
}

stream.finished(process.stdin, (err) => {
  if (err) {
    console.error('Stream failed', err);
  } else {
    indentTransformer.ended = true
    nestingTransformer.ended = true
  }
});

nestingTransformer = new stream.Transform({
  decodeStrings: false,
  encoding: 'utf-8',
  flush(callback) {
    while (this.stack.length > 0) {
      this.push(this.stack.pop().symbol)
    }
    callback()
  },
  transform(str, enc, callback) {
    try {
      const lines = str.split('\n')
      lines.filter(line => line.length).forEach(line => {
        this.push(doStuff.call(this, line))
      })
      callback();
    }
    catch (e) {
      e.lineNo = (this != undefined ? this.lineNo : 'unknown')
      console.error('\nUnparsable string: ' + str)
      console.trace()
      callback(e)
    }
  }
})
nestingTransformer.first = true;
nestingTransformer.currentIndent = 0;
nestingTransformer.state = []
nestingTransformer.stack = {
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
nestingTransformer.lineNo = 0
nestingTransformer.stack.push({ symbol: ']' })
nestingTransformer.buffer = []

function doStuff(inputString) {
  transformerDebug('inputString=', inputString)
  let ret = []
  let dedentCount = 0

  const regex = /(?<INDENT>INDENT)?(?<DEDENT>DEDENT)?(?<NODENT>NODENT)?(?<LINENO>\d+) (?<text>.*)/
  const matches = inputString.match(regex)
  transformerDebug('matches=', matches)

  if (matches && matches.groups) {
    // transformerDebug('matches.groups=', matches.groups)
    this.lineNo = parseInt(matches.groups.LINENO, 10)
    // transformerDebug('lineNo=' + this.lineNo)

    if (matches.groups.INDENT) {
      ret.push(', "children":[')
      this.stack.push({ obj: 'children', symbol: ']' })

      // transformerDebug('matches.groups.INDENT=', matches.groups.INDENT)
      this.currentIndent++

      if (this.state[this.state.length - 1] == 'TEXT_START') {
        this.state.pop()
        this.state.push('TEXT')
      }
      else if (this.state[this.state.length - 1] == 'TEXT') {
        this.state.push('TEXT')
      }
      else if (this.state[this.state.length - 1] == 'CODE_START') {
        this.state.pop()
        this.state.push('UNBUF_CODE')
      }
      else if (this.state[this.state.length - 1] == 'UNBUF_CODE') {
        this.state.push('UNBUF_CODE')
      }
    }
    else if (matches.groups.DEDENT) {
      ret.push(this.stack.pop().symbol + this.stack.pop().symbol)
      if (matches.groups.text.length) {
        ret.push(this.stack.pop().symbol + ', ')
      }

      this.currentIndent--
      this.state.pop()
    }
    else {
      // need to handle the very first element
      if (this.stack.length == 1) {
        ret.push('[')
      }
      else {
        ret.push(this.stack.pop().symbol + ', ')
      }

      if (this.state[this.state.length - 1] == 'TEXT_START') {
        this.state.pop()
      }
    }

    const text = matches.groups.text
    if (text.trim().length > 0) {
      transformerDebug('before state=', this.state)
      const newObj = analyzeLine((this.state.length > 0 ? '<' + this.state[this.state.length - 1] + '>' : '') + text)

      // transformerDebug('newObj=', newObj)
      let nestedChildren = ''
      if (newObj.hasOwnProperty('state')) {
        if (newObj.state == 'NESTED') {
          if (newObj.children[0].hasOwnProperty('state')) {
            this.state.push(newObj.children[0].state)
          }
          const childrenStr = JSON.stringify(newObj.children[0])
          transformerDebug('childrenStr=' + childrenStr)
          delete newObj.children
          nestedChildren = ', "children":[' + childrenStr + ']'
        }
        else {
          this.state.push(newObj.state)
        }
      }
      transformerDebug('after state=', this.state)
      delete newObj.state
      const thingStr = JSON.stringify(newObj)
      ret.push(String.fill(this.currentIndent * 2) + '{' + thingStr.substring(1, thingStr.length - 1) + ',"lineNumber": ' + this.lineNo + nestedChildren)

      this.stack.push({ obj: (newObj.type == 'tag' || newObj.type == 'unknown' ? newObj.name : newObj.type), symbol: '}' })
    }
  }
  else {
    transformerDebug('NO matches=', inputString)
    // ret.push(inputString)
  }
  let retString = ret.join(' \n')
  if (typeof retString != 'string') {
    error('nestingTransformer', typeof retString)
  }
  transformerDebug('retString=' + retString)
  return retString
}

function analyzeLine(el) {
  streamDebug('sending to parser: ' + el)
  const returnedObj = parser.parse(el)
  streamDebug('returned from parser: ', returnedObj)
  return returnedObj
}

stream.finished(process.stdin, (err) => {
});

export default nestingTransformer