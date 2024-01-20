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
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("fullName", data.fullName);
    formData.append("phone", data.phone);
    formData.append("info", data.info);
    formData.append("profileImage", data.profileImage);
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async (id) => {
  try {
    const response  = await axios.post("http://localhost:8080/api/student/StudentInfo", {
      userId: id
    });

    console.log(response.data)
    return (response.data.student);
  } catch (error) {
    alert('unable to get the user info');
    console.log(error)
  }
}