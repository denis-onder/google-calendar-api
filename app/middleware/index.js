const { env, secret } = require("../config");
const { json, urlencoded } = require("body-parser");
const helmet = require("helmet");
const session = require("express-session");
const logger = require("./logger");

const sessionConfig = {
  secret,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 3600 }
};

if (env !== "development") sessionConfig.cookie.secure = true;

module.exports = app => {
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(helmet());
  app.use(session(sessionConfig));
  logger(app);
};
