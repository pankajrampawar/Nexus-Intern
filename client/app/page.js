'use client'
import { useState } from 'react';
import clsx from 'clsx';
import { studentLogin } from '@/app/action.js'
const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    profileImage: null,
    email: '',
    password: '',
    phone: '',
    bio: '',
    skill1:'',
    skill2: '',
    skill3: '',
    skill4: '',
    college: '',
    resume: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'file' ? e.target.files[0] : value;

    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataWithFile = new FormData();

      for (const key in formData) {
        formDataWithFile.append(key, formData[key]);
      }

      const response = await studentLogin(formDataWithFile)

      if (response) {
        console.log('Form submitted successfully!');
        
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = (prop) => {
    if (prop === "sum") {
      setPageNumber((prev) => prev+1 );
    } else if (prop === "minus") {
      setPageNumber((prev) => prev-1);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className={`bg-primary shadow-md  px-8 pt-6 pb-8 mb-4 w-full max-w-lg rounded-2xl`}
        onSubmit={handleSubmit}
      >
        <div className={clsx("mb-4",
          {
            "hidden" : pageNumber !== 1
          }
        )}>
          <label htmlFor="fullName" className="block text-white text-sm font-bold mb-2">
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

        <div className={clsx("mb-4",
          {
            'hidden' : pageNumber !== 1
          }
        )}>
          <label htmlFor="profileImage" className="block text-white text-sm font-bold mb-2">
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

        <div className={clsx("mb-4",
          {
            'hidden' : pageNumber !== 1
          }
        )}>
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
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

        <div className={clsx("mb-4",
          {
            'hidden' : pageNumber !== 2
          }
        )}>
          <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
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

        <div className={clsx("mb-4",
          {
            'hidden' : pageNumber !== 2
          }
        )}>
          <label htmlFor="phone" className="block text-white text-sm font-bold mb-2">
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

        <div className={clsx("mb-4",
          {
            'hidden' : pageNumber !== 2
          }
        )}>
          <label htmlFor="bio" className="block text-white text-sm font-bold mb-2">
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
        
        <div className={clsx("mb-4",
          {
            'hidden' : pageNumber !== 3
          }
        )}>
          <label htmlFor="skill" className="block text-white text-sm font-bold mb-2">
            Skill
          </label>
          <input
            type="text"
            id="skill"
            name="skill1"
            value={formData.skill1}
            onChange={handleChange}
            className="shadow appearance-none border rounded-2xl m-1 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            required
          />
           <input
            type="text"
            id="skill"
            name="skill2"
            value={formData.skill2}
            onChange={handleChange}
            className="shadow appearance-none border rounded-2xl m-1 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            required
          />
           <input
            type="text"
            id="skill3"
            name="skill3"
            value={formData.skill3}
            onChange={handleChange}
            className="shadow appearance-none border rounded-2xl m-1 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            required
          />
           <input
            type="text"
            id="skill"
            name="skill4"
            value={formData.skill4}
            onChange={handleChange}
            className="shadow appearance-none border rounded-2xl m-1 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-on-primary"
            required
          />
        </div>

         <div className={clsx("mb-4",
          {
            'hidden' : pageNumber !== 3
          }
        )}>
          <label htmlFor="college" className="block text-white text-sm font-bold mb-2">
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
        </div>

        <div className={clsx("mb-4",
          {
            'hidden' : pageNumber !== 3
          }
        )}>
          <label htmlFor="resume" className="block text-white text-sm font-bold mb-2">
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
          className={clsx("bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline",
            {
              'hidden' : pageNumber === 3
            }
          )}
          onClick={()=>{handlePageChange("sum")}}
        >
          Next
        </button>

        <button
          type="button"
          className={clsx("bg-blue-500 m-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline",
            {
              'hidden' : pageNumber === 1
            }
          )}
          onClick={()=>{handlePageChange("minus")}}
        >
          Back
        </button>

        <button
          type="submit"
          className={clsx("bg-blue-500 mt-2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline",
            {
              'hidden' : pageNumber !== 3
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
