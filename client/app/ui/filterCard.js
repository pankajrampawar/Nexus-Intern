'use client'

import { useState, useEffect } from 'react';

export default function FilterCard() {

    const [isRemote, setIsRemote] = useState('')
    
    const [stipend, setStipend] = useState({
        lower: "", 
        upper: "",
    });
    
    const [timePeriod, setTimePeriod] = useState('');

    const changeRemote = ()=> {
        setIsRemote((prev) => !prev)
    };

    const changeStipend = (e) => {
        const change = e.target;
        setStipend((prev)=>({
            ...prev,
            [change.id]: change.value
        }))
    }

    return (
        <main className='bg-primary text-start max-w-[350px] min-w-[300px] p-5 rounded-3xl flex flex-col gap-4 '>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>Stipend</h1>
                    <div className='text-black flex justify-evenly'>
                        <select id="lower" value={stipend.lower} onChange={changeStipend}>
                            <option value={0}>0</option>
                            <option value={1000}>1000</option>
                            <option value={5000}>5000</option>
                            <option value={10000}>10000</option>
                        </select>

                        <select id='upper' value={stipend.upper} onChange={changeStipend}>
                            <option value={1000}>1000</option>
                            <option value={5000}>5000</option>
                            <option value={10000}>10000</option>
                            <option value={10000000}>no limit</option>
                        </select>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-xl'>Time period</h1>
                    <div className='flex justify-evenly mt-2'>
                        <div className='bg-on-primary aspect-square w-8 cursor-pointer rounded-full flex justify-center items-center'>1</div>
                        <div className='bg-on-primary aspect-square w-8 cursor-pointer rounded-full flex justify-center items-center'>2</div>
                        <div className='bg-on-primary aspect-square w-8 cursor-pointer rounded-full flex justify-center items-center'>3</div>
                        <div className='bg-on-primary aspect-square w-8 cursor-pointer rounded-full flex justify-center items-center'>6</div>
                        <div className='bg-on-primary aspect-square w-8 cursor-pointer rounded-full flex justify-center items-center'>9</div>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-xl'>Location</h1>
                    <div className='flex justify-evenly mt-2'>
                        <div>Remote</div>
                        <div>On Site</div>
                    </div>
                </div>

                <div className='flex justify-evenly text-xl font-semibold tracking-wider'>
                    <div>Save</div>
                    <div>Discard</div>
                </div>
        </main>
    )
}