const User = require("../models/user.model.js");
const strategy = require("./strategy");

async function deserialize(id, done) {
  const user = User.findOne({ where: id });
  if (!user) return done("User not found", false);
  return done(null, user);
}

module.exports = passport => {
  passport.serializeUser(({ id }, done) => done(null, id));
  passport.deserializeUser(({ id }, done) => deserialize(id, done));
  passport.use("google", strategy);
};
