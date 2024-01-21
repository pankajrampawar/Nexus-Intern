// Import React
import React from 'react';

// Functional component
export default function UserAnalysisCard(props) {

    const handleAccept = async (id) => {
        const response = await acceptInvitation(id);
        
    }

    const handleReject = async (id) => {
        const response = await rejectInvitation(id); 
    }

  return (
    <div className="text-white flex text-xl bg-primary p-5 max-w-[900px] rounded-xl overflow-hidden gap-10 ">
      <section className="flex-1/3">
        <div>
          <span>Name: </span>
          {props.name}
        </div>

        <div>
          <span>Mobile No: </span>
          {props.phone}
        </div>

        <div>
          <span>College: </span>
          {props.college}
        </div>

        <div>
          <span>Email: </span>
          {props.email}
        </div>
      </section>

      {/* Section 2 - 2/3 of the width */}
      <section className="flex-2/3">
        <div>
          <span>bio:</span>
          {props.bio}
        </div>
        
        {/* Container for Resume URL with increased height and overflow-x-auto */}
        <div className="overflow-x-auto max-h-[100px]">
          <span>Resume URL: </span>
          {props.resume}
        </div>

        <div>
          <span>Skills</span>
          {props.skills}
        </div>

        <div className='flex gap-5 mt-5'>
            <button className='p-2 bg-teal-800 rounded-xl' onClick={()=>{handleAccept(props.id)}}>accept</button>
            <button className='p-2 bg-teal-800 rounded-xl' onClick={()=>{handleReject(props.id)}}>Reject</button>
        </div>
      </section>
    </div>
  );
}
