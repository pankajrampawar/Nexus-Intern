import express from "express";

import { acceptOrRejectIntern, getStudentsAppliedForInternship } from "../controllers/companyController.js";
import { verifyCompanyToken } from "../middlewares/authMiddleware.js";

const companyRouter = express.Router();
companyRouter.post("/acceptIntern", verifyCompanyToken, acceptOrRejectIntern);
companyRouter.post("/getAllStudents", getStudentsAppliedForInternship);

export default companyRouter;
