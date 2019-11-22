const { STRING } = require("sequelize");
const uuid = require("uuid/v4");
const database = require("../db");

const User = database.define("User", {
  email: {
    type: STRING,
    unique: true
  },
  clientID: {
    type: STRING,
    unique: true,
    defaultValue: uuid()
  }
});

module.exports = User;
