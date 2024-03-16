import { COSRX, LaRoche, OTWO, Ordinary} from '@/utils/constant'
import { Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

export const NormalProduct = () => {
  return (
    <section className='max-w-7xl mx-auto my-10'> 
        <div className='pt-10 px-10 flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter px-6'>La-Roche Posay</h1>
            <div className='grid lg:grid-cols-6 space-x-3 max-w-6xl mx-auto my-8'>
              {LaRoche.map((sp) => (
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
        </div>
        <div className='pt-10 px-10 flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter px-6'>The Ordinary</h1>
            <div className='grid lg:grid-cols-6 space-x-3 max-w-6xl mx-auto my-8'>
              {Ordinary.map((sp) => (
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
        </div>
        <div className='pt-10 px-10 flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter px-6'>O.TWO.O</h1>
            <div className='grid lg:grid-cols-6 space-x-3 max-w-6xl mx-auto my-8'>
              {OTWO.map((sp) => (
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
        </div>
        <div className='pt-10 px-10 flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter px-6'>COSRX Advanced Snail 92</h1>
            <div className='grid lg:grid-cols-6 space-x-3 max-w-6xl mx-auto my-8'>
              {COSRX.map((sp) => (
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
        </div>
    </section>
  )
}
