import fs from 'fs'
import path from 'path';
import stream from 'stream'
import indentTransformer from 'indent-transformer';
import WrapLine from '@jaredpalmer/wrapline'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:cli')
import LexingTransformer from './index.js'
import chalk from 'chalk';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import { inspect } from 'util';
import { exists, parseArguments } from '@aakoch/utils'


function printUsage() {
  const help = [''];
  const p = str => help.push(str ?? '')
  const b = str => help.push(chalk.bold(str))
  b("Pug Lexing Transformer")
  p('Parses a Pug file and outputs an AST ' + chalk.dim('(not the official one, however)'))
  p()
  b('Usage')
  p(chalk.blue('node ' + path.basename(__filename) + ' [-h] [-f override_filename] [inFile] [outFile]'))
  p('inFile and outFile are both optional and will default to stdin and stdout if omitted.')
  p('You can also use "-" for inFile and outFile for their respective streams.')
  p()
  b('Options')
  p('  -f       = Override the given filename for path correction')
  p('  -h       = Print this message')
  p()

  console.log(help.join('\n'))
}


const options = await parseArguments(process, printUsage);
// console.log(options)
await run(options);

async function run(options) {
  try {
      await processFile(options);
      debug("Exiting main");
  } catch (e) {
    if (chalk.stderr.supportsColor)
      console.error(chalk.stderr(chalk.red(e.message)) + '\n', e);
    else {
      console.error('*'.repeat(30) + '\n' + e.message);
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
    const fullStream = options.in.createStream()
      .pipe(WrapLine('|'))
      .pipe(WrapLine(function (pre, line) {
        // add 'line numbers' to each line
        pre = pre || 0;
        return pre + 1;
      }))
      .pipe(indentTransformer())
      .pipe(lexingTransformer)
      .pipe(options.out.createStream());

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


              const options = await parseArguments(process, printUsage);
              // console.log(options)
              await run(options);



              // await run({
              //   _: [
              //     filename,
              //     path.resolve('build' + filename + '.json')
              //   ]
              // });
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