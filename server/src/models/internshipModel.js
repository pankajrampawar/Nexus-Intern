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
    location: {
      type: String,
      required: true,
    },
    stipend: {
      type: Number,
      required: true,
    },
    applyBy: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    time: {
      type: TimeRanges,
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
        type: String,
        required: true,
      },
    ],
    selected: [
      {
        type: String,
        required: true,
      },
    ],
    rejected: [
      {
        type: String,
        required: true,
      },
    ],
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Internship = mongoose.model("Internship", internshipSchema);
