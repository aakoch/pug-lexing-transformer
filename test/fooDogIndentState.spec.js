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
  test.same(indentState.dedent(), 'TEXT')
  test.end()
})

tap.test('Calling setNewState() with something else returns same value', test => {
  const indentState = new FooDogIndentState()
  indentState.setNewState('test')
  indentState.indent()
  test.same(indentState.dedent(), 'test')
  test.end()
})

tap.test('test pushing a state', test => {
  const indentState = new FooDogIndentState()
  indentState.push('TEST')
  test.same(indentState.dedent(), 'TEST')
  test.end()
})

tap.test('If the state is UNBUF_CODE, then an indent will clear (not pop) that state and it should behave as INIT', test => {
  const indentState = new FooDogIndentState()
  indentState.push('UNBUF_CODE')
  indentState.indent()
  test.same(indentState.currentState, 'INITIAL')
  test.end()
})

tap.test('If the state is UNBUF_CODE, then an indent adds INIT', test => {
// example/s:
// - var i = 1
// - var j = 2 
//   p= i
// 
// - var i = 1
// - var j = 2 
// p= i
  const indentState = new FooDogIndentState()
  indentState.push('UNBUF_CODE')
  test.same(indentState.currentIndent, 0)
  test.same(indentState.stateIndent, 0)
  indentState.indent()
  test.same(indentState.currentIndent, 1)
  test.same(indentState.stateIndent, 0)
  test.same(indentState.currentState, 'INITIAL')
  indentState.dedent()
  test.same(indentState.currentState, undefined)
  test.end()
})

tap.test('If the state is UNBUF_CODE, then an nodent behaves as an indent', test => {
// example/s:
// - var i = 1
// - var j = 2 
//   p= i
// 
// - var i = 1
// - var j = 2 
// p= i
  const indentState = new FooDogIndentState()
  indentState.push('UNBUF_CODE')
  test.same(indentState.currentIndent, 0)
  test.same(indentState.stateIndent, 0)
  indentState.nodent()
  test.same(indentState.currentIndent, 0)
  test.same(indentState.stateIndent, 0)
  test.same(indentState.currentState, 'INITIAL')
  indentState.dedent()
  test.same(indentState.currentIndent, 0)
  test.same(indentState.stateIndent, 0)
  test.same(indentState.currentState, undefined)
  test.end()
})

tap.test('If the state is UNBUF_CODE, then an dedent will pop that state and it should behave as INIT', test => {
// example:
// html
//   - var i = 1
//   - var j = 2 
//   p= i
// body
  const indentState = new FooDogIndentState()
  indentState.indent()
  test.same(indentState.currentIndent, 1)
  test.same(indentState.stateIndent, 1)
  indentState.setNewState('UNBUF_CODE')
  indentState.nodent()
  test.same(indentState.currentIndent, 1)
  test.same(indentState.stateIndent, 1)
  indentState.dedent()
  test.same(indentState.currentIndent, 0)
  test.same(indentState.stateIndent, 0)
  test.same(indentState.currentState, undefined)
  test.end()
})

// TODO:
// tap.test('If the state is UNBUF_CODE_BLOCK, then an nodent ALREADY INDENTED should keep that state', test => {
// // example:
// // -
// //   var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]
// // each item in list
// //   li= item
//   const indentState = new FooDogIndentState()
//   indentState.push('UNBUF_CODE_BLOCK')
//   indentState.nodent()
//   test.same(indentState.currentState, 'UNBUF_CODE_BLOCK')
//   test.end()
// })

// // tap.test('If the state is UNBUF_CODE_BLOCK, then an nodent AT THE ROOT LEVEL should pop the state', test => {
// //   const indentState = new FooDogIndentState()
// //   indentState.push('UNBUF_CODE_BLOCK')
// //   indentState.indent()
// //   test.same(indentState.currentState, 'UNBUF_CODE_BLOCK')
// //   test.end()
// // })
