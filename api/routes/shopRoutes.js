const express = require("express");

const upload = require("../utils/multer");
const {createShop ,loginShop , getShopInfo} = require("../controllers/shopController")
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post("/create-shop", upload.single("file"), createShop);
router.get("/get-shop-info/:id" , getShopInfo)
router.post("/login-shop",  loginShop);




module.exports = router;
