import { } from '@aakoch/utils'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer: indentState')

class IndentState {
  #currentIndent = 0
  #stateIndent = 0
  #stateStack = []
  #newState = null
  indent() {
    debug('entering indent:', this.#newState)
    this.#currentIndent++
    if (this.#stateStack.length === 0 || this.#stateStack.peek() != this.#newState) {
      debug('incrementing stateIndent (before):', this.#stateIndent)
      this.#stateIndent = this.#stateIndent + 1
    }
    this.#stateStack.push(this.#newState)
  }
  dedent() {
    debug('entering dedent:', this.#stateStack.peek())
    this.#currentIndent--
    if (this.#stateStack.length === 1 || (this.#stateStack.length > 1 && this.#stateStack[this.#stateStack.length - 1] !== this.#stateStack[this.#stateStack.length - 2])) {
      debug('decrementing stateIndent (before):', this.#stateIndent)
      this.#stateIndent = this.#stateIndent - 1
    }
    return this.#stateStack.pop()
  }
  nodent() {
    debug('entering nodent:', this.#stateStack.peek())
    return this.#stateStack.peek()
  }
  setNewState(newState) {
    debug('entering setNewState:', newState)
    this.#newState = newState
  }
  /** indentation of the current state */
  get stateIndent() {
    debug('entering stateIndent:', this.#stateIndent)
    return this.#stateIndent
  }
  /** "absolute"? indentation */
  get currentIndent() {
    debug('entering currentIndent:', this.#currentIndent)
    return this.#currentIndent
  }
  // get state() {
  //   return { 'stateIndent': this.#stateIndent,
  //   'currentIndent': this.#currentIndent,
  //   'newState':this.#newState,
  //   'stateStack': this.#stateStack }
  // }
}

export default IndentState