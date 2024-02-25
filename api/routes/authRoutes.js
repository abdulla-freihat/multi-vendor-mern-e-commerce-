const express = require("express");
const { signup } = require("../controllers/authController");
const upload = require("../utils/multer");

const router = express.Router();

router.post("/signup", upload.single("file"), signup);

module.exports = router;
