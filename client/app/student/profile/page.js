'use client'

import { useState, useEffect } from 'react';

export default function Profile() {

    const [application, setApplication] = useState();

    useEffect(()=>{
        const getApplicationsArray = async () => {
            const applicationArray = await getUserApplication();
            setApplication(applicationArray);
        }

        getApplicationsArray();
    }, [])
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
        <main className="bg-primary max-w-[1000px] mx-auto p-10 mt-10 sm:mt-0 flex flex-col gap-10">
            <section className='w-full text-white border border-white rounded-3xl flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10 p-5'>
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
                    <h2 className='text-xl'>
                        9356446407
                    </h2>

                    <h2 className='text-xl'>
                        VESIT
                    </h2>
                </div>
            </section>

            <section>
                <h1 className='text-white text-2xl font-bold m-5 underline underline-offset-8'>
                    Bio
                </h1>
                <div className='w-full text-white border border-white bg-on-primary min-h-[150px] max-h-[150px] p-5 overflow-scroll rounded-3xl'>
                lorem ipasdkf asfdasidf ifhds jksdfliu asfdjasdn asudfhaosdf lorem ipasdkf asfdasidf ifhds jksdfliu asfdjasdn asudfhaosdf lorem ipasdkf asfdasidf ifhds jksdfliu asfdjasdn asudfhaosdf lorem ipasdkf asfdasidf ifhds jksdfliu asfdjasdn asudfhaosdf lorem ipasdkf asfdasidf ifhds jksdfliu asfdjasdn asudfhaosdf lorem ipasdkf asfdasidf ifhds jksdfliu asfdjasdn asudfhaosdf 
                lorem ipasdkf asfdasidf ifhds jksdfliu asfdjasdn asudfhaosdflorem ipasdkf asfdasidf ifhds jksdfliu asfdjasdn asudfhaosdflorem ipasdkf asfdasidf ifhds jksdfliu asfdjasdn asudfhaosdflorem ipasdkf asfdasidf ifhds jksdfliu asfdjasdn asudfhaosdf
                </div>
            </section>
            
            <section>
                <span className='text-white font-bold text-2xl m-5 underline pr-10 underline-offset-8'>
                    Resume Link
                </span>

                <div className='text-blue-200 underline ml-10 mt-8'>
                    askfjapsidfanwiofjaeiwpfnqpwodeifjqwpeiofqiowefjwieufhpiewfhpwegfnqiuergqpueirgfwefnpwinp
                </div>
            </section>

            <section>
                <div className='text-white font-bold text-2xl'>
                    Your Applications
                </div>
            </section>
        </main>
    )
}