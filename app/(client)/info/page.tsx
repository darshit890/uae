'use client'
import { Button } from '@/components/ui/button'
import { getSession } from '@auth0/nextjs-auth0'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Checkbox, Input, Textarea } from '@nextui-org/react'
import React from 'react'

const InfoPage = () => {
    const { user } = useUser()

    if(!user) { 
        return null
    }
  return (
    <section className='max-w-7xl mx-auto my-20 px-10'>
        <div className='flex flex-col'>
            <h1 className='font-semibold text-gray-700 text-3xl pb-5'>My info</h1>
            <p className='text-xl font-medium text-gray-700  pb-8'>Add Address</p>
        </div>
        <div className='flex md:flex-row gap-x-28 pt-10 flex-col gap-y-5'>
            <Input type="string" label="First Name" placeholder="Enter your First Name" />
            <Input type="string" label="Last Name" placeholder="Enter your Last Name" />
        </div>
        <div className='flex md:flex-row gap-x-28 pt-10 flex-col gap-y-5'>
            <Input type="string" label="Country/Region" placeholder="Enter your Country/Region" />
            <Input type="string" label="Company Name" placeholder="Enter your Company(optional)" />
        </div>
        <div className='flex md:flex-row gap-x-28 pt-10 flex-col gap-y-5'>
            <Input type="string" label="Street Address" placeholder="Enter your Street Address" />
            <Input type="string" label="Apt, suite, unit" placeholder="Enter your apartment, suite, etc(optional)" />
        </div>
        <div className='flex md:flex-row gap-x-28 pt-10 flex-col gap-y-5'>
            <Input type="string" label="City" placeholder="Enter your City" />
            <Input type="string" label="State" placeholder="Enter your State" />
        </div>
        <div className='flex md:flex-row gap-x-28 pt-10 flex-col gap-y-5'>
            <Input type="phone" label="Phone" placeholder="Enter your Phone" />
            <Input type="string" label="Postal Code" placeholder="Enter your postal code" />
        </div>
        <div className='flex flex-row gap-x-28 pt-10'>
            <Textarea
                label="Description"
                placeholder="Enter your description"
                />
        </div>
        <div className='flex flex-col mt-5'>
            <Checkbox value="buenos-aires">Set as Default shipping address</Checkbox>
            <Checkbox value="sydney">set as default billing address</Checkbox>
        </div>
        <div className='flex flex-row gap-x-3 mt-5'>
            <Button>Save</Button>
            <Button variant='ghost'>Cancel</Button>
        </div>
    </section>
  )
}

export default InfoPage