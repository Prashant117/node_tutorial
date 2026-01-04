const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer(function (req, res) {
  const method = req.method;
  const path = req.url;

  const log = `\n[${Date(Date.now()).toLocaleString()}]: ${method} - ${path}`;
  fs.appendFileSync("log.txt", log, "utf-8");

  switch (method) {
    case "GET":
      switch (path) {
        case "/":
          return res
            .writeHead(200)
            .end("Hello from server running on PORT 8000 👋🏻");

        case "/contact-us":
          return res
            .writeHead(200)
            .end(
              "you can email me at 'prashantpriyadarshi@gmail.com' or contact me at '8123626262'"
            );
        case "/tweet":
          return res.writeHead(200).end("Tweet-1\nTweet-2");

        default:
          res.writeHead(404);
          res.end("You are lost");
      }
      break;

    case "POST":
      switch (path) {
        case "/tweet":
          return res.writeHead(201).end("your tweet was created");
      }
  }
  return res.writeHead(404).end("You are lost !!!");
});

server.listen(8000, () => console.log("Server listening on PORT 8000"));
