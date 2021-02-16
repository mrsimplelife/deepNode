const express = require("express");
const path = require("path");
const app = express();
app.set("port", process.env.PORT || 3000);
app.use((req, res, next) => {
  console.log("all req");
  next();
});
app.get("/", (req, res) => {
  // res.send("hi");
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/", (req, res) => {
  res.send("hi post");
});
app.get("/category/:name", (req, res) => {
  res.send(`${req.params.name}`);
});
app.get("/category/java", (req, res) => {
  res.send(`java hoho`);
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.get("*", (req, res) => {
  res.send("all!");
});
app.listen(app.get("port"), () => {
  console.log(`http://localhost:${process.env.PORT || 3000}`);
});
