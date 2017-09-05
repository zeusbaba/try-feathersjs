module.exports = function (options = {}) {
  return function customheaders(req, res, next) {
    console.log('customheaders middleware is running');
    next();
  };
};
