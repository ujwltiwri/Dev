const mongoose = require("mongoose");
const db_link = require("../secrets");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

mongoose
  .connect(db_link)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLenght: 6,
  },
  confirmPassword: {
    type: String,
    required: true,
    minLenght: 6,
  },
});

//models
const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
