const express = require("express");
const { port, env } = require("./config").server;
const applyMiddleware = require("./middleware");

class Server {
  constructor() {
    // Initialize application
    this.app = express();
    applyMiddleware(this.app);
  }
  start() {
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
