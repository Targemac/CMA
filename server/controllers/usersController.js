const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const sendEmail = require("../services/sendEmail");

//@description: register a user
//@method POST localhost:5000/api/users/register
const registerUser = async (req, res) => {
  //destructure data
  const {
    firstName,
    lastName,
    gender,
    dateOfBirth,
    country,
    state,
    city,
    username,
    email,
    phone,
    password,
    photo,
  } = req.body;

  try {
    //check if user email already exists
    const userExists = await UserModel.findOne({ email });

    //if user exist
    if (userExists) {
      res.status(400).send({ message: "User already exists" });
      throw new Error("User already exists");
    }

    //if user does not exist

    //generate salt

    const salt = await bcrypt.genSalt(10);

    //hash password
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const newUser = new UserModel({
      firstName,
      lastName,
      gender,
      dateOfBirth,
      country,
      state,
      city,
      username,
      email,
      phone,
      password: hashedPassword,
      photo,
    }).save();

    //if user could not be created
    if (!newUser) {
      res.status(400).send({ message: "Invaid credentials" });
      throw new Error("User could not be created");
    }

    //if user created successfully

    //send email notification to user

    //generate verification url
    // structure http://localhost:3000/user/:userId/verify/:token
    //token is a random string
    const verificationToken = "74156ALHFGEOP";
    const verificationUrl = `<a href="http://localhost:3000/user/${newUser._id}/verify/${verificationToken}">verify your email</a>`;

    const emailData = {
      email: newUser.email,
      subject: "Account Created",
      text: `Hello ${newUser.firstName} ${newUser.lastName}, your account has been created. Please ${verificationUrl} to login.`,
    };

    //send email
    sendEmail(emailData);

    return res.status(201).send({ message: "User registered" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//@description: login a user
//@method POST localhost:5000/api/users/login
const loginUser = (req, res) => {
  res.json({ message: "User loggedin" });
};

module.exports = { registerUser, loginUser };
