import { marquee } from '@/utils/constant'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

export const MarqueeComponent = () => {
  return (
    <section className='max-w-7xl mx-auto mb-20 flex flex-row'>
        <Image src='/Group-17418.png' alt='' width={200} height={100} />
    <Marquee>
        {marquee.map((section) => (
            <div key={section.title} className='flex flex-row cursor-pointer'>
                <Image src={section.src} alt='' height={70} width={70} />
                <div className='flex flex-col ml-2'>
                    <p className='text-sm font-medium text-muted-foreground line-clamp-1 mt-2 hover:text-primary w-[180px]'>{section.title}</p>
                    <p className='text-primary'>Dhs. {section.price}</p>
                    {section.cutoff  ?  <div className='flex flex-row items-center gap-x-1'>
                        <h1 className='text-muted-foreground line-through'>Dhs. {section.cutoff}</h1>
                        <p className='text-sm text-primary'>{section.discount}% OFF</p>
                    </div> : ""}
                </div>
            </div>
        ))}
    </Marquee>
    </section>
  )
}
