const userModel = require("../models/userModel");

module.exports.getUser = async function (req, res) {
  try {
    let id = req.id;
    let user = await userModel.findById(id);

    res.json({ msg: "users retrieved", user });
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

module.exports.updateUser = async function (req, res) {
  let id = req.params.id;
  let user = await userModel.findById(id);
  let dataToBeUpdated = req.body;
  try {
    if (user) {
      const keys = []; //['name' : 'email']
      for (let key in dataToBeUpdated) {
        keys.push(key);
      }

      for (let i = 0; i < keys.length; i++) {
        user[keys[i]] = dataToBeUpdated[keys[i]];

        //name = Abhishek
      }

      console.log("abcd", user);

      const updatedData = await user.save();

      res.json({
        message: "data update successfully",
        updatedData,
      });
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

module.exports.deleteUser = async function (req, res) {
  try {
    let id = req.params.id;
    let user = await userModel.findByIdAndDelete(id);

    res.json({
      msg: "user has been deleted",
      user,
    });
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

module.exports.allUser = async function (req, res) {
  try {
    let allUsers = await userModel.find();
    res.json({
      msg: "user id is ",
      allUsers,
    });
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};
