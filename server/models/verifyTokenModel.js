const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var verifyTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
  token: {
    type: String,
  },
});

//Export the model
module.exports = mongoose.model("verifyToken", verifyTokenSchema);
