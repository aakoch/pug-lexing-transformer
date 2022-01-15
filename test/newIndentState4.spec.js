import tap from 'tap'
import IndentState from '../src/indentState.js'

tap.test('Instantiation works', test => {
  const indentState = new IndentState()
  tap.ok(indentState)
  test.end()
})

// ********************************************************************************************************************************************************
// TODO: validate these test cases are correct
// ********************************************************************************************************************************************************
tap.test('Start with SOME STATE and then add "PERSISTENT STATE", nothing on deck and no current state', subtest => {
  const setup = function (test) {
    const indentState = new IndentState()
    indentState.onDeck = 'SOME STATE' // returned from parser
    indentState.indent(); // determined by indent transformer
    indentState.onDeck = 'PERSISTENT STATE' // returned from parser
    indentState.indent(); // determined by indent transformer

    test.same(indentState.currentIndent, 2)
    test.same(indentState.stack, ['SOME STATE', 'PERSISTENT STATE'])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, 'PERSISTENT STATE')
    return indentState
  }

  const promise1 = subtest.test('then indent', {todo:true}, test => {
    const indentState = setup(test)
    indentState.indent();
    test.same(indentState.currentIndent, 3)
    test.same(indentState.stack, ['SOME STATE', 'PERSISTENT STATE'])
    test.same(indentState.onDeck, undefined)
    // test.same(indentState.current, 'PERSISTENT STATE')
    test.end()
  })
  
  const promise2 = subtest.test('then nodent', test => {
    const indentState = setup(test)
    indentState.nodent();
    test.same(indentState.currentIndent, 2)
    test.same(indentState.stack, ['SOME STATE', 'PERSISTENT STATE'])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, 'PERSISTENT STATE')
    test.end()
  })

  const promise3 = subtest.test('then dedent', test => {
    const indentState = setup(test)
    indentState.dedent();
    test.same(indentState.currentIndent, 1)
    test.same(indentState.stack, ['SOME STATE'])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, 'SOME STATE')
    test.end()
  })

  Promise.all([promise1, promise2, promise3]).then(subtest.end)
})
