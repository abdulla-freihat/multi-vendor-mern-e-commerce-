const express = require("express");
const { signup , signin , checkToken } = require("../controllers/authController");
const upload = require("../utils/multer");

const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post("/signup", upload.single("file"), signup);
router.post("/signin" , signin );
router.get('/check-token'  , verifyToken ,  checkToken)

module.exports = router;
