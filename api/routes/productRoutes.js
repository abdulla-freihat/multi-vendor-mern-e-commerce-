const express = require("express");
const upload = require("../utils/multer");
const {createProduct , getAllProductsShop , deleteProductsShop ,getAllProducts } = require("../controllers/productController");
const verifyToken = require('../utils/verifyToken');




const router = express.Router();

//create seller dashboard shop products route
router.post('/create-product'  , verifyToken, upload.array("images"),createProduct)
//get all seller dashboard shop products
router.get('/all-products/:id' , getAllProductsShop )
//delete seller dashboard shop products
router.delete('/delete-products/:id' , verifyToken,deleteProductsShop)


//get all products route

router.get('/all-products' , getAllProducts)

module.exports = router;
