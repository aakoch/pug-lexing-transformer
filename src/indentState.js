import { } from '@foo-dog/utils'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:indentState')

class IndentState {
  #stack = []
  indent(state) {
    debug('indent ' + state)
    this.#stack.push(state)
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
  // get [Symbol.toStringTag]() {
  //   return '[indentState ' + this.#id + ']'
  // }
}

export default IndentState