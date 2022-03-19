import {} from '@foo-dog/utils'
import IndentState from './indentState.js'
import debugFunc from 'debug'
const debug = debugFunc('lexing-transformer:fooDogIndentState')

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
      // ??
      super.indent('MULTI_LINE_ATTRS')

      this.#stickyState = state

      // ??
      return 'MULTI_LINE_ATTRS';
    }
    // else 
    // if (state === 'MULTI_LINE_ATTRS') {
    // }
    else 
    if (state === 'TEXT_BLOCK_START') {
      this.#stickyState = 'TEXT'
    }
    else if (state === 'TEXT_START') {
      super.indent('TEXT_BLOCK')
      this.#stickyState = 'TEXT'
      return 'TEXT';
    }
    else 
    if (state === 'UNBUF_CODE_BLOCK_START') {
      this.#stickyState = 'UNBUF_CODE_BLOCK'
      debug('indent: before stack=', super.stack)
      const tmp = super.indent('UNBUF_CODE_BLOCK')
      debug('indent: tmp=', tmp)
      debug('indent: after stack=', super.stack)
      return tmp
    }
    // else 
    // if (state === 'UNBUF_CODE_BLOCK') {
    //   return 'UNBUF_CODE_BLOCK';
    // }

    return super.indent(state)
  }
  nodent(state) {
    debug('nodent')
    const tempNodent = super.nodent()
    if (state != null && state != undefined && state === 'MULTI_LINE_ATTRS_END') {
      super.dedent()
      return undefined
    }
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
      debug('dedent(): super.nodent()=' + tempNodent)
      if (this.#stickyState === 'TEXT') {
        if (tempNodent === 'TEXT_BLOCK') {
          return 'TEXT'
        }
        return undefined
      }
      else 
      if (this.#stickyState === 'UNBUF_CODE_BLOCK') {
        debug('dedent: stack=', super.stack)
        return super.dedent()
      }
      // else if (this.#stickyState === 'MULTI_LINE_ATTRS') {
      //   if (tempNodent === 'MULTI_LINE_ATTRS') {
      //     return 'MULTI_LINE_ATTRS'
      //   }
      //   return undefined
      // }
      
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