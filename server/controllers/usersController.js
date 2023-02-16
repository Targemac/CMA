const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const sendEmail = require("../services/sendEmail");
const verifyTokenModel = require("../models/verifyTokenModel");
const generateVerifyToken = require("../auth/generateVerifyToken");
const verifyToken = require("../auth/verifyToken");
require("dotenv").config();

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
      // throw new Error("User already exists!");
      return;
    }

    //if user does not exist

    //generate salt

    const salt = await bcrypt.genSalt(10);

    //hash password
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const newUser = await UserModel.create({
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
    });

    //if user could not be created
    if (!newUser) {
      res.status(400).send({ message: "Invaid credentials" });
      // throw new Error("User could not be created");
      return;
    }

    //if user created successfully

    //generate token
    const verificationToken = await generateVerifyToken(newUser._id);

    //store verification token and userId in datatbase
    const token = await verifyTokenModel.create({
      userId: newUser._id,
      token: verificationToken,
    });

    // structure http://localhost:3000/user/:userId/verify/:token
    const verificationUrl = `<a href="http://localhost:3000/user/${newUser._id}/verify/${verificationToken}">verify your email</a>`;

    //send email
    sendEmail(
      newUser.email,
      "Account Created",
      `Hello ${newUser.firstName} ${newUser.lastName}, your account has been created. Please ${verificationUrl} to login.`
    );

    return res.status(201).json({ message: "User registered", newUser, token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//@description: verify a user
//@method POST localhost:5000/api/users/:userId/verify/:token
const verifyUser = async (req, res) => {
  try {
    const { userId, token } = req.params;

    if (!userId || !token) {
      res.status(400).send({ message: "Invalid token !" });
      return;
    }

    //check if id exists
    const foundUser = await UserModel.findById(userId);

    //check if user is already verified
    if (foundUser.verified === true) {
      res.status(400).send({ message: "User already verified, please login" });
      return;
    }

    //check if token exists
    const foundToken = await verifyTokenModel.findOne({ token });

    if (!foundUser._id === userId && !foundToken === token) {
      res.status(400).send({ message: "Invalid token !" });
      return;
    }

    const verifiedToken = await verifyToken(token);

    //if token and dont match
    if (verifiedToken.userId.toString() !== foundUser._id.toString()) {
      res.status(400).send({ message: "Invalid token !!" });
      return;
    }

    // updateUserStatus
    UserModel.findByIdAndUpdate({ _id: foundUser._id }, { verified: true });

    // removeToken
    await verifyTokenModel.findOneAndDelete({
      userId: foundUser._id,
    });

    res.status(200).send({ message: "User status updated to verified" });
    // res.status(301).redirect("/login");
  } catch (error) {
    res.status(500).send({ message: error.message });
    return;
  }
};

//@description: login a user
//@method POST localhost:5000/api/users/login
const loginUser = (req, res) => {
  res.json({ message: "User loggedin" });
};

module.exports = { registerUser, verifyUser, loginUser };
