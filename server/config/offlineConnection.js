const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.Promise = global.Promise;
  const url2 = process.env.MONGO_URI2;

  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(url2, (err) => {
      if (!err) {
        console.log("MongoDB Connection Succeeded.");
      } else {
        console.log("Error in DB connection: " + err);
      }
    });
  } catch (err) {
    console.log("Error in DB connection: " + err);
  }
};

module.exports = connectDB;
