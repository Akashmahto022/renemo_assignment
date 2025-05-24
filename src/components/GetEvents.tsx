'use client'

import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

type Event = {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
};

const GetEvents = () => {
    const [events, setEvents] = useState<Event[]>([])

    useEffect(() => {
        const fecthEvents = async () => {
            const response = await axios.get('/api/events/get-events')
            if (response) {
                setEvents(response?.data?.events)
            }
        }
        fecthEvents()
    }, [])

    // console.log(events)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    events.map((item) => (
                        <div key={item.id} className=''>
                            <Card id={item.id} title={item.title} description={item.description} location={item.location} date={item.date} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default GetEvents