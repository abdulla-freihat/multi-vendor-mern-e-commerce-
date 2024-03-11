const express = require("express");

const upload = require("../utils/multer");
const {createShop ,loginShop} = require("../controllers/shopController")
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post("/create-shop", upload.single("file"), createShop);
router.post("/login-shop",  loginShop);



module.exports = router;
