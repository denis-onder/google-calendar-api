// Load environmental variables
require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORT || 8000,
    env: process.env.NODE_ENV || "development"
  },
  calendar: {
    clientID: process.env.CALENDAR_CLIENT_ID,
    apiKey: process.env.CALENDAR_API_KEY
  }
};
