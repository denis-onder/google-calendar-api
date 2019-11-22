const { clientID, apiKey } = require("./config").oauth;

module.exports = app => {
  app.get("/", (_, res) =>
    res.render("main", { file: "main", clientID, apiKey })
  );
};
