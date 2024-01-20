import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    companySector: {
       type: String,
       required: true,
    },
    location: {
      type: String,
      required: true,
    },
    stipend: {
      type: Number,
      required: true,
    },
    applyBy: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    type: {
      type: String,
      required: true,
    },
    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    selected: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    rejected: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    status: {
      type: Boolean,
    },
    locationType: {
      type: ["On Site", "Remote"],
      required: true,
    },
    studentSelected: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Internship = mongoose.model("Internship", internshipSchema);
