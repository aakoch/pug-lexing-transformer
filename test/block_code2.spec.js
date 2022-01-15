import tap from 'tap'
import IndentState from '../src/fooDogIndentState.js'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:test:block_code2')

// -
//   string = item.charAt(0)

//     .toUpperCase() +
//   item.slice(1);
// li= string

tap.test('Start with empty stack, on deck state = "UNBUF_CODE_BLOCK_START" and current state undefined', subtest => {
  const setup = function (test) {
    const indentState = new IndentState()
    indentState.onDeck = 'UNBUF_CODE_BLOCK_START'
    return indentState
  }

  const promise1 = subtest.test('then indent for string', test => {
    const indentState = setup(test)
    indentState.indent();
    test.same(indentState.currentIndent, 1)
    test.same(indentState.stack, ['UNBUF_CODE_BLOCK'])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, 'UNBUF_CODE_BLOCK')

    test.end()
  })

  promise1.then(subtest.end)
})

tap.test('already indented once, pick up where we left off', subtest => {
  const setup = function (test) {
    const indentState = new IndentState()
    indentState.push('UNBUF_CODE_BLOCK')
    indentState.current = 'UNBUF_CODE_BLOCK'

    test.same(indentState.stack, ['UNBUF_CODE_BLOCK'])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, 'UNBUF_CODE_BLOCK')

    return indentState
  }

  const promise1 = subtest.test('indenting a second time for .toUpperCase()', test => {
    const indentState = setup(test)
    indentState.indent();
    test.same(indentState.currentIndent, 1)
    test.same(indentState.stack, ['UNBUF_CODE_BLOCK', 'UNBUF_CODE_BLOCK'])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, 'UNBUF_CODE_BLOCK')

    debug('indenting a second time for .toUpperCase()')

    indentState.onDeck = 'UNBUF_CODE_BLOCK' // parser returned
    indentState.indent();
    test.same(indentState.currentIndent, 2)
    test.same(indentState.stack, ['UNBUF_CODE_BLOCK', 'UNBUF_CODE_BLOCK'])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, 'UNBUF_CODE_BLOCK')

    debug('dedenting for item.slice(1);')

    indentState.onDeck = 'UNBUF_CODE_BLOCK' // parser returned
    indentState.dedent();
    test.same(indentState.currentIndent, 1)
    test.same(indentState.stack, ['UNBUF_CODE_BLOCK'])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, 'UNBUF_CODE_BLOCK')

    debug('dedenting a second time for li= string')

    indentState.onDeck = 'UNBUF_CODE_BLOCK' // parser returned
    indentState.dedent();
    test.same(indentState.currentIndent, 0)
    test.same(indentState.stack, [])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, undefined)

    test.end()
  })

  promise1.then(subtest.end)
  //Promise.all([promise1, promise2, promise3]).then(subtest.end)

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