'use client'
import { special } from '@/utils/constant'
import React from 'react'
import { Image } from '@nextui-org/react'

export const LimitedOffer = () => {
  return (
    <section className='my-10 max-w-7xl mx-auto'>
      <div className='grid lg:grid-cols-9 md:grid-cols-6 grid-cols-3  mt-4'>
        {special.map((sp) => (
            <div key={sp.title} className='flex flex-col mx-auto items-center mt-4 cursor-pointer'>
              <Image  alt='category' className='rounded-full hover:scale-110 transition duration-300 ease-in-out lg:h-[100px] lg:w-[100px] w-[70px] h-[70px]' src={sp.src} />
              <p className='text-xs pt-2 text-center'>{sp.title}</p>
            </div>
        ))}
      </div>
      <div className='mt-20 mb-10'>
        <h1 className='text-2xl font-medium text-gray-700'>Limited Offer</h1>
      </div>
      <div className='flex flex-row '>
          <Image src='https://www.raazain.com/cdn/shop/files/pkg_1.png?v=1708608522' alt='' height={300} width={800} />
          <Image src='https://www.raazain.com/cdn/shop/files/pkg_1.png?v=1708608522' alt='' height={300} width={800} />
      </div>
    </section>
  )
}
