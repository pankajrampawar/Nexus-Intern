import express from "express";
import { 
    addInternship,
    filterThroughDuration,
    filterThroughLocation,
    filterThroughStipend,
    getAllInternships

} from "../controllers/internshipController.js";

const internshipRouter = express.Router();

internshipRouter.post("/createInternship", addInternship);
internshipRouter.get("/getAllInternships", getAllInternships)
internshipRouter.get("/filterLocation", filterThroughLocation);
internshipRouter.get("/filterDuration", filterThroughDuration);
internshipRouter.get("/filterStipend", filterThroughStipend);

export default internshipRouter;