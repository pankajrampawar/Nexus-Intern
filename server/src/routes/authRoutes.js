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
import {
  verifyCompanyToken,
  verifyStudentToken,
} from "../middlewares/authMiddleware.js";

const authRouter = express.Router();
//student routes
authRouter.post("/student/register", register);

authRouter.post("/student/login", login);
authRouter.post("/student/logout", verifyStudentToken, logout);

//students feature's routes

authRouter.post("/student/removeNotification", verifyStudentToken);

//company routes

authRouter.post("/company/register", companyRegister);
authRouter.post("/company/login", companyLogin);
authRouter.post("/company/logout", verifyCompanyToken, companyLogout);

export default authRouter;
