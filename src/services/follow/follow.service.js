// Initializes the `follow` service on path `/follow`
const { Follow } = require("./follow.class");
const createModel = require("../../models/follow.model");
const hooks = require("./follow.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/follow", new Follow(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("follow");

  service.hooks(hooks);
};
