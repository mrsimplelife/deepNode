const express = require("express");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");

const { sequelize } = require("../models");
// const indexRouter = require();
// const usersRouter = require();
// const commentsRouter = require();

const app = express();
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");
nunjucks.configure({
  express: app,
  watch: true,
});
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("success DB connect");
  })
  .catch((err) => {
    console.error(err);
  });
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/", indexRouter);
// app.use("/", usersRouter);
// app.use("/", commentsRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} has no Router`);
  error.status = 404;
  next(error);
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
});
