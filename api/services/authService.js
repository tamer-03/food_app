const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const e = require("express");
const jwt = require("jsonwebtoken");
const statusEnum = require("../models/enum/statusEnum");
require("dotenv").config();

exports.register = async (user) => {
  try {
    const existingUser = await userModel.findOne({ email: user.email });
    if (existingUser) {
      throw new Error("Email already exists");
    } else if (!user.email.includes("@")) {
      throw new Error("Mail must contain @");
    } else {
      return await userModel.create(user);
    }
  } catch (error) {
    console.error("Error in AuthService - createUser:", error);
    throw error;
  }
};
exports.login = async (email, password) => {
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("Email not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ email: user.email }, process.env.TOKEN_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return token;
  } catch (err) {
    console.error("Error in AuthService - login:", err);
    res
      .status(statusEnum.statusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};
