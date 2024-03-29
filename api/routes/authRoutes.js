const express = require("express");
const { signup , signin , updateUser } = require("../controllers/authController");
const upload = require("../utils/multer");


const router = express.Router();

router.post("/signup", upload.single("file"), signup);
router.post("/signin" , signin );
router.put('/update-user/:id' , updateUser);

module.exports = router;
