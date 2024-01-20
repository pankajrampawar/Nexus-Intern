import { Student } from "../models/studentModel.js";
import ApiError from "../utils/ApiError.js";
import bcrypt from "bcrypt";
import { uploadToCloudinary } from "../utils/Cloudinary.js";

const generateAccessAndRefreshToken = async (studentId) => {
  try {
    const student = await Student.findById(studentId);
    if (!student) {
      throw new ApiError(404, "Student not found");
    }
    const accessToken = student.genrateAccessToken();
    const refreshToken = student.generateRefreshToken();
    student.refreshToken = refreshToken;
    await student.save({ validBeforeSave: false });
    return accessToken;
  } catch (error) {
    console.log("failed to create token", error.message);
  }
};

export const register = async (req, res) => {
  try {
    const { fullName, email, password, phone, info } = req.body;
    console.log(fullName, email, password, phone, info);
    if (
      [fullName, email, password, phone, info].some(
        (fields) => fields.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }

    const student = await Student.findOne({ email });
    if (student) {
      throw new ApiError(400, "Email already exists");
    }
    let profileImageLocalPath;
    if (
      req.files &&
      Array.isArray(req.files.profileImage) &&
      req.files.profileImage.length > 0
    ) {
      profileImageLocalPath = req.files.profileImage[0].path;
    }

    if (!profileImageLocalPath) {
      throw new ApiError(400, "Profile image is required");
    }
    let resumeLocalPath;
    if (
      req.files &&
      Array.isArray(req.files.resume) &&
      req.files.resume.length > 0
    ) {
      resumeLocalPath = req.files.resume[0].path;
    }
    if (!resumeLocalPath) {
      throw new ApiError(400, "Resume is required");
    }
    console.log(resumeLocalPath, profileImageLocalPath);
    const resume = await uploadToCloudinary(resumeLocalPath);

    const profileImage = await uploadToCloudinary(profileImageLocalPath);
    console.log(resume, profileImage);

    const newStudent = await Student.create({
      fullName,
      email,
      password,
      phone,
      info,
      resume: resume.url,
      profileImage: profileImage.url,
    });

    const registedStudent = await Student.findById(newStudent._id).select(
      "-password -refershToken"
    );
    const { accessToken } = await generateAccessAndRefreshToken(newStudent._id);

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      data: {
        student: registedStudent,
        accessToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const companyRegister = async (req, res) => {
  try {
    const { companyName, email, password, phone, info } = req.body;
    if (
      [companyName, email, password, phone, info].some(
        (fields) => fields.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }
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
    const existingStudent = await Student.findOne({ email }).select(
      "-refreshToken"
    );
    if (!existingStudent) {
      throw new ApiError(404, "Student not found");
    }
    const passwordMatch = existingStudent.matchPassword(password);
    if (!passwordMatch) {
      throw new ApiError(400, "Incorrect Password");
    }
    const accessToken = await generateAccessAndRefreshToken(
      existingStudent._id
    );

    res.status(201).json({
      message: "Login Successfull",
      data: {
        student: existingStudent,
        accessToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {};

export const companyLogin = async (req, res) => {
  try {
    const { companyName, title } = req.body;
  } catch (error) {}
};

export const companyLogout = async (req, res) => {
  try {
    const { companyName, title } = req.body;
  } catch (error) {}
};
