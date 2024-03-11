const shopSchema = require("../models/shopSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/errorHandler");
const path = require("path");
const fs = require("fs");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "5m" });
};
const createShop = async (req, res, next) => {
  try {
    const { name,email, password , address ,phoneNumber , zipCode } = req.body;

    if (!name || !email || !password || !address || !phoneNumber ||!zipCode) {
        throw new errorHandler("All fields must be filled", 400);
      }

    // Validate password complexity
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      throw new errorHandler(
        "Password must be at least 6 characters long and contain at least one uppercase letter and one number",
        400
      );
    }

    const sellerEmail = await shopSchema.findOne({ email });

    if (sellerEmail) {
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

      throw new errorHandler("User already exists.", 400);
    }

    // Get the filename from the request file object
    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    //hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const seller = new userSchema({
      name: name,
      email: email,
      password: hash,
      avatar: fileUrl,
      address: address,
      phoneNumber: phoneNumber,
      zipCode: zipCode,
    });

    const newSeller = await seller.save();

    //create token

    const token = createToken(newSeller._id);

    return res
      .status(201)
      .json({ success: true, message: "sign up successfully", token });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  createShop,
};
