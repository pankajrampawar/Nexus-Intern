'use client'

import React from 'react';
import { navList } from '.././lib/navList';
import { useRouter } from 'next/navigation';
import FilterCard from './filterCard';

export default function Sidebar() {

    const router = useRouter();
    
    const [isFilterClicked, setIsFilterCLicked] = React.useState(false);

    const handleNavigation = (link) => {
        router.push(link)    
    };
    const handleClick = (name) => {
        if(name === 'Filters') {
            setIsFilterCLicked((prev) => !prev);
            console.log("Filter clicked")
        }
    }

    const Navitems = () => {
        return <div className='flex flex-col items-center gap-8'>
            {
                navList.map((element) => {
                    return (
                        <div className='flex flex-col items-center text-white font-semibold text-sm cursor-pointer relative'
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

            {
                isFilterClicked 
                &&
                <div className='absolute left-32 -translate-y-1/2 shadow-2xl z-40 rounded-3xl'>
                    <FilterCard/>
                </div>
            }
        </main>
    )
}