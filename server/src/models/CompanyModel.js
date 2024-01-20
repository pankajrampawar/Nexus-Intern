import mongoose from "mongoose";

const companySchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    employees: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    internshipsOffered: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Internship",
      },
    ],
    internshipsOfferingCurrently: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Internship",
      },
    ],
    sector: {
      type: String,
      required: true,
    },
    jobRoles: {
      type: String,
      required: true,
    },
    avgSalary: {
      type: Number,
      required: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
