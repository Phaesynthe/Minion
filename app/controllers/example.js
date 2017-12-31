'use strict'

const example = {
  test: async function test (session, routeParams, queryParams, body) {
    return new Promise((resolve, reject) => {
      console.log('controller hit')
      resolve({})
    })
  }
}

module.exports = example
