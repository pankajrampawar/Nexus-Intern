import Company from "../models/Company.js";
import Internship from "../models/Internship.js";
import Student from "../models/Student.js";

export const acceptOrRejectIntern = async (req, res) => {
  try {
    const { studentId, internshipId, status } = req.body;
    const internStatus =
      status === 0 ? "has not been accepted by" : "has been accepted by";

    const student = await Student.findById(studentId).select(
      "-password -refreshToken"
    );
    const internship = await Internship.findById(internshipId);
    const company = await Company.findById(internship.company).select(
      "-password -refreshToken"
    );
    student.notification.push(
      `Your application for ${internship.title} ${internStatus} ${company.companyName}`
    );
    student.save({ validBeforeSave: false });
    internship.selected.push(student._id);
    internship.applicants.filter((id) => id !== studentId);
    internship.studentsAccepted.push(studentId);
    internship.save({ validBeforeSave: false });

    const message = status === 0 ? "Rejected" : "Accepted";

    res.status(200).json({
      success: true,
      message,
      student,
      internship,
      company,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
