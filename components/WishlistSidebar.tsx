import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Heart } from "lucide-react"
import Image from "next/image"

export const WishlistSidebar = () => {

  return (
    <Sheet >
      <SheetTrigger asChild>
      <Button size='icon' color="primary">
        <Heart className="text-white h-5 w-5" />
      </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Wishlist</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              
                <>
                    <li  className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src='/recent/ULTRASTAY_5_100x100.webp'
                          alt="Product image"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>asdfghjklzxcvbnm</h3>
                            <p className="ml-4">$45</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            asdfghjkxcvbn
                          </p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: 1</p>

                          <div className="flex">
                            <Button
                              type="button"
                              onClick={() => {}}
                              className="font-medium text-white hover:text-primary/80"
                            >
                              Add to cart
                            </Button>
                          </div>
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => {}}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                </>
            </ul>
          </div>

        </div>
      </SheetContent>
    </Sheet>
  )
}
