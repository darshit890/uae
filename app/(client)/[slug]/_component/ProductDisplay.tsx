'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { OrdinaryT } from '@/utils/constant'
import { SanityProduct } from '@/lib/inventory'
import { urlFor } from '@/app/lib/sanity'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from 'lucide-react'
import { FaStar } from 'react-icons/fa'


interface props {
    product: SanityProduct
  }

export const ProductDisplay = ({ product }: props) => {

    const [images, setImages] = useState({
        img1 : urlFor(product.images[0]).url(),
        img2 : urlFor(product.images[1]).url(),
        img3 : urlFor(product.images[2]).url(),
        img4 : urlFor(product.images[3]).url(),
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    var number = 1;

    const [amount, setAmount] = useState(number);
    
  return (
    <div className='flex flex-col  lg:flex-row gap-x-10 gap-y-20'>
            <div className='flex flex-col gap-6 mx-auto'>
                <Image src={activeImg} alt="a" width={300} height={300} className='w-[400px] h-[300px]  object-cover rounded-xl border mt-10 lg:mx-0'/>
                <Carousel className="w-full max-w-[280px] mx-auto">
                    <CarouselContent className="-ml-1">
                        <CarouselItem className="basis-1/4">
                            <Image src={images.img1} alt="a" height={14} width={14} className={`${activeImg === images.img1 ? "border border-primary" : "border"} w-14 h-14 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img1)}/>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Image src={images.img2} alt="a" height={14} width={14} className={`${activeImg === images.img2 ? "border border-primary" : "border"} w-14 h-14 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img2)}/>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                                <Image src={images.img3} alt="a" height={14} width={14} className={`${activeImg === images.img3 ? "border border-primary" : "border"} w-14 h-14 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img3)}/>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Image src={images.img4} alt="a" height={14} width={14}className={`${activeImg === images.img4 ? "border border-primary" : "border"} w-14 h-14 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img4)}/>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Image src={images.img4} alt="a" height={14} width={14}className={`${activeImg === images.img4 ? "border border-primary" : "border"} w-14 h-14 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img4)}/>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Image src={images.img4} alt="a" height={14} width={14}className={`${activeImg === images.img4 ? "border border-primary" : "border"} w-14 h-14 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img4)}/>
                        </CarouselItem>
                        <CarouselItem className="basis-1/4">
                            <Image src={images.img4} alt="a" height={14} width={14}className={`${activeImg === images.img4 ? "border border-primary" : "border"} w-14 h-14 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img4)}/>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-y-1 lg:w-2/4 mt-10 '>
                <div className='-mt-2'>
                    <h1 className='text-xl font-semibold'>{product.name}</h1>
                </div>
                <div className='space-y-2 text-sm pt-2 mt-2'>
                    <p className='tracking-tighter text-sm text-muted-foreground'><span className='font-medium text-black'>AVAILABILITY</span> : ✅ In Stock</p>
                    <p className='tracking-tighter text-sm text-muted-foreground'><span className='font-medium text-black'>PRODUCT TYPE</span> : {product.categories}</p>
                    <p className='tracking-tighter text-sm text-muted-foreground'><span className='font-medium text-black'>VENDOR</span> : RAAZAIN</p>
                </div>
                <div className='flex flex-row items-center gap-x-2'>
                    <p>{product.review}</p> <FaStar className="text-yellow-400" /> <h4 className='text-muted-foreground'>({product.reviewno})</h4>
                </div>
                <p className='text-gray-700 line-clamp-3 mt-2'>
                {product.description}
                </p>
                <div className='flex flex-row items-center gap-5 pt-2 mt-2'>
                <h6 className='text-2xl font-semibold text-primary'>Dhs. {product.discount}</h6>
                <h6 className='line-through'>Dhs. {product.price}</h6>
              </div>
              <div className='flex mt-2 space-x-3 flex-row'>
                <ul>
                  {product.variants.map((varain, index) => (
                    <li key={index}>
                    <h3>Variant {index + 1}</h3>
                    {Object.entries(varain).map(([key, value]: [string, any]) => (
  <p key={key}>
    {key}: {Array.isArray(value) ? (value as string[]).join(', ') : value}
  </p>
))}
                  </li>
                  ))}
                  </ul>
              </div>
                <div className='flex flex-col gap-x-12 gap-y-5'>
                    <div className='flex flex-row items-center mt-2'>
                        <Button isIconOnly className='bg-gray-200 py-2 px-5 rounded-lg text-primary text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</Button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <Button isIconOnly className='bg-gray-200 py-2 px-4 rounded-lg text-primary text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</Button>
                    </div>
                    <div className='flex flex-row gap-x-5 mt-2'>
                        <Button color='primary' size="lg">Buy Now</Button>
                        <Button color='primary' variant='bordered' size="lg">Add to Cart</Button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col space-y-9 mt-10'>
                <h1 className='text-3xl px-3 font-medium'>Best Sellers</h1>
                {OrdinaryT.map((sp) => (
                    <div key={sp.title} className='flex flex-row border-b'>
                        <Image src={sp.src} alt={sp.title} height={100} width={100} className='w-[100px] h-[100px]'/>
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-sm text-muted-foreground'>{sp.title}</h1>
                            <p className='text-primary'>Dhs. {sp.price}</p>
                            <div className='flex flex-row pt-1 items-center'>
                                <h1 className='text-sm line-through'>Dhs. {sp.cutoff}</h1>
                                <p className='text-xs text-primary'>{sp.discount}% OFF</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}
