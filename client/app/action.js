import axios from 'axios'

export const getAllInternships = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/internships/getAllInternships')
        console.log(response.data.internships);
        return response.data.internships;
    } catch (error) {
        alert("unable to get internships internal server error");
        console.log(error);
    }
}