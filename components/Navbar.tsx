'use client'
import React from "react";
import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import { Heart, User } from "lucide-react";
import { Input } from "./ui/input";
import { useUser } from "@auth0/nextjs-auth0/client";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { CartSidebar } from '@/components/CartSidebar'
import { Button } from "./ui/button";

export default function Navbar() {
  const { user, error, isLoading } = useUser();
  if (error) return <div>{error.message}</div>;

  // const pathname = usePathname()
  // const router = useRouter()
  // const searchParams = useSearchParams()
  // const defaultSearchQuery = searchParams.get('search') ?? ""

  // if(pathname.startsWith("/studio")) return null

  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    // event.preventDefault()
    // const formData = new FormData(event.currentTarget)
    // const searchQuery = formData.get('search')
    // router.replace(`/categories/?search=${searchQuery}`)
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
          <Input id="search" autoComplete="off" type='search' placeholder='Search' />
        </form>
    </NavbarItem>
    <NavbarItem className="sm:flex">
    </NavbarItem>
    <NavbarItem className="sm:flex">
    {user ? (
      <Dropdown>
        <DropdownTrigger>
            <Image
              src={user?.picture ?? undefined} 
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">My orders</DropdownItem>
        <DropdownItem key="copy">Wishlist</DropdownItem>
        <DropdownItem key="edit" href="/info">My info</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger" href="/api/auth/logout">
          Sign out
        </DropdownItem>
      </DropdownMenu>   
      </Dropdown>
      ) : (
      <Link href="/api/auth/login">
        <Button  color="primary">
          Login
          <User className="text-white" />
        </Button>
      </Link>
      )}
    </NavbarItem>
    <NavbarItem>
      <CartSidebar />
    </NavbarItem>
    <Button size='icon' color="primary">
        <Heart className="text-white h-5 w-5" />
      </Button>
      </NavbarContent>
      
    </Nav>
  );
}
