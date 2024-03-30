const mongoose = require('mongoose');
const validator = require("validator");



const Schema  = mongoose.Schema;


const userSchema = new Schema({
 
       username:{          
type:String,
required: [true, "Please enter your Name"],
minlength: [5, "Please enter a name at least 5 characters"],
maxlength: [15, "Name can not  be greater than 15 characters"],    

},

email :{

       type:String,
     required: [true, "Please enter your email"],
    validate: [validator.isEmail, "Please enter a valid email"],
    unique: true,
},


password:{

      type:String,
      required: [true, "Please enter your password!"],
   
      select: false,
},

phoneNumber:{

type:String
},
addresses:[
      {
        country: {
          type: String,
        },
        city:{
          type: String,
        },
        address1:{
          type: String,
        },
        address2:{
          type: String,
        },
        zipCode:{
          type: Number,
        },
        addressType:{
          type: String,
        },
      }
    ],

avatar:{

      type:String,

}



     
} ,  {timestamps : true})


module.exports = mongoose.model('User' , userSchema);
