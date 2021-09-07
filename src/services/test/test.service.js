// Initializes the `test` service on path `/test`
const { Test } = require('./test.class');
const createModel = require('../../models/test.model');
const hooks = require('./test.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/test', new Test(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('test');

  service.hooks(hooks);
};
