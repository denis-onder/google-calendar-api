const { OAuth2Strategy } = require("passport-google-oauth");
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
      const newUser = await User.create({
        email: data.email,
        clientID: data.clientID
      });
      return done(null, newUser);
    }
    // Return the user
    return done(null, user);
  }
);

module.exports = passport => {
  passport.use("google", strategy);
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));
};
