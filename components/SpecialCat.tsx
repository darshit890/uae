import { special } from '@/utils/constant'
import Image from 'next/image'
import React from 'react'

export const LimitedOffer = () => {
  return (
    <section className='my-10 max-w-7xl mx-auto '>
      <div className='grid grid-cols-6 max-w-6xl mx-auto mt-4'>
        {special.map((sp) => (
            <div key={sp.title} className='flex flex-col mx-auto items-center mt-4 cursor-pointer'>
              <Image  alt='category' width={100} height={100} className='rounded-full hover:scale-110 transition duration-300 ease-in-out' src={sp.src} />
              <p className='text-xs pt-2 text-center'>{sp.title}</p>
            </div>
        ))}
      </div>
    </section>
  )
}
