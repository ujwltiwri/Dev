const express = require("express");
const app = express();
const userModel = require("./models/userModel");
app.use(express.json());

// let user = [
//   {
//     id: 1,
//     name: "Abhishek",
//     age: 100,
//   },
//   {
//     id: 2,
//     name: "Rajat",
//     age: 10,
//   },
//   {
//     id: 3,
//     name: "Sunjyot",
//     age: 50,
//   },
// ];

//mounting in express
const userRouter = express.Router();
const authRouter = express.Router();
app.use("/user", userRouter);
app.use("/auth", authRouter);

userRouter
  .route("/")
  .get(getUser)
  .post(postUser)
  .patch(updateUser)
  .delete(deleteUser);

userRouter
  .route("/:name") //params
  .get(getUserById);

authRouter.route("/signup").get(getSignup).post(postSignup);

//params
app.get("/user/:name", (req, res) => {
  console.log(req.params.name);
  res.json({ msg: "user id is ", obj: req.params });
});

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

app.listen(5000);

// (async function createUser() {
//   let user = {
//     name: "Ranjan",
//     email: "ranjan@gmail.com",
//     password: 123456,
//     confirmPassword: 123456,
//   };

//   let data = await userModel.create(user);
//   console.log(data);
// })();
