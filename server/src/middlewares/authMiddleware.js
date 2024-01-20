import jwt from "jsonwebtoken";
import { Student } from "../models/studentModel.js";
const verifyStudentToken = async (req, _, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    throw new ApiError(401, "Token not found");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const student = await Student.findById(decoded.id);
    req.student = student;
    next();
  } catch (error) {
    throw new ApiError(401, "Token not valid");
  }
};

export default verifyStudentToken;
