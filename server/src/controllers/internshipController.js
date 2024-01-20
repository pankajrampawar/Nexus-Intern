import { Internship } from "../models/internshipModel.js";
export const addInternship = async (req, res, next) => {
  try {
    const { title, description, skills, stipend, duration } = req.body;
    if (
      [title, description, skills, stipend, duration].some(
        (fields) => fields.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }
    const internship = await Internship.create({
      title,
      description,
      skills,
      stipend,
      duration,
    });
    res.status(201).json({
      status: "success",
      data: {
        internship,
      },
    });
  } catch (error) {
    next(error);
  }
};
