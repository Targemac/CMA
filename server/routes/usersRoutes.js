const express = require("express");
const usersRouter = express.Router();
const {
  registerUser,
  loginUser,
  verifyUser,
} = require("../controllers/usersController");

usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser);
usersRouter.post("/:userId/verify/:token", verifyUser); //localhost:5000/api/users/:userId/verify/:token

module.exports = usersRouter;
