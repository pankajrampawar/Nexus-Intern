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
            <section className='min-w-[700px]'>
                hello
            </section>
        </main>
    )
}