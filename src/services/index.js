const users = require('./users/users.service.js');
const posts = require('./posts/posts.service.js');
const test = require('./test/test.service.js');
const follow = require('./follow/follow.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(posts);
  app.configure(test);
  app.configure(follow);
};
