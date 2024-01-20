'use client'

import InfoCard from "../ui/InforCard"
import React from 'react'
import {
    getAllInternships
} from '@/app/action.js'

export default function Home() {

    const [internships, setInternships] = React.useState()

    React.useEffect(()=>{
        const getArrayOfInternships = async ()=> {
            const arrayOfInternships = await getAllInternships();
            setInternships(arrayOfInternships);
        }

        getArrayOfInternships();
    }, [])     

    return (
        <main className="flex flex-col gap-20 text-white pb-40">
            <section className="flex-1 relative rounded-b-3xl sm:mr-5">
                <div className="overflow-hidden max-h-[400px] relative rounded-b-3xl z-10">
                    <img src="/internship.jpg" alt="interns" className="sm:-mt-40"/>
                </div>

                <div className="overlay z-0">
                </div>

                <div className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl sm:text-3xl xl:text-5xl text-center font-bold leading-snug">
                    Find the  best internships personalized just for you..
                </div>
            </section>

            <section className="flex-1 flex flex-col gap-10">
                <div className="flex flex-col itmes-center sm:start">
                    <h1 className="text-xl sm:text-3xl font-semibold hover-pointer text-center sm:text-start">Technology</h1>
                    <div className="flex gap-20 mt-10 m-2 sm:ml-10 overflow-scroll flex-grow">

                    </div>
                </div>
                <div className="flex flex-col itmes-center sm:start">
                    <h1 className="text-xl sm:text-3xl font-semibold hover-pointer text-center sm:text-start">Banking</h1>
                    <div className="flex gap-20 mt-10 m-2 sm:ml-10 overflow-scroll flex-grow">

                    </div>
                </div>
                <div className="flex flex-col itmes-center sm:start">
                    <h1 className="text-xl sm:text-3xl font-semibold hover-pointer text-center sm:text-start">Civil</h1>
                    <div className="flex gap-20 mt-10 m-2 sm:ml-10 overflow-scroll flex-grow">

                    </div>
                </div>
                <div className="flex flex-col itmes-center sm:start">
                    <h1 className="text-xl sm:text-3xl font-semibold hover-pointer text-center sm:text-start">Automobile</h1>
                    <div className="flex gap-20 mt-10 m-2 sm:ml-10 overflow-scroll flex-grow">

                    </div>
                </div>
                <div className="flex flex-col itmes-center sm:start">
                    <h1 className="text-xl sm:text-3xl font-semibold hover-pointer text-center sm:text-start">FMCG</h1>
                    <div className="flex gap-20 mt-10 m-2 sm:ml-10 overflow-scroll flex-grow">

                    </div>
                </div>
                
            </section>
        </main>
    )
}