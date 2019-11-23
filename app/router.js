const { clientID, apiKey } = require("./config").calendar;

module.exports = app => {
  app.get("/", (_, res) =>
    res.render("main", { file: "main", clientID, apiKey })
  );
};
