const jwt = require('jsonwebtoken');

const sellerSchema = require('../models/shopSchema');


const verifyToken = async(req , res  , next)=>{

    //verify authentication
    const {authorization} = req.headers;

    if(!authorization){

        return  res.status(401).json({error : 'Authorize token is required'});
    }

    const token = authorization.split(' ')[1];


    try{

        const {_id} = jwt.verify(token , process.env.JWT_SECRET);


         req.seller = await sellerSchema.findOne({_id}).select('_id');

         next();
         
        

    }catch(error){


        console.log(error);
        res.status(401).json({error : 'Request is not authorized'});
         
    }

}


module.exports = verifyToken;