'use client'
import React from "react";
import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Input } from "./ui/input";


export default function Navbar() {
  
  return (
    <Nav  maxWidth='xl' isBordered isBlurred={false} >
      <NavbarContent className="flex " justify="start">
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

      <NavbarContent justify="end">
      <NavbarItem className="md:block hidden">
        <div >
        <Input type='search' placeholder='Search' />
        </div>
    </NavbarItem>
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
