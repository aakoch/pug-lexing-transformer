import {} from '@foo-dog/utils'
import IndentState from './indentState.js'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer:fooDogIndentState')

class FooDogIndentState extends IndentState {
  constructor() {
    super()
  }
  #stickyState = undefined
  indent(state) {
    debug('indent ' + state)

    if (this.#stickyState === 'TEXT') {
      super.indent('TEXT_BLOCK')
      this.#stickyState = 'TEXT'
      return 'TEXT';
    }

    if (state === 'MULTI_LINE_ATTRS') {
      this.#stickyState = state
    }
    else if (state === 'TEXT_BLOCK_START') {
      this.#stickyState = 'TEXT'
    }
    else if (state === 'TEXT_START') {
      super.indent('TEXT_BLOCK')
      this.#stickyState = 'TEXT'
      return 'TEXT';
    }

    return super.indent(state)
  }
  nodent() {
    debug('nodent')
    const tempNodent = super.nodent()
    if (this.#stickyState === 'TEXT') {
      return 'TEXT'
    }
    else if (tempNodent === 'TEXT') {
      super.dedent()
      return undefined
    }
    return tempNodent
  }
  dedent() {
    debug('dedent')
    const tempNodent = super.nodent()
    if (!!this.#stickyState) {
      debug('dedent(): super.dedent()=' + tempNodent)
      if (this.#stickyState === 'TEXT') {
        if (tempNodent === 'TEXT_BLOCK') {
          return 'TEXT'
        }
        return undefined
      }
      const tempStickyState = this.#stickyState
      this.#stickyState = undefined
      return tempStickyState
    }
    else {
      return tempNodent
    }
  }
}

export default FooDogIndentState

// notes:
// if there is a block of unbuffered code, it must be indented (after the first line). If a line following is not indented (nodent) then it should behave like it is a child.
// If there is a line of unbuffered code and it is followed by an indented line and without a dash, then it should behave as a child.