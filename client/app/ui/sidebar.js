'use client'

import React from 'react';
import { navList } from '.././lib/navList';
import { useRouter } from 'next/navigation';

export default function Sidebar() {

    const router = useRouter();
    
    const [isFilterClicked, setIsFilterCLicked] = React.useState(false)

    const handleNavigation = (link) => {
        router.push(link)    
    };
    const handleClick = (name) => {
        console.log(name, "name");
    }

    const Navitems = () => {
        return <div className='flex flex-col items-center gap-8'>
            {
                navList.map((element) => {
                    return (
                        <div className='flex flex-col items-center text-white font-semibold text-sm cursor-pointer'
                            onClick={
                                ()=>{
                                    if (element.link) {
                                        handleNavigation(element.link)
                                    } else {
                                        handleClick(element.name)
                                    }
                                }
                            }
                        >
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
        <main className='bg-primary text-white min-w-[100px] max-w-[100px] text-center h-full rounded-2xl p-3 pr-3 '>
            <header className='mt-5 w-full flex justify-center'>
                <div className='font-bold text-xl text-center'>
                    Nexus Intern
                </div>
            </header>
            <section className='mt-10'>
                <Navitems/>
            </section>
        </main>
    )
}