const express = require("express");
const upload = require("../utils/multer");
const {createEvent , getAllEventsShop} = require("../controllers/eventController")

const verifyToken = require('../utils/verifyToken');




const router = express.Router();

router.post('/create-event' , verifyToken ,  upload.array("images") , createEvent);
router.get('/all-events/:id' ,  getAllEventsShop);


module.exports = router;
