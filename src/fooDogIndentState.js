import {} from '@aakoch/utils'
import IndentState from './indentState.js'
import debugFunc from 'debug'
const debug = debugFunc('pug-lexing-transformer: fooDogIndentState')

class FooDogIndentState extends IndentState {
  constructor() {
    super()
  }
  setNewState(newState) {
    super.setNewState(newState.endsWith('_START') ? newState.substring(0, newState.indexOf('_START')) : newState)
  }
}

export default FooDogIndentState

// notes:
// if there is a block of unbuffered code, it must be indented (after the first line). If a line following is not indented (nodent) then it should behave like it is a child.
// If there is a line of unbuffered code and it is followed by an indented line and without a dash, then it should behave as a child.