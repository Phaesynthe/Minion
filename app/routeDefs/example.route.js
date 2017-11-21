(function() {
  return {
    route: '/path/:idEntity',
    params: [
      { variable: 'idEntity', location: 'path', description: '' },
      { variable: 'idEntity', location: 'url' },
      { variable: 'idEntity', location: 'header' },
      { variable: 'idEntity', location: 'body' }
    ]
  }
})();
