const { OAuth2Strategy } = require("passport-google-oauth");
const { register, lookup } = require("../controller");

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
    const user = await lookup(data.clientID);
    if (!user) {
      // Register a new user
      return done(null, await register(data.email, data.clientID));
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
