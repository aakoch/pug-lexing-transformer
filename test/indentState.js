import tap from 'tap'
import IndentState from '../src/indentState.js'

tap.test('Instantiation works', test => {
  const indentState = new IndentState()
  tap.ok(indentState)
  test.end()
})

tap.test('Calling setNewState() without indent() later will return undefined from dedent()', test => {
  const indentState = new IndentState()
  indentState.setNewState('one')
  tap.same(indentState.dedent(), undefined)
  test.end()
})

tap.test('Calling setNewState() with indent() later will return the correct value from dedent()', test => {
  const indentState = new IndentState()
  indentState.setNewState('two')
  indentState.indent()
  tap.same(indentState.dedent(), 'two')
  test.end()
})

tap.test('Calling nodent() returns the last state added', test => {
  const indentState = new IndentState()
  indentState.setNewState('three')
  indentState.indent()
  tap.same(indentState.nodent(), 'three')
  indentState.setNewState('four')
  test.end()
})

tap.test('Calling nodent() returns the last state added', test => {
  const indentState = new IndentState()
  indentState.setNewState('three')
  indentState.indent()
  tap.same(indentState.nodent(), 'three')
  test.end()
})

tap.test('Calling setNewState() without indent() later will return previous state', test => {
  const indentState = new IndentState()
  indentState.setNewState('three')
  indentState.indent()
  tap.same(indentState.nodent(), 'three')
  indentState.setNewState('four')
  tap.same(indentState.nodent(), 'three')
  test.end()
})

tap.test('Calling dedent() with nothing on stack returns undefined', test => {
  const indentState = new IndentState()
  indentState.setNewState('six')
  indentState.indent()
  tap.same(indentState.dedent(), 'six')
  tap.same(indentState.dedent(), undefined)
  test.end()
})

tap.test('Calling indent() twice should push current state on stack again', test => {
  const indentState = new IndentState()
  indentState.setNewState('seven')
  indentState.indent()
  indentState.indent()
  tap.same(indentState.dedent(), 'seven')
  tap.same(indentState.dedent(), 'seven')
  test.end()
})

tap.test('Setting the state should increment the indent count', test => {
  const indentState = new IndentState()
  tap.same(indentState.stateIndent, 0)
  tap.same(indentState.currentIndent, 0)
  indentState.setNewState('eight')
  indentState.indent()
  tap.same(indentState.stateIndent, 1)
  tap.same(indentState.currentIndent, 1)
  test.end()
})

tap.test('Dedenting the state should decrement the indent count', test => {
  const indentState = new IndentState()
  tap.same(indentState.stateIndent, 0)
  tap.same(indentState.currentIndent, 0)
  indentState.setNewState('eight')
  indentState.indent()
  tap.same(indentState.stateIndent, 1)
  tap.same(indentState.currentIndent, 1)
  indentState.dedent()
  tap.same(indentState.stateIndent, 0)
  tap.same(indentState.currentIndent, 0)
  test.end()
})

tap.test('Setting the same state should NOT increment the state indent count', test => {
  const indentState = new IndentState()
  tap.same(indentState.stateIndent, 0)
  tap.same(indentState.currentIndent, 0)
  indentState.setNewState('eight')
  indentState.indent()
  tap.same(indentState.stateIndent, 1)
  tap.same(indentState.currentIndent, 1)
  indentState.setNewState('eight')
  indentState.indent()
  tap.same(indentState.stateIndent, 1)
  tap.same(indentState.currentIndent, 2)
  test.end()
})

tap.test('Calling indent again should NOT increment the state indent count', test => {
  const indentState = new IndentState()
  tap.same(indentState.stateIndent, 0)
  tap.same(indentState.currentIndent, 0)
  indentState.setNewState('eight')
  indentState.indent()
  tap.same(indentState.stateIndent, 1)
  tap.same(indentState.currentIndent, 1)
  indentState.indent()
  tap.same(indentState.stateIndent, 1)
  tap.same(indentState.currentIndent, 2)
  indentState.indent()
  tap.same(indentState.stateIndent, 1)
  tap.same(indentState.currentIndent, 3)
  test.end()
})

tap.test('Dedenting the same state should NOT decrement the state indent count', test => {
  const indentState = new IndentState()
  let cnt = 0
  tap.same(indentState.stateIndent, 0)
  tap.same(indentState.currentIndent, 0)
  indentState.setNewState('ten')

  indentState.indent()

  tap.same(indentState.stateIndent, 1)
  tap.same(indentState.currentIndent, 1)
  indentState.setNewState('eleven')
  
  indentState.indent()

  tap.same(indentState.stateIndent, 2)
  tap.same(indentState.currentIndent, 2)
  indentState.indent()

  tap.same(indentState.stateIndent, 2)
  tap.same(indentState.currentIndent, 3)
  indentState.dedent()

  tap.same(indentState.stateIndent, 2)
  tap.same(indentState.currentIndent, 2)
  indentState.dedent()

  tap.same(indentState.stateIndent, 1)
  tap.same(indentState.currentIndent, 1)
  indentState.dedent()
  tap.same(indentState.stateIndent, 0)
  tap.same(indentState.currentIndent, 0)

  test.end()
})