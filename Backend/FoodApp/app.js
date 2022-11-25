const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
app.use(express.json());
app.use(cookieparser());

//mounting in express
const userRouter = require("./Routers/userRouter");
const authRouter = require("./Routers/authRouter");

app.use("/user", userRouter);
app.use("/auth", authRouter);

//params
app.get("/user/:name", (req, res) => {
  console.log(req.params.name);
  res.json({ msg: "user id is ", obj: req.params });
});

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
