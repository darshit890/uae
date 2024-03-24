"use client"

import Image from "next/image"
import Link from "next/link"
import { XCircle } from "lucide-react"
import { urlFor } from "@/app/lib/sanity"

import { SanityProduct } from "@/lib/inventory"
import { shimmer, toBase64 } from "@/lib/image"
import { Card, CardContent } from "./ui/card"

interface Props {
    products: SanityProduct[]
}

export function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8 ">
      {products.map((product) => (
        <Link key={"key"} href={`/${product.slug}`} className="group text-sm">
        <Card className="w-[230px] h-[340px]">
          <CardContent>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg ">
                <Image
                src={urlFor(product.images[0]).url()}
                alt={"name"}
                width={225}
                height={280}
                className="h-full w-full object-cover object-center"
                />
            </div>
          </CardContent>
          <h3 className="text-xs text-muted-foreground mt-4 font-medium px-6">{product.name}</h3>
          <p className="mt-2 font-medium px-6 text-primary text-lg">Dhs.{product.discount}</p>
          <div className="flex flex-row gap-x-2 items-center">
          <p className="mb-2 font-medium pl-6 line-through text-sm text-muted-foreground">Dhs.{product.price}</p>
          <p className="mb-2 font-medium text-xs text-primary">{product.off}% OFF</p>
          </div>
        </Card>
        </Link>
      ))}
    </div>
  )
}
