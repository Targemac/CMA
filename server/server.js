const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const usersRouter = require("./routes/usersRoutes");
const connectDB = require("./config/db");
const offineConnect = require("./config/offlineConnection"); //my offline connection
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

// connectDB();
offineConnect();

const PORT = process.env.PORT;

//midlewares
app.use(cors({ origin: process.env.BASE_URL_FOR_CLIENT }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret key",
    resave: true,
    saveUninitialized: true,
    // cookie: {
    //   maxAge: 1000 * 60 * 60 * 24 * 30, // 1 month
    // }
    // ,
    store: MongoDBStore({
      uri: process.env.MONGO_URI2,
      collection: "session",
      expires: 86400 * 1000, // 1 day (60 * 60 * 24)
    }),
  })
);

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
