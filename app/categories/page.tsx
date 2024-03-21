import React from 'react'
import {CheckboxGroup, Checkbox} from "@nextui-org/react";
import { related } from '@/utils/constant'
import { Card, CardFooter, CardHeader } from '@nextui-org/react'
import Image from 'next/image';

const FilterPage = () => {
  return (
    <section className='max-w-7xl mx-auto px-6 flex  md:flex-row'>
        <aside className='w-[300px] min-h-screen left-0 border-x px-6 py-10'>
        <CheckboxGroup
            label="Select Category"
            defaultValue={["all"]}
            className=''
            >
            <Checkbox value="all">All</Checkbox>
            <Checkbox value="b">Beauty/Hebalth</Checkbox>
            <Checkbox value="s">Skin care products</Checkbox>
            <Checkbox value="h">Home Decor</Checkbox>          
            <Checkbox value="j">Jewelry & Accessories</Checkbox>
            <Checkbox value="m">Makeup Accessories</Checkbox>
            <Checkbox value="w">Women Lingerie & Sleepware</Checkbox>
            <Checkbox value="me">Men Loungewear & Sleepware</Checkbox>
            <Checkbox value="p">Perfume & Fragrance</Checkbox>
            <Checkbox value="k">Kitchen Essentials</Checkbox>
        </CheckboxGroup>
        <CheckboxGroup
            label="Select price"
            defaultValue={["all"]}
            className='pt-10'
            >
            <Checkbox value="all">All</Checkbox>
            <Checkbox value="0">Dhs.0 - Dhs.50</Checkbox>
            <Checkbox value="50">Dhs.50 - Dhs.150</Checkbox>
            <Checkbox value="150">Dhs.150+</Checkbox>
        </CheckboxGroup>
        </aside>
        <div className='w-[600px] md:w-[800px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pl-5 gap-x-3 my-8 mx-auto md:mx-0 gap-y-5'>
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
    </section>
  )
}

export default FilterPage