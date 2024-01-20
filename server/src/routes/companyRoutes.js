import express from "express";

import { acceptOrRejectIntern } from "../controllers/companyController.js";
import { verifyCompanyToken } from "../middlewares/authMiddleware.js";

const companyRouter = express.Router();
companyRouter.post("/acceptIntern", verifyCompanyToken, acceptOrRejectIntern);

export default companyRouter;
