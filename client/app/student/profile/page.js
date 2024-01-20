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
        <main className="bg-primary max-w-[1000px] mx-auto p-5 mt-10 sm:mt-0">
            <section className='w-full text-white border border-white flex flex-col sm:flex-row gap-5 p-5'>
                <div>
                    <img src='/profile.png' className='max-w-[250px] rounded-3xl'/>
                </div>

                <div className='flex flex-col gap-5'>
                    <h1 className='sm:text-2xl font-semibold'>
                        Pankaj Pawar
                    </h1>

                    <h2 className='text-xl'>
                        pankajPawars123@gmail.com
                    </h2>
                </div>
            </section>
        </main>
    )
}