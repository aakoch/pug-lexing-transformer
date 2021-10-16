import chai from 'chai'
import equal from '../../indent-transformer/test/chai/equal.js'
import assert from 'assert'
const expect = chai.expect
import stream from 'stream'
import transformStream from '../src/index.js'
// const transformStream = _transformStream({ encoding: 'utf8' })
import intoStream from 'into-stream'
import concat from 'concat-stream'
import WrapLine from '@jaredpalmer/wrapline'
import { debug } from 'console'
import fs from 'fs'
// import streamEqual from 'stream-equal'
// import streamCompare from 'stream-compare'

import path from 'path'
import fc from 'filecompare';

import { fileURLToPath } from 'url';
import commandLineUsage from 'command-line-usage'
import commandLineArgs from 'command-line-args'

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);



const optionDefinitions = [
  { name: 'snapshot', alias: 's', type: Boolean },
  { name: 'testName', type: String, defaultOption: true }
]

const options = commandLineArgs(optionDefinitions)

chai.use(equal);

const testName = options.testName

const inFilename = 'files/' + testName + ".in"
const expectedFileName = 'files/' + testName + '.expected'
const actualOutFileName = 'files/' + testName + '.actual'


if (options.help || typeof options.testName === 'undefined') {
  const sections = [
    {
      header: 'Usage',
      content: 'npm test [-h] [inFile]'
    },
    {
      header: 'Options',
      optionList: optionDefinitions
    }
  ]
  const usage = commandLineUsage(sections)
  console.log(usage)

}
else {
  const fileInStream = fs.createReadStream(inFilename, { encoding: 'utf8' });

  if (options.snapshot) {
    const fileOut = fs.createWriteStream(expectedFileName, { encoding: 'utf8' })
    fileInStream.pipe(transformStream).pipe(fileOut)
  }
  else {
    // let expectedStream = fs.createReadStream(expectedFileName, { encoding: 'utf8' });
    // const expected = fs.readFileSync(expectedFileName)
    // const actualOut = fs.createWriteStream(actualOutFileName, { encoding: 'utf8' })
    // let equal = await streamEqual(fileInStream, expectedStream);
    // assert(equal, "Not equal")
    // streamCompare(fileInStream.pipe(transformStream), expectedStream).catch(function(err) {
    //   console.log(err); // AssertionError if streams differ
    // });

    const actualOut = fs.createWriteStream(actualOutFileName, { encoding: 'utf8' })
    fileInStream
      .pipe(transformStream)
      // .pipe(actualOut)
      .pipe(process.stdout)

    var cb = function (isEqual) {
      console.log("equal? :" + isEqual);
    }

    fileInStream.on('close', () => {
      actualOut.close()
      fc(expectedFileName, actualOutFileName, cb);
      process.exit()
    })

    // concat(function (input) {
    //   // console.log(input)
    //   if (!inputMatchesFile(input, fixture)) {
    //     console.error('no match') 
    //   }
    // }))
  }
}



// const compareStream = stream.Writable({
//   pipe(inFile1, inFile2) {
//     return this
//   },
//   write(chunk, enc, callback) {
//     callback()
//   }
// })

// compareStream.pipe(inFileReader, outFileReader).pipe(process.stdout)



// describe('test without line numbers', function () {
//   it('should match another known working example', function (done) {
//     // console.log('done=' + done)
//     const input = `div
//   p This text belongs to the paragraph tag.
//   br
//   .
//     This text belongs to the div tag.`

//     const inStream = intoStream(input)
//     inStream.on('error', function (e) {
//       console.error(e)
//     })

//     stream.finished(inStream, (err) => {
//       if (err) {
//         console.error('Stream failed', err);
//       } else {
//         transformStream.ended = true
//       }
//     });

//     inStream
//       .pipe(WrapLine('|'))
//       // .pipe(WrapLine(function (pre, line) {
//       //   // add 'line numbers' to each line
//       //   pre = pre || 0
//       //   return pre + 1
//       // }))
//       .pipe(transformStream)
//       .pipe(concat({}, (body) => {
//         const actual = body.toString();
//         debug('actual=' + actual)
//         expect(actual).to.equal('NODENT div INDENT p This text belongs to the paragraph tag. NODENT br NODENT . INDENT This text belongs to the div tag. DEDENT DEDENT ')
//         console.log('done')
//         done()
//       }))
//   })
// })
