import express from "express";
import { addInternship } from "../controllers/internshipController.js";

const internshipRouter = express.Router();

internshipRouter.post("/createInternship", addInternship);

export default internshipRouter;
