import fs from 'fs'
import path from 'path';
import stream from 'stream'
import indentTransformer from 'indent-transformer';
import WrapLine from '@jaredpalmer/wrapline'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:cli')
import LexingTransformer from './index.js'
import { PostLexingTransformer } from 'post-lexing-transformer'
import chalk from 'chalk';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import { inspect } from 'util';
import { exists, parseArguments } from '@foo-dog/utils'


function printUsage() {
  const help = [''];
  const p = str => help.push(str ?? '')
  const b = str => help.push(chalk.bold(str))
  b("Pug Lexing Transformer")
  p('Parses a Pug file and outputs an AST ' + chalk.dim('(not the official one, however)'))
  p()
  b('Usage')
  p(chalk.blue('node ' + path.basename(__filename) + ' [-h] [-f override_filename] [--allow-digits-to-start-css-classes=[true|false]] [inFile] [outFile]'))
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


const options = await parseArguments(process, printUsage);
await run(options);

async function run(options) {
  try {
    await doProcess(options);
    debug("Exiting main");
  } catch (e) {
    if (chalk.stderr.supportsColor)
      console.error(chalk.stderr(chalk.red(e.message)) + '\n', e);
    else {
      console.error('*'.repeat(30) + '\n' + e.message);
    }
  }
}

// function topLevel() {
//   let stacktrace = new Error().stack;
//   console.log(process)
//   return stacktrace.length <= 544;
// }

var alreadyParsed = []

function processFile(options) {

  let fullFilename;
  try {
    fullFilename = path.resolve(options.in.name);
    const lexingTransformer = new LexingTransformer({ inFile: fullFilename, override: options.override, allowDigitToStartClassName: options.allowDigitToStartClassName ?? false });
    const postLexingTransformer = new PostLexingTransformer()
    const fullStream = options.in.createStream()
      .pipe(WrapLine('|'))
      .pipe(WrapLine(function (pre, line) {
        // add 'line numbers' to each line
        pre = pre || 0;
        return pre + 1;
      }))
      .pipe(indentTransformer())
      .pipe(lexingTransformer)
      .pipe(postLexingTransformer)
      .pipe(options.out.createStream());

    stream.finished(fullStream, async (err) => {
      if (err) {
        console.error('stream threw error', err);
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
function* optionsGenerator(files, outputDirectory) {
  for (let index = 0; index < files.length; index++) {
    debug('optionsGenerator: files[index]=', files[index])
    let obj = {
      in: {
        name: files[index],
        createStream: function () {
          return fs.createReadStream(files[index])
        }
      },
      out: {
        name: path.parse(files[index]).name + '.json',
        createStream: function () {
          debug('optionsGenerator: files[index]=', files[index])
          debug('optionsGenerator: outputDirectory=', outputDirectory)
          const output = path.resolve(outputDirectory, path.parse(files[index]).name + '.json');
          const ws = fs.createWriteStream(output, { flags: 'w' });
          return ws;
        }
      }
    }
    yield obj
  }
  return {}
}

function directoryExists(dir) {
  try {
    // fs.lstatSync(destFileToWriteTo)
    fs.accessSync(dir, fs.constants.R_OK)
    return true
  } catch (e) { }
  return false
}

async function doProcess(options) {
  try {
    debug('options=', inspect(options, false, 2));

    if (options.in.isDir()) {
      debug('options.in=', options.in)
      debug('options.in is a directory')
      debug('options.out=', options.out)
      if (!directoryExists(options.out.name)) {
        fs.mkdirSync(options.out.name, { recursive: true });
      }

      const generator = optionsGenerator(options.in.files(), options.out.name);
      let opts = generator.next();
      while (!opts.done) {
        processFile(opts.value);
        opts = generator.next();
      }
    }
    else {
      debug('options.in=', options.in)
      debug('options.in is NOT a directory')
      processFile(options);
    }

  } catch (e) {
    console.error(e)
  }
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

