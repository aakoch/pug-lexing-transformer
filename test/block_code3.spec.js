// import { tap, testString } from './fixture.js'
import LexingTransformer from '../src/index.js'
const lexingTransformer = new LexingTransformer({inFile: 'test'});
import stream from 'stream'
import tap from 'tap'
import concat from 'concat-stream'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:test:block_code3')

tap.test('unbuffered code with tag', test => {

  stream.Readable.from('NO1 -\nIN2 string = item.charAt(0)\nIN3 .toUpperCase() +\nDE4 item.slice(1);\nDE5 li= string')
    .pipe(lexingTransformer)
    .pipe(concat({ encoding: 'string' }, body => {
      debug('body=', body)
      test.ok(body)
      try {
        test.same(JSON.parse(body), [
{"source":"test","type":"unbuf_code_block","lineNumber": 1, "children":[
  {"source":"test","type":"unbuf_code","val":"string = item.charAt(0)","lineNumber": 2, "children":[
    {"source":"test","type":"unbuf_code","val":".toUpperCase() +","lineNumber": 3}]
},
  {"source":"test","type":"unbuf_code","val":"item.slice(1);","lineNumber": 4}]
},
{"source":"test","name":"li","type":"tag","assignment":true,"assignment_val":"string","lineNumber": 5}]
        )
      }
      catch (e) {
        console.error(e.message)
        console.error(body)
      }
      test.end()
    }));

})