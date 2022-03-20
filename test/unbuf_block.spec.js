import { tap, testString } from './fixture.js'
import { simpleProjectRootDir } from '@foo-dog/utils'

tap.test('unbuffered code with tag', test => {
  testString(`
-
  var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]
each item in list
  li= item
  `,
    [{
      "source": simpleProjectRootDir()+"/test",
      type: "unbuf_code_block",
      lineNumber: 2,
      children: [
        {
          "source": simpleProjectRootDir()+"/test", type: "unbuf_code", val: 'var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]', "lineNumber": 3
        }
      ]
    },
    {
      "source": simpleProjectRootDir()+"/test",
      type: "each",
      val: "item in list",
      lineNumber: 4,
      children: [
        {
          "source": simpleProjectRootDir()+"/test",
          "name": "li",
          "type": "tag",
          "assignment": true,
          "val": "item",
          "lineNumber": 5
        }
      ]
    }
    ], test)
})