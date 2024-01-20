import { Internship } from "../models/internshipModel.js";

export const addInternship = async (req, res) => {
  try {
    const {
      title,
      description,
      company,
      location,
      stipend,
      skills,
      applyBy,
      duration,
      time,
      type,
      status,
      locationType,
    } = req.body;
    console.log(
      title,
      description,
      company,
      location,
      time,
      type,
      locationType,
      status
    );
    if (
      [title, description, company, location, time, type, locationType].some(
        (field) => field.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }
    const internship = await Internship.create({
      title,
      description,
      company,
      location,
      stipend,
      skills,
      applyBy,
      duration,
      time,
      type,
      status,
      locationType,
    });
    res.status(201).json({
      status: "success",
      data: {
        internship,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const filterThroughLocation = async (req, res) => {
  try {
    const { location } = req.body;

    const internships = await Internship.find({ locationType: location });

    return res.status(200).json({ internships });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const filterThroughStipend = async (req, res) => {
  try {
    const { stipend } = req.body;

    const internships = await Internship.find({
      stipend: { $gte: stipend.lower, $lte: stipend.upper },
    });

    return res.status(200).json({ internships });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const filterThroughDuration = async (req, res) => {
  try {
    const { duration } = req.body;

    const internships = await Internship.find({ duration });

    return res.status(200).json({ internships });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find();

    res.status(200).json({ message: "interships fetched", internships });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
