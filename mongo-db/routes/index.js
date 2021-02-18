const User = require("../schemas/user");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    console.log(users);
    res.render("mongoose", { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
