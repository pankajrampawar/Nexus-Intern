'use client'

import React from 'react';
import { navList } from '../lib/navlilst';


export default function Sidebar() {

    const Navitems = () => {
        return <div className='flex flex-col items-center gap-8'>
            {
                navList.map((element) => {
                    return (
                        <div className='flex flex-col items-center text-white font-semibold text-sm'>
                            <div>
                                <img src={element.img} alt={element.name} className='invert' />
                            </div>
                            <div>
                                {element.name}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    }

    return (
        <main className='bg-primary text-white max-w-[200px] text-center h-full rounded-2xl p-3 pr-3 '>
            <header className='mt-5 w-full flex justify-center'>
                <div>
                    Samarho Sarthi
                </div>
            </header>
            <section className='mt-10'>
                <Navitems/>
            </section>
        </main>
    )
}