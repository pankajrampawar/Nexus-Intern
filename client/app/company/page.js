'use client'

import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter();

    const addInternships = () => {
        router.push('/company/addInternship');
    };

    const handleApplications = () => {
        router.push('/company/applications');
    }

    return (
        <main className="flex ml-auto p-4 text-white gap-10 text-2xl">
            <div className="bg-primary p-10 flex justify-center items-center rounded-2xl cursor-pointer"
                onClick={addInternships}
            >
                Add Internship
            </div>

            <div className="bg-primary p-10 flex justify-center items-center rounded-2xl cursor-pointer"
                onClick = { handleApplications}
            >
                Applications
            </div>
        </main>
    )
}

