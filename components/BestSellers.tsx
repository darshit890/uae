'use client'
import { TMakeup, tBeauty, tKitchen, tSkin } from '@/utils/constant'
import { Tab, Tabs, Card, CardHeader, CardFooter, Image } from '@nextui-org/react'
import React from 'react'

export const BestSellers = () => {
  return (
    <section className=' mt-10 hidden'>
        <div className='pt-10 px-10 flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter px-6'>Best Selling Products</h1>
            <div className='flex flex-col mx-auto mt-5'>
                <Tabs aria-label='options' size='lg' variant='underlined' color='primary'>
                    <Tab key='skin' title="Skin Care Products">
                    <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-1 space-x-3 my-8 mx-auto md:mx-0'>
                    {tSkin.map((sp) => (
                        <Card key={sp.title} className='md:flex md:justify-between'>
                        <CardHeader>
                          <Image src={sp.src} alt='product' className='h-[300px] w-[300px]'  />
                        </CardHeader>
                        <CardFooter className='flex flex-col items-start space-y-1'>
                          <h1 className='text-sm'>{sp.title}</h1>
                          <p className='text-primary font-medium'>Dhs. {sp.price}</p>
                        </CardFooter>
                      </Card>
                    ))}
                    </div>
                    </Tab>
                    <Tab key='beauty' title="Beauty & Health">
                    <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-1 space-x-3 my-8 mx-auto md:mx-0'>
                    {tBeauty.map((sp) => (
                        <Card key={sp.title} className='md:flex md:justify-between'>
                        <CardHeader>
                          <Image src={sp.src} alt='product' className='h-[300px] w-[300px]'  />
                        </CardHeader>
                        <CardFooter className='flex flex-col items-start space-y-1'>
                          <h1 className='text-sm'>{sp.title}</h1>
                          <p className='text-primary font-medium'>Dhs. {sp.price}</p>
                        </CardFooter>
                      </Card>
                    ))}
                    </div>
                    </Tab>
                    <Tab key='makeup' title="Makeup Accessories" >
                    <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-1 space-x-3 my-8 mx-auto md:mx-0'>
                    {TMakeup.map((sp) => (
                        <Card key={sp.title} className='md:flex md:justify-between'>
                        <CardHeader>
                          <Image src={sp.src} alt='product' className='h-[300px] w-[300px]'  />
                        </CardHeader>
                        <CardFooter className='flex flex-col items-start space-y-1'>
                          <h1 className='text-sm'>{sp.title}</h1>
                          <p className='text-primary font-medium'>Dhs. {sp.price}</p>
                        </CardFooter>
                      </Card>
                    ))}
                    </div>
                    </Tab>
                    <Tab key='kitchen' title="Kitchen Essentials">
                    <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-1 space-x-3 my-8 mx-auto md:mx-0'>
                    {tKitchen.map((sp) => (
                        <Card key={sp.title} className='md:flex md:justify-between'>
                        <CardHeader>
                          <Image src={sp.src} alt='product' className='h-[300px] w-[300px]'  />
                        </CardHeader>
                        <CardFooter className='flex flex-col items-start space-y-1'>
                          <h1 className='text-sm'>{sp.title}</h1>
                          <p className='text-primary font-medium'>Dhs. {sp.price}</p>
                        </CardFooter>
                      </Card>
                    ))}
                    </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
        <div className='flex flex-col gap-y-5 items-center md:flex-row justify-evenly my-20'>
          <Image className='cursor-pointer' src='https://www.raazain.com/cdn/shop/files/Men_longwear_copy_cfaebf1e-00d4-4019-ba42-f7a207bde162.jpg?v=1702937400' alt='category' />
          <Image className='cursor-pointer' src='https:////www.raazain.com/cdn/shop/files/women_longwear_copy.jpg?v=1702937416' alt='category' />
        </div>
    </section>
  )
}
