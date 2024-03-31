'use client'
import { ChevronDown, MenuIcon } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
import {  Dropdown,  DropdownTrigger,  DropdownMenu, DropdownItem} from "@nextui-org/react";

export const Bnav = () => {
  return (
    <section className='border-b w-full bg-primary'>
        <div className='h-12  flex flex-row justify-start max-w-7xl  px-5 mx-auto'>
            <div className='flex flex-row items-center gap-x-10 text-white'>
                <Button variant='link' className='text-white flex flex-row gap-x-1'>
                    <MenuIcon />
                    <Dropdown>
                        <DropdownTrigger>
                            ALL CATEGORIES
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="beauty">Beauty & Health</DropdownItem>
                            <DropdownItem key="skin">Skin Care Products</DropdownItem>
                            <DropdownItem key="home">HOME DÉCOR & APPLIANCES</DropdownItem>
                            <DropdownItem key="jewelry">
                            Jewelry Accessories
                            </DropdownItem>
                            <DropdownItem key="makeup">
                            Makeup Accessories
                            </DropdownItem>
                            <DropdownItem key="women">
                            Women Lingerie & Sleepware
                            </DropdownItem>
                            <DropdownItem key="men">
                            Men Loungewear & Sleepware
                            </DropdownItem>
                            <DropdownItem key="perfume">
                            Perfume & Fragrance
                            </DropdownItem>
                            <DropdownItem key="kitchen">
                            Kitchen Essentials
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <ChevronDown className='h-4 w-5' />
                </Button>
                <div className='md:flex hidden  flex-row items-center gap-x-10'>
                <Link href={'/'}>
                    Home
                </Link>
                <Link href={'/'}>
                    Blog
                </Link>
                <Link href={'/'}>
                    Flash Sale
                </Link>
                <Link href={'/about'}>
                    About
                </Link>
                <Link href={'/contact'}>
                    Contact
                </Link>
                <Link href={'/'}>
                    FAQs
                </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
