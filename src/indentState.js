import { } from '@foo-dog/utils'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:indentState')

class IndentState {
  #currentIndent = 0
  #stateIndent = 0
  #stateStack = []
  #newState = 'INITIAL'
  indent() {
    debug('entering indent:', this.#newState)
    this.#currentIndent++
    if (this.#newState == undefined || this.#stateStack.length === 0 || this.#stateStack.peek() != this.#newState) {
      debug('incrementing stateIndent (before):', this.#stateIndent)
      this.#stateIndent = this.#stateIndent + 1
    }
    if (this.#newState != undefined && this.#newState != null && this.#newState.length > 0) {
      this.#stateStack.push(this.#newState)
    }
  }
  indentState() {
    debug('pushing ' + this.#newState + ' to state stack and incrementing currentIndent but not stateIndent')
    this.#currentIndent++
    this.#stateStack.push(this.#newState)
  }
  dedent() {
    debug('entering dedent:', this.#stateStack)
    this.#currentIndent = Math.max(this.#currentIndent - 1, 0)
    debug('dedent(): decremented currentIndent so now it=' + this.#currentIndent)
    debug('dedent(): this.#stateIndent=' + this.#stateIndent)
    if (this.#stateStack.length === 1 || (this.#stateStack.length > 1 && this.#stateStack[this.#stateStack.length - 1] !== this.#stateStack[this.#stateStack.length - 2])) {
      debug('decrementing stateIndent for', this.#stateStack[this.#stateStack.length - 1], ' (before):', this.#stateIndent)
      this.#stateIndent = Math.max(this.#stateIndent - 1, 0)
      debug('decrementing stateIndent (after):', this.#stateIndent)
    }
    else if (this.#stateStack.length === 0) {
      this.#stateIndent = 0
    }
    return this.#stateStack.pop()
  }
  nodent() {
    debug('entering nodent:', this.#stateStack.peek())
    return this.#stateStack.peek()
  }
  setNewState(newState) {
    debug('entering setNewState:', newState)
    if (newState != undefined && newState != null && newState.length > 0) {
      this.#newState = newState
    }
  }
  /** indentation of the current state */
  get stateIndent() {
    return this.#stateIndent
  }
  /** "absolute"? indentation */
  get currentIndent() {
    return this.#currentIndent
  }
  get currentState() {
    return this.#stateStack.peek()
  }
  get state() {
    debug('entering state:', this.#stateStack)
    return this.#stateStack
  }
  get length() {
    debug('entering length:', this.#stateStack.length)
    return this.#stateStack.length
  }
  pop() {
    debug('entering pop')
    return this.#stateStack.pop()
  }
  push(state) {
    debug('entering push:', state)
    return this.#stateStack.push(state)
  }
  // get state() {
  //   return { 'stateIndent': this.#stateIndent,
  //   'currentIndent': this.#currentIndent,
  //   'newState':this.#newState,
  //   'stateStack': this.#stateStack }
  // }
}

export default IndentState