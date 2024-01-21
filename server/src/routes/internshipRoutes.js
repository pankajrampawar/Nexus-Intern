import express from "express";
import {
  addInternship,
  filterThroughDuration,
  filterThroughLocation,
  filterThroughStipend,
  getAllInternships,
  getInternshipById,
} from "../controllers/internshipController.js";
import { verifyCompanyToken } from "../middlewares/authMiddleware.js";

const internshipRouter = express.Router();

internshipRouter.post("/createInternship", verifyCompanyToken, addInternship);
internshipRouter.get("/getAllInternships", getAllInternships);
internshipRouter.post("/getInternshipById", getInternshipById);
internshipRouter.get("/filterLocation", filterThroughLocation);
internshipRouter.get("/filterDuration", filterThroughDuration);
internshipRouter.get("/filterStipend", filterThroughStipend);

export default internshipRouter;
