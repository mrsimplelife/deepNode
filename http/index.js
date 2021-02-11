const http = require("http");
const fs = require("fs").promises;
const server = http
  .createServer(async (req, res) => {
    try {
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });
      const data = await fs.readFile("./index.html");
      res.end(data);
    } catch (error) {
      res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      res.end(error.message);
    }

    // res.write("<h1>Hello</h1>");
    // res.write("<p>Hello</p>");
    // res.end("<p>Hello</p>");
  })
  .listen(8080);
server.on("listening", () => {
  console.log("http://localhost:8080");
});
server.on("error", (err) => {
  throw err;
});
