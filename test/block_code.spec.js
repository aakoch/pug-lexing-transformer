import tap from 'tap'
import IndentState from '../src/indentState.js'

// -
// each item in list
//   -
//     string = item.charAt(0)
    
//       .toUpperCase() +
//     item.slice(1);
//   li= string

tap.test('Start with empty stack, on deck state = "UNBUF_CODE_BLOCK_START" and current state undefined', subtest => {
  const setup = function (test) {
    const indentState = new IndentState()
    indentState.onDeck = 'UNBUF_CODE_BLOCK_START'
    return indentState
  }

  const promise2 = subtest.test('then nodent', test => {
    const indentState = setup(test)
    indentState.nodent();

    indentState.onDeck = 'each'
    indentState.indent()

    test.same(indentState.currentIndent, 1)
    test.same(indentState.stack, ['each'])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, 'each')
    test.end()
  })

  const promise3 = subtest.test('then nodent', test => {
    const indentState = setup(test)
    indentState.nodent();
    test.same(indentState.currentIndent, 0)
    test.same(indentState.stack, [])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, undefined)
    test.end()
  })

  Promise.all([promise2, promise3]).then(subtest.end)

// import { tap, testString } from './fixture.js'

// tap.test('mixin', test => {
//   testString(`
// -
//   list = ["uno", "dos", "tres",
//           "cuatro", "cinco", "seis"];
// //- Without a block, the element is accepted and no code is generated
// -
// each item in list
//   -
//     string = item.charAt(0)
    
//       .toUpperCase() +
//     item.slice(1);
//   li= string
//   `, [
//         {
//           "source": "test",
//           "type": "unbuf_code_block",
//           "lineNumber": 2,
//           "children": [
//             {
//               "source": "test",
//               "name": "var",
//               "type": "tag",
//               "val": "list = [\"Uno\", \"Dos\", \"Tres\", \"Cuatro\", \"Cinco\", \"Seis\"]",
//               "lineNumber": 3,
//             },
//           ],
//         },
//         {
//           "source": "test",
//           "type": "each",
//           "val": "item in list",
//           "lineNumber": 4,
//           "children":  [
//             {
//               "source": "test",
//               "name": "li",
//               "type": "tag",
//               "assignment": true,
//               "assignment_val": "item",
//               "lineNumber": 5,
//             },
//           ],
//         }

//   ], test)
})