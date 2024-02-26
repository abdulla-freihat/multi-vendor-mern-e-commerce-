const express = require("express");
const { signup , signin } = require("../controllers/authController");
const upload = require("../utils/multer");

const router = express.Router();

router.post("/signup", upload.single("file"), signup);
router.post("/signin" , signin );

module.exports = router;
