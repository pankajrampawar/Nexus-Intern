import express from "express";
import {


  applyForInternship,
  editBio,
  editSkills,
  getStudentInfo,
} from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.post("/StudentInfo", getStudentInfo);
studentRouter.post("/applyForInternship", applyForInternship);
studentRouter.post("/editBio", editBio);
studentRouter.post("/editSkills", editSkills);


export default studentRouter;
