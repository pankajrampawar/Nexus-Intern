'use client'

import React, { useState, useEffect } from 'react'

export default function MobileMenu() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleMenuClick = ()=>{
        setIsDrawerOpen((prev) => !prev)
    }

    return (
        <main className='fixed z-50 bg-gray-900 w-full p-2 flex  justify-start gap-5 items-center'>
            <div>
                <img src='/menu.svg' alt='menu' className='invert'/>
            </div>

            <div className='text-white font-semibold text-xl'>
                Nexus-Intern
            </div>
        </main>
    )
}