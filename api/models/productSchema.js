const mongoose = require('mongoose');



const Schema  = mongoose.Schema;


const productSchema = new Schema({
 
      name:{          
type:String,
required: [true, "Please enter your product name"],

},

description:{
    type:String,
    required: [true, "Please enter your product description"]
     
},
category:{

     type:String,
     required:[true, "Please enter your product category"]
},
tags:{
     type:String,
     
},

originalPrice:{
      type:Number,
  

},

discountPrice:{
    type:Number,
    required:[true, "Please enter your product price with discount"]



},
stock:{
     type:Number,
     required:[true, "Please enter your product stock"]
},

images:{
      type:Array,
      required:true
},

shopId:{
       type:String,
     required:true
},
shop:{
     type:Object,
     required:true
},
sold_out:{

    type:Number,
    default:0 
}
     
} ,  {timestamps : true})


module.exports = mongoose.model('Product' , productSchema);
