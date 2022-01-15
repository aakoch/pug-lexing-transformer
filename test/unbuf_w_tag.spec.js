import { tap, testString } from './fixture.js'

tap.test('unbuffered code with tag', test => {
  testString(`
- for (var x = 0; x < 3; x++)
  li item
  `, [{"source":"test","val":"for (var x = 0; x < 3; x++)","type":"unbuf_code","lineNumber": 2, children: [{"source":"test","val":"item","type":"tag","name":"li","lineNumber": 3}]}], test)
})