const { OAuth2Strategy } = require("passport-google-oauth");
const { register } = require("../controller");
const User = require("../models/user.model");

const {
  server: { port },
  oauth: { clientID, secret: clientSecret }
} = require("../config");

const strategy = new OAuth2Strategy(
  { clientID, clientSecret, callbackURL: `http://localhost:${port}/redirect` },
  async (token, refreshToken, profile, done) => {
    // FIXME: Store the refresh token
    const data = {
      clientID: profile.id,
      email: profile.emails[0].value
    };
    const user = await User.findOne({ where: { clientID: data.clientID } });
    if (!user) {
      // Register a new user
      const newUser = await register(data.email, clientID);
      return done(null, newUser);
    }
    // Return the user
    return done(null, user);
  }
);

module.exports = passport => {
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
  passport.use("google", strategy);
};
