const router = require("express").Router();
const path = require("path");
router.get(
  "/",
  (req, res, next) => {
    console.log(req.test);
    req.session.name = "hihi";
    console.log(req.session);
    console.log(req.sessionID);
    req.session.destroy();
    // res.send("hi");
    console.log("cookie", req.cookies);
    console.log("signedCookie", req.signedCookies);
    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + 5);
    res.cookie("name", encodeURIComponent("me"), {
      expires: expires,
      httpOnly: true,
      path: "/",
      signed: true,
    });
    res.clearCookie("name");
    res.sendFile(path.join(__dirname, "..", "index.html"));
    if (true) {
      next("route");
    } else {
      next();
    }
  },
  (req, res) => {
    console.log("no");
  }
);
router.get("/", (req, res) => {
  // res.send("hi");
  console.log("yes");
});
router.post("/", (req, res) => {
  res.send("hi post");
});
module.exports = router;
