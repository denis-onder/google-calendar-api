const Sequelize = require("sequelize");
const { resolve } = require("path");
const { readFileSync } = require("fs");
const {
  database: { name, port, username, password, host, dialect },
  server: { env }
} = require("../config");

const config = {
  host,
  port,
  dialect,
  logging: false
};

if (env === "production")
  config.dialectOptions = {
    ssl: true,
    ca: readFileSync(resolve(__dirname, "../../keys", "certificate.crt"))
  };

module.exports = new Sequelize(name, username, password, config);
