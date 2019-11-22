const passport = require("passport");
const config = require("./config");

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());
  config(passport);
};
