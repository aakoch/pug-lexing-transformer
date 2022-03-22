import { tap, testString, simpleProjectRootDir } from './fixture.js'

tap.test('dot follow a lot later with text', test => {

  testString('.\n\n  bar',
    [{
      source: simpleProjectRootDir() + "/test",
      lineNumber: 1,
      children: [
        {
          source: simpleProjectRootDir() + "/test", type: "text", val: 'bar', "lineNumber": 3
        }
      ]
    }
    ], test)
})