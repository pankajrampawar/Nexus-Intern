import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
import internshipRouter from "./routes/internshipRoutes.js";
import cookieParser from "cookie-parser";
import companyRouter from "./routes/companyRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//auth Routes
app.use("/api/auth", authRouter);

//internship Routes
app.use("/api/internships", internshipRouter);

//company Routes
app.use("/api/company", companyRouter);

export default app;
