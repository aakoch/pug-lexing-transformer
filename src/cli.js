import fs from 'fs'
import path from 'path'
import debugFunc from 'debug'
import FullLexingTransformer from './FullLexingTransformer.js'
import chalk from 'chalk'
import {fileURLToPath} from 'url'
import {inspect} from 'util'
import {parseArguments} from '@foo-dog/utils'

const debug = debugFunc('lexing-transformer:cli')

const __filename = fileURLToPath(import.meta.url)

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
  } catch (ignore) {
    // if we get an error than the directory doesn't exist
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
            return fs.createWriteStream(output, {flags: 'w'})
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
