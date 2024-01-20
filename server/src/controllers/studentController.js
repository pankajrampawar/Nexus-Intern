import { Student } from 'path-to-your-student-model';
import { Internship } from 'path-to-your-internship-model';

export const applyForInternship = async (req, res) => {
  try {
    const { internshipId, userId } = req.body;

    // Update the Student's applications
    const updatedStudent = await Student.findByIdAndUpdate(
      userId,
      { $addToSet: { applications: { internship: internshipId, status: "pending" } } },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Update the Internship's applicants
    const updatedInternship = await Internship.findByIdAndUpdate(
      internshipId,
      { $addToSet: { applicants: userId } },
      { new: true }
    );

    if (!updatedInternship) {
      return res.status(404).json({ message: 'Internship not found' });
    }

    return res.status(200).json({ message: 'Internship applied successfully', updatedStudent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error unable to process the request' });
  }
};


export const editSkills = async (req, res) => {
  try {
    const { userId, skills } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      userId,
      { $set: { skills: skills } },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    return res.status(200).json({ message: 'Skills updated successfully', updatedStudent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error unable to process the request' });
  }
};

export const editBio = async (req, res) => {
  try {
    const { userId, bio } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      userId,
      { $set: { bio: bio } },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    return res.status(200).json({ message: 'Bio updated successfully', updatedStudent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error unable to process the request' });
  }
};


export const getStudentInfo = () => {
  try {
    const userId = req.body.userId;
    const student = Student.findById(userId);

    if (!student) {
      res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student data fetched", student });
  } catch (error) {
    return res.status(500).json({ message: "server error unable to process the request" });
  }
}