const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/userModel");

authRouter
    .route("/signup")
    .get(getSignup)
    .post(postSignup);

function getSignup(req, res) {
  res.sendFile("/public/index.html", { root: __dirname });
}

async function postSignup(req, res) {
  try {
    let data = req.body;
    let user = await userModel.create(data);
    console.log(data);
    res.json({
      msg: "user signed up",
      user,
    });
  } catch (err) {
    res.json({
      err: err.message,
    });
  }
}

module.exports = authRouter;
