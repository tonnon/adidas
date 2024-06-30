import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='container relative pt-16'>
        <Image 
            className='w-[100%] h-auto'
            src='/hero.png'
            width={1500}
            height={900}
            alt='Hero Image'
        />
        <div className='hidden sm:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-auto h-auto spave-y-3 lg:space-y-6 p-6 xl:space-y-8 rounded-sm shadow-2xl'>
          <h2 className='text-[22px] lg:text-[30px] xl:text-[40px] leading-tight'>
            Impossible is nothing
          </h2>
          <p className='text-gray-600 text-[14px] xl:text-[16px]'>
            all in or nothing
          </p>
          <button className='bg-[#333] uppercase text-white text-[12px] lg:text-[16px] py-2 xl:py-4 px-8 rounded hover:bg-accent'>
            Shop Now
          </button>
        </div>
    </div>
  )
}
