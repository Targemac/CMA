const jwt = require("jsonwebtoken");

const verifyToken = async (token) => {
  return jwt.verify(token, process.env.VERIFY_TOKEN_SECRET);
};

module.exports = verifyToken;
