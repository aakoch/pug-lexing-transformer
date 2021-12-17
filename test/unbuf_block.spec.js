import { tap, testString } from './fixture.js'

tap.test('unbuffered code with tag', test => {
  testString(`
-
  var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]
each item in list
  li= item
  `, [], test)
})