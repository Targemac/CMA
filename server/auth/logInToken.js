const jwt = require("jsonwebtoken");

const logInToken = async (userId) => {
  return jwt.sign({ userId }, process.env.VERIFY_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = logInToken;
