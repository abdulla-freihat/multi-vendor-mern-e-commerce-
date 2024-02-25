const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/errorHandler");

const path = require("path");
const fs = require("fs");

const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const userEmail = await userSchema.findOne({ email });

    if (userEmail) {
      const filename = req.file.filename;
      const filePath = `uploads/${filename}`;

      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error deleting file" });
        } else {
          res.json({ message: "file deleted successfully" });
        }
      });

      return next(new errorHandler("User already exists.", 400));
    }

    // Get the filename from the request file object
    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    //hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = new userSchema({
      username: username,
      email: email,
      password: hash,
      avatar: fileUrl,
    });

    const newUser = await user.save();

    return res.status(201).json({ success: true, newUser });
  } catch (err) {
    return next(new errorHandler(err.message, 400));
  }
};

module.exports = {
  signup,
};
