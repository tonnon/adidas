import React from 'react'

import { GiClothes } from "react-icons/gi";
import { 
    FaShippingFast,
    FaAddressCard 
 } from "react-icons/fa";
import FeatureCard from './FeatureCard';

const festureCardsList = [
    {
        icon: <GiClothes size={76}/>,
        title: "Quality Assurance",
        desc: 'A quality score for each item based'
    },
    {
        icon: <FaShippingFast size={76}/>,
        title: "Free Shipping",
        desc: 'Free shipping on all orders over $99'
    },
    {
        icon: <FaAddressCard size={76}/>,
        title: "Secure Payment",
        desc: 'Fully protected when paying online'
    },
];

export default function Feature() {
  return (
    <div className='container pt-16'>
        <div className='flex flex-wrap justify-between md:flex-cols-2 gap-y-8 lg:gap-y-4 lg:flex-cols-3 gap-8'>
            {festureCardsList.map((card) => (
                <FeatureCard 
                    key={card.title}
                    icon={card.icon}
                    title={card.title}
                    desc={card.desc}
                />
            ))}
        </div>
    </div>
  )
}
