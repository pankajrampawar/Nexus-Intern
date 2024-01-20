import express from 'express'
import {
    applyForInternship,
    editBio,
    editSkills,
    getStudentInfo
} from "./../controllers/studentController.js"

const studentRouter = express.Router();

studentRouter.route("/StudentInfo").get(getStudentInfo);
studentRouter.route("/applyForInternship").post(applyForInternship);
studentRouter.route("/editBio").post(editBio);
studentRouter.route("/editSkills").post(editSkills);

export default studentRouter;