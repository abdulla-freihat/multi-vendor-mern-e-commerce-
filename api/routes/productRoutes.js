const express = require("express");
const upload = require("../utils/multer");
const {createProduct} = require("../controllers/productController")



const router = express.Router();

router.post('/create-product'  , upload.array("images"),createProduct)


module.exports = router;
