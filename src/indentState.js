import { } from '@foo-dog/utils'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:indentState')

class IndentState {
  constructor() {
    debug('entering constructor')
    this.#id = Math.random()
  }
  #id
  #currentIndent = 0
  #stateStack = []
  #onDeck = undefined
  #current = undefined
  indent() {
    debug('entering indent: onDeck=', this.#onDeck)
    this.#currentIndent++

    this.#stateStack.push(this.#current)
    if (this.#onDeck != undefined && this.#onDeck != null && this.#onDeck.length > 0 && this.isPersistent(this.#onDeck)) {
      this.#current = this.#onDeck
      this.#onDeck = undefined
    }
  }
  dedent() {
    this.#onDeck = undefined
    debug('entering dedent:', this.#stateStack)
    this.#currentIndent = Math.max(this.#currentIndent - 1, 0)
    this.#current = this.#stateStack.pop()
    // debug('dedent2:', this.#stateStack)
    // if (this.#stateStack.length === 1 || (this.#stateStack.length > 1 && this.#stateStack[this.#stateStack.length - 1] !== this.#stateStack[this.#stateStack.length - 2])) {
    //   this.#current = undefined
    // }
    // else if (this.#stateStack.length === 0) {
    //   this.#current = undefined
    // }
    debug('returning dedent2:', this.#current)
    return this.#current
  }
  nodent() {
    debug('entering nodent:', this.#stateStack.peek())
    this.#onDeck = undefined
    return this.#stateStack.peek()
  }
  isPersistent() {
    return true
  }
  // setNewState(newState) {
  //   debug('entering setNewState:', newState)
  //   if (newState != undefined && newState != null && newState.length > 0) {
  //     this.#onDeck = newState
  //   }
  // }
  /** "absolute"? indentation */
  get currentIndent() {
    return this.#currentIndent
  }
  get currentState() {
    return this.#stateStack.peek()
  }
  get length() {
    return this.#stateStack.length
  }
  get stack() {
    return this.#stateStack.slice()
  }
  get onDeck() {
    return this.#onDeck
  }
  set onDeck(newState) {
    this.#onDeck = newState
  }
  get current() {
    return this.#current
  }
  set current(newState) {
    this.#current = newState
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
  //   'newState':this.#onDeck,
  //   'stateStack': this.#stateStack }
  // }
  get [Symbol.toStringTag]() {
    return '[indentState ' + this.#id + ']'
  }
}

export default IndentState