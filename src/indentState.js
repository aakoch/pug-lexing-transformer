import { } from '@foo-dog/utils'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:indentState')

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
    if (this.#newState != undefined && this.#newState != null && this.#newState.length > 0) {
      this.#stateStack.push(this.#newState)
    }
  }
  indentState() {
    debug('entering indentState:', this.#newState)
    this.#currentIndent++
    this.#stateStack.push(this.#newState)
  }
  dedent() {
    debug('entering dedent:', this.#stateStack.peek())
    this.#currentIndent = Math.max(this.#currentIndent - 1, 0)
    if (this.#stateStack.length === 1 || (this.#stateStack.length > 1 && this.#stateStack[this.#stateStack.length - 1] !== this.#stateStack[this.#stateStack.length - 2])) {
      debug('decrementing stateIndent (before):', this.#stateIndent)
      this.#stateIndent = Math.max(this.#stateIndent - 1, 0)
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
    debug('entering stateIndent:', this.#stateIndent)
    return this.#stateIndent
  }
  /** "absolute"? indentation */
  get currentIndent() {
    debug('entering currentIndent:', this.#currentIndent)
    return this.#currentIndent
  }
  get currentState() {
    debug('entering currentState:', this.#stateStack.peek())
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
    return this.#stateStack.pop()
  }
  peek() {
    return this.#stateStack.peek()
  }
  push(state) {
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