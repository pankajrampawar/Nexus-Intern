import express from "express";
import {
  companyLogin,
  login,
  register,
  companyRegister,
} from "../controllers/authController.js";
import { upload } from "../middlewares/multerMiddleware.js";

const authRouter = express.Router();
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

authRouter.post("/company/register", companyRegister);

authRouter.post("/student/login", login);
authRouter.post("/company/login", companyLogin);

export default authRouter;
