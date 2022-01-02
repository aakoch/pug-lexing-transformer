import { tap, testString } from './fixture.js'

tap.test('mixin', test => {
  testString(`
-
  var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]
each item in list
  li= item
  `, [
        {
          "source": "/Users/aakoch/projects/new-foo/workspaces/pug-lexing-transformer/test",
          "type": "unbuf_code_block",
          "lineNumber": 2,
          "children": [
            {
              "source": "/Users/aakoch/projects/new-foo/workspaces/pug-lexing-transformer/test",
              "name": "var",
              "type": "tag",
              "val": "list = [\"Uno\", \"Dos\", \"Tres\", \"Cuatro\", \"Cinco\", \"Seis\"]",
              "lineNumber": 3,
            },
          ],
        },
        {
          "source": "/Users/aakoch/projects/new-foo/workspaces/pug-lexing-transformer/test",
          "type": "each",
          "val": "item in list",
          "lineNumber": 4,
          "children":  [
            {
              "source": "/Users/aakoch/projects/new-foo/workspaces/pug-lexing-transformer/test",
              "name": "li",
              "type": "tag",
              "assignment": true,
              "assignment_val": "item",
              "lineNumber": 5,
            },
          ],
        }

  ], test)
})