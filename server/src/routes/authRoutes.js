import express from "express";
import {
  companyLogin,
  login,
  register,
  companyRegister,
  logout,
  companyLogout,
} from "../controllers/authController.js";
import { upload } from "../middlewares/multerMiddleware.js";
import verifyStudentToken from "../middlewares/authMiddleware.js";

const authRouter = express.Router();
//student routes
authRouter.post(
  "/student/register",
  upload.fields(
    {
      name: "resume",
      maxCount: 1,
    },
    {
      name: "ProfileImage",
      maxCount: 1,
    }
  ),
  register
);

authRouter.post("/student/login", login);
authRouter.post("/student/logout", verifyStudentToken, logout);

//company routes

authRouter.post("/company/register", companyRegister);
authRouter.post("/company/login", companyLogin);
authRouter.post("/company/logout", companyLogout);

export default authRouter;
