const { User } = require("../../models");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    console.log(users);
    res.render("sequelize", { users });
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
