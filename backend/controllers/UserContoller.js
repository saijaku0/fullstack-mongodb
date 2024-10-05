import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import UserSchema from "../models/User.js";

export const registerNewUser = async (req, res) => {
  try {
    const requsetPassword = req.body.password;
    const saltRounds = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(requsetPassword, saltRounds);

    const newDocument = new UserSchema({
      email: req.body.email,
      fullName: req.body.fullName,
      password: passwordHash,
      avatarUrl: req.body.avatarUrl,
    });

    const user = await newDocument.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    const { password, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.error("Registration error: ", err);
    res.status(500).json({
      message: "Canno`t register new user.",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await UserSchema.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.password
    );

    if (!isValidPass) {
      return res.status(401).json({
        message: "Invalid login or password",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    const { password, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.error("Authorization error: ", err);
    res.status(500).json({
      message: "Authorization error",
    });
  }
};

export const getAuthorizenStatus = async (req, res) => {
  try {
    const user = await UserSchema.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found or didn`t exist",
      });
    }

    const { password, ...userData } = user._doc;

    res.json({ userData });
  } catch (err) {
    console.error("Registration error: ", err);
    res.status(500).json({
      message: "Somthing wrong",
    });
  }
};
