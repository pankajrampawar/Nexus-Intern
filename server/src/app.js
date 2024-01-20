import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRouter);

export default app;
