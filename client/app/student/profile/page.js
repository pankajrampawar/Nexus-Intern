"use client";

import { getUserInfo } from "@/app/action";
import { useState, useEffect } from "react";

import Link from "next/link";

export default function Profile() {
  const [application, setApplication] = useState();

  // useEffect(()=>{
  //     const getApplicationsArray = async () => {
  //         const applicationArray = await getUserApplication();
  //         setApplication(applicationArray);
  //     }

  //     getApplicationsArray();
  // }, [])

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchUserInfo = async () => {
      const userInfo = await getUserInfo(userId);
      console.log(userInfo);
      setUserData({
        name: userInfo.fullName,
        email: userInfo.email,
        phone: userInfo.phone,
        college: userInfo.college,
        bio: userInfo.bio,
        skills: userInfo.skills,
        resume: userInfo.resumeurl,
        applications: userInfo.applications,
      });
    };

    fetchUserInfo();
  }, []);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    college: " ",
    bio: "",
    skills: [""],
    resume: "",
    application: [""],
  });
  return (
    <main className="bg-primary max-w-[1000px] mx-auto p-10 mt-10 sm:mt-0 flex flex-col gap-10">
      <section className="w-full text-white border border-white rounded-3xl flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10 p-5">
        <div>
          <img src="/profile.png" className="max-w-[250px] rounded-3xl" />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="sm:text-2xl font-semibold">{userData.name}</h1>

          <h2 className="text-xl">{userData.email}</h2>
          <h2 className="text-xl">{userData.phone}</h2>

          <h2 className="text-xl">{userData.college}</h2>
        </div>
      </section>

      <section>
        <h1 className="text-white text-2xl font-bold m-5 underline underline-offset-8">
          Bio
        </h1>
        <div className="w-full text-white border border-white bg-on-primary min-h-[150px] max-h-[150px] p-5 overflow-scroll rounded-3xl">
          {userData.bio}
        </div>
      </section>

      <section>
        <span className="text-white font-bold m-5 text-2xl underline underline-offset-8">
          Skills
        </span>
        <div className="flex text-white gap-4 text-xl ml-10 mt-5">
          {userData.skills.map((element) => {
            return <div>{element}</div>;
          })}
        </div>
      </section>

      <section>
        <span className="text-white font-bold text-2xl m-5 underline pr-10 underline-offset-8">
          Resume Link
        </span>

        <div className="text-blue-200 underline ml-10 mt-8">
          {userData.resume}
        </div>
      </section>

      <section>
        <div className="text-white font-bold text-2xl">Your Applications</div>
        <div className="text-white m-6 text-xl">
          {userData.application ? (
            <div>"GO to application page"</div>
          ) : (
            "No applications added."
          )}
        </div>
      </section>
    </main>
  );
}
