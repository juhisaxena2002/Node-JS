// import express, { json } from 'express';
const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000);

let users = [
  {
    id: 1,
    name: "abhi",
  },
  {
    id: 2,
    name: "abhishek",
  },
  {
    id: 3,
    name: "abhiraj",
  },
];

// mini app here 
const userRouter = express.Router();
const authRouter = express.Router();

// base route, route for use
app.use("/user", userRouter);
app.use("/auth", authRouter);

userRouter
  .route("/")
  .get(getUser)
  .post(postUser)
  .patch(updateUser)
  .delete(deleteUser);

userRouter.route("/:id").get(getUserById);

authRouter
.route('/signup')
.get(getSignup)
.post(postSignup);

// app.get("/user");
// app.post("/user");
// app.patch("/user");

// app.delete("/user", (req, res) => {
//   res.send(users);
// });
// app.get('/user/:id', (req,res)=>{
//     res.send("user id is: ", req.params);
//     console.log(req.params.id);
// });

function getUser(req, res) {
  res.send(users);
}

function postUser(req, res) {
  console.log(req.body);
  users = req.body;
  req.json({
    message: "data recieved successfully!",
    users: req.body,
  });
}

function updateUser(req, res) {
  console.log("req.body->", req.body);
  let DataToBeUpdated = req.body;
  for (key in DataToBeUpdated) {
    users[key] = DataToBeUpdated[key];
  }

  res.json({
    message: "data updated successfully!",
  });
}

function deleteUser(req, res) {
  users = {};
  res.json({
    message: " data has been deleted",
  });
}

function getUserById(req, res) {
  console.log(req.params.id);
  let paramId = req.params.id;
  let obj = {};
  for (let i = 0; i < users.length; i++) {
    if (users[i]["id"] == paramId) {
      obj = users[i];
    }
  }
  res.json({
    message: "req received",
    data: obj,
  });
}

function getSignup(req,res){
  res.sendfile('public\index.html', {root: __dirname});
}

function postSignup(req,res){
  
}