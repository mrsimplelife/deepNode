const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const cookeiParser = require("cookie-parser");
const session = require("express-session");
const fs = require("fs");
const uploadRouter = require("./router/upload");
const aboutRouter = require("./router/about");
const indexRouter = require("./router/index");
const categoryRouter = require("./router/category");
// console.log(process.env);
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

try {
  fs.readdirSync(path.join(__dirname, "uploads"));
} catch (error) {
  console.error("make uploads folder");
  fs.mkdirSync(path.join(__dirname, "uploads"));
}

app.use(morgan("dev"));
app.use(cookeiParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SCRET,
    cookie: {},
    name: "merong",
  })
);
// console.log(__dirname);
app.use("/", (req, res, next) => {
  console.log(req.session.id);
  if (req.session.userId) {
    express.static(path.join(__dirname, "public_secret"))(req, res, next);
  } else {
    next();
  }
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("all req");
  req.test = "test";
  next();
});

app.use("/", indexRouter);
app.use("/upload", uploadRouter);
app.use("/about", aboutRouter);
app.use("/category", categoryRouter);

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
