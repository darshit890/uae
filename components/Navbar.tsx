'use client'
import React from "react";
import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultSearchQuery = searchParams.get('search') ?? ""

  if(pathname.startsWith("/studio")) return null

  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchQuery = formData.get('search')
    router.replace(`/categories/?search=${searchQuery}`)
  }
  return (
    <Nav  maxWidth='xl' isBordered isBlurred={false} >
      <NavbarContent className="flex " justify="start">
        <NavbarBrand>
        <Link color="foreground" href="/">
            <Image
							width={200}
							alt="NextUI hero Image"
							src={'/logo/logo-uae.svg'}
							/>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
      <NavbarItem className="md:block hidden">
        <form onSubmit={onSubmit}>
          <Input id="search" autoComplete="off" type='search' placeholder='Search' defaultValue={defaultSearchQuery}/>
        </form>
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
