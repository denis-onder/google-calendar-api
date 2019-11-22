const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      session: false,
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
      ]
    })
  );
  app.get(
    "/redirect",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => res.json({ loggedIn: true })
  );
};
