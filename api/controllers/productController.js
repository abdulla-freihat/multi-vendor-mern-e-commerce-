const productSchema = require('../models/productSchema');

const shopSchema = require("../models/shopSchema");
const errorHandler = require("../utils/errorHandler");




//create product 
const createProduct = async (req, res , next)=>{

     try{

        const shopId = req.body.shopId;
        const shop = await shopSchema.findById(shopId);

        if(!shop){

            throw new errorHandler("shop id is invalid!", 400);

        }else{

             const files = req.files;
             const imageUrls = files.map((file)=> `${file.filename}`);
             const productData = req.body;
             productData.images = imageUrls;
             productData.shop = shop;

             const product = await productSchema.create(productData)

             return res
             .status(201)
             .json({ success: true, message: "product added successfully" , product });
        }


     }catch(err){

         return next(err)
     }
}


module.exports={
       createProduct
}












