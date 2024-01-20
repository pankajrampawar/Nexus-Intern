import express from 'express'
import {
    applyForInternship,
    editBio,
    editSkills
} from '../controllers/studentController'

const studentRouter = express.Router();

studentRouter.post("/applyForInternship", applyForInternship);
studentRouter.post("/editBio", editBio);
studentRouter.post("/editSkills", editSkills);

export default studentRouter