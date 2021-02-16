const express = require("express");

const app = express();
app.set("port", process.env.PORT || 3000);
app.get("/", (req, res) => {
  res.send("hi");
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
