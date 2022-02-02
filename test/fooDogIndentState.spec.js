import tap from 'tap'
import FooDogIndentState from '../src/fooDogIndentState.js'

// const subject = FooDogIndentState

// tap.test('Instantiation works', test => {
//   const indentState = new FooDogIndentState()
//   tap.ok(indentState)
//   test.end()
// })

// tap.test('Calling setNewState() with "TEXT_START" returns "TEXT"', test => {
//   const indentState = new FooDogIndentState()
//   indentState.setNewState('TEXT_START')
//   indentState.indent()
//   test.same(indentState.dedent(), 'TEXT')
//   test.end()
// })

// tap.test('Calling setNewState() with something else returns same value', test => {
//   const indentState = new FooDogIndentState()
//   indentState.setNewState('test')
//   indentState.indent()
//   test.same(indentState.dedent(), 'test')
//   test.end()
// })

// tap.test('test pushing a state', test => {
//   const indentState = new FooDogIndentState()
//   indentState.push('TEST')
//   test.same(indentState.dedent(), 'TEST')
//   test.end()
// })

// tap.test('If the state is UNBUF_CODE_FOLLOWER, then an indent will clear (not pop) that state and it should behave as INIT', test => {
//   const indentState = new FooDogIndentState()
//   indentState.push('UNBUF_CODE_FOLLOWER')
//   indentState.indent()
//   test.same(indentState.currentState, 'INITIAL')
//   test.end()
// })

// tap.test('If the state is UNBUF_CODE_FOLLOWER, then an indent adds INIT', test => {
// // example/s - both of these both output "<p>1</p>":
// // - var i = 1
// // - var j = 2 
// //   p= i

// // - var i = 1
// // - var j = 2 
// // p= i
//   const indentState = new FooDogIndentState()
//   indentState.push('UNBUF_CODE_FOLLOWER')
//   test.same(indentState.currentIndent, 0)
//   test.same(indentState.stateIndent, 0)
//   indentState.indent()
//   test.same(indentState.currentIndent, 1)
//   test.same(indentState.stateIndent, 0)
//   test.same(indentState.currentState, 'INITIAL')
//   indentState.dedent()
//   test.same(indentState.currentState, undefined)
//   test.end()
// })

// tap.test('If the state is UNBUF_CODE_FOLLOWER, then an nodent behaves as an indent', test => {
// // example/s - both of these both output "<p>1</p>":
// // - var i = 1
// // - var j = 2 
// //   p= i
// // 
// // - var i = 1
// // - var j = 2 
// // p= i
//   const indentState = new FooDogIndentState()
//   indentState.push('UNBUF_CODE_FOLLOWER')
//   test.same(indentState.currentIndent, 0)
//   test.same(indentState.stateIndent, 0)
//   indentState.nodent()
//   test.same(indentState.currentIndent, 0)
//   test.same(indentState.stateIndent, 0)
//   test.same(indentState.currentState, 'INITIAL')
//   indentState.dedent()
//   test.same(indentState.currentIndent, 0)
//   test.same(indentState.stateIndent, 0)
//   test.same(indentState.currentState, undefined)
//   test.end()
// })

// tap.test('If the state is UNBUF_CODE_FOLLOWER, then an dedent will pop that state and it should behave as INIT', test => {
// // example:
// // div
// //   - var i = 1
// //   - var j = 2 
// //   p= i
// // div
// //
// // output:
// // <div><p>1</p></div><div></div>
//   const indentState = new FooDogIndentState()
//   indentState.indent()
//   test.same(indentState.currentIndent, 1)
//   test.same(indentState.stateIndent, 1)
//   indentState.setNewState('UNBUF_CODE_FOLLOWER')
//   indentState.nodent()
//   test.same(indentState.currentIndent, 1)
//   test.same(indentState.stateIndent, 1)
//   indentState.dedent()
//   test.same(indentState.currentIndent, 0)
//   test.same(indentState.stateIndent, 0)
//   test.same(indentState.currentState, undefined)
//   test.end()
// })

// tap.test('If the state is UNBUF_CODE_BLOCK, then an indent is code', test => {
// // example:
// // -
// //  var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]
// // each item in list
// //    li= item
// //    `
//   const indentState = new FooDogIndentState()
//   indentState.setNewState('UNBUF_CODE_BLOCK')
//   // test.same(indentState.currentIndent, 1)
//   // test.same(indentState.stateIndent, 1)
//   indentState.indent()

//   // test.same(indentState.currentIndent, 0)
//   // test.same(indentState.stateIndent, 0)
//   test.same(indentState.currentState, 'UNBUF_CODE_BLOCK')
//   test.end()
// })

// tap.test('If the state set is UNBUF_CODE_BLOCK_START it is transformed to UNBUF_CODE_BLOCK', test => {
//   // example:
//   // -
//   //  var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]
//   // each item in list
//   //    li= item
//   //    `
//   const indentState = new FooDogIndentState()
//     indentState.setNewState('UNBUF_CODE_BLOCK_START')
//     // test.same(indentState.currentIndent, 1)
//     // test.same(indentState.stateIndent, 1)
//     indentState.indent()
  
//     // test.same(indentState.currentIndent, 0)
//     // test.same(indentState.stateIndent, 0)
//     test.same(indentState.currentState, 'UNBUF_CODE_BLOCK')
//     test.end()
//   })

