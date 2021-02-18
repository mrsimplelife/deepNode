const { User, Comment } = require("../../models");
const router = require("express").Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const user = await User.create({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married,
      });
      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
router.get("/:id/comments", async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      include: {
        model: User,
        where: { id: req.params.id },
      },
    });
    // const user = await User.findOne({
    //   where: {
    //     id: req.params.id,
    //   },
    // });
    // console.log(user.toJSON());
    // console.log(User.prototype);
    // console.log(Comment.prototype);
    // const comments = await user.getComments();
    console.log(comments);
    res.send(comments);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
