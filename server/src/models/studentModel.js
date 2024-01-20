import mongoose, { Schema } from "mongoose";

const userScheme = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    info: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userScheme);
