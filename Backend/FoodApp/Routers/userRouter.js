const express = require("express");
const userRouter = express.Router();
const userModel = require("../models/userModel");
var jwt = require("jsonwebtoken");
const { jwt_key } = require("../secrets");
// const jwt_key = "fhsdjfhg45hj"
userRouter
  .route("/")
  .get(protectRoute, getUsers)
  .post(postUser)
  .patch(updateUser)
  .delete(deleteUser);

userRouter.route("/setcookies").get(setCookies);

userRouter.route("/getcookies").get(getCookies);

userRouter
  .route("/:name") //params
  .get(getUserById);

function protectRoute(req, res, next) {
  if (req.cookies.login) {
    let token = req.cookies.login;
    let isVerified = jwt.verify(token, jwt_key);
    if (isVerified) {
      next();
    } else {
      res.json({
        msg: "user not verified",
      });
    }
  } else {
    return res.json({
      msg: "operation not allowed",
    });
  }
}

async function getUsers(req, res) {
  // res.send(user);
  console.log(req.query);
  // let { name, age } = req.query;
  // let filteredData = user.filter((userObj) => {
  //   return userObj.name == name && userObj.age == age;
  // });
  // res.send(filteredData);

  let allUsers = await userModel.find();
  res.json({ msg: "users retrived", allUsers });
}

function postUser(req, res) {
  console.log(req.body);
  //then i can put this in db
  user = req.body;
  res.json({
    message: "Data recieved succesfully",
    user: req.body,
  });
}

async function updateUser(req, res) {
  console.log(req.body);
  let dataToBeUpdated = req.body;

  let doc = await userModel.findOneAndUpdate(
    { email: "ranjan@gmail.com" },
    dataToBeUpdated
  );
  res.json({
    message: "data updated succesfully",
    user: req.body,
  });
}

async function deleteUser(req, res) {
  let emailId = req.body;
  let user = await userModel.findOneAndRemove(emailId);
  res.json({
    message: "User Deleted Successfully",
  });
}

function getUserById(req, res) {
  console.log(req.params.name);
  res.json({ msg: "user id is ", obj: req.params });
}

function setCookies(req, res) {
  res.cookie("isLogged", false, { maxAge: 10000, secure: true });
  res.cookie("password", 124325345);
  res.send("cookies has been set");
}

function getCookies(req, res) {
  let cookies = req.cookies;
  console.log(cookies);
  res.send("cookies recived");
}

module.exports = userRouter;
