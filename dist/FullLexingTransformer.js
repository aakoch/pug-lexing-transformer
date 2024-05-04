import path from "path";
import LexingTransformer from "./index.js";
import WrapLine from "@jaredpalmer/wrapline";
import stream from "node:stream";
import indentTransformer from '@foo-dog/indent-transformer'
import debugFunc from 'debug'
const debug = debugFunc('lexing-transformer:full')

class FullLexingTransformer {
  constructor(options) {
    this.options = options
    const fullFilename = options.in.name === 'stdin' ? 'stdin' : path.resolve(options.in.name)
    this.lexingTransformer = new LexingTransformer({
      inFile: fullFilename,
      override: options.override,
      allowDigitToStartClassName: options.allowDigitToStartClassName ?? false,
    })
  }

  alreadyParsed = []
  addWriteStreams = function (inStream, outStream) {
    try {
    debug("addWriteStreams(): inStream=", inStream)
    debug("addWriteStreams(): outStream=", outStream)
    const fullStream = inStream
      .pipe(WrapLine('|'))
      .pipe(WrapLine(function (pre, line) {
        // add 'line numbers' to each line
        pre = pre || 0
        return pre + 1
      }))
      .pipe(indentTransformer())
      .pipe(this.lexingTransformer)
      .pipe(outStream)
    inStream.on('complete', e => {
      fullStream.destroy()
    })
    return fullStream
    }
    catch (e) {
      console.error(e.message)
    }
  }

  f1 = function (input, output) {
    const fullStream = this.addWriteStreams(stream.Readable.from(input), output)
    process.stdin.destroy()
  }

  processFile = async function (options) {
    try {
      debug('this=', this)
      debug('options=', options)
      console.log("Reading from " + options.in.name)
      let readStream;
      if (typeof options?.in?.createStream === 'function'){
        readStream = options.in.createStream();
      }
      else {
        throw new Error('"createStream" not in "in" or is not a function')
      }

      debug('options.in.name=', options.in.name)
      debug('options.out=', options.out)
      let outStream;
      if (typeof options?.out?.createStream === 'function'){
        debug('options.out.createStream=', options.out.createStream.toString())
        outStream = options.out.createStream();
      }
      else {
        throw new Error('"createStream" not in "out" or is not a function')
      }
      debug('outStream=', outStream)
      if (options.in.name === 'stdin' && options.out.name === 'stdout') {
        process.stdin.resume()
        process.stdin.setEncoding('ascii')
        let input = ''
        // let newlineCount = 0
        process.stdin.on('data', function (chunk) {
          // This is where we should take the inputs and make them ready.
          input += chunk
          // This function will stop running as soon as we are done with the input in stdin
          if (chunk === '\n') {
            this.f1(input, outStream)
          }
        }.bind(this))

        process.stdin.on('end', this.f1)
      } else {
        debug('options.out=', options.out)
        const fullStream = this.addWriteStreams(readStream, outStream)
      }
    } catch (e) {
      throw new Error(`Could not parse ${options?.in?.name}`, {cause: e}, options.in.name)
    }
  }
}

export default FullLexingTransformer