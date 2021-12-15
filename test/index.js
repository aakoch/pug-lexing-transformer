import tap from 'tap'
import fs from 'fs'
import path from 'path';
import stream from 'stream'
import indentTransformer from 'indent-transformer';
import WrapLine from '@jaredpalmer/wrapline'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:test')
import LexingTransformer from '../src/index.js'
// import { PostLexingTransformer } from 'post-lexing-transformer'
import chalk from 'chalk';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
import { inspect } from 'util';
import { exists, parseArguments, simpleProjectRootDir } from '@aakoch/utils'
import concat from 'concat-stream'

tap.test('Instantiation of LexingTransformer works', test => {
  const lexingTransformer = new LexingTransformer({inFile: 'test.pug'});
  tap.ok(lexingTransformer);
  test.end()
})

tap.test('test1', test => {
  const lexingTransformer = new LexingTransformer({inFile: 'test'});

  stream.Readable.from('html')
      .pipe(WrapLine('|'))
      .pipe(WrapLine(function (pre, line) {
        // add 'line numbers' to each line
        pre = pre || 0;
        return pre + 1;
      }))
    .pipe(indentTransformer())
    .pipe(lexingTransformer)
    .pipe(concat({ encoding: 'string' }, body => {
      debug('body=', body)
      test.ok(body)
      test.same(JSON.parse(body), [{"source":"/Users/aakoch/projects/new-foo/workspaces/pug-lexing-transformer/test","name":"html","type":"tag","lineNumber": 1}])
      test.end()
    }));
})

tap.test('test2', test => {
  const lexingTransformer = new LexingTransformer({inFile: 'test'});

  stream.Readable.from('NO1 html')
    .pipe(lexingTransformer)
    .pipe(concat({ encoding: 'string' }, body => {
      debug('body=', body)
      test.ok(body)
      test.same(JSON.parse(body), [{"source":"/Users/aakoch/projects/new-foo/workspaces/pug-lexing-transformer/test","name":"html","type":"tag","lineNumber": 1}])
      test.end()
    }));
})

function testFile(fullPath, expected, test) {

  const lexingTransformer = new LexingTransformer({inFile: fullPath});
  fs.createReadStream(fullPath, { encoding: 'utf-8' })
    .pipe(WrapLine('|'))
    .pipe(WrapLine(function (pre, line) {
      // add 'line numbers' to each line
      pre = pre || 0;
      return pre + 1;
    }))
    .pipe(indentTransformer())
    .pipe(lexingTransformer)
    .pipe(concat({ encoding: 'string' }, body => {
      debug('body=', body)
      test.ok(body)
      test.same(JSON.parse(body), expected)
      test.end()
    }));
}

function testSnapshot(fullPath, test) {
  try {
    const lexingTransformer = new LexingTransformer({inFile: fullPath});
      fs.createReadStream(fullPath, { encoding: 'utf-8' })
        .pipe(WrapLine('|'))
        .pipe(WrapLine(function (pre, line) {
          // add 'line numbers' to each line
          pre = pre || 0;
          return pre + 1;
        }))
        .pipe(indentTransformer())
        .pipe(lexingTransformer)
        .pipe(concat({ encoding: 'string' }, body => {
          debug('body=', body)
          test.ok(body)
          test.matchSnapshot(body, `File ${fullPath} did not match snapshot`)
          test.end()
        }))
    } catch (e) {
      console.error("ERROR22222" + e.message)
      // test.fail('Error with file ' + fullPath)
      test.end()
    }
}

tap.test('test3', test => {
  const fullPath = simpleProjectRootDir() + '/test/pug/basic.pug'
  testFile(fullPath, (
      [
        {"source":"/Users/aakoch/projects/new-foo/workspaces/pug-lexing-transformer/test/pug/basic.pug","name":"html","type":"tag","lineNumber": 1, "children":[
        {"source":"/Users/aakoch/projects/new-foo/workspaces/pug-lexing-transformer/test/pug/basic.pug","name":"body","type":"tag","lineNumber": 2, "children":[
        {"source":"/Users/aakoch/projects/new-foo/workspaces/pug-lexing-transformer/test/pug/basic.pug","name":"h1","type":"tag","val":"Title","lineNumber": 3}]}]}
      ]
    ), test)
})


tap.test('test4', test => {
  const fullPath = simpleProjectRootDir() + '/test/pug/basic.pug'
  testSnapshot(fullPath, test)
})

tap.test('test directory', test => {
  const files = fs.readdirSync(simpleProjectRootDir() + '/test/pug/', {encoding: 'utf-8'}).filter(val => val.endsWith('.pug'))
  // debug('files=', files)
  files.forEach(file => {
    test.test('testing file=' + file, test2 => {
      testSnapshot(simpleProjectRootDir() + '/test/pug/' + file, test2)
    })
  })

})



// tap.test('Calling setNewState() with something else returns same value', test => {
//   const indentState = new FooDogIndentState()
//   indentState.setNewState('test')
//   indentState.indent()
//   tap.same(indentState.dedent(), 'test')
//   test.end()
// })

// const lexingTransformer = new LexingTransformer({ inFile: fullFilename, override: options.override, allowDigitToStartClassName: options.allowDigitToStartClassName ?? false });
//     const postLexingTransformer = new PostLexingTransformer()
//     const fullStream = options.in.createStream()
//       .pipe(WrapLine('|'))
//       .pipe(WrapLine(function (pre, line) {
//         // add 'line numbers' to each line
//         pre = pre || 0;
//         return pre + 1;
//       }))
//       .pipe(indentTransformer())
//       .pipe(lexingTransformer)
//       .pipe(postLexingTransformer)
//       .pipe(options.out.createStream());

//     stream.finished(fullStream, async (err) => {
//       debug("Entering stream finished");
//       if (err) {
//         throw err;
//       } else if (lexingTransformer.filesToAlsoParse.length) {
//         console.log(chalk.blue(chalk.bold("Files to also parse:")));

//         // if (topLevel()) {
//           for (const filename of lexingTransformer.filesToAlsoParse) {
//             const prefix = '  ' + chalk.magenta(filename) + ' -- ';
//             if (exists(path.resolve('build' + filename + '.json'))) {
//               console.log(prefix + 'skipping');
//             }
//             else if (alreadyParsed.includes(filename)) {
//               console.log(prefix + 'skipping (already parsed)');
//             }
//             else {
//               console.log(prefix + chalk.green('parsing to ' + path.resolve('build' + filename + '.json')));


//               const options = await parseArguments(process, printUsage);
//               // console.log(options)
//               await run(options);



//               // await run({
//               //   _: [
//               //     filename,
//               //     path.resolve('build' + filename + '.json')
//               //   ]
//               // });
//               alreadyParsed.push(filename)
//             }
//           }