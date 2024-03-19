const express = require("express");
const upload = require("../utils/multer");
const {createProduct , getAllProducts } = require("../controllers/productController")



const router = express.Router();

router.post('/create-product'  , upload.array("images"),createProduct)
router.get('/all-products/:id' , getAllProducts )


module.exports = router;
