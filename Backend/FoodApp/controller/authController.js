const userModel = require("../models/userModel");
var jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../secrets");
const { compare } = require("bcrypt");

module.exports.signup = async function (req, res) {
  try {
    let data = req.body;
    let user = await userModel.create(data);

    if (user) {
      res.json({
        msg: "user signed up",
      });
    } else {
      res.json({
        msg: "user could not be signed up",
      });
    }
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

module.exports.login = async function (req, res) {
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email: email });
    if (user) {
      //check if password matches
      // bcrypt -> compare
      if (password == user.password) {
        let uid = user["_id"];
        var token = jwt.sign({ payload: uid }, JWT_KEY);

        res.cookie("login", token);

        res.json({
          msg: "user logged in",
        });
      } else {
        res.json({
          msg: "wrong credentials",
        });
      }
    } else {
      res.json({
        msg: "user not found",
      });
    }
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

module.exports.forgetPassword = async function (req, res) {
  try {
    let { email } = req.body;
    const user = await userModel.findOne({ email: email });

    if (user) {
      //create resetToken
      const resetToken = user.createResetToken();

      //create Link
      //https://xyz.com/resetPassword/resetToken
      let resetPasswordLink = `${req.protocol}://${req.get(
        "host"
      )}/resetPassword/${resetToken}`;
      //send email to user
    } else {
      res.json({
        msg: "user not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      msg: err.message,
    });
  }
};

module.exports.resetPassword = async function (req, res) {
  try {
    const token = req.params.token;
    let { password, confirmPassword } = req.body;
    const user = await userModel.findOne({ resetToken: token });

    if (user) {
      //resetPasswordHandler will update user in db
      user.resetPasswordHandler(password, confirmPassword);
      await user.save();

      res.json({
        msg: "password changed successfullly",
      });
    } else {
      msg: "user not found";
    }
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

module.exports.logout = function (req, res) {
  //logout function
  res.cookie("login", " ", { maxAge: 1 });
  res.json({
    msg: "user logged out successfully",
  });
};
