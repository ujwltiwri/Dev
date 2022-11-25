const express = require("express");
const userRouter = express.Router();
const userModel = require("../models/userModel");

userRouter
  .route("/")
  .get(getUser)
  .post(postUser)
  .patch(updateUser)
  .delete(deleteUser);

userRouter.route("/setcookies").get(setCookies);

userRouter.route("/getcookies").get(getCookies);

userRouter
  .route("/:name") //params
  .get(getUserById);

function getUser(req, res) {
  // res.send(user);
  console.log(req.query);
  let { name, age } = req.query;
  let filteredData = user.filter((userObj) => {
    return userObj.name == name && userObj.age == age;
  });
  res.send(filteredData);
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
  res.cookie("isLoggedin", false, { maxAge: 10000, secure: true });
  res.cookie("password", 124325345);
  res.send("cookies has been set");
}

function getCookies(req, res) {
  let cookies = req.cookies;
  console.log(cookies);
  res.send("cookies recived");
}

module.exports = userRouter;
