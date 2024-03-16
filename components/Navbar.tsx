'use client'
import React from "react";
import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Input } from "@nextui-org/react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";
import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { SearchIcon, ShoppingBag, User } from "lucide-react";


export default function Navbar() {
  const menuItems: { title: string; href: string; } [] = [
    {
      title: "CATEGORIES",
      href: "/Services"
    },
    {
      title: "FLASH SALE",
      href: "/About"
    },
    {
      title: "BLOGS",
      href: "/Project"
    },
  ]



  return (
    <Nav  maxWidth="xl" isBordered isBlurred={false} >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle />
        <NavbarBrand>
          <Link color="foreground" href="/">
            <Image 
             src={'/logo/logo-uae.jpg'}
             alt="logo"
             width={100}
             height={100}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex pr-3" justify="start">
        <NavbarBrand>
        <Link color="foreground" href="/">
            <Image 
             src={'/logo/logo-uae.jpg'}
             alt="logo"
             width={200}
             height={200}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-md">CATEGORIES</NavigationMenuTrigger>
                </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </NavbarItem>
        <NavbarItem className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background  px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
          <Link href="/About" color="foreground">
            FLASH SALE
          </Link>
        </NavbarItem>
        <NavbarItem className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background  px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
          <Link color="foreground" href="/Project">
            BLOGS
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
      <NavbarItem className=" space-x-2 ">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: " h-full font-normal lg:flex hidden text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
    </NavbarItem>
    <NavbarItem className="lg:hidden">
      <Button isIconOnly variant="flat" color="primary">
        <SearchIcon className="text-primary/50 h-5 w-5" />
      </Button>
    </NavbarItem>
    <NavbarItem className="sm:flex">
      <Button isIconOnly variant="flat" color="primary">
        <User className="text-primary/50" />
      </Button>
    </NavbarItem>
    <NavbarItem>
      <Button isIconOnly variant="flat" color="primary">
      <ShoppingBag className="text-primary/50" />
      </Button>
    </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Nav>
  );
}
