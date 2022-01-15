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
import { exists, parseArguments, simpleProjectRootDir } from '@foo-dog/utils'
import concat from 'concat-stream'

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
      test.same(JSON.parse(body), expected)
      test.end()
    }));
}

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
      console.error(e.message)
      // test.fail('Error with file ' + fullPath)
      test.end()
    }
}

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
      test.same(JSON.parse(body), [{"source":"test","name":"html","type":"tag","lineNumber": 1}])
      test.end()
    }));
})

tap.test('test method testString', test => {
  testString('html', [{"source":"test","name":"html","type":"tag","lineNumber": 1}], test)
})

tap.test('test basic file', test => {
  const fullPath = simpleProjectRootDir() + '/test/pug/basic.pug'
  testFile(fullPath, (
      [
        {"source":"test/pug/basic.pug","name":"html","type":"tag","lineNumber": 1, "children":[
        {"source":"test/pug/basic.pug","name":"body","type":"tag","lineNumber": 2, "children":[
        {"source":"test/pug/basic.pug","name":"h1","type":"tag","val":"Title","lineNumber": 3}]}]}
      ]
    ), test)
})


tap.test('test basic file with snapshot', test => {
  const fullPath = simpleProjectRootDir() + '/test/pug/basic.pug'
  testSnapshot(fullPath, test)
})

tap.test('script whitespace', t => {
  testString(
  `script.
  if (foo) {
    
    bar();
    
  }`, [{
    "source": "test",
    "name": "script",
    "type": "tag",
    "lineNumber": 1,
    "children": [{
      "source": "test",
      "type": "text",
      "val": "if (foo) {",
      "lineNumber": 2,
      "children": [{
        "source": "test",
        "type": "text",
        "val": "bar();",
        "lineNumber": 4,
      }],
    }, {
      "source": "test",
      "type": "block_end",
      "lineNumber": 6,
    }],
  }], t)

})

tap.test('test block with code', t => {
  testString(`
-
  string = item.charAt(0)
  
    .toUpperCase()
    `, [
         {
          "source": "test",
          "type": "unbuf_code_block",
          "lineNumber": 2,
          "children":  [
             {
              "source": "test",
              "type": "unbuf_code",
              "val": "string = item.charAt(0)",
              "lineNumber": 3,
              "children":  [
                 {
                  "source": "test",
                  "type": "unbuf_code",
                  "val": ".toUpperCase()",
                  "lineNumber": 5,
                },
              ],
            },
          ],
        },
    ], t)
})