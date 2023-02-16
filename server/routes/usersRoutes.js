const express = require("express");
const usersRouter = express.Router();
const {
  registerUser,
  loginUser,
  verifyUser,
  userProfile,
} = require("../controllers/usersController");

usersRouter.post("/register", registerUser);
usersRouter.get("/:userId/verify/:token", verifyUser); //localhost:5000/api/users/:userId/verify/:token
usersRouter.post("/login", loginUser);
usersRouter.get("/", userProfile); //localhost:5000/api/users/

module.exports = usersRouter;
