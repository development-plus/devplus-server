// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options) => {
  let result = {
    name: "MethodNotAllowed",
    message: "method not allowed",
    code: 405,
    className: "method-not-allowed",
    errors: {},
  };
  return result;
};
