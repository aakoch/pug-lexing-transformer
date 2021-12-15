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