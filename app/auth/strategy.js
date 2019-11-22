/** Use the GoogleStrategy within Passport.
 *  Strategies in passport require a `verify` function, which accept
 *  credentials (in this case, a token, tokenSecret, and Google profile), and
 *  invoke a callback with a user object.
 */
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user.model");
const {
  server: { port },
  oauth: { clientID, secret }
} = require("../config");

const config = {
  consumerKey: clientID,
  consumerSecret: secret,
  callbackURL: `http://localhost:${port}/redirect`
};

module.exports = () => {
  return new GoogleStrategy(
    ...config,
    async (token, refreshToken, profile, done) => {
      // FIXME: Store the refresh token
      const user = await User.findOne({ where: { clientID: profile.id } });
      if (!user) return done("User not found.", false);
      return done(null, user);
    }
  );
};
