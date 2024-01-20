import mongoose from "mongoose";

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
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
    internshipsOffered: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Internship",
      required: true,
    }],
    internshipsOfferingCurrently:[{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Internship",
       required: true
    }],
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
    }
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
