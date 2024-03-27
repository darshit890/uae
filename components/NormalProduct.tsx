import { COSRX, LaRoche, OTWO, Ordinary} from '@/utils/constant'
import { Card, CardFooter, CardHeader } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Heart, ShoppingBagIcon } from 'lucide-react'

export const NormalProduct = () => {
  return (
    <section className='mx-auto my-10 max-w-7xl px-3'> 
        <div className='pt-10 flex flex-col '>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter'>La-Roche Posay</h1>
            <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-2 gap-x-3 my-8 mx-auto md:mx-0'>
              {LaRoche.map((sp) => (
                <Card key={sp.title} className='flex justify-between cursor-pointer'>
                  <CardHeader>
                    <Image className='pb-5' width={300} height={300} src={sp.src} alt='product' />
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
                    <div className='flex flex-row  items-center'>

                      <h1 className='line-through pr-1 text-sm'>Dhs. {sp.cutoff}</h1>
                      <p className='text-xs text-primary'>{sp.discount}% OFF</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
        </div>
        <div className='pt-10 flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter'>The Ordinary</h1>
            <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-2 gap-x-3 my-8 mx-auto md:mx-0'>
              {Ordinary.map((sp) => (
                <Card key={sp.title} className='flex justify-between cursor-pointer'>
                  <CardHeader>
                    <Image width={300} height={300} src={sp.src} alt='product' className='pb-5'/>
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
                    <div className='flex flex-row  items-center'>

                      <h1 className='line-through pr-1 text-sm'>Dhs. {sp.cutoff}</h1>
                      <p className='text-xs text-primary'>{sp.discount}% OFF</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
        </div>
        <div className='pt-10 flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter'>O.TWO.O</h1>
            <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-2 gap-x-3 my-8 mx-auto md:mx-0'>
              {OTWO.map((sp) => (
                <Card key={sp.title} className='flex justify-between cursor-pointer'>
                  <CardHeader>
                    <Image height={300} width={300} src={sp.src} alt='product' className='pb-5'/>
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
        </div>
        <div className='pt-10 flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter'>COSRX Advanced Snail 92</h1>
            <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-2 gap-x-3 my-8 mx-auto md:mx-0'>
              {COSRX.map((sp) => (
                <Card key={sp.title} className='flex justify-between cursor-pointer'>
                  <CardHeader>
                    <Image height={300} width={300} src={sp.src} alt='product' className='pb-5' />
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
        </div>
    </section>
  )
}
