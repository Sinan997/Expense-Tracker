const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(404).json({ message: "Please fill all inputs." });
    }

    // checking is username valid
    const usernameCheck = await User.findOne({ username: username });
    if (usernameCheck) {
      return res.status(409).json({ message: "This username already exists." });
    }

    // checking is email valid
    const emailCheck = await User.findOne({ email: email });
    if (emailCheck) {
      return res.status(409).json({ message: "This email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      expenses: [],
      incomes: [],
    });

    await newUser.save();
    return res
      .status(201)
      .json({ message: "User Has been created succesfully." });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error,pls try again later." });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({ message: "Please fill all inputs." });
    }

    // checking is email valid
    const emailCheck = await User.findOne({ email: email });
    if (!emailCheck) {
      return res.status(409).json({ message: "Email is not found." });
    }

    const user = await User.findOne({ email: email });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = jwt.sign(
        { email: user.email, userId: user._id },
        "mysecretkey",
        { expiresIn: "24h" }
      );

      return res.status(200).json({
        message: "Login succesfull.",
        token: token,
        expirationTime: new Date().getTime() + 1000 * 60 * 60 * 24,
      });
    } else {
      return res.status(404).json({ message: "Password is wrong." });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error,pls try again later." });
  }
};
