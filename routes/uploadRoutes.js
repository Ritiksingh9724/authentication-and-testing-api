const express = require("express");
const router = express.Router();
const multer = require("multer");
const uploadController = require("../controllers/uploadController");

// STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// MULTER
const upload = multer({ storage });

// ROUTE
router.post("/upload", upload.single("image"), uploadController.uploadImage);

module.exports = router;