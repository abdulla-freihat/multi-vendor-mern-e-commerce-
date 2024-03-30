const express = require("express");
const { signup , signin , updateUser } = require("../controllers/authController");
const upload = require("../utils/multer");
const verifyUserToken = require('../utils/verifyUserToken');



const router = express.Router();

router.post("/signup", upload.single("file"), signup);
router.post("/signin" , signin );
router.put('/update-user/:id' , verifyUserToken,updateUser);

module.exports = router;
