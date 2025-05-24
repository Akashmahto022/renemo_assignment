import GetEvents from '@/components/GetEvents'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="relative w-full h-80 md:h-[480px] flex items-center justify-center">
        <Image
          src="/images/header_image.jpeg"
          alt="header image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl text-white font-bold">title here</h1>
          <h1 className="font-script text-2xl md:text-4xl text-white mb-2 drop-shadow-lg">
            "hasd ioa dasondas dasnd "
          </h1>
        </div>
      </div>
      <div className='m-2 md:m-10'>
        <div className='flex gap-4 md:justify-between items-center'>
          <div>
            <h1 className='text-lg md:text-2xl font-bold'>
              Explore Upcoming Events
            </h1>
          </div>
          <div>
            <Link href={"/events"}>
              <span className='p-1 md:p-4 rounded-full border-2 border-gray-400 hover:bg-slate-500 hover:text-white'>Check All Events</span>
            </Link>
          </div>
        </div>
        <div className='mt-4'>
          <GetEvents />
        </div>
      </div>
    </div>
  )
}

export default page