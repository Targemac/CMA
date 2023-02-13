const mongoose = require("mongoose");

const connectDB = async () => {
  const url = process.env.MONGO_URI;

  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (!err) {
          console.log("MongoDB Connection Succeeded.");
        } else {
          console.log("Error in DB connection: " + err);
        }
      }
    );
  } catch (err) {
    console.log("Error in DB connection: " + err);
  }
};

module.exports = connectDB;
