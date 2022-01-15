import tap from 'tap'
import IndentState from '../src/indentState.js'

tap.test('Instantiation works', test => {
  const indentState = new IndentState()
  tap.ok(indentState)
  test.end()
})

tap.test('Start with empty stack, on deck state and current state', subtest => {
  const setup = function (test) {
    const indentState = new IndentState()
    test.same(indentState.currentIndent, 0)
    test.same(indentState.stack, [])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, undefined)
    return indentState
  }

  const promise1 = subtest.test('then indent', test => {
    const indentState = setup(test)
    indentState.indent();
    test.same(indentState.currentIndent, 1)
    test.same(indentState.stack, [])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, undefined)
    test.end()
  })
  
  const promise2 = subtest.test('then nodent', test => {
    const indentState = setup(test)
    indentState.nodent();
    test.same(indentState.currentIndent, 0)
    test.same(indentState.stack, [])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, undefined)
    test.end()
  })

  const promise3 = subtest.test('then dedent', test => {
    const indentState = setup(test)
    indentState.dedent();
    test.same(indentState.currentIndent, 0)
    test.same(indentState.stack, [])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, undefined)
    test.end()
  })

  Promise.all([promise1, promise2, promise3]).then(subtest.end)
})

