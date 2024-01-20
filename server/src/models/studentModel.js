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
    bio: {
      type: String,
      required: true
    },
    skills: {
      type: Array,
      required: true
    },
    college: {
      type: String,
      required: true
    },
    education: {
      start: {
        type: Number,
        required: true,
      },
      end: {
        type: Number,
        required: true,
      }
    },
    notification: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "",
      },
    ],
    resume: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
    applications: [
      {
        internship: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Internship"
        },
        status: {
          type: String,
          enum: ["pending", "accepted", "rejected"],
          default: "pending"
        }
      }
    ],
  },
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
  console.log(
    process.env.JWT_SECRET,
    process.env.JWT_EXPIRE,
    process.env.JWT_REFRESH_SECRET,
    process.env.JWT_REFRESH_EXPIRE
  );
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
