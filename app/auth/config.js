const User = require("../models/user.model");
const { OAuth2Strategy } = require("passport-google-oauth");

const {
  server: { port },
  oauth: { clientID, secret: clientSecret }
} = require("../config");

const strategy = new OAuth2Strategy(
  { clientID, clientSecret, callbackURL: `http://localhost:${port}/redirect` },
  async (token, refreshToken, profile, done) => {
    // FIXME: Store the refresh token
    const user = await User.findOne({ where: { clientID: profile.id } });
    if (!user) return done("User not found.", false);
    return done(null, user);
  }
);

async function deserialize(id, done) {
  const user = User.findOne({ where: id });
  if (!user) return done("User not found", false);
  return done(null, user);
}

module.exports = passport => {
  passport.use("google", strategy);
  passport.serializeUser(({ id }, done) => done(null, id));
  passport.deserializeUser(({ id }, done) => deserialize(id, done));
};
