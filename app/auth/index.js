const passport = require("passport");
const config = require("./config");

module.exports = app => {
  config(passport);
  app.use(passport.initialize());
  app.use(passport.session());
};
