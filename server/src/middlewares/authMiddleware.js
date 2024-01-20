import jwt from "jsonwebtoken";
import { Student } from "../models/studentModel.js";
import { Company } from "../models/CompanyModel.js";
import ApiError from "../utils/ApiError.js";
const verifyStudentToken = async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    // console.log(token);
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const student = await Student.findById(decodedToken?.id).select(
      "-password -refreshToken"
    );

    if (!student) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.student = student;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message, error || "Invalid access token");
  }
};

const verifyCompanyToken = async (req, _, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    throw new ApiError(401, "Token not found");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const company = await Company.findById(decoded.id);
    req.company = company;
    next();
  } catch (error) {
    throw new ApiError(401, "Token not valid");
  }
};

export default verifyStudentToken;
