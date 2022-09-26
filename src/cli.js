import fs from 'fs'
import path from 'path'
import indentTransformer from '@foo-dog/indent-transformer'
import WrapLine from '@jaredpalmer/wrapline'
import debugFunc from 'debug'

const debug = debugFunc('lexing-transformer:cli')
import LexingTransformer from './index.js'
import {PostLexingTransformer} from '@foo-dog/post-lexing-transformer'
import chalk from 'chalk'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
import {inspect} from 'util'
import {exists, parseArguments} from '@foo-dog/utils'
import stream from 'node:stream'

function printUsage() {
  const help = ['']
  const p = str => help.push(str ?? '')
  const b = str => help.push(chalk.bold(str))
  b('Lexing Transformer')
  p('Parses a Foo-Dog or Pug file and outputs an AST ' + chalk.dim('(not Pug\'s version, however)'))
  p()
  b('Usage')
  p(chalk.blue('node ' + path.basename(__filename)
    + ' [-h] [-f override_filename] [--allow-digits-to-start-css-classes=[true|false]] [inFile] [outFile]'))
  p('inFile and outFile are both optional and will default to stdin and stdout if omitted.')
  p('You can also use "-" for inFile and outFile for their respective streams.')
  p()
  b('Options')
  p('  --allow-digits-to-start-css-classes=[true|false]')
  p('  -f       : Override the given filename for path correction')
  p('  -h       : Print this message')
  p()

  console.log(help.join('\n'))
}

const directoryExists = dir => {
  try {
    fs.accessSync(dir, fs.constants.R_OK)
    return true
  } catch (e) {
  }
  return false
}

const optionsGenerator = function* (files, inputDirectory, outputDirectory) {
  debug('optionsGenerator: outputDirectory=', outputDirectory)
  for (let index = 0; index < files.length; index++) {
    const inFile = path.resolve(inputDirectory, files[index])
    
    const outFile = outputDirectory === 'stdout' ? 'stdout' : path.resolve(outputDirectory,
      path.parse(files[index]).name + '.json')
    
    debug('optionsGenerator: inFile=', inFile)
    debug('optionsGenerator: outFile=', outFile)
    let obj = {
      in: {
        name: inFile, 
        createStream: function () {
          debug('optionsGenerator: createStream: inFile=', inFile)
          return fs.createReadStream(inFile)
        },
      }, out: {
        name: outFile, 
        createStream: function () {
          debug('optionsGenerator: createStream: outFile=', outFile)
          if (outputDirectory === 'stdout') {
            return process.stdout
          } else {
            const output = path.resolve(outputDirectory, path.parse(inFile).name + '.json')
            debug('optionsGenerator: createStream: output=', output)
            const ws = fs.createWriteStream(output, {flags: 'w'})
            return ws
          }
        },
      },
    }
    yield obj
  }
  return {}
}
const args = process.argv.slice(2)
args.push("--out-extension=json")
parseArguments(args, printUsage).then(async options => {
  try {
    debug('options=', inspect(options, false, 2))
    debug('options.in=', options.in)

    const fullLexingTransformer = new FullLexingTransformer(options)
    // debug('fullLexingTransformer=', fullLexingTransformer)

    if (options.in.isDir()) {
      debug('options.in is a directory')
      
      // is options.out a directory? If it is just a file, what are we supposed to do since in is a directory?

      debug('options.out=', options.out)
      debug('options.out.isDir()=', options.out.isDir())
      if (!options.out.isDir() && options.out.name.includes('.')) {
        console.error(chalk.stderr.red("The intended output directory '") + options.out.name + chalk.stderr.red("' doesn't exist and doesn't look like a directory name. Please manually create before rerunning this"))
        process.exit(1)
      }
      
      if (options.out.isDir() && !directoryExists(options.out.name)) {
        fs.mkdirSync(options.out.name, {recursive: true})
      }

      const generator = optionsGenerator(options.in.files, options.in.name, options.out.name)
      let opts = generator.next()
      while (!opts.done) {
        try {
          await fullLexingTransformer.processFile(opts.value)
        } catch (e) {
          console.error('Error parsing ' + opts.value.in.name + ': ', e)
        }
        opts = generator.next()
      }
    } else {
      debug('options.in is NOT a directory')
      await fullLexingTransformer.processFile(options)
    }

    debug('Exiting main')
  } catch (e) {
    if (chalk.stderr.supportsColor) {
      console.error(chalk.stderr(chalk.red(e.message)) + '\n', e)
    } else {
      console.error('*'.repeat(30) + '\n' + e.message)
    }
  }
})

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

  f1 = function (input, output) {
    const fullStream = this.addWriteStreams(stream.Readable.from(input), output)
    process.stdin.destroy()
  }

  processFile = async function (options) {
    try {
      debug('this=', this)
      debug('options=', options)
      console.log("Reading from " + options.in.name)
      const readStream = options.in.createStream()

      debug('options.in.name=', options.in.name)
      debug('options.out=', options.out)
      debug('options.out.createStream=', options.out.createStream.toString())
      const outStream = options.out.createStream();
      debug('outStream=', outStream)
      if (options.in.name === 'stdin' && options.out.name === 'stdout') {
        process.stdin.resume()
        process.stdin.setEncoding('ascii')
        var input = ''
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
      console.error(e)
      throw new Error(`Could not parse ${options?.in?.name}`, {cause: e}, options.in.name)
    }
  }
}
