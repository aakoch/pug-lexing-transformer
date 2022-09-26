import stream from 'stream'
import path from 'path'
import { Parser, InlineParser } from '@foo-dog/line-lexer'
import debugFunc from 'debug'
import { inspect } from 'util'
const debug = debugFunc('lexing-transformer')
const streamDebug = debugFunc('lexing-transformer:line-analyzer')
const transformerDebug = debugFunc('lexing-transformer')
import IndentState from './FooDogIndentState.js'
const parser = Parser

class LexingTransformer extends stream.Transform {
  first = true
  currentIndent = 0
  stack = {
    internalArr: [],
    debug: debugFunc('stack'),
    push: function (txt) {
      this.length++
      this.internalArr.push(txt)
    },
    pop: function () {
      let txt = this.internalArr.pop()
      this.length--
      return txt
    },
    length: 0,
  }
  lineNo = 0
  buffer = []
  useAbsolutePath = true
  filesToAlsoParse = []
  override
  state = new IndentState()
  #currentState = ''

  constructor(options) {
    super({ decodeStrings: true, encoding: 'utf-8' })

    transformerDebug('entering constuctor')
    this.filename = options.inFile
    if (options.hasOwnProperty('override')) {
      this.override = options.override
    }
    transformerDebug('options=', options)
    transformerDebug('parser.parser.options=', parser.parser.options)
    if (options.hasOwnProperty('allowDigitToStartClassName')) {
      transformerDebug('Setting allowDigitToStartClassName to ' + options.allowDigitToStartClassName)
      parser.parser.options.allowDigitToStartClassName = options.allowDigitToStartClassName
    }
    this.stack.push({ symbol: ']' })
  }
  _flush(callback) {
    transformerDebug('entering _flush')
    while (this.stack.length > 0) {
      this.push(this.stack.pop().symbol)
    }
    callback()
    transformerDebug('exiting _flush')
  }
  _transform(str, enc, callback) {
    transformerDebug('entering _transform')
    if (str instanceof Buffer) {
      str = str.toString()
    }
    if (typeof str === 'string') {
      try {
        const lines = str.split('\n')
        lines
          .filter(line => line.length)
          .forEach(line => {
            this.push(this.processLine.call(this, line))
          })
        callback()
      } catch (err) {
        let e
        if (err.name === 'JisonParserError') {
          e = new Error('Unexpected system error. Please report to the developer: ' + err.message)
        } else {
          e = new LexingError(
            'Error parsing ' + this.filename + ': ' + err.message.replace('line 1', 'line ' + this.lineNo + ''),
            { cause: err },
            null,
            this != undefined ? this.lineNo : 'unknown'
          )
        }
        callback(e)
      }
    } else {
      callback(new Error('Expected a string but got ' + typeof str + '\nobj=' + inspect(str)))
    }
  }

  processLine(inputString) {
    transformerDebug('inputString=', inputString)
    let ret = []

    const regex = /(?<INDENT>IN)?(?<DEDENT>DE)?(?<NODENT>NO)?(?<LINENO>\d+) (?<text>.*)/
    const matches = inputString.match(regex)

    if (matches && matches.groups) {
      this.lineNo = parseInt(matches.groups.LINENO, 10)

      this.handleDents(matches, ret)

      this.parseLineAndCreateString(matches, ret)
    } else {
      throw new LexingError('Malformed string: ' + inputString.substring(0, 120))
      // ret.push(inputString)
    }
    let retString = ret.join(' \n')
    if (typeof retString != 'string') {
      error('lexingTransformer', typeof retString)
    }
    return retString
  }

