"use client"

import { useRouter } from "next/navigation"
import { Filter } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ProductFilters } from "@/components/productfilters"

const sortOptions = [
  { name: "Newest", value: "categories/?date=desc" },
  { name: "Price, low to high", value: "categories/?price=asc" },
  { name: "Price, high to low", value: "categories/?price=desc" },
]

export function ProductSort() {
  const router = useRouter()
  return (
    <div className="flex items-center mb-20">
      <Select onValueChange={value => router.replace(value)}>
        <SelectTrigger className="sm:w-[180px]">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>{sortOptions.map(option => (
          <SelectItem key={option.name} value={option.value}>
            {option.name}
          </SelectItem>
        ))}</SelectContent>
      </Select>
      <Sheet>
        <SheetContent className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Categories</SheetTitle>
            <SheetDescription>
              Narrow your product search using the options below.
            </SheetDescription>
          </SheetHeader>
          <ProductFilters />
        </SheetContent>
        <SheetTrigger className="ml-4 p-1 rounded-md lg:hidden flex bg-primary">
            <Filter className="h-7 w-7 text-white lg:hidden flex bg-primary" />
        </SheetTrigger>
      </Sheet>
    </div>
  )
}
