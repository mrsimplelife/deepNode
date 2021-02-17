const router = require("express").Router();
router.use(
  "/",
  (req, res, next) => {
    console.log("only about req");
    next();
  },
  (req, res, next) => {
    console.log("one more");
    next();
  },
  (req, res, next) => {
    try {
      throw new Error("error!!!");
    } catch (error) {
      next(error);
    }
  }
);
router.get("/", (req, res) => {
  res.send("about");
});
module.exports = router;
