import tap from 'tap'
import fs from 'fs'
import { testSnapshot } from './fixture.js'
import { exists, parseArguments, simpleProjectRootDir } from '@aakoch/utils'

tap.test('test directory', test => {
  const files = fs.readdirSync(simpleProjectRootDir() + '/test/pug/', {encoding: 'utf-8'}).filter(val => val.endsWith('.pug'))
  // debug('files=', files)
  files.forEach(file => {
    test.test('testing file=' + file, test2 => {
      testSnapshot(simpleProjectRootDir() + '/test/pug/' + file, test2)
    })
  })
  test.end()
})