  handleDents(matches, ret) {
    if (matches.groups.INDENT) {
      this.#currentState = this.state.indent(this.#currentState)

      ret.push(', "children":[')
      this.stack.push({ obj: 'children', symbol: ']' })

      this.currentIndent++
    } else if (matches.groups.DEDENT) {
      this.#currentState = this.state.dedent()

      ret.push(this.stack.pop().symbol + this.stack.pop().symbol)

      if (matches.groups && matches.groups.text.length) {
        ret.push(this.stack.pop().symbol + ', ')
      }

      this.currentIndent--
    } else {
      this.#currentState = this.state.nodent(this.#currentState)

      transformerDebug('nodent: this.#currentState=', this.#currentState)

      // need to handle the very first element
      // transformerDebug('stack=', this.stack);
      if (this.stack.length == 1) {
        ret.push('[')
      } else {
        ret.push(this.stack.pop().symbol + ', ')
      }
    }
  }
  parseLineAndCreateString(matches, ret) {
    const text = matches.groups.text
    if (text.trim().length > 0) {
      transformerDebug('before state=', this.#currentState)
      let newObj
      if (!!this.#currentState) {
        newObj = this.analyzeLine('<' + this.#currentState + '>' + text)
      } else {
        newObj = this.analyzeLine(text)
      }

      let nestedChildren = ''
      if (newObj.hasOwnProperty('state')) {
        transformerDebug('returned state=', newObj.state)
        if (newObj.state == 'NESTED') {
          if (newObj.children[0].hasOwnProperty('state')) {
            this.#currentState = newObj.children[0].state
          }
          const childrenStr = JSON.stringify(newObj.children[0])
          transformerDebug('childrenStr=' + childrenStr)
          delete newObj.children
          nestedChildren = ', "children":[' + childrenStr + ']'
        } else if (this.#currentState == 'MULTI_LINE_ATTRS' && newObj.state == 'MULTI_LINE_ATTRS_END') {
          this.#currentState = 'MULTI_LINE_ATTRS_END'
        } else if (this.#currentState == 'MULTI_LINE_ATTRS' && !newObj.hasOwnProperty('state')) {
        } else {
          this.#currentState = newObj.state
        }
      }

      delete newObj.state

      debug('this.filename=', this.filename)
      let sourceFile =
        this.filename === 'stdin' ? 'stdin' : this.override ?? (this.useAbsolutePath ? path.resolve(this.filename) : path.relative('', this.filename))
      if (newObj.type === 'include' || newObj.type === 'extends') {
        this.resolveIncludedFile(newObj)
      }

      const newObjStringified = JSON.stringify(newObj)
      const newObjStringifiedWithCurlyesRemoved = newObjStringified.substring(1, newObjStringified.length - 1)
      const curleysRemovedWithOrWithoutComma = newObjStringifiedWithCurlyesRemoved.length > 0 ? newObjStringifiedWithCurlyesRemoved + ',' : ''
      ret.push(
        ' '.repeat(this.currentIndent * 2) +
          '{"source":"' +
          sourceFile +
          '",' +
          curleysRemovedWithOrWithoutComma +
          '"lineNumber": ' +
          this.lineNo +
          nestedChildren
      )

      this.stack.push({ obj: newObj.type == 'tag' || newObj.type == 'unknown' ? newObj.name : newObj.type, symbol: '}' })
    }
  }

  resolveIncludedFile(newObj) {
    if (!newObj.hasOwnProperty('val')) {
      throw new Error('No file to ' + newObj.type + '. Object=' + inspect(newObj, false, 3))
    }

    let fileToInclude = newObj.val

    if (path.extname(fileToInclude) === '') {
      fileToInclude += '.pug'
    }

    let resolvedPath = path.resolve(path.dirname(this.filename), fileToInclude)

    newObj.resolvedVal = resolvedPath
  }

  analyzeLine(el) {
    streamDebug('sending to parser: ' + el)
    try {
      const returnedObj = parser.parse(el)
      streamDebug('returned from parser: ', returnedObj)
      return returnedObj
    } catch (err) {
      let e
      if (err.name === 'JisonLexerError') {
        e = new LexingError(err.message.replace('line 1', 'line ' + this.lineNo), { cause: err })
      } else {
        e = err
      }
      throw e
    }
  }
}

class LexingError extends Error {
  constructor(...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, LexingError)
    }

    this.name = 'LexingError'
  }
}

export default LexingTransformer
