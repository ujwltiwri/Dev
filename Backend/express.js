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

userRouter
  .route("")
  .get(getUser)
  .post(postUser)
  .patch(patchUser)
  .delete(deleteUser);

userRouter
  .route("/:name") //params
  .get(getUserById)
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

function getUserById(req, res){
    console.log(req.params.name);
    res.json({ msg: "user id is ", "obj": req.params });
};

app.listen(5000);
