'use client';

import { useState, useEffect } from 'react';


export default function Applications() {

    const [students, setStudens] = useState('');

    useEffect(()=>{
        const getAllAppliedUsers = async ()=>{
            const companyId = " "
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