const express = require("express");
const { server } = require("./config");
const applyMiddleware = require("./middleware");

class Server {
  constructor() {
    // Initialize application
    this.app = express();
    applyMiddleware(this.app);
  }
  start() {
    this.app.listen(server.port, err =>
      err
        ? this.stop(err)
        : console.log(
            `Server running!\nAddress: http://localhost:${server.port}\nEnvironment: ${server.env}`
          )
    );
  }
  stop(err = false) {
    console.log(err ? err : "Server shutting down...");
    process.exit(err ? 1 : 0);
  }
}

module.exports = new Server();
