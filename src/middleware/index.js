const customheaders = require('./customheaders');
module.exports = function () {
  // Add your custom middleware here. Remember, that
  // in Express the order matters
  const app = this; // eslint-disable-line no-unused-vars
  app.use(customheaders());
};
