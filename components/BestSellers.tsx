'use client'
import { TMakeup, tBeauty, tKitchen, tSkin } from '@/utils/constant'
import { Tab, Tabs, Card, CardHeader, CardFooter, Image } from '@nextui-org/react'
import React from 'react'

export const BestSellers = () => {
  return (
    <section className='max-w-7xl mx-auto mt-10'>
        <div className='pt-10 px-10 flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter px-6'>Best Selling Products</h1>
            <div className='flex flex-col mx-auto mt-5'>
                <Tabs aria-label='options' size='lg' variant='underlined' color='primary' className='flex justify-center'>
                    <Tab key='skin' title="Skin Care Products">
                    <div className='grid lg:grid-cols-5 space-x-3 max-w-6xl mx-auto my-8'>
                    {tSkin.map((sp) => (
                        <Card key={sp.title} className='flex justify-between'>
                        <CardHeader>
                            <Image src={sp.src} alt='product' className='h-[200px] w-[200px]'  />
                        </CardHeader>
                        <CardFooter className='flex flex-col items-start space-y-1'>
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
                    </Tab>
                    <Tab key='beauty' title="Beauty & Health">
                    <div className='grid lg:grid-cols-5 space-x-3 max-w-6xl mx-auto my-8'>
                    {tBeauty.map((sp) => (
                        <Card key={sp.title} className='flex justify-between'>
                        <CardHeader>
                            <Image src={sp.src} alt='product' className='h-[200px] w-[200px]'  />
                        </CardHeader>
                        <CardFooter className='flex flex-col items-start space-y-1'>
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
                    </Tab>
                    <Tab key='makeup' title="Makeup Accessories" >
                    <div className='grid lg:grid-cols-5 space-x-3 max-w-6xl mx-auto my-8'>
                    {TMakeup.map((sp) => (
                        <Card key={sp.title} className='flex justify-between'>
                        <CardHeader>
                            <Image src={sp.src} alt='product' className='h-[200px] w-[200px]'  />
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
                    <div className='grid lg:grid-cols-5 space-x-3 max-w-6xl mx-auto my-8'>
                    {tKitchen.map((sp) => (
                        <Card key={sp.title} className='flex justify-between'>
                        <CardHeader>
                            <Image src={sp.src} alt='product' className='h-[200px] w-[200px]'  />
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
        <div className='grid grid-cols-2 max-w-6xl mx-auto my-5 gap-x-5 '>
          <Image className='cursor-pointer' src='https://www.raazain.com/cdn/shop/files/Men_longwear_copy_cfaebf1e-00d4-4019-ba42-f7a207bde162.jpg?v=1702937400' alt='category' />
          <Image className='cursor-pointer' src='https:////www.raazain.com/cdn/shop/files/women_longwear_copy.jpg?v=1702937416' alt='category' />
        </div>
    </section>
  )
}
