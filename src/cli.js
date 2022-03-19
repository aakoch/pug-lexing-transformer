import fs from 'fs'
import path from 'path'
import indentTransformer from 'indent-transformer'
import WrapLine from '@jaredpalmer/wrapline'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:cli')
import LexingTransformer from './index.js'
import { PostLexingTransformer } from 'post-lexing-transformer'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
import { inspect } from 'util'
import { exists, parseArguments } from '@foo-dog/utils'
import stream from 'node:stream'

function printUsage() {
  const help = ['']
  const p = str => help.push(str ?? '')
  const b = str => help.push(chalk.bold(str))
  b('Pug Lexing Transformer')
  p('Parses a Pug file and outputs an AST ' + chalk.dim('(not the official one, however)'))
  p()
  b('Usage')
  p(
    chalk.blue(
      'node ' + path.basename(__filename) + ' [-h] [-f override_filename] [--allow-digits-to-start-css-classes=[true|false]] [inFile] [outFile]'
    )
  )
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
  } catch (e) {}
  return false
}

const optionsGenerator = function* (files, inputDirectory, outputDirectory) {
  for (let index = 0; index < files.length; index++) {
    const inFile = path.resolve(inputDirectory, files[index])
    const outFile = outputDirectory === 'stdout' ? 'stdout' : path.resolve(outputDirectory, path.parse(files[index]).name + '.json')
    debug('optionsGenerator: inFile=', inFile)
    debug('optionsGenerator: outFile=', inFile)
    let obj = {
      in: {
        name: inFile,
        createStream: function () {
          return fs.createReadStream(inFile)
        },
      },
      out: {
        name: outFile,
        createStream: function () {
          debug('optionsGenerator: outFile=', outFile)
          if (outputDirectory === 'stdout') {
            return process.stdout
          } else {
            const output = path.resolve(outputDirectory, path.parse(inFile).name + '.json')
            const ws = fs.createWriteStream(output, { flags: 'w' })
            return ws
          }
        },
      },
    }
    yield obj
  }
  return {}
}

parseArguments(process.argv.slice(2), printUsage).then(async options => {
  try {
    debug('options=', inspect(options, false, 2))
    debug('options.in=', options.in)

    const fullLexingTransformer = new FullLexingTransformer(options)

    if (options.in.isDir()) {
      debug('options.in is a directory')
      debug('options.out=', options.out)
      if (!directoryExists(options.out.name)) {
        fs.mkdirSync(options.out.name, { recursive: true })
      }

      const generator = optionsGenerator(options.in.files(), options.in.name, options.out.name)
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
    if (chalk.stderr.supportsColor) console.error(chalk.stderr(chalk.red(e.message)) + '\n', e)
    else {
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
  addWriteStreams(inStream) {
    debug('addWriteStreams(): this.options.out=', this.options.out)
    const outStream = inStream
      .pipe(WrapLine('|'))
      .pipe(
        WrapLine(function (pre, line) {
          // add 'line numbers' to each line
          pre = pre || 0
          return pre + 1
        })
      )
      .pipe(indentTransformer())
      .pipe(this.lexingTransformer)
      // .pipe(postLexingTransformer)
      .pipe(this.options.out.createStream())
    inStream.on('complete', e => {
      outStream.destro(y)
    })
    return outStream
  }

  async processFile(options) {
    try {
      debug('options=', options)
      const readStream = options.in.createStream()

      debug('options.in.name=', options.in.name)
      if (options.in.name === 'stdin' && options.out.name === 'stdout') {
        process.stdin.resume()
        process.stdin.setEncoding('ascii')
        var input = ''
        let newlineCount = 0

        const f1 = function () {
          const fullStream = this.addWriteStreams(stream.Readable.from(input))

          process.stdin.destroy()
        }

        process.stdin.on('data', function (chunk) {
          // This is where we should take the inputs and make them ready.
          input += chunk
          // This function will stop running as soon as we are done with the input in the Stdin
          if (chunk === '\n') {
            f1()
          }
        })

        process.stdin.on('end', f1)
      } else {
        const fullStream = this.addWriteStreams(readStream)
      }

      debug('before finished')

      // await finished(readStream).then( async (err) => {
      //   debug('inside finished: lexingTransformer.filesToAlsoParse=', lexingTransformer.filesToAlsoParse)
      //   // if (err) {
      //   //   console.error('stream threw error', err)
      //   // } else
      //   if (lexingTransformer.filesToAlsoParse.length) {
      //     console.log(chalk.blue(chalk.bold('Files to also parse:')))
      //     try {
      //     for (const filename of lexingTransformer.filesToAlsoParse) {
      //       const prefix = '  ' + chalk.magenta(filename) + ' -- '
      //       if (exists(path.resolve('build' + filename + '.json'))) {
      //         console.log(prefix + 'skipping')
      //       } else if (alreadyParsed.includes(filename)) {
      //         console.log(prefix + 'skipping (already parsed)')
      //       } else {
      //         console.log(prefix + chalk.green('parsing to ' + path.resolve('build' + filename + '.json')))

      //         const options = await parseArguments(process, printUsage)
      //         await processFile(options)
      //         alreadyParsed.push(filename)
      //       }
      //     }
      //   } catch (e) {
      //     console.error(e)
      //     throw new Error(`Could not parse ${options?.in?.name}`, { cause: e }, fullFilename)
      //   }
      //   }

      // })
      debug('after finished')
      // debug('before drain')
      // fullStream.resume()
      // debug('after drain')
    } catch (e) {
      console.error(e)
      throw new Error(`Could not parse ${options?.in?.name}`, { cause: e }, options.in.name)
    }
  }

  // TODO: Where is the separation? How much does parseArguments do? Should it create the files() function? Where should createStream() be created?
  // parseArguments creates the createStream() function today.
  // Make it a node with children? Or an iterator? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
  // function* makeRangeIterator(start = 0, end = 100, step = 1) {
  //   let iterationCount = 0;
  //   for (let i = start; i < end; i += step) {
  //       iterationCount++;
  //       yield i;
  //   }
  //   return iterationCount;
  // }
}

// function processFiles(options) {
//   options.in.files().forEach(file => {

//     let rewrittenOutOptions;
//     debug('options.out.isDir()=', options.out.isDir());
//     if (options.out.isDir()) {
//       rewrittenOutOptions = Object.assign(options, {
//         out: {
//           name: options.out.name,
//           createStream: () => {
//             try {
//               const ws = path.resolve(options.out.name, path.parse(options.in.name).name + '.json');
//               debug('******* creating write stream ' + ws);
//               const realWs = fs.createWriteStream(ws, { flags: 'w' });
//               debug('******* creating 2 write stream ' + realWs);
//               return realWs;
//             } catch (e) {
//               debug("I was wrong", e);
//               throw e;
//             }
//           },
//           isDir: () => false
//         }
//       });
//     }
//     else {
//       rewrittenOutOptions = options;
//     }

//     debug('parsing ' + file);

//     const rewrittenOptions = Object.assign(options, {
//       in: {
//         name: file,
//         createStream: () => fs.createReadStream(file)
//       }
//     }, rewrittenOutOptions);

//     processFile(rewrittenOptions);
//   });
// }
