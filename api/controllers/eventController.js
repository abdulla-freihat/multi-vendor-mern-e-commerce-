const errorHandler = require("../utils/errorHandler");
const shopSchema = require("../models/shopSchema");

const eventSchema = require("../models/eventSchema");



// create avent route
const createEvent = async (req, res, next) => {
  try {




    const shopId = req.body.shopId;

    const shop = await shopSchema.findById(shopId);

    if (!shop) {
      throw new errorHandler("shop id is invalid!", 400);
    } else {
      const files = req.files;
      const imageUrls = files.map((file) => `${file.filename}`);

      const eventData = req.body;
      eventData.images = imageUrls;
      eventData.shop = shop;

      const event = await eventSchema.create(eventData);

      return res.status(201).json({
        success: true,
        message: "event added successfully",
        event,
      });
    }
  } catch(err) {
    return next(err);
  }
};




//gat all events shop 


const getAllEventsShop = async (req, res ,next)=>{
try{


  const events  = await eventSchema.find({shopId:req.params.id});

  return res.status(201).json({ success: true, events });


}catch(err){

   return next(err);
}
   

}



//delete seller shop events
const deleteEventsShop = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const event = await productSchema.findByIdAndDelete(eventId);

    if(!event){
        throw new errorHandler("Event not found", 400);

    }

    return res.status(201).json({ success: true,  message: "event deleted successfully", event });
  } catch (err) {
    return next(err);
  }
};


module.exports = {
  createEvent,
  getAllEventsShop ,
  deleteEventsShop
};
