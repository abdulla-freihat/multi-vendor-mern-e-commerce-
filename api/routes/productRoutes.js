const express = require("express");
const upload = require("../utils/multer");
const {createProduct , getAllProductsShop , deleteProductsShop } = require("../controllers/productController");
const verifyToken = require('../utils/verifyToken');




const router = express.Router();

//create seller dashboard shop products route
router.post('/create-product'  , verifyToken, upload.array("images"),createProduct)
//get all seller dashboard shop products
router.get('/all-products/:id' , getAllProductsShop )
//delte seller dashboard shop products
router.delete('/delete-products/:id' , verifyToken,deleteProductsShop)


module.exports = router;
