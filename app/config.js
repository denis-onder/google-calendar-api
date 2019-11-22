// Load environmental variables
require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || "development",
    secret: process.env.SECRET || "secret"
  },
  database: {
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST
  },
  oauth: {
    clientID: process.env.OAUTH_CLIENT_ID,
    secret: process.env.OAUTH_CLIENT_SECRET
  }
};
