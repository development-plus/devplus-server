// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options) => {
  var out = [];
  if (options.result) console.log(options.id);
  for (a in options.result.data) {
  }
};
