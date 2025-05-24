import Link from 'next/link'
import React from 'react'

const Card = ({id, title, description, location, date}: {id: String, title: String, description: String, location:String, date:String}) => {

    const event = {
        title: "React Conference 2025",
        description: "Join us for a day of React talks, workshops, and networking.",
        date: "June 15, 2025"
    }

    return (
        <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
            <Link href={`/events/${id}`}>
                <div className="cursor-pointer">
                    <h1 className="text-2xl font-bold mb-2">{title}</h1>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <p className="text-sm text-gray-500"><span className="font-semibold">Date:</span> {date}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card