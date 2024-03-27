'use client'
import { TMakeup, tBeauty, tKitchen, tSkin } from '@/utils/constant'
import { Tab, Tabs, Card, CardHeader, CardFooter } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Heart, ShoppingBagIcon } from 'lucide-react'

export const BestSellers = () => {
  return (
    <section className=' mt-10 max-w-7xl mx-auto '>
        <div className='pt-10 flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter'>Best Selling Products</h1>
            <div className='flex flex-col mx-auto mt-5'>
                <Tabs aria-label='options' size='lg' variant='underlined' color='primary' className='p-0 gap-0'>
                    <Tab key='skin' title="Skin">
                    <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-2 space-x-3 my-8 mx-auto md:mx-0'>
                    {tSkin.map((sp) => (
                        <Card key={sp.title} className='md:flex md:justify-between cursor-pointer'>
                        <CardHeader>
                          <Image width={300} height={300} src={sp.src} alt='product'/>
                          <div className='absolute bottom-28 right-12'>
                      <Button variant='outline' size='icon'>
                        <Heart className='text-primary' />
                      </Button>
                    </div>
                    <div className='absolute bottom-28 right-1'>
                      <Button variant='outline' size='icon'>
                        <ShoppingBagIcon className='text-primary' />
                      </Button>
                    </div>
                        </CardHeader>
                        <CardFooter className='flex flex-col items-start space-y-1 '>
                          <h1 className='text-sm'>{sp.title}</h1>
                          <p className='text-primary font-medium'>Dhs. {sp.price}</p>
                        </CardFooter>
                      </Card>
                    ))}
                    </div>
                    </Tab>
                    <Tab key='beauty' title="Beauty/Health">
                    <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-2 space-x-3 my-8 mx-auto md:mx-0'>
                    {tBeauty.map((sp) => (
                        <Card key={sp.title} className='md:flex md:justify-between cursor-pointer'>
                        <CardHeader>
                          <Image width={300} height={300} src={sp.src} alt='product'/>
                          <div className='absolute bottom-28 right-12'>
                      <Button variant='outline' size='icon'>
                        <Heart className='text-primary' />
                      </Button>
                    </div>
                    <div className='absolute bottom-28 right-1'>
                      <Button variant='outline' size='icon'>
                        <ShoppingBagIcon className='text-primary' />
                      </Button>
                    </div>
                        </CardHeader>
                        <CardFooter className='flex flex-col items-start space-y-1'>
                          <h1 className='text-sm'>{sp.title}</h1>
                          <p className='text-primary font-medium'>Dhs. {sp.price}</p>
                        </CardFooter>
                      </Card>
                    ))}
                    </div>
                    </Tab>
                    <Tab key='makeup' title="Makeup " >
                    <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-2 space-x-3 my-8 mx-auto md:mx-0'>
                    {TMakeup.map((sp) => (
                        <Card key={sp.title} className='md:flex md:justify-between cursor-pointer'>
                        <CardHeader>
                          <Image width={300} height={300} src={sp.src} alt='product'/>
                          <div className='absolute bottom-28 right-12'>
                      <Button variant='outline' size='icon'>
                        <Heart className='text-primary' />
                      </Button>
                    </div>
                    <div className='absolute bottom-28 right-1'>
                      <Button variant='outline' size='icon'>
                        <ShoppingBagIcon className='text-primary' />
                      </Button>
                    </div>
                        </CardHeader>
                        <CardFooter className='flex flex-col items-start space-y-1'>
                          <h1 className='text-sm'>{sp.title}</h1>
                          <p className='text-primary font-medium'>Dhs. {sp.price}</p>
                        </CardFooter>
                      </Card>
                    ))}
                    </div>
                    </Tab>
                    <Tab key='kitchen' title="Kitchen ">
                    <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-2 space-x-3 my-8 mx-auto md:mx-0'>
                    {tKitchen.map((sp) => (
                        <Card key={sp.title} className='md:flex md:justify-between cursor-pointer'>
                        <CardHeader>
                          <Image width={300} height={300} src={sp.src} alt='product' />
                          <div className='absolute top-2 left-1 '>
                      <Button variant='outline' size='icon'>
                        <Heart className='text-primary' />
                      </Button>
                    </div>
                    <div className='absolute top-2 right-1'>
                      <Button variant='outline' size='icon'>
                        <ShoppingBagIcon className='text-primary' />
                      </Button>
                    </div>
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
        <div className='flex flex-col lg:flex-row gap-y-4 my-20  max-w-7xl mx-auto  gap-x-5 '>
          <Image height={300} width={620} className='cursor-pointer rounded-xl ' src='https://www.raazain.com/cdn/shop/files/Men_longwear_copy_cfaebf1e-00d4-4019-ba42-f7a207bde162.jpg?v=1702937400' alt='category' />
          <Image height={300} width={620} className='cursor-pointer rounded-xl' src='https:////www.raazain.com/cdn/shop/files/women_longwear_copy.jpg?v=1702937416' alt='category' />
        </div>
    </section>
  )
}
