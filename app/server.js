const express = require("express");
const { port, env } = require("./config").server;
const applyMiddleware = require("./middleware");
const database = require("./db");
const router = require("./router");

class Server {
  constructor() {
    // Initialize application
    this.app = express();
    // Apply middleware
    applyMiddleware(this.app);
    // Initialize router
    router(this.app);
  }
  connectToDatabase() {
    database
      .authenticate()
      .then(() => console.log("Connected to the database!"))
      .catch(this.stop);
    database.sync({ logging: false });
  }
  start() {
    this.connectToDatabase();
    this.app.listen(port, err =>
      err
        ? this.stop(err)
        : console.log(
            `Server running!\nAddress: http://localhost:${port}\nEnvironment: ${env}`
          )
    );
  }
  stop(err = false) {
    console.log(err ? err : "Server shutting down...");
    process.exit(err ? 1 : 0);
  }
}

module.exports = new Server();
