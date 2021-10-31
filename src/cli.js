import fs from 'fs'
import path from 'path';
import stream from 'stream'
import indentTransformer from 'indent-transformer';
import WrapLine from '@jaredpalmer/wrapline'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:cli')
import LexingTransformer from './index.js'
import minimist from 'minimist';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import { inspect } from 'util';



if (typeof String.fill !== 'function') {
  String.fill = function (length, char) {
    return ''.padStart(length, char || ' ')
  }
}


function exists(linkedFile) {
  try {
    fs.accessSync(linkedFile)
    return true
  } catch (e) {
    return false
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
  p(chalk.blue('node ' + path.basename(__filename) + ' [-h] [-f override_filename]  [inFile] [outFile]'))
  p('inFile and outFile are both optional and will default to stdin and stdout if omitted.')
  p('You can also use "-" for inFile and outFile for their respective streams.')
  p('Override the given filename for path correction.')
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
    ret = {
      in: { name: argv._[0], stream: fs.createReadStream(argv._[0]) },
      out: { name: argv._[1], stream: process.stdout },
      override: argv.f
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
      const resolvedIn = path.resolve(argv._[0])
      debug(`first argument was ${argv._[0]}. Resolved is ${resolvedIn} - reading file`)
      try {
        fs.accessSync(resolvedIn, fs.constants.R_OK)

        ret.in = {
          name: resolvedIn,
          stream: fs.createReadStream(resolvedIn)
        }
      } catch (e) {
        if (e.hasOwnProperty('syscall'))
          throw new Error(`Could not ${e.syscall} "${e.path}"`, { cause: e })
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
      const destFileToWriteTo = path.resolve(argv._[1]);
      const destFolderToCreate = path.dirname(destFileToWriteTo);
      debug(`creating (if not already existing) ${destFolderToCreate}`);
      fs.mkdirSync(destFolderToCreate, { recursive: true });

      debug(`second argument was ${argv._[1]}. Resolved ${destFileToWriteTo} - writing file`)

      try {
        ret.out = {
          name: destFileToWriteTo,
          stream: fs.createWriteStream(destFileToWriteTo, { flags: 'w' })
        }
      } catch (e) {
        if (e.hasOwnProperty('syscall'))
          throw new Error(`Could not ${e.syscall} "${e.path}"`, { cause: e })
        else
          throw e;
      }
    }

    if (argv.hasOwnProperty('f')) {
      ret.override = argv.f
    }

    return ret
  }
}

const argv = minimist(process.argv.slice(2));
console.log(argv)
await run(argv);

async function run(args) {
  let options;
  try {
    options = await parseOptions(argv);

    if (options.help) {
      printUsage();
    }
    else {
      String.prototype.quote = function () {
        return this.replaceAll('\\', '\\\\').replaceAll('"', '\\\"');
      };

      await processFile(options);

      debug("Exiting main");
    }
  } catch (e) {
    if (chalk.stderr.supportsColor)
      console.error(chalk.stderr(chalk.red(e.message)) + '\n', e);
    else {
      console.error(String.fill(30, '*') + '\n' + e.message);
    }
  }
}

async function processFile(options) {

  debug(`piping streams together`);
  debug(`options.in=${inspect(options.in, false, 0)}`);
  let fullFilename;
  try {
    fullFilename = path.resolve(options.in.name);
    const lexingTransformer = new LexingTransformer({ inFile: fullFilename, override: options.override });
    const fullStream = options.in.stream
      .pipe(WrapLine('|'))
      .pipe(WrapLine(function (pre, line) {
        // add 'line numbers' to each line
        pre = pre || 0;
        return pre + 1;
      }))
      .pipe(indentTransformer())
      .pipe(lexingTransformer)
      .pipe(options.out.stream);

    stream.finished(fullStream, async (err) => {
      debug("Entering stream finished");
      if (err) {
        throw err;
      } else if (lexingTransformer.filesToAlsoParse.length) {
        console.log(chalk.blue(chalk.bold("Files to also parse:")));

        // if (topLevel()) {
          for (const filename of lexingTransformer.filesToAlsoParse) {
            const prefix = '  ' + chalk.magenta(filename) + ' -- ';
            if (exists(path.resolve('build' + filename + '.json'))) {
              console.log(prefix + 'skipping');
            }
            else if (alreadyParsed.includes(filename)) {
              console.log(prefix + 'skipping (already parsed)');
            }
            else {
              console.log(prefix + chalk.green('parsing to ' + path.resolve('build' + filename + '.json')));
              await run({
                _: [
                  filename,
                  path.resolve('build' + filename + '.json')
                ]
              });
              alreadyParsed.push(filename)
            }
          }
        // }
        // else {
        //   console.error('Not top level so not parsing these files: ' + lexingTransformer.filesToAlsoParse.join('\n\t'))
        // }
      }
    });
  }
  catch (e) {
    console.error(e);
    throw new Error(`Could not parse ${options.in.name}`, { cause: e }, fullFilename);
  }
}

// function topLevel() {
//   let stacktrace = new Error().stack;
//   console.log(process)
//   return stacktrace.length <= 544;
// }

var alreadyParsed = []