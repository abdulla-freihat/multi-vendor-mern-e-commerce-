const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/errorHandler");

const path = require("path");
const fs = require("fs");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "5m" });
};

const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
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

      throw new errorHandler("User already exists.", 400);
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

    //create token

    const token = createToken(newUser._id);

    return res
      .status(201)
      .json({ success: true, message: "sign up successfully", token });
  } catch (err) {
    return next(err);
  }
};

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;




    if (!email || !password) {
      throw new errorHandler("All fields must be filled", 400);
    }

    const user = await userSchema.findOne({ email }).select('+password');;


    if (!user) {
      throw new errorHandler("No user found. please sign up", 400);
    }

    // Compare the provided password with the hashed password from the user object
    const validPassowrd = await bcrypt.compare(password, user.password);



    if (!validPassowrd) {
      throw new errorHandler("Invalid password.try again", 400);
    }
    

    const token = createToken(user._id);

    return res
    .status(201)
    .json({ success: true, message: "sign in successfully", token ,user });

      

      
  } catch (err) {
    return next(err);
  }
};


const checkToken = async(req, res,next)=>{

   // If the middleware verifyToken passes, it means the token is valid and not expired
  res.status(200).json({ message: 'Token is valid.' });
}

module.exports = {
  signup,
  signin,
  checkToken
};
