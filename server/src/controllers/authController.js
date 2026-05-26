import User from "../models/User.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";



// REGISTER USER
export const registerUser = async (req, res) => {

  try {

    const {
      name,
      email,
      password,
    } = req.body;

    // CHECK USER
    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // CREATE USER
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "customer",
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};



// LOGIN USER
export const loginUser = async (req, res) => {

  try {

    const {
      email,
      password,
    } = req.body;

    // CHECK USER
    const user =
      await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User account not found",
      });
    }

    // CHECK PASSWORD
    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

      if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }

    // TOKEN
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};



// FORGOT PASSWORD
export const forgotPassword = async (
  req,
  res
) => {

  try {

    const {
      email,
      newPassword,
    } = req.body;

    // CHECK EMAIL
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    // FIND USER
    const user =
      await User.findOne({ email });

    // USER NOT FOUND
    if (!user) {
      return res.status(404).json({
        message: "Email not found",
      });
    }

    // ONLY VERIFY EMAIL
    if (!newPassword) {

      return res.status(200).json({
        success: true,
        verified: true,
        message:
          "Email verified successfully",
      });

    }

    // HASH NEW PASSWORD
    const hashedPassword =
      await bcrypt.hash(
        newPassword,
        10
      );

    // UPDATE PASSWORD
    user.password =
      hashedPassword;

    await user.save();

    return res.status(200).json({
      success: true,
      message:
        "Password updated successfully",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      message: "Server Error",
    });

  }
};