import { Student } from "../models/studentModel.js";
import ApiError from "../utils/ApiError.js";
import bcrypt from "bcrypt";
import { uploadToCloudinary } from "../utils/Cloudinary.js";
import Cookie from "cookie-parser";
import { Company } from "../models/CompanyModel.js";

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
    return { accessToken, refreshToken };
  } catch (error) {
    console.log("failed to create token", error.message);
  }
};

// Student Auth Controllers

export const register = async (req, res) => {
  try {
    const { fullName, email, password, phone, info, resumeUrl } = req.body;
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
    if (!resume) {
      throw new ApiError(400, "Resume is required");
    }
    console.log(resumeLocalPath, profileImageLocalPath);

    const profileImage = await uploadToCloudinary(profileImageLocalPath);

    const newStudent = await Student.create({
      fullName,
      email,
      password,
      phone,
      info,
      resume,
      profileImage: profileImage.url,
    });

    const registedStudent = await Student.findById(newStudent._id).select(
      "-password -refershToken"
    );

    const options = {
      httpOnly: true,
      secure: true,
    };
    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      data: {
        student: registedStudent,
      },
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
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      existingStudent._id
    );

    const options = {
      httpOnly: true,
      secure: true,
    };
    res
      .status(201)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        message: "Login Successfull",
        data: {
          student: existingStudent,
          accessToken,
          refreshToken,
        },
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  await Student.findByIdAndUpdate(
    req.student._id,
    {
      $unset: {
        refreshToken: 1, // this removes the field from document
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({
      success: true,
      data: {},
      message: "User logged Out",
    });
};

// Company Auth Controllers

export const companyRegister = async (req, res) => {
  try {
    const {
      companyName,
      logo,
      website,
      location,
      employees,
      description,
      sector,
      jobRoles,
      avgSalary,
    } = req.body;
    console.log(companyName, email, password, phone, info);
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

export const companyLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if ([email, password].some((fields) => fields.trim() === "")) {
      throw new ApiError(400, "All fields are required");
    }

    const company = await Company.findById({ email }).select("-refreshToken");

    if (!company) {
      throw new ApiError(404, "Company not found");
    }

    const passwordMatch = await company.matchPassword(password);

    if (!passwordMatch) {
      throw new ApiError(400, "Incorrect Password");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      company._id
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    res
      .status(201)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        message: "Login Successfull",
        data: {
          company,
          accessToken,
          refreshToken,
        },
      });
  } catch (error) {
    console.log(error);
  }
};

export const companyLogout = async (req, res) => {
  try {
    Company.findByIdAndUpdate(
      req.company._id,
      {
        $unset: {
          refreshToken: 1,
        },
      },
      {
        new: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
