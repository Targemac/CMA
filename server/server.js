const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const usersRouter = require("./routes/usersRoutes");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT;

//midlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api's
app.use("/api/users", usersRouter);

// home page route
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

// creating server
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}!`);
});
