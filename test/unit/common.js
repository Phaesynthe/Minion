/* global module */
'use strict'

const Plinth = require('@phaesynthe/plinth')

console.log(Plinth.config.get('host'))

require('../../app/minion')

module.exports = (function common_unit_test () {

  // Before any tests
  before(() => {
    console.log('setup')
  })

  // After all tests are finished
  after(() => {
    Plinth.stop()
  })

  return {

  }
})()
