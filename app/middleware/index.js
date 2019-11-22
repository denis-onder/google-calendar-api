const { env, secret } = require("../config").server;
const { json, urlencoded } = require("body-parser");
const helmet = require("helmet");
const session = require("express-session");
const logger = require("./logger");
const passport = require("../auth");

const sessionConfig = {
  secret,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 3600 },
  secure: env === "development" ? false : true
};

module.exports = app => {
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(helmet());
  app.use(session(sessionConfig));
  logger(app);
  passport(app);
};
