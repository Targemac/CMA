const express = require("express");
const usersRouter = express.Router();
const { registerUser, loginUser } = require("../controllers/usersController");

usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser);

module.exports = usersRouter;
