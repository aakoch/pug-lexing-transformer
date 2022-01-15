import { tap, testString } from './fixture.js'

tap.test('dot follow a lot later with text', test => {
  testString('.\n\n  bar',
    [{
      source: "test",
      type: "unbuf_code_block",
      lineNumber: 2,
      children: [
        {
          source: "test", type: "unbuf_code", val: 'var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]', "lineNumber": 3
        }
      ]
    }
    ], test)
})