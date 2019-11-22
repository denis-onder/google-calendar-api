const handlebars = require("express-handlebars");
const { join } = require("path");

module.exports = app => {
  app.engine(
    "hbs",
    handlebars({
      extname: "hbs",
      defaultLayout: "default",
      layoutsDir: join(__dirname, "../views/layouts")
    })
  );
  app.set("view engine", "hbs");
  app.set("views", join(__dirname, "../views"));
};
