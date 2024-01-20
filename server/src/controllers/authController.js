import { Student } from "../models/studentModel.js";
import ApiError from "../utils/ApiError.js";
import bcrypt from "bcrypt";

const generateAccessAndRefreshToken = async (studentId) => {
  try {
    const student = await Student.findById(studentId);
    if (!student) {
      throw new ApiError(404, "Student not found");
    }
    const accessToken = student.genrateAccessToken();
    const refreshToken = student.generateRefreshToken();
    this.refreshToken = refreshToken;
    await student.save({ validBeforeSave: false });
  } catch (error) {
    console.log(error.message);
  }
};

export const register = async (req, res) => {
  try {
    const { fullName, email, password, phone, info } = req.body;
    if (
      [username, email, password, phone, info].some(
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
      req.file &&
      Array.isArray(req.file.profileImage) &&
      req.file.profileImage.length > 0
    ) {
      profileImageLocalPath = req.file.profileImage[0].path;
    }

    if (!profileImageLocalPath) {
      throw new ApiError(400, "Profile image is required");
    }
    let resumeLocalPath;
    if (
      req.file &&
      Array.isArray(req.file.resume) &&
      req.file.resume.length > 0
    ) {
      resumeLocalPath = req.file.resume[0].path;
    }
    if (!resumeLocalPath) {
      throw new ApiError(400, "Resume is required");
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
 
    const newStudent=await Student.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      info,
      profileImage: profileImageLocalPath,
      resume: resumeLocalPath,
    });

    const refreshToken = await generateAccessAndRefreshToken(newStudent._id);
    
    res.status(201).json({
      message: "Student registered successfully",
      data: {
        student: newStudent,
        refreshToken,
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
    

  } catch (error) {
    console.log(error);
  }
};

export const companyLogin = async (req, res) => {
  try {
    const { companyName, title } = req.body;
  } catch (error) {}
};
