import { User } from "../models/userModel.js";
import ApiError from "../utils/ApiError.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if ([username, email, password].some((fields) => fields.trim() === "")) {
      throw new ApiError(400, "All fields are required");
    }
    const user = await User.findOne({ email });
    if (user) {
      throw new ApiError(400, "User already exists");
    }

    const newUser = await User.create({
      username,
      email,
      password,
    });

    if (!newUser) {
      throw new ApiError(400, "Failed to create user");
    }

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ([email, password].some((fields) => fields.trim() === "")) {
      throw new ApiError(400, "All fields are required");
    }
    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError(400, "User does not exist");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new ApiError(400, "Invalid credentials");
    }
    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    };

    await user.save();
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      payload,
    });
  } catch (error) {
    console.log(error);
  }
};
