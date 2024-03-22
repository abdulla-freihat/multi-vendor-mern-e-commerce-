const express = require("express");
const upload = require("../utils/multer");
const {createEvent , getAllEventsShop ,  deleteEventsShop} = require("../controllers/eventController")

const verifyToken = require('../utils/verifyToken');




const router = express.Router();


//create event shop route
router.post('/create-event' , verifyToken ,  upload.array("images") , createEvent);

//get all seller dashboard shop events
router.get('/all-events/:id' ,  getAllEventsShop);

//delete seller dashboard shop events

router.delete('/delete-events/:id' , verifyToken , deleteEventsShop);


module.exports = router;
