const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;

// home page route
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

// get all users
app.get("/users", (req, res) => {
  res.send("all users");
});

// creating server
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}!`);
});
