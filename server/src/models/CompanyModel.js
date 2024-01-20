import mongoose from "mongoose";
import jwt from "jsonwebtoken";
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
    jobRoles: [
      {
        type: String,
        required: true,
      },
    ],
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

companySchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

companySchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
companySchema.methods.genrateAccessToken = function () {
  console.log(
    process.env.JWT_SECRET,
    process.env.JWT_EXPIRE,
    process.env.JWT_REFRESH_SECRET,
    process.env.JWT_REFRESH_EXPIRE
  );
  return jwt.sign(
    { id: this._id, fullName: this.fullName, email: this.email },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

companySchema.methods.generateRefreshToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE,
  });
};

export const Company = mongoose.model("Company", companySchema);
