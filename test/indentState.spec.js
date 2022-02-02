import tap from 'tap'
import IndentState from '../src/indentState.js'

tap.test('Instantiation works', test => {
  const indentState = new IndentState()
  tap.ok(indentState)
  test.end()
})

tap.test('Calling indent() pushed state onto stack', test => {
  const indentState = new IndentState()
  indentState.indent('one')
  test.same(indentState.nodent(), 'one')
  test.end()
})

tap.test('Calling nodent() returns the last state added', test => {
  const indentState = new IndentState()
  indentState.indent('two')
  test.same(indentState.nodent(), 'two')
  test.end()
})

tap.test('Calling dedent() returns the second-to-last state added', test => {
  const indentState = new IndentState()
  indentState.indent('three')
  indentState.indent('four')
  test.same(indentState.dedent(), 'three')
  test.end()
})
