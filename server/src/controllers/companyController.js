import { Company } from "../models/CompanyModel.js";
import { Internship } from "../models/internshipModel.js";
import { Student } from "../models/studentModel.js";

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


export const getApplicantsForInternship=async (req, res) => {
  try {

    const { internshipId, companyId } = req.body;

    if (!internshipId || !companyId) {
      return res.status(400).json({ error: 'Both internshipId and companyId are required' });
    }

    
    const internship = await Internship.findOne({ _id: internshipId, company: companyId })
      .populate('applicants');

    if (!internship) {
      console.error('Internship not found');
      return res.status(404).json({ error: 'Internship not found' });
    }

    const applicants = internship.applicants;

   
    return res.status(200).json({ applicants });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

};

export const getAcceptedStudents=async (req,res)=>{

   try{
    
   }catch(error){
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
   }

}

export const getStudentsAppliedForInternship = async (req, res) => {
  try {

    const companyId = req.body.companyId;

    const internships = await Internship.find({ company: companyId });

    let appliedStudents = [];

    for (const internship of internships) {
      const students = await Student.find({ '_id': { $in: internship.applicants } });
      appliedStudents = appliedStudents.concat(students);
    }

    res.status(200).json({ students: appliedStudents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};