// Load environmental variables
require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || "development"
  }
};
