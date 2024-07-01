'use client'
import React, { useState } from 'react'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({subsets: ['latin'], weight: ['400']})
const tabsArrival = ['All', 'Shoes', 'T-shirts', 'Coats', 'Pants']

export default function NewArrival() {
    const [selectedArrival, setSelectedArrival] = useState(0);
    const handleArrival = (index: number) => {
        setSelectedArrival(index);
    }
  return (
    <div className='container pt-32'>
        <div className='text-center'>
            <h3 className={`${openSans.className} text-[30px] text-gray-500`}>
                For your style
            </h3>
            <h2 className='font-semibold text-5xl'>
                New Arrival
            </h2>
            <ul className='flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-xl'>
                {tabsArrival.map((arrival, index) => (
                    <li 
                        key={index} 
                        className={`${selectedArrival === index && "text-accent"} cursor-pointer hover:text-accent`}
                        onClick={() => handleArrival(index)}
                    >
                        {arrival}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
