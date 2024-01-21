'use client';

import { useState, useEffect } from 'react';
import { fetchTheUsers } from '@/app/action';

export default function Applications() {

    const [students, setStudens] = useState('');

    useEffect(()=>{
        const getAllAppliedUsers = async ()=>{
            const companyId = "65abe6affd90453c7e75bc5a"
            const allAppliedUsers = await fetchTheUsers(companyId);
            setStudens(allAppliedUsers);
        }

        getAllAppliedUsers();
    }, [])
    
    return(
        <div>
            Applications page 
        </div>
    )
}