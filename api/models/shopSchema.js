const mongoose = require('mongoose');
const validator = require("validator");



const Schema  = mongoose.Schema;


const shopSchema = new Schema({
 
      name:{          
type:String,
required: [true, "Please enter your shop Name"],

},

phoneNumber:{
     type:Number,
     required:true   
},

email :{

       type:String,
     required: [true, "Please enter your shop email address"],
    validate: [validator.isEmail, "Please enter a valid email"],
    unique: true,
},


password:{

      type:String,
      required: [true, "Please enter your password!"],
   
      select: false,
},

address:{

    type:String,
    required:true,

},


avatar:{

      type:String,
      required:true

},
zipCode:{
     type:Number,
     required:true
},

description:{

     type:String
}




     
} ,  {timestamps : true})


module.exports = mongoose.model('Shop' , shopSchema);
