"use client";
import { useState } from "react";
import clsx from "clsx";
import { studentSignup } from "@/app/action.js";
import axios from "axios";
const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    profileImage: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    skill: "",
    resume: "",
    college: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    console.log(name, value, type);
    const newValue = type === "file" ? e.target.files[0] : value;

    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const formDataWithFile = new FormData();

      for (const key in formData) {
        console.log(key, formData[key]);
        formDataWithFile.append(key, formData[key]);
      }
      console.log(formDataWithFile);
      const response = await axios.post(
        "http://localhost:8080/api/auth/student/register",
        formDataWithFile, // Use formDataWithFile instead of formData
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
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
            value={formData.fullName}
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
            required
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
            value={formData.email}
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
            value={formData.password}
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
            value={formData.phone}
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
            value={formData.bio}
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
            value={formData.skill}
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
            value={formData.college}
            onChange={handleChange}
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            required
          />
          {formData.college}
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
            value={formData.resume}
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
