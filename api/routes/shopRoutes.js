const express = require("express");

const upload = require("../utils/multer");
const {createShop} = require("../controllers/shopController")
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post("/create-shop", upload.single("file"), createShop);


module.exports = router;
