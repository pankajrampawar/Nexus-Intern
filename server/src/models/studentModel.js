import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const studentScheme = mongoose.Schema(
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
    resume: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

studentScheme.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

studentScheme.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
studentScheme.methods.genrateAccessToken = function () {
  return jwt.sign(
    { id: this._id, fullName: this.fullName, email: this.email },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

studentScheme.methods.generateRefreshToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE,
  });
};
export const Student = mongoose.model("Student", studentScheme);
