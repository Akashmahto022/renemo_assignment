import Link from 'next/link'
import React from 'react'

const Card = ({ id, title, description, location, date }: { id: string, title: string, description: string, location: string, date: string }) => {

    const eventDate = date
    const readAbleDate = new Date(eventDate).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    return (
        <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
            <Link href={`/events/${id}`}>
                <div className="cursor-pointer">
                    <h1 className="text-2xl font-bold mb-2">{title}</h1>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <div>
                        <p className="text-sm text-gray-500"><span className="font-semibold">Venue:</span> {location}</p>
                        <p className="text-sm text-gray-500"><span className="font-semibold">Date:</span> {readAbleDate}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card