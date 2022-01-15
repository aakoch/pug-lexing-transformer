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
tap.test('Start with ["SOME STATE"] and "PERSISTENT STATE" on deck', subtest => {
  const setup = function (test) {
    const indentState = new IndentState()
    indentState.onDeck = 'SOME STATE' // returned from parser
    indentState.indent(); // determined by indent transformer
    test.same(indentState.currentIndent, 1)
    test.same(indentState.stack, ['SOME STATE'])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, 'SOME STATE')

    indentState.onDeck = 'PERSISTENT STATE' // returned from parser
    
    test.same(indentState.currentIndent, 1)
    test.same(indentState.stack, ['SOME STATE'])
    test.same(indentState.onDeck, 'PERSISTENT STATE')
    test.same(indentState.current, 'SOME STATE')
    return indentState
  }

  const promise1 = subtest.test('then indent', test => {
    const indentState = setup(test)
    indentState.indent();
    test.same(indentState.currentIndent, 2)
    test.same(indentState.stack, ['SOME STATE', 'PERSISTENT STATE'])
    test.same(indentState.onDeck, undefined)
    test.same(indentState.current, 'PERSISTENT STATE')
    test.end()
  })
  
  const promise2 = subtest.test('then nodent', {todo:true}, test => {
    const indentState = setup(test)
    indentState.nodent();
    test.same(indentState.currentIndent, 1)
    test.same(indentState.stack, ['SOME STATE'])
    // test.same(indentState.onDeck, undefined)
    // test.same(indentState.current, 'PERSISTENT STATE')
    test.end()
  })

  const promise3 = subtest.test('then dedent', {todo:true}, test => {
    const indentState = setup(test)
    indentState.dedent();
    test.same(indentState.currentIndent, 0)
    test.same(indentState.stack, [])
    test.same(indentState.onDeck, undefined)
    // test.same(indentState.current, undefined)
    test.end()
  })

  Promise.all([promise1, promise2, promise3]).then(subtest.end)
})
