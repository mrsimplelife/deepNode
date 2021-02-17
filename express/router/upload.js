const router = require("express").Router();
const path = require("path");
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.join(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      const ext = path.extname(file.originalname);
      callback(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "multipart.html"));
});
router.post(
  "/",
  //  upload.single("image"),
  // upload.array("image"),
  // upload.fields([{ name: "image1" }, { name: "image2" }, { name: "image3" }]),
  upload.none(),
  (req, res) => {
    // console.log(req.file);
    // console.log(req.files);
    console.log(req.body.title);
    res.send("ok");
  }
);
module.exports = router;
