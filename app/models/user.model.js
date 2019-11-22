const { STRING } = require("sequelize");
const database = require("../db");

const User = database.define("User", {
  email: {
    type: STRING,
    unique: true
  },
  clientID: {
    type: STRING,
    unique: true
  }
});

module.exports = User;
