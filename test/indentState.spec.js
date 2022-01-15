import tap from 'tap'
import IndentState from '../src/indentState.js'

tap.test('Instantiation works', test => {
  const indentState = new IndentState()
  tap.ok(indentState)
  test.end()
})

tap.test('Calling setNewState() without indent() later will return undefined from dedent()', test => {
  const indentState = new IndentState()
  indentState.onDeck = 'one'
  test.same(indentState.dedent(), undefined)
  test.end()
})

tap.test('Calling setNewState() with indent() later will return the correct value from dedent()', test => {
  const indentState = new IndentState()
  indentState.onDeck = 'two'
  indentState.indent()
  test.same(indentState.dedent(), 'two')
  test.end()
})

tap.test('Calling nodent() returns the last state added', test => {
  const indentState = new IndentState()
  indentState.onDeck = 'three'
  indentState.indent()
  test.same(indentState.nodent(), 'three')
  indentState.onDeck = 'four'
  test.end()
})

tap.test('Calling nodent() returns the last state added', test => {
  const indentState = new IndentState()
  indentState.onDeck = 'three'
  indentState.indent()
  test.same(indentState.nodent(), 'three')
  test.end()
})

tap.test('Calling setNewState() without indent() later will return previous state', test => {
  const indentState = new IndentState()
  indentState.onDeck = 'three'
  indentState.indent()
  test.same(indentState.nodent(), 'three')
  indentState.onDeck = 'four'
  test.same(indentState.nodent(), 'three')
  test.end()
})

tap.test('Calling dedent() with nothing on stack returns undefined', test => {
  const indentState = new IndentState()
  indentState.onDeck = 'six'
  indentState.indent()
  test.same(indentState.dedent(), 'six')
  test.same(indentState.dedent(), undefined)
  test.end()
})

tap.test('Calling indent() twice should push current state on stack again', test => {
  const indentState = new IndentState()
  indentState.onDeck = 'seven'
  indentState.indent()
  indentState.indent()
  test.same(indentState.dedent(), 'seven')
  test.same(indentState.dedent(), 'seven')
  test.end()
})

tap.test('Setting the state should increment the indent count', test => {
  const indentState = new IndentState()
  test.same(indentState.stateIndent, 0)
  test.same(indentState.currentIndent, 0)
  indentState.onDeck = 'eight'
  indentState.indent()
  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 1)
  test.end()
})

tap.test('Dedenting the state should decrement the indent count', test => {
  const indentState = new IndentState()
  test.same(indentState.stateIndent, 0)
  test.same(indentState.currentIndent, 0)
  indentState.onDeck = 'eight'
  indentState.indent()
  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 1)
  indentState.dedent()
  test.same(indentState.stateIndent, 0)
  test.same(indentState.currentIndent, 0)
  test.end()
})

tap.test('Setting the same state should NOT increment the state indent count', test => {
  const indentState = new IndentState()
  test.same(indentState.stateIndent, 0)
  test.same(indentState.currentIndent, 0)
  indentState.onDeck = 'eight'
  indentState.indent()
  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 1)
  indentState.onDeck = 'eight'
  indentState.indent()
  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 2)
  test.end()
})

tap.test('Calling indent again should NOT increment the state indent count', test => {
  const indentState = new IndentState()
  test.same(indentState.stateIndent, 0)
  test.same(indentState.currentIndent, 0)
  indentState.onDeck = 'eight'
  indentState.indent()
  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 1)
  indentState.indent()
  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 2)
  indentState.indent()
  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 3)
  test.end()
})

tap.test('Dedenting the same state should NOT decrement the state indent count', test => {
  const indentState = new IndentState()
  let cnt = 0
  test.same(indentState.stateIndent, 0)
  test.same(indentState.currentIndent, 0)
  indentState.onDeck = 'ten'

  indentState.indent()

  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 1)
  indentState.onDeck = 'eleven'
  
  indentState.indent()

  test.same(indentState.stateIndent, 2)
  test.same(indentState.currentIndent, 2)
  indentState.indent()

  test.same(indentState.stateIndent, 2)
  test.same(indentState.currentIndent, 3)
  indentState.dedent()

  test.same(indentState.stateIndent, 2)
  test.same(indentState.currentIndent, 2)
  indentState.dedent()

  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 1)
  indentState.dedent()
  test.same(indentState.stateIndent, 0)
  test.same(indentState.currentIndent, 0)

  test.end()
})


