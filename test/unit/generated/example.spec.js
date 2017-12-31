/* global after, before, describe, it */
'use strict'
/**
 * This file was generated 2017-12-16T17:35:04.303Z by Plinth 0.1.1.
 **/

const chai = require('chai')
const supertest = require('supertest')
const sinon = require('sinon')

const Plinth = require('@phaesynthe/plinth')

const config = Plinth.config.get('host')
const expect = chai.expect

const URI_BASE = `http://localhost:${config.port}`
const st_request = supertest(URI_BASE)

const controllerModule = require('../../../app/controllers/example')

require('../common')

describe('GET /path/:idEntity', () => {

  it('accepts valid requests and routes to the controller', (done) => {
    sinon.stub(controllerModule, 'test')
      .callsFake((session, routeParams, queryParams, body) => {
        return new Promise((resolve, reject) => {

        })
      })

    after(() => {
      controllerModule.test.restore()
    })

    st_request.get('/path/:idEntity')
      .expect(200)
      .end((err, resp) => {
        expect(true).to.equal(true)
        sinon.assert.calledOnce(controllerModule.test)
        done()
      })
  })


})
