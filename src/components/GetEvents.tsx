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

const GetEvents = ({ startingDate, endingDate }: { startingDate?: String, endingDate?: String }) => {
    const [events, setEvents] = useState<Event[]>([])
    const [loading, setLoading] = useState(Boolean)
    const [error, setError] = useState(Boolean)
    const [errorMessage, setErrorMessage] = useState(String)

    useEffect(() => {
        const fecthEvents = async () => {
            try {
                setLoading(true)
                const response = await axios.get('/api/events/get-events', {
                    params: {
                        startingDate,
                        endingDate
                    }
                })
                if (response) {
                    setEvents(response?.data?.events)
                    setLoading(false)
                }
            } catch (error) {
                setError(true)
                setLoading(false)
                setErrorMessage("No Event Found")
            }
        }
        fecthEvents()
    }, [startingDate, endingDate])

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-[60vh] font-bold text-2xl'>
                <h1 >Please Wait While We are Loading...</h1>
            </div>
        )
    }

    return (
        <div>
            {!error ?
                (<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        events.map((item) => (
                            <div key={item.id} className=''>
                                <Card id={item.id} title={item.title} description={item.description} location={item.location} date={item.date} />
                            </div>
                        ))
                    }
                </div>) : (
                    <div>
                        <h1 className='text-red-500'>{errorMessage}</h1>
                    </div>
                )
            }
        </div>
    )
}

export default GetEvents