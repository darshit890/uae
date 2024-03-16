'use client'
import { Tabs, Tab } from '@nextui-org/react'

export const ProductDescription = () => {
  return (
    <div className=' mt-20 flex flex-col'>
        <h1 className='text-3xl font-medium'><span className='font-semibold text-primary'>| </span>Product Description</h1>
        <div className='mt-10'>
          <Tabs color='primary' variant='underlined' aria-label="Tabs variants">
            <Tab key="photos" title="Description">
              <p className='text-muted-foreground pl-10'>A universal serum for blemish-prone skin that smooths, brightens, and supports. Niacinamide (Vitamin B3) is indicated to reduce the appearance of skin blemishes and congestion. A high 10% concentration of this vitamin is supported in the formula by zinc salt of pyrrolidone carboxylic acid to balance visible aspects of sebum activity.</p>
            </Tab>
            <Tab key="music" title="Shipping & Returns"/>
            <Tab key="videos" title="Reviews"/>
          </Tabs>
        </div>
    </div>
  )
}
  