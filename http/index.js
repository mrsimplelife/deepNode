const http = require("http");

const server = http
  .createServer((req, res) => {
    res.write("<h1>Hello</h1>");
    res.write("<p>Hello</p>");
    res.end("<p>Hello</p>");
  })
  .listen(8080);
server.on("listening", () => {
  console.log("http://localhost:8080");
});
server.on("error", (err) => {
  throw err;
});
