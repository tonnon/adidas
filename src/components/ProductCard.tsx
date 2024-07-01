import React from 'react'
import Image from 'next/image'
import { 
    AiOutlineHeart, 
    AiOutlineShoppingCart,
    AiFillStar,
    AiOutlineStar,
} from 'react-icons/ai';

interface ProductCardProps {
    id: number;
    img: string;
    name: string;
    price: number;
    category: string[];
    sale: boolean | undefined;
}

export default function ProductCard({
    id,
    img,
    name,
    price,
    category,
    sale,
}:ProductCardProps) {
  return (
    <div className='group cursor-pointer'>
        <div className="relative">
            <Image
                src={img}
                alt={name}
                className='w-full'
                width={1000}
                height={1142}
            />
            {sale && (
                <div className='bg-red-600 inline-block absolute top-0 left-0 text-[14px] text-white rounded-md px-2 py-[2px] m-4'>
                    SALE!
                </div>
            )}
            <div className='absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer'>
                <div className='absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2'>
                    <div className='bg-white w-[50px] h-[50px] text-[26px] grid place-items-center'>
                        <AiOutlineHeart/>
                    </div>
                    <div className='bg-white w-[50px] h-[50px] text-[26px] grid place-content-center'>
                        <AiOutlineShoppingCart/>
                    </div>
                </div>
            </div>
        </div>
        <h2 className='font-medium pb-3 hover:text-accent'>
            {name}
        </h2>
        <p className='text-gray-600 font-light'>
            ${price}
        </p>
    </div>
  )
}
