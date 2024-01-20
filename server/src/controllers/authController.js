import ApiError from "../utils/ApiError.js";
import bcrypt from "bcrypt";

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

    let resumeLocalPath;
    if (
      req.file &&
      Array.isArray(req.file.resume) &&
      req.file.resume.length > 0
    ) {
      resumeLocalPath = req.file.resume[0].path;
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
