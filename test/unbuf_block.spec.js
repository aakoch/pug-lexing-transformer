import { tap, testString } from './fixture.js'

tap.test('unbuffered code with tag', test => {
  testString(`
-
  var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]
each item in list
  li= item
  `, 
  [{
    source: "test",
    type: "unbuf_code_block",
    lineNumber: 2,
    children: [
      { 
        source: "test",type: "unbuf_code", val: 'var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]', "lineNumber": 3 }
    ]
  },
  {
    source: "test",
    type: "each",
    val: "item in list",
    lineNumber: 4,
    children: [
      { 
        source: "test",type: "unbuf_code", val: "li= item", "lineNumber": 5 }
    ]
  }
  ], test)
})