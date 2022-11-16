const express = require("express");
const app = express();
app.use(express.json());

let user = [
  {
    id: 1,
    name: "Abhishek",
    age: 100,
  },
  {
    id: 2,
    name: "Rajat",
    age: 10,
  },
  {
    id: 3,
    name: "Sunjyot",
    age: 50,
  },
];

//mounting in express
const userRouter = express.Router();
const authRouter = express.Router();
app.use("/user", userRouter);
app.use("/auth", authRouter);

userRouter
  .route("/")
  .get(getUser)
  .post(postUser)
  .patch(patchUser)
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

function patchUser(req, res) {
  console.log(req.body);
  let dataToBeUpdated = req.body;
  for (key in dataToBeUpdated) {
    user[key] = dataToBeUpdated[key];
  }
  res.json({
    message: "data updated succesfully",
    user: req.body,
  });
}

function deleteUser(req, res) {
  user = {};
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

function postSignup(req, res) {
  let { email, name, password } = req.body;
  console.log(req.body);
  res.json({
    msg: "user signed up",
    email,
    name,
    password,
  });
}

app.listen(5000);
