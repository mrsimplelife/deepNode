const express = require("express");
const path = require("path");
const app = express();
app.set("port", process.env.PORT || 3000);
app.get("/", (req, res) => {
  // res.send("hi");
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/", (req, res) => {
  res.send("hi post");
});
app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(app.get("port"), () => {
  console.log(`http://localhost:${process.env.PORT || 3000}`);
});
