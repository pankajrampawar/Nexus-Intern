import axios from "axios";

export const getAllInternships = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/internships/getAllInternships"
    );
    console.log(response.data.internships);
    return response.data.internships;
  } catch (error) {
    alert("unable to get internships internal server error");
    console.log(error);
  }
};

export const studentSignup = async (data) => {
  try {
    console.log(data);
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("fullName", data.fullName);
    formData.append("phone", data.phone);
    formData.append("bio", data.info); // Change 'info' to 'bio'
    formData.append("profileImage", data.profileImage);

    return await axios.post(
      "http://localhost:8080/api/auth/student/register",
      formData
    );
  } catch (error) {
    console.log(error);
    // You might want to throw the error here to propagate it to the calling code
    throw error;
  }
};

export const getUserInfo = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/student/StudentInfo",
      {
        userId: id,
      }
    );

    console.log(response.data);
    return response.data.student;
  } catch (error) {
    alert("unable to get the user info");
    console.log(error);
  }
};

export const applyForInternship = async (internshipId, userId) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/student/applyForInternship",
      {
        userId: userId,
        internshipId: internshipId,
      }
    );
    console.log(response.data);
    return response.data.message;
  } catch (error) {
    alert(error);
    return null;
  }
};

export const getInternship = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/internships/getInternshipById",
      {
        internshipId: id,
      }
    );

    return response.data;
  } catch (error) {
    alert(error);
  }
};

export const fetchTheUsers = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/company/getAllStudents",
      {
        companyId: id,
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
