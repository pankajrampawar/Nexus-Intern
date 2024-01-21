'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getInternship } from "@/app/action"

export default function Apply() {

    const params = useParams()

    const [info, setInfo] = useState({})

    useEffect(()=>{
        const getInternshipInfo = async() => {
            const newInfo  = await getInternship(params.id);
            console.log(newInfo)
            setInfo(newInfo)
        }
        getInternshipInfo();
    }, [])
    return (
        <main className="bg-primary max-w-[1000px] min-w-[1000px] mx-auto p-10 text-white text-xl">
            <section className="border-b border-white pb-10">
                <div className="text-3xl font-bold mb-10">
                    {info.title}
                    <span className="text-sm ml-auto">{info.location}</span>    
                </div>
                <div>
                    {info.description}
                </div>
            </section>

            <section className="flex flex-col mt-20 gap-10 pb-10 border-b">
                <div className="flex justify-start gap-40 items-center">
                    <span className="text-3xl font-bold">Comapany name</span><span className="ml-auto">{info.companySector}</span>
                </div>

                <div className="flex justify-between">
                    <span>Location: {info.location}</span>
                    <span>Stipend: {info.stipend}</span>
                    <span>applyBy: {info.applyBy}</span>
                </div>
            </section>

            <section className="mt-10 pb-10 border-b">
                <div className="text-3xl font-bold">Skills</div>
                <div className="flex justify-between">
                    { info.skills 
                        &&
                        info.skills.map((element) => {
                            return <div>
                                {element}
                                </div>
                        })
                    }
                </div>
            </section>

            <section className="flex justify-between mt-10 text-base pb-10 border-b">
                <div>
                    Applicants: {info.applicants}
                </div>
                <div>
                    Selected: {info.selected}
                </div>
                <div>
                    Rejected: {info.rejected}
                </div>
            </section>
            
            <section className="mt-10 ml-auto">
                <button className="bg-teal-600 p-4 rounded-2xl">Apply</button>
            </section>
        </main>
    )
}