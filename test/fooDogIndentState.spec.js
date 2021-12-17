import tap from 'tap'
import FooDogIndentState from '../src/fooDogIndentState.js'

const subject = FooDogIndentState

tap.test('Instantiation works', test => {
  const indentState = new FooDogIndentState()
  tap.ok(indentState)
  test.end()
})

tap.test('Calling setNewState() with "TEXT_START" returns "TEXT"', test => {
  const indentState = new FooDogIndentState()
  indentState.setNewState('TEXT_START')
  indentState.indent()
  tap.same(indentState.dedent(), 'TEXT')
  test.end()
})

tap.test('Calling setNewState() with something else returns same value', test => {
  const indentState = new FooDogIndentState()
  indentState.setNewState('test')
  indentState.indent()
  tap.same(indentState.dedent(), 'test')
  test.end()
})
