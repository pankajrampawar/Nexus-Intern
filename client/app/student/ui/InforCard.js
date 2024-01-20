'use client'
import Link from "next/link"
import { useState } from 'react';


export default function InfoCard(props) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prev) => !prev)
        
    };

    return (
        <div className="flex flex-col justify-between text-white bg-primary max-w-[300px] min-w-[300px] gap-2 p-4 max-h-[200px] min-h-[200px] rounded-2xl cursor-pointer"
            onClick={handleClick}
        >
            <div className="font-semibold text-2xl tracking-wide">
                <h1>{props.title} </h1>
            </div>

            <p className="max-h-[70px] overflow-hidden text-medium font-normal">{props.details}</p>

            <div className="flex text-gray-400 justify-between pr-5">
                <p>${props.stipend}/month</p>
                <p>{props.time} days ago</p>
            </div>
        </div>
    )
}