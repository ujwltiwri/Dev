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
app.use("/user", userRouter);

/* Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware. */

userRouter
  .route("/")
  .get(getUser, middlware1, middlware2)
  .post(postUser)
  .patch(patchUser)
  .delete(deleteUser);

userRouter
  .route("/:name") //params
  .get(getUserById);
//with query
// app.get("/user", (req, res) => {
//   // res.send(user);
//   console.log(req.query);
//   let { name, age } = req.query;
//   let filteredData = user.filter((userObj) => {
//     return userObj.name == name && userObj.age == age;
//   });
//   res.send(filteredData);
// });

// app.post("/user", (req, res) => {
//   console.log(req.body);
//   //then i can put this in db
//   user = req.body;
//   res.json({
//     message: "Data recieved succesfully",
//     user: req.body,
//   });
// });

// app.patch("/user", (req, res) => {
//   console.log(req.body);
//   let dataToBeUpdated = req.body;
//   for (key in dataToBeUpdated) {
//     user[key] = dataToBeUpdated[key];
//   }
//   res.json({
//     message: "data updated succesfully",
//     user: req.body,
//   });
// });

// app.delete("/user", (req, res) => {
//   user = {};
//   res.json({
//     message: "User Deleted Successfully",
//   });
// });

function middlware1(req, res, next) {
  console.log("middlware 1 called");
  next();
}

function middlware2(req, res) {
  console.log("middlware 2 called");
  res.json({ msg: "user returned from middlware 2" });
}

//params
app.get("/user/:name", (req, res) => {
  console.log(req.params.name);
  res.json({ msg: "user id is ", obj: req.params });
});

function getUser(req, res, next) {
  // res.send(user);
  console.log(req.query);
  let { name, age } = req.query;
  let filteredData = user.filter((userObj) => {
    return userObj.name == name && userObj.age == age;
  });
  //   res.send(filteredData);
  console.log("get user is called");
  next();
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

app.listen(5000);
