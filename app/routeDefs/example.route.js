(function() {
  return {
    method: 'GET',
    route: '/path/:idEntity',
    description: '',
    policies: [],
    headers: [],
    routeParams: [
      {
        path: 'idEntity',
        description: '',
        required: true,
        type: 'uuidv4',
        examples: [ '00000000-0000-0000-0000-000000000000' ]
      }
    ],
    query: [
      {
        path: 'user',
        description: '',
        required: true,
        type: 'string'
      }
    ],
    bodyModel: {}, // used for swagger documentation only
    controller: 'example',
    functionName: 'test'
  }
})();
