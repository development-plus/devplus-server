const { authenticate } = require("@feathersjs/authentication").hooks;

module.exports = {
  before: {
    all: [],
    find: [
      authenticate("jwt"),
      async (context) => {
        const followers = context.params.user.followers; // f
        context.params.query.userId = { $in: followers };
        context.params.query["$sort"] = { createdAt: -1 };
        return context;
      },
    ],
    get: [authenticate("jwt")],
    create: [
      authenticate("jwt"),
      async (context) => {
        context.data.userId = context.params.user._id;
        return context;
      },
    ],
    update: [authenticate("jwt")],
    patch: [authenticate("jwt")],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [],
    find: [],
    get: [
      (context, userService) => {
        theAlgorithm(context);
      },
    ],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
