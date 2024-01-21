"use client";
import { useState } from "react";
import clsx from "clsx";
import { companyLogin, studentLogin, studentSignup } from "@/app/action.js";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const StudentForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await companyLogin(formData);

      if (response) {
        console.log("Form submitted successfully!");
        console.log(
          response.data.data.refreshToken,
          response.data.data.accessToken,
          response.data.data.company._id
        );
        Cookies.set("accessToken", response.data.data.accessToken);
        Cookies.set("refreshToken", response.data.data.refreshToken);
        localStorage.setItem("companyId", response.data.data.company._id);
        router.push("/student/Home");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const submitForm = async () => {
    try {
      const response = await studentLogin(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className={`bg-primary shadow-md  px-8 pt-6 pb-8 mb-4 w-full max-w-lg rounded-2xl`}
        onSubmit={handleSubmit}
      >
        <div className={clsx("mb-4")}>
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

        <div className={clsx("mb-4")}>
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

        <button
          type="submit"
          className={clsx(
            "bg-blue-500 mt-2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
          )}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
