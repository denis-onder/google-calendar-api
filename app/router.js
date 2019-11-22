const { clientID, apiKey } = require("./config").oauth;

module.exports = app => {
  app.get("/", (_, res) => res.render("main", { clientID, apiKey }));
};
