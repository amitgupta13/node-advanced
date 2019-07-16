process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");

// Is the file being executed in master mode
if (cluster.isMaster) {
  // Cause Index.js to be executed again but in slave mode
  cluster.fork();
  cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
} else {
  //I am a child I am going to act as a server and nothing else
  const express = require("express");
  const crypto = require("crypto");
  const app = express();

  // function doWork(duration) {
  //   const start = Date.now();
  //   while (Date.now() - start < duration) {}
  // }

  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("Hi There");
    });
    // doWork(5000);
  });

  app.get("/fast", (req, res) => {
    res.send("This was fast");
  });

  app.listen(3000, () => {
    console.log("Listening on post 3000");
  });
}
