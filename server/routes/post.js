const express = require("express");
const multer = require("multer");

const postController = require("../controllers/postController");
const uploadImage = require("../middlewares/multer");
const { hasDescription } = require("../validations/validators");
const router = express.Router();

const DIR = "./client/uploads/";

router.get("/", postController.index);

router.get("/:id", postController.show);

router.post("/add", postController.store);

router.patch("/:id", hasDescription, postController.update);
router.delete("/:id", postController.delete);

// ---------File up load--------
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("Incorrect file");
    error.code = "INCORRECT_FILETYPE";
    return cb(error, false);
  }
  cb(null, true);
};

const upload = multer({
  dest: "./uploads",
  fileFilter,
  storage: storageConfig,
  limits: {
    fileSize: 5000000,
  },
});

router.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file.path });
});

// router.post("/upload-images", upload.single('image'), postController.uploadImage);

module.exports = router;

// uploadImage('posts').single("image"),
