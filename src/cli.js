import fs from 'fs'
import path from 'path';
import stream from 'stream'
import indentTransformer from 'indent-transformer';
import WrapLine from '@jaredpalmer/wrapline'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:cli')
import nestingTransformer from './index.js'
import minimist from 'minimist';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const argv = minimist(process.argv.slice(2));
console.log(argv)


if (typeof String.fill !== 'function') {
  String.fill = function (length, char) {
    return ''.padStart(length, char || ' ')
  }
}

function printUsage() {
  const help = [''];
  const p = str => help.push(str ?? '')
  const b = str => help.push(chalk.bold(str))
  b("Pug Lexing Transformer")
  p('Parses a Pug file and outputs an AST ' + chalk.dim('(not the official one, however)'))
  p()
  b('Usage')
  p(chalk.blue('node ' + path.basename(__filename) + ' [-h] [inFile] [outFile]'))
  p('inFile and outFile are both optional and will default to stdin and stdout if omitted.')
  p('You can also use "-" for inFile and outFile for their respective streams.')
  p()

  console.log(help.join('\n'))
}

async function parseOptions(argv) {

  if (argv.help || argv.h) {
    debug('help option detected')
    return { help: true }
  }
  else if (argv._.length == 0) {
    debug('no arguments - using stdin and stdout')
    return { in: { name: 'stdin', stream: process.stdin }, out: { name: 'stdout', stream: process.stdout } }
  }
  else if (argv._.length == 1) {
    debug('one argument - reading file and piping to stdout')
    try {
      fs.accessSync(argv._[0], fs.constants.R_OK)
    } catch (e) {
      throw new Error(`Could not ${e.syscall} "${e.path}"`)
    }

    debug('creating read stream for ' + argv?._[0])
    return {
      in: { name: argv._[0], stream: fs.createReadStream(argv._[0]) },
      out: { name: argv._[1], stream: process.stdout }
    }
  }
  else {
    debug('two or more arguments')
    const ret = { in: {}, out: {} }

    if (argv._[0] == '-') {
      debug('first argument was - - using stdin')
      ret.in = {
        name: 'stdin',
        stream: process.stdin
      }
      console.log('Reading from stdin');
    }
    else {
      debug(`first argument was ${argv._[0]} - reading file`)
      try {
        fs.accessSync(argv._[0], fs.constants.R_OK)

        ret.in = {
          name: argv._[0],
          stream: fs.createReadStream(argv._[0])
        }
      } catch (e) {
        if (e.hasOwnProperty('syscall'))
          throw new Error(`Could not ${e.syscall} "${e.path}"`, {cause:e})
        else
          throw e;
      }
    }

    if (argv._[1] == '-') {
      debug('second argument was - - using stdout')
      ret.out = {
        name: 'stdout',
        stream: process.stdout
      }
      console.log('writing to stdout');
    }
    else {
      debug(`second argument was ${argv._[1]} - writing file`)

      try {
        ret.out = {
          name: argv._[1],
          stream: fs.createWriteStream(argv._[1], { flags: 'w' })
        }
      } catch (e) {
        if (e.hasOwnProperty('syscall'))
          throw new Error(`Could not ${e.syscall} "${e.path}"`, {cause:e})
        else
          throw e;
      }
    }

    return ret
  }
}

let options;
try {
  options = await parseOptions(argv)

  if (options.help) {
    printUsage()
  }
  else {
    String.prototype.quote = function () {
      return this.replaceAll('\\', '\\\\').replaceAll('"', '\\\"')
    }

    if (typeof String.fill !== 'function') {
      String.fill = function (length, char) {
        return ''.padStart(length, char || ' ')
      }
    }

    debug(`piping streams together`)
    try {
      const fullFilename = path.resolve(options.in.name);
      options.in.stream
        .pipe(WrapLine('|'))
        .pipe(WrapLine(function (pre, line) {
          // add 'line numbers' to each line
          pre = pre || 0
          return pre + 1
        }))
        .pipe(indentTransformer())
        .pipe(nestingTransformer(fullFilename))
        .pipe(options.out.stream);
    }
    catch (e) {
      throw new Error(`Could not parse ${options.in.name}`, { cause: e }, fullFilename)
    }

    stream.finished(process.stdin, (err) => {
      if (err) {
        throw err;
      } else {
        indentTransformer.ended = true
        nestingTransformer.ended = true
      }
    });

  }
} catch (e) {
  if (chalk.stderr.supportsColor)
    console.error(chalk.stderr(chalk.red(e.message)))
  else {
    console.error(String.fill(30, '*') + '\n' + e.message)
  }
}