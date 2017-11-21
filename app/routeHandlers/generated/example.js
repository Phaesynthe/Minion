
/**
 * This file was generated 2017-11-21T01:18:21.085Z by Plinth v0.0.0.
 *
 **/

module.exports = {

  /**
   * `/path/:idEntity`
   * Generated Route Handler function.
   * @param {Object} req Express request object.
   * @param {Object} res Express response object.
   **/
  handler: (req, res) => {
    const params = [
      'hit',
      'hit',
      'hit',
      'hit'
    ];

    if (params === false) {
      return res.status(422).send();
    }


    return res.status(200).send();
  }

};
