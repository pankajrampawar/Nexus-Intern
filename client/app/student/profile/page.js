'use client'

import { useState, useEffect } from 'react';

export default function Profile() {

    const [userData, setUserData] = useState({
        name: "",
        bio: "",
        profilePic: "",
        skills: [''],
        pastInternships: ' ',
        college: ' ',
        education: ' '
    })

    return (
        <main className="bg-primary">
            <section>
                <div>
                    <img src={userData.profileImage}/>
                </div>

                <div>
                    <div>
                        <h1>{userData.name}</h1>
                        <h1>{userData.email}</h1>
                        <h1>{userData.phone}</h1>
                        <h2>{userData.college}</h2>
                    </div>

                    <div>
                        <h2>{userData.resume}</h2>
                    </div>
                    <div>
                        {userData.skills.map((skill) => {
                            return (<div>
                                {skill}
                                </div>)
                        })}
                    </div>

                    <div>
                        <h2>{userData.education}</h2>
                    </div>
                </div>
            </section>
        </main>
    )
}