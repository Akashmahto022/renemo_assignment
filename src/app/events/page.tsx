'use client';

import GetEvents from '@/components/GetEvents'
import React, { useState } from 'react'

const page = () => {
  const [formDate, setFormDate] = useState({
    startingDate: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDate({ ...formDate, [e.target.name]: e.target.value });
  };


  return (
    <div className='m-3 md:m-10'>
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center my-4'>
        <h1 className='font-bold text-xl md:text-2xl underline'>List Of All Event Near You!</h1>
        <div className='flex justify-center items-center gap-4'>
          <form action="" className='flex justify-center items-center gap-4'>
            <h1>Filter By Date :- </h1>
            <input id="name"
              name="startingDate"
              type="date"
              value={formDate.startingDate}
              onChange={handleChange}
              required className='border px-2 py-1'
            />
          </form>
        </div>
      </div>
      <div>
        <GetEvents startingDate={formDate.startingDate} />
      </div>
    </div>
  )
}

export default page