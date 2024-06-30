import React, { ReactNode } from 'react'

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    desc: string;
}

export default function FeatureCard({
    icon,
    title,
    desc,
}:FeatureCardProps) {
  return (
    <div className='flex gap-6 items-center'>
        <div className='w-auto'>
            {icon}
        </div>
        <div className='space-y-1'>
            <h2 className='font-medium text-xl uppercase'>
                {title}
            </h2>
            <p className='text-gray-600 text-[14px]'>
                {desc}
            </p>
        </div>
    </div>
  )
}
