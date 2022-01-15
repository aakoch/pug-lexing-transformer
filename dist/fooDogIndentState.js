import {} from '@foo-dog/utils'
import IndentState from './indentState.js'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:fooDogIndentState')

class FooDogIndentState extends IndentState {
  constructor() {
    super()
    this.#id = Math.random()
  }
  #id
  // setNewState(newState) {
  //   debug('entering setNewState:', newState)
  //   super.setNewState(newState.endsWith('_START') ? newState.slice(0, -6) : newState)
  // }
  indent() {
    if (!!super.onDeck && super.onDeck.endsWith('_START')) {
      super.onDeck = super.onDeck.slice(0, -6)
    }
    // debug('entering indent for ' + super.currentState + " with indent=" + super.currentIndent + " and stateIndent=" + super.stateIndent)
    // if (super.currentState === 'UNBUF_CODE_BLOCK_START') {
    //   super.setNewState('UNBUF_CODE_BLOCK')
    //   // return super.indentState()
    // }
    // else 
    // if (super.currentState === 'UNBUF_CODE_FOLLOWER') {
    //   super.setNewState('INITIAL')
    //   // return super.indentState()
    // }
    // else if (super.currentState === 'MIXIN_CALL') {
    //   super.setNewState('INITIAL')
    //   // return super.indentState()
    // }
    // else if (super.currentState === 'TEXT_START' || super.currentState === 'TEXT') {
    //   super.push('TEXT')
    // }
    return super.indent()
  }
  nodent() {
    debug('entering nodent:', super.currentState)
    if (super.currentState === 'UNBUF_CODE_FOLLOWER') {
      super.push('INITIAL')
    }
    else if (super.currentState === 'TEXT_START' || super.currentState === 'TEXT') {
      super.push('TEXT')
    }
    // else if (super.currentState === 'UNBUF_CODE_FOLLOWER') {

    // }
    return super.nodent()
  }
  // dedent() {
    // const currentState = super.currentState
    // debug('dedent(): currentState=', currentState)
    // const peek = super.currentState
    // debug('dedent(): currentState=', currentState)
    // if (currentState != peek) {
    //   throw new Error("AAK!!!!")
    // }

    // if (super.currentState == undefined) {
    //   debug('dedent(): state=', super.state)
    //   // debug('dedent(): pushing UNBUF_CODE_BLOCK')
    //   // super.push('UNBUF_CODE_BLOCK')
    //   // super.push('UNBUF_CODE_BLOCK')
    //   debug('dedent(): state=', super.state)
    // }

    // const prevState = super.dedent()

    // if (super.currentState === 'UNBUF_CODE_FOLLOWER') {
    //   debug('dedent() again')
    //   super.dedent()
    // }
    // // else if (super.currentState === 'UNBUF_CODE_FOLLOWER') {

    // // }
    //   debug('dedent(): prevState=', prevState)
    //   debug('dedent(): state=', super.state)
    // return prevState
  // }
  get [Symbol.toStringTag]() {
    return '' + Math.round(this.#id * 1e10)
  }
}

export default FooDogIndentState

// notes:
// if there is a block of unbuffered code, it must be indented (after the first line). If a line following is not indented (nodent) then it should behave like it is a child.
// If there is a line of unbuffered code and it is followed by an indented line and without a dash, then it should behave as a child.