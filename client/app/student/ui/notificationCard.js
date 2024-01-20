'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';

export default function NotificationCard() {
    
    const router = useRouter();

    const [notifications, setNotifications] = useState([{ message: "Your application for infosys for internship has  been accepted" }])

    useEffect(()=>{
        const performNotificationAction = async (id) => {
            // const notification = await getNotification(id);
            console.log(notifications);
        }
    });

    const handleView = () => {
        router.push('applications');
    };    
    
    return (
        <div className='bg-primary rounded-3xl p-5 flex flex-col gap-10 max-w-[300px]'>
            {
                notifications.map((element) => {
                    return (
                        <div>
                            {element.message}
                        </div>
                    )
                })
            }
            <div className='bg-on-primary p-2 cursor-pointern rounded'
                onClick={handleView}
            >
                View
            </div>
        </div>
    )
}