'use client'

import Button from '@/components/Button'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = ({ params }: { params: Promise<{ eventId: String }> }) => {

    const [currentEventDetails, setCurrentEventDetails] = useState(Object)
    const [loading, setLoading] = useState(Boolean)
    const [error, setError] = useState(Boolean)
    const [errorMessage, setErrorMessage] = useState(String)

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                setLoading(true)
                let id: String = ""
                await params.then((item) => { id = item.eventId })
                if (id) {
                    const response = await axios.get(`/api/events/get-events/${id}`)
                    if (response) {
                        setCurrentEventDetails(response.data?.event)
                        setLoading(false)
                    }
                }
            } catch (error) {
                setErrorMessage("Not Able To Get The Event Details Try After Some Time")
                setLoading(false)
                setError(true)
            }
        }
        fetchEventDetails()
    }, [params])



    const readableDate = new Date(currentEventDetails.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-[60vh] font-bold text-2xl'>
                <h1>Please Wait While We Are Loading...</h1>
            </div>
        )
    }

    return (
        <div className='m-3 md:m-10'>
            {error ? (
                <div className='flex justify-center items-center min-h-[60vh] font-bold text-2xl text-red-500'>
                    <h1>{errorMessage}</h1>
                </div>
            ) :
                (
                    <div>
                        <div>
                            <h1 className='text-3xl font-bold mb-2'>{currentEventDetails.title}</h1>
                        </div>
                        <div className='flex justify-center gap-4'>
                            <div className="md:w-2/3">

                                <div className="w-full h-[420px] relative mb-6 rounded-2xl overflow-hidden">
                                    <img
                                        src={"/images/header_image.jpeg"}
                                        alt={"event details image"}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className='md:hidden md:w-1/3 max-w-xl max-h-[420px] p-4 mb-4 border-[1px] border-gray-300 rounded-2xl'>
                                    <h1 className="text-3xl font-bold mb-2">{currentEventDetails.title}</h1>
                                    <p className="text-gray-600 mb-4">{readableDate} | <span className="font-semibold">{currentEventDetails.location}</span></p>
                                    <p className="text-lg text-gray-800 mb-6">{currentEventDetails.description}</p>
                                    <div>
                                        button
                                    </div>
                                </div>
                                <h1 className="text-3xl font-bold mb-2 underline">About The Event</h1>
                                <p className="text-gray-600 mb-4">{readableDate} | <span className="font-semibold">{currentEventDetails.location}</span></p>
                                <p className="text-lg text-gray-800 mb-6">{currentEventDetails.description}</p>
                            </div>
                            <div className='hidden md:block md:w-1/3 max-w-xl max-h-[420px] p-4 border-[1px] border-gray-300 rounded-2xl'>
                                <h1 className="text-3xl font-bold mb-2">{currentEventDetails.title}</h1>
                                <p className="text-gray-600 mb-4">{readableDate} | <span className="font-semibold">{currentEventDetails.location}</span></p>
                                <p className="text-lg text-gray-800 mb-6 h-60">{currentEventDetails.description}</p>
                                <div className='flex justify-end items-end'>
                                    <Button text='Register' />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default page