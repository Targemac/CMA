//@description: register a user
//@method POST localhost:5000/api/users/register
const registerUser = (req, res) => {
  res.json({ message: "User registered" });
};

//@description: login a user
//@method POST localhost:5000/api/users/login
const loginUser = (req, res) => {
  res.json({ message: "User loggedin" });
};

module.exports = { registerUser, loginUser };
