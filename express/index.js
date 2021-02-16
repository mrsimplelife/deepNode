const express = require("express");
const path = require("path");
const app = express();
app.set("port", process.env.PORT || 3000);
app.use((req, res, next) => {
  console.log("all req");
  next();
});
app.use(
  "/about",
  (req, res, next) => {
    console.log("only about req");
    next();
  },
  (req, res, next) => {
    console.log("one more");
    next();
  },
  (req, res, next) => {
    throw new Error("error!!!");
  }
);
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
// app.get("*", (req, res) => {
//   res.send("all!");
// });
// const a = (a1) => {};
// const b = (a1, a2) => {};
// console.log(a.length, b.length);

app.use((req, res) => {
  res.status(404).send("404");
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("error!!!");
});
app.listen(app.get("port"), () => {
  console.log(`http://localhost:${process.env.PORT || 3000}`);
});
