'use client'
import React, { useEffect, useState } from 'react'
import { Open_Sans } from 'next/font/google'
import Data from '@/utils/productData'
import ProductCard, { ProductCardProps } from './ProductCard'

const openSans = Open_Sans({subsets: ['latin'], weight: ['400']})
const tabsArrival = ['All', 'Shoes', 'T-shirts', 'Coats', 'Pants']

export default function NewArrival() {
    const [selectedArrival, setSelectedArrival] = useState(0);
    const [data, setData] = useState([]);

    const shuffleArray = (array: any) => {
        return array
        .map((value: any) => ({ value, sort: Math.random() }))
        .sort((a: any, b: any) => a.sort -b.sort)
        .map(({value}:any) => value)
    }

    useEffect(() => {
        setData(shuffleArray(Data).slice(0, 15))
    }, [])

    const handleArrival = (index: number) => {
        const category = tabsArrival[index].toLowerCase()
        setSelectedArrival(index);

        if (category === 'all') {
            setData(shuffleArray(Data).slice(0, 15))
            return
        }

        const filterData = Data.filter((product) => product.category.includes(category));
        setData(shuffleArray(filterData));
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
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8'>
                {data.map((product: ProductCardProps) => (
                    <ProductCard 
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        name={product.name}
                        price={product.price}
                        sale={product.sale}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}
