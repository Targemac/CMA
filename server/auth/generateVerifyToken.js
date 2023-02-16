const jwt = require("jsonwebtoken");

const generateVerifyToken = async (userId) => {
  return jwt.sign({ userId }, process.env.VERIFY_TOKEN_SECRET, { expiresIn: "1h" });
};

module.exports = generateVerifyToken;
