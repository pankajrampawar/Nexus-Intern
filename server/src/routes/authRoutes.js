import express from "express";
import { login, register } from "../controllers/authController.js";
import { upload } from "../middlewares/multerMiddleware.js";

const authRouter = express.Router();
authRouter.post(
  "/register",
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

authRouter.post("/login", login);

export default authRouter;
