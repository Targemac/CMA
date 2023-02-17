const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const sendEmail = require("../services/sendEmail");
const verifyTokenModel = require("../models/verifyTokenModel");
const generateVerifyToken = require("../auth/generateVerifyToken");
const verifyToken = require("../auth/verifyToken");
const logInToken = require("../auth/logInToken");
require("dotenv").config();

//@description: register a user
//@method POST localhost:5000/api/users/register
const registerUser = async (req, res) => {
  //destructure data
  const { firstName, lastName, state, city, email, password } = req.body;

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
      state,
      city,
      email,
      password: hashedPassword,
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
    const verificationUrl = `<a href="http://localhost:5000/api/users/${newUser._id}/verify/${verificationToken}">verify your email</a>`;

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

    //if token id and userId dont match
    if (verifiedToken.userId.toString() !== foundUser._id.toString()) {
      res.status(400).send({ message: "Invalid token !!" });
      return;
    }

    // updateUserStatus
    await UserModel.findByIdAndUpdate(
      foundUser._id,
      { $set: { verified: true } },
      { new: true }
    );

    // removeToken
    await verifyTokenModel.findOneAndDelete({
      userId: foundUser._id,
    });

    //send message to front-end
    res.status(200).send({ message: "User status updated to verified" });
  } catch (error) {
    res.status(500).send({ message: error.message });
    return;
  }
};

//@description: login a user
//@method POST localhost:5000/api/users/login
const loginUser = async (req, res) => {
  //destructure info
  const { email, password } = req.body;

  //check if fields are empty
  if (!email || !password) {
    res.status(404).send({ message: "All fields are required" });
    return;
  }

  try {
    //check if user exists
    const foundUser = await UserModel.findOne({ email: email.toLowerCase() });

    //if user exists and passsword matches
    if (foundUser && (await bcrypt.compare(password, foundUser.password))) {
      //check if user is verified
      if (!foundUser.verified === true) {
        ///send email here
      }

      let token = await logInToken(foundUser._id);

      //store token in session
      req.session.user = {
        isLoggedIn: true,
        token: token,
      };

      req.session.save((err) => {
        if (err) {
          console.log(err.message);
          res.status(500).send({ message: err.message });
        } else {
          //send token to fron-end
          res.status(200).send(req.session.user);
        }
      });
    } else {
      res.status(401).send({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//@description: user profile
//@method GET localhost:5000/api/users/
//@protected
const userProfile = async (req, res) => {
  res.status(200).send("user profile protected");
};

//@description: user logout
//@method GET localhost:5000/api/users/logout
//@protected
const userLogout = async (req, res) => {
  if (!req.headers["Authorization"]) {
    res.status(401).send({ message: "No token provided" });
    // return;
  } else {
    console.log("logout");
  }
};

module.exports = {
  registerUser,
  verifyUser,
  loginUser,
  userProfile,
  userLogout,
};
