import tap from 'tap'
import fs from 'fs'
import stream from 'stream'
import indentTransformer from '@foo-dog/indent-transformer';
import WrapLine from '@jaredpalmer/wrapline'
import debugFunc from 'debug'
const debug = debugFunc('lexing-transformer:test')
import LexingTransformer from '../src/index.js'
import { simpleProjectRootDir } from '@foo-dog/utils'
import concat from 'concat-stream'
import chalk from 'chalk'

function testString(input, expected, test) {
  const lexingTransformer = new LexingTransformer({inFile: 'test'});

  stream.Readable.from(input)
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
      try {
        test.same(JSON.parse(body), expected)
      }
      catch (e) {
        throw new Error(e.message + '\nBody:\n' + body, { cause: e })
      }
      test.end()
    }))
    .on(
      "finish",
      function handleFinish() {

        console.log( chalk.green( "JSONStream serialization complete!" ) );
        console.log( "- - - - - - - - - - - - - - - - - - - - - - -" );

      }
    );

}

// function testFile(fullPath, expected, test) {
//
//   const lexingTransformer = new LexingTransformer({inFile: fullPath});
//   fs.createReadStream(fullPath, { encoding: 'utf-8' })
//     .pipe(WrapLine('|'))
//     .pipe(WrapLine(function (pre, line) {
//       // add 'line numbers' to each line
//       pre = pre || 0;
//       return pre + 1;
//     }))
//     .pipe(indentTransformer())
//     .pipe(lexingTransformer)
//     .pipe(concat({ encoding: 'string' }, body => {
//       debug('body=', body)
//       test.ok(body)
//       test.same(JSON.parse(body), expected)
//       test.end()
//     }));
// }

async function testSnapshot(fullPath, test) {
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
      console.error(e.message)
      // test.fail('Error with file ' + fullPath)
      test.end()
    }
}

export {
  tap, testString, testSnapshot, simpleProjectRootDir //, testFile
}