// tap.test('If the state set is UNBUF_CODE_BLOCK_START it is transformed to UNBUF_CODE_BLOCK', test => {
//   // example:
//   // -
//   //   list = ["uno", "dos", "tres",
//   //           "cuatro", "cinco", "seis"];
//   // //- Without a block, the element is accepted and no code is generated
//   // -
//   // each item in list
//   //   -
//   //     string = item.charAt(0)
      
//   //       .toUpperCase() +
//   //     item.slice(1);
//   //   li= string
//   const indentState = new FooDogIndentState()
//     indentState.onDeck = 'UNBUF_CODE_BLOCK_START'
//     // test.same(indentState.currentIndent, 1)
//     // test.same(indentState.stateIndent, 1)
//     indentState.indent()
//     test.same(indentState.currentState, 'UNBUF_CODE_BLOCK')
//     indentState.nodent()
//     test.same(indentState.currentState, 'UNBUF_CODE_BLOCK')
//     indentState.indent()
//     test.same(indentState.currentState, 'UNBUF_CODE_BLOCK')
//     indentState.indent()
//     test.same(indentState.currentState, 'UNBUF_CODE_BLOCK')
//     indentState.onDeck = undefined
//     indentState.dedent()
//     test.same(indentState.currentState, 'UNBUF_CODE_BLOCK')
  
//     // test.same(indentState.currentIndent, 0)
//     // test.same(indentState.stateIndent, 0)
//     test.same(indentState.currentState, 'UNBUF_CODE_BLOCK')
//     test.end()
//   })

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

  tap.test('testing text block', test => {
    const indentState = new FooDogIndentState()
    indentState.nodent()
    indentState.indent('TEXT_BLOCK_START')
    test.same(indentState.nodent(), 'TEXT')
    test.same(indentState.nodent(), 'TEXT')
    test.same(indentState.dedent(), undefined)
    test.end()
  })

  // tap.test('testing script block', test => {
  //   const indentState = new FooDogIndentState()
  //   indentState.nodent()
  //   indentState.indent('TEXT_START')
  //   indentState.indent('TEXT')
  //   test.same(indentState.nodent(), 'TEXT')
  //   test.end()
  // })

// test/index.spec.js 2> 2022-01-24T02:31:58.858Z pug-lexing-transformer inputString= NO1 script.
// test/index.spec.js 2> 2022-01-24T02:31:58.858Z pug-lexing-transformer:fooDogIndentState nodent
// test/index.spec.js 2> 2022-01-24T02:31:58.858Z pug-lexing-transformer:indentState nodent undefined
// test/index.spec.js 2> 2022-01-24T02:31:58.858Z pug-lexing-transformer nodent: this.#currentState= undefined
// test/index.spec.js 2> 2022-01-24T02:31:58.858Z pug-lexing-transformer before state= undefined
// test/index.spec.js 2> 2022-01-24T02:31:58.858Z pug-lexing-transformer:line-analyzer sending to parser: script.
// test/index.spec.js 2> 2022-01-24T02:31:58.858Z pug-line-lexer line_splitter: DOT_END
// test/index.spec.js 2> 2022-01-24T02:31:58.858Z pug-line-lexer line_end: <blank>
// test/index.spec.js 2> 2022-01-24T02:31:58.858Z pug-line-lexer line: line_start line_splitter line_end: $line_start= { name: 'script', type:
// 'tag' } , $line_end= undefined
// test/index.spec.js 2> 2022-01-24T02:31:58.859Z pug-line-lexer merging { name: 'script', type: 'tag' } { state: 'TEXT_START' }
// test/index.spec.js 2> 2022-01-24T02:31:58.859Z pug-line-lexer merging inside _mergeWith state undefined TEXT_START
// test/index.spec.js 2> 2022-01-24T02:31:58.859Z pug-line-lexer merging  returning { name: 'script', type: 'tag', state: 'TEXT_START' }
// test/index.spec.js 2> 2022-01-24T02:31:58.859Z pug-lexing-transformer:line-analyzer returned from parser:  { name: 'script', type: 'tag', state:
//  'TEXT_START' }
// test/index.spec.js 2> 2022-01-24T02:31:58.859Z pug-lexing-transformer returned state= TEXT_START
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-lexing-transformer entering _transform
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-lexing-transformer inputString= IN2 if (foo) {
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-lexing-transformer:fooDogIndentState indent TEXT_START
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-lexing-transformer:indentState indent TEXT_BLOCK
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-lexing-transformer before state= TEXT
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-lexing-transformer:line-analyzer sending to parser: <TEXT>if (foo) {
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-line-lexer 80 yy_.yytext= if (foo) {
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-lexing-transformer:line-analyzer returned from parser:  { type: 'text', val: 'if (foo) {' }
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-lexing-transformer entering _transform
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-lexing-transformer inputString= IN4 bar();
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-lexing-transformer:fooDogIndentState indent TEXT
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-lexing-transformer:indentState indent TEXT
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-lexing-transformer before state= undefined
// test/index.spec.js 2> 2022-01-24T02:31:58.860Z pug-lexing-transformer:line-analyzer sending to parser: bar();
// test/index.spec.js 2> JisonLexerError: Lexical error on line 1: Unrecognized text.


  