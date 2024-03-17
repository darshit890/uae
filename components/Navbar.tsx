'use client'
import React from "react";
import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Input } from "@nextui-org/react";
import Image from "next/image";
import { Heart, SearchIcon, ShoppingBag, User } from "lucide-react";


export default function Navbar() {
  
  return (
    <Nav  maxWidth='full' isBordered isBlurred={false} >
      <NavbarContent className="flex pr-3" justify="start">
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
      <NavbarItem className=" space-x-2 ">
        <Input
          classNames={{
            base: "max-w-full  h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: " h-full font-normal lg:flex hidden text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          startContent={<SearchIcon size={18} />}
          type="search"
        />
    </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
    <NavbarItem className="sm:flex">
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
    <Button isIconOnly variant="flat" color="primary">
        <Heart className="text-primary/50 h-5 w-5" />
      </Button>
      </NavbarContent>
      
    </Nav>
  );
}
