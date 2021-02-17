const router = require("express").Router();
router.get("/:name", (req, res) => {
  res.send(`${req.params.name}`);
});
router.get("/java", (req, res) => {
  res.send(`java hoho`);
});
module.exports = router;
