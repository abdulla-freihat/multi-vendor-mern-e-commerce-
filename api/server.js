const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const db = process.env.MONGO_URL;

mongoose
  .connect(db)
  .then(() => {
    console.log("mongo db is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json()); //allow json as the input in backend
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static("uploads")); //to acces files globaly in the root
app.use(cors());

app.use("/api/auth", authRoutes);



// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
      success: false,
      error: message,
  });
});

app.listen(process.env.PORT, () => {
  console.log("server is running on port " + process.env.PORT);
});
