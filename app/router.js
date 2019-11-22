const { clientID, apiKey } = require("./config").oauth;

module.exports = app => {
  // Render routes
  app.get("/", (req, res) => res.render("main", { clientID, apiKey }));
};
