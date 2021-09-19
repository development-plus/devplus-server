const { authenticate } = require("@feathersjs/authentication").hooks;
const theAlgorithm = require("../../hooks/the-algorithm");
module.exports = {
  before: {
    all: [],
    find: [],
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
      (context) => {
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
