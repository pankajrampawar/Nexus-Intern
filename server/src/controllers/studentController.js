import { Student } from 'path-to-your-student-model';

export const applyForInternship = async (req, res) => {
  try {
    const { internshipId, userId } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      userId,
      { $addToSet: { applications: internshipId } },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    return res.status(200).json({ message: 'Internship applied successfully', updatedStudent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error unable to process the request' });
  }
};
