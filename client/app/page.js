"use client";
import { useState } from "react";
import clsx from "clsx";
import { studentSignup } from "@/app/action.js";
const StudentForm = () => {

  const [fullName,setFullName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [phone,setPhone]=useState("");
  const [bio,setBio]=useState("");
  const [skill,setSkill]=useState("");
  const [resume,setResume]=useState("");
  const [college,setCollege]=useState("");
  
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = (action) => {
    if (action === "sum") {
      setPageNumber((prev) => prev + 1);
    } else if (action === "minus") {
      setPageNumber((prev) => prev - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "bio":
        setBio(value);
        break;
      case "skill":
        setSkill(value);
        break;
      case "resume":
        setResume(value);
        break;
      case "college":
        setCollege(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      fullName,
      email,
      password,
      phone,
      bio,
      skill,
      resume,
      college,
    });

    try {
      const response = await studentSignup({
        fullName,
        email,
        password,
        phone,
        bio,
        skill,
        resume,
        college,
      });

      if (response) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };



  /*const [formData, setFormData] = useState({
    fullName: "",
    profileImage: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    skill: "",
    resume: "",
    college: "",
  });*/
  /*
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    console.log(name, value, type);
    /*const newValue = type === "file" ? e.target.files[0] : value;

    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const newFormData = new FormData();
      console.log(formData);
      newFormData.append("fullName", formData.fullName);
      newFormData.append("profileImage", formData.profileImage);
      newFormData.append("email", formData.email);
      newFormData.append("password", formData.password);
      newFormData.append("phone", formData.phone);
      newFormData.append("bio", formData.bio);
      newFormData.append("skill", formData.skill);
      newFormData.append("resume", formData.resume);
      newFormData.append("college", formData.college);

      console.log(newFormData, "hello");
      const response = await studentSignup(formData);

      if (response) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const [pageNumber, setPageNumber] = useState(1);

  const submitForm = async () => {
    try {
      const response = await studentSignup(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (prop) => {
    if (prop === "sum") {
      setPageNumber((prev) => prev + 1);
    } else if (prop === "minus") {
      setPageNumber((prev) => prev - 1);
    }
  };
*/
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className={`bg-primary shadow-md  px-8 pt-6 pb-8 mb-4 w-full max-w-lg rounded-2xl`}
        onSubmit={handleSubmit}
      >
        <div
          className={clsx("mb-4", {
            hidden: pageNumber !== 1,
          })}
        >
          <label
            htmlFor="fullName"
            className="block text-white text-sm font-bold mb-2"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={handleChange}
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            required
          />
        </div>

        <div
          className={clsx("mb-4", {
            hidden: pageNumber !== 1,
          })}
        >
          <label
            htmlFor="profileImage"
            className="block text-white text-sm font-bold mb-2"
          >
            Profile Image:
          </label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleChange}
            accept="image/*"
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            //required
          />
        </div>

        <div
          className={clsx("mb-4", {
            hidden: pageNumber !== 1,
          })}
        >
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            required
          />
        </div>

        <div
          className={clsx("mb-4", {
            hidden: pageNumber !== 2,
          })}
        >
          <label
            htmlFor="password"
            className="block text-white text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            required
          />
        </div>

        <div
          className={clsx("mb-4", {
            hidden: pageNumber !== 2,
          })}
        >
          <label
            htmlFor="phone"
            className="block text-white text-sm font-bold mb-2"
          >
            Phone
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            required
          />
        </div>

        <div
          className={clsx("mb-4", {
            hidden: pageNumber !== 2,
          })}
        >
          <label
            htmlFor="bio"
            className="block text-white text-sm font-bold mb-2"
          >
            Bio
          </label>
          <input
            type="text"
            id="bio"
            name="bio"
            value={bio}
            onChange={handleChange}
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            required
          />
        </div>

        <div
          className={clsx("mb-4", {
            hidden: pageNumber !== 3,
          })}
        >
          <label
            htmlFor="skill"
            className="block text-white text-sm font-bold mb-2"
          >
            Skill
          </label>
          <input
            type="text"
            id="skill"
            name="skill"
            value={skill}
            onChange={handleChange}
            className="shadow appearance-none border rounded-2xl m-1 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            required
          />
        </div>

        <div
          className={clsx("mb-4", {
            hidden: pageNumber !== 3,
          })}
        >
          <label
            htmlFor="college"
            className="block text-white text-sm font-bold mb-2"
          >
            College
          </label>

          <input
            type="text"
            id="college"
            name="college"
            value={college}
            onChange={handleChange}
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            required
          />
          {college}
        </div>

        <div
          className={clsx("mb-4", {
            hidden: pageNumber !== 3,
          })}
        >
          <label
            htmlFor="resume"
            className="block text-white text-sm font-bold mb-2"
          >
            Resume URL
          </label>
          <input
            type="text"
            id="resume"
            name="resume"
            value={resume}
            onChange={handleChange}
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            required
          />
        </div>

        <button
          type="button"
          className={clsx(
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline",
            {
              hidden: pageNumber === 3,
            }
          )}
          onClick={() => {
            handlePageChange("sum");
          }}
        >
          Next
        </button>

        <button
          type="button"
          className={clsx(
            "bg-blue-500 m-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline",
            {
              hidden: pageNumber === 1,
            }
          )}
          onClick={() => {
            handlePageChange("minus");
          }}
        >
          Back
        </button>

        <button
          type="submit"
          className={clsx(
            "bg-blue-500 mt-2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline",
            {
              hidden: pageNumber !== 3,
            }
          )}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
