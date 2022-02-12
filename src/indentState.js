import { } from '@foo-dog/utils'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:indentState')

class IndentState {
  #stack = []
  /**
   * @param state The state to push on the stack
   * @returns The state that was passed in
   */
  indent(state) {
    debug('indent ' + state)
    this.#stack.push(state)
    return state
  }
  nodent() {
    debug('nodent ' + this.#stack[this.#stack.length - 1])
    return this.#stack[this.#stack.length - 1]
  }
  dedent() {
    this.#stack.pop()
    debug('dedent ' + this.#stack[this.#stack.length - 1])
    return this.#stack[this.#stack.length - 1]
  }
  get stack() {
    return this.#stack
  }
  // get [Symbol.toStringTag]() {
  //   return '[indentState ' + this.#id + ']'
  // }
}

export default IndentState