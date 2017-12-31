'use strict'
/**
 * This file was generated 2017-12-16T17:35:04.301Z by Plinth 0.1.1.
 **/

const Plinth = require('@phaesynthe/plinth')

const controller = require('/Users/matthew/workspace/Minion/app/controllers/example').test

module.exports = {

  method: 'GET',
  uri: '/path/:idEntity',
  
  /**
   * `/path/:idEntity`
   * Generated Route Handler function.
   * @param {Object} req Express request object.
   * @param {Object} res Express response object.
   **/
  handler: async function handler (req, res) {
    const session = req.session
    const routeParamsModel = [
{ type:"uuidv4",  path:"idEntity",
  pattern:undefined,
  required:true }
    ]

    const queryModel = [
{ type:"string",  path:"user",
  pattern:undefined,
  required:true }
    ]


    let accumulatedErrors = []
    let body
    let queryParams
    let routeParams

    try {
      routeParams = Plinth.validator.parameters(routeParamsModel, req.params, accumulatedErrors)
    } catch (err) {
      accumulatedErrors = accumulatedErrors.concat(err.failures)
    }

    try {
      queryParams = Plinth.validator.parameters(queryModel, req.query, accumulatedErrors)
    } catch (err) {
      accumulatedErrors = accumulatedErrors.concat(err.failures)
    }

    // capture all failed validations
    if (accumulatedErrors.length > 0) {
      // ToDo: Log the errors some how
      return res.status(400).send({
        ok: false,
        errors: accumulatedErrors
      })
    }

    let response
    try {
     response = await controller(session, routeParams, queryParams, body)
    } catch (err) {
      console.log(err)
      return res.status(500).send() // ToDo: add response objects
    }

    return res.status(200).send({
      ok: true,
      data: response
    })
  }

}
