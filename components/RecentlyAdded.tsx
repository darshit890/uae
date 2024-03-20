import { related } from '@/utils/constant'
import { Card, CardFooter, CardHeader } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'

export const RecentlyAdded = () => {
  return (
    <section className=' mt-10 max-w-7xl mx-auto px-3'> 
        <div className='pt-10  flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter'>Recently Added</h1>
            <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3 grid-cols-2  space-x-3 my-8 mx-auto md:mx-0 shrink'>
              {related.map((sp) => (
                <Card key={sp.title} className='flex justify-between cursor-pointer'>
                  <CardHeader>
                    <Image width={300} height={300} src={sp.src} alt='product' />
                  </CardHeader>
                  <CardFooter className='flex flex-col items-start space-y-1 '>
                    <h1 className='text-sm'>{sp.title}</h1>
                    <p className='text-primary font-medium'>Dhs. {sp.price}</p>
                    <div className='flex flex-row  items-center'>

                      <h1 className='line-through pr-1 text-sm'>Dhs. {sp.cutoff}</h1>
                      <p className='text-xs text-primary'>{sp.discount}% OFF</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
        </div>
        <div className='flex flex-col  items-center md:flex-row gap-y-3 my-20  max-w-7xl mx-auto gap-x-5'>
          <Image width={500} height={300} className='cursor-pointer rounded-xl' src='https://www.raazain.com/cdn/shop/files/Skin_product_751x190_01620a7c-d4a2-493c-ab57-faa189e2f311.jpg?v=1702936143' alt='category' />
          <Image width={500} height={300} className='cursor-pointer rounded-xl' src='https://www.raazain.com/cdn/shop/files/beauty_product_751x190_f42c7d58-0d1d-4fb3-b363-36b3327529bd.jpg?v=1702936148' alt='category' />
        </div>
    </section>
  )
}