tap.test('Calling indent() with null state uses previous state', test => {
  const indentState = new IndentState()
  indentState.onDeck = 'twelve'
  indentState.indent()
  indentState.onDeck = null
  indentState.indent()
  test.same(indentState.dedent(), 'twelve')
  test.same(indentState.dedent(), 'twelve')
  test.end()
})

//<ONE>
//  <ONE>
//    <ONE>
//  <ONE>
//<ONE>

//<ONE>
//  <undefined>
//    <ONE>
//  <ONE>
//<ONE>


tap.test('Indenting with undefined should act as if we are in the same state', test => {
  const indentState = new IndentState()
  let cnt = 0
  test.same(indentState.stateIndent, 0)
  test.same(indentState.currentIndent, 0)
  indentState.onDeck = 'ten'

  indentState.indent()

  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 1)
  indentState.onDeck = undefined
  
  indentState.indent()

  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 2)

  indentState.onDeck = 'ten'

  indentState.indent()

  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 3)

  indentState.onDeck = 'eleven'
  indentState.indent()

  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 3)
  indentState.dedent()

  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 2)
  indentState.dedent()

  test.same(indentState.stateIndent, 1)
  test.same(indentState.currentIndent, 1)
  indentState.dedent()
  test.same(indentState.stateIndent, 0)
  test.same(indentState.currentIndent, 0)

  test.end()
})


// tap.test('Nodenting with undefined should ???', test => {
//   const indentState = new IndentState()
//   let cnt = 0
//   test.same(indentState.stateIndent, 0)
//   test.same(indentState.currentIndent, 0)
//   indentState.onDeck = 'ten'

//   indentState.indent()

//   test.same(indentState.stateIndent, 1)
//   test.same(indentState.currentIndent, 1)
//   indentState.onDeck = 'eleven'
  
//   indentState.indent()

//   test.same(indentState.stateIndent, 2)
//   test.same(indentState.currentIndent, 2)
//   indentState.indent()

//   test.same(indentState.stateIndent, 2)
//   test.same(indentState.currentIndent, 3)
//   indentState.dedent()

//   test.same(indentState.stateIndent, 2)
//   test.same(indentState.currentIndent, 2)
//   indentState.dedent()

//   test.same(indentState.stateIndent, 1)
//   test.same(indentState.currentIndent, 1)
//   indentState.dedent()
//   test.same(indentState.stateIndent, 0)
//   test.same(indentState.currentIndent, 0)

//   test.end()
// })


// tap.test('Dedenting with undefined should ???', test => {
//   const indentState = new IndentState()
//   let cnt = 0
//   test.same(indentState.stateIndent, 0)
//   test.same(indentState.currentIndent, 0)
//   indentState.onDeck = 'ten'

//   indentState.indent()

//   test.same(indentState.stateIndent, 1)
//   test.same(indentState.currentIndent, 1)
//   indentState.onDeck = undefined
  
//   indentState.indent()

//   test.same(indentState.stateIndent, 2)
//   test.same(indentState.currentIndent, 2)
//   indentState.indent()

//   test.same(indentState.stateIndent, 2)
//   test.same(indentState.currentIndent, 3)
//   indentState.dedent()

//   test.same(indentState.stateIndent, 2)
//   test.same(indentState.currentIndent, 2)
//   indentState.dedent()

//   test.same(indentState.stateIndent, 1)
//   test.same(indentState.currentIndent, 1)
//   indentState.dedent()
//   test.same(indentState.stateIndent, 0)
//   test.same(indentState.currentIndent, 0)

//   test.end()
// })