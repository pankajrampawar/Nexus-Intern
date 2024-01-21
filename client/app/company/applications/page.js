'use client';

import { useState, useEffect } from 'react';
import { fetchTheUsers } from '@/app/action';
import UserAnalysisCard from '../ui/userAnalysisCard';

export default function Applications() {

    const [students, setStudens] = useState('');

    useEffect(()=>{
        const getAllAppliedUsers = async ()=>{
            const companyId = "65abe6affd90453c7e75bc5a"
            const allAppliedUsers = await fetchTheUsers(companyId);
            console.log(allAppliedUsers)
            setStudens(allAppliedUsers);
        }

        getAllAppliedUsers();
    }, [])
    
    return(
        <div className='min-w-[1000px]'>
            {
                students && students.map((element) => {
                    return <UserAnalysisCard key={element.phone} name={element.fullName} phone={element.phone} email={element.email} college={element.college} bio={element.bio} resume={element.resume} sills={element.skills} id={element._id}/>
                })
            }
        </div>
    )
}