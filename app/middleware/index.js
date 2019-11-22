const helmet = require("helmet");
const logger = require("./logger");

module.exports = app => {
  app.use(helmet());
  logger(app);
};
