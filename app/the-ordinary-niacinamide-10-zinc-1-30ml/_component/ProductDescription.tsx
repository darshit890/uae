'use client'
import { Tabs, Tab } from '@nextui-org/react'
import Image from 'next/image'

export const ProductDescription = () => {
  return (
    <div className='flex flex-col lg:flex-row mt-20 px-10 justify-between'>
      <div className='flex flex-col justify-center'>
          <h1 className='text-xl lg:text-3xl font-medium'><span className='font-semibold text-primary'>| </span>Product Description</h1>
          <div className='mt-10'>
            <Tabs color='primary' variant='underlined' aria-label="Tabs variants">
              <Tab key="photos" title="Description">
                <p className='text-muted-foreground pl-10 max-w-4xl'>A universal serum for blemish-prone skin that smooths, brightens, and supports. Niacinamide (Vitamin B3) is indicated to reduce the appearance of skin blemishes and congestion. A high 10% concentration of this vitamin is supported in the formula by zinc salt of pyrrolidone carboxylic acid to balance visible aspects of sebum activity.</p>
              </Tab>
              <Tab key="music" title="Shipping & Returns"/>
              <Tab key="videos" title="Reviews"/>
            </Tabs>
          </div>
      </div>
      <div className='pt-20 flex mx-auto'>
        <Image src='/limited-offer/pkg_1.webp' className='rounded-lg' alt='fc' width={500} height={500} />
      </div>
    </div>
  )
}
  