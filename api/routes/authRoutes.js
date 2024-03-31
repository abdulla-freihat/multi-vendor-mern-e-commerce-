const express = require("express");
const { signup , signin , updateUser ,  updateUserAdresses  , deleteUserAdresses   } = require("../controllers/authController");
const upload = require("../utils/multer");
const verifyUserToken = require('../utils/verifyUserToken');



const router = express.Router();

router.post("/signup", upload.single("file"), signup);
router.post("/signin" , signin );
router.put('/update-user/:id' , verifyUserToken,updateUser);

//update user address by user id 
router.put('/update-user-addresses/:userId' ,   verifyUserToken ,   updateUserAdresses  )

//delete user address by adressId
router.delete('/delete-user-addresses/:id' ,   verifyUserToken ,   deleteUserAdresses  )


module.exports = router;
