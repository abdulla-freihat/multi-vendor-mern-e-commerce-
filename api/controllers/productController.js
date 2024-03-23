const productSchema = require("../models/productSchema");

const shopSchema = require("../models/shopSchema");
const errorHandler = require("../utils/errorHandler");
const fs =require('fs');

//create product
const createProduct = async (req, res, next) => {
  try {




    const shopId = req.body.shopId;
    const shop = await shopSchema.findById(shopId);

    if (!shop) {
      throw new errorHandler("shop id is invalid!", 400);
    } else {
      const files = req.files;
      const imageUrls = files.map((file) => `${file.filename}`);
      const productData = req.body;
      productData.images = imageUrls;
      productData.shop = shop;

      const product = await productSchema.create(productData);

      return res
        .status(201)
        .json({
          success: true,
          message: "product added successfully",
          product,
        });
    }
  } catch (err) {
    return next(err);
  }
};

// get all products of the shop
const getAllProductsShop = async (req, res, next) => {
  try {
    const products = await productSchema.find({ shopId: req.params.id });

    return res.status(201).json({ success: true, products });
  } catch (err) {
    return next(err);
  }
};

//delete seller shop products
const deleteProductsShop = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const productData = await productSchema.findById(productId);

    productData.images.forEach((imageUrl)=>{

       const filename = imageUrl;
       const filePath = `uploads/${filename}`;

       fs.unlink(filePath , (err)=>{

         if(err){

           console.log(err)
         }
       })
    })


    const product = await productSchema.findByIdAndDelete(productId);


    if(!product){
        throw new errorHandler("Product not found", 400);

    }

    return res.status(201).json({ success: true,  message: "product delted successfully", product });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  createProduct,
  getAllProductsShop,
  deleteProductsShop,
};
