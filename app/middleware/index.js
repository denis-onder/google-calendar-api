const { json, urlencoded } = require("body-parser");
const helmet = require("helmet");

module.exports = app => {
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(helmet());
};
