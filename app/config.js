// Load environmental variables
require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || "development"
  },
  oauth: {
    clientID: process.env.OAUTH_CLIENT_ID,
    apiKey: process.env.OAUTH_API_KEY
  }
};
