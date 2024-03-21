'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { OrdinaryT } from '@/utils/constant'

export const ProductDisplay = () => {

    const [images, setImages] = useState({
        img1 : "https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwce8a7cdf/Images/products/The%20Ordinary/rdn-niacinamide-10pct-zinc-1pct-30ml.png?sw=1200&sh=1200&sm=fit",
        img2 : "https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwce7b3754/Images/products/The%20Ordinary/lifestyle/rdn-niacinamide-10pct-zinc-1pct-30ml-lifestyle.jpg?sw=1200&sh=1200&sm=fit",
        img3 : "https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw612d8b1f/Images/products/The%20Ordinary/swatch/rdn-niacinamide-10pct-zinc-1pct-texture.jpg?sw=800&sh=800&sm=fit",
        img4 : "https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw362eec6e/Images/products/The%20Ordinary/cover-image/rdn-niacinamide-10pct-zinc-1pct-application.jpg?sw=1200&sh=1200&sm=fit"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    var number = 1;

    const [amount, setAmount] = useState(number);
    
  return (
    <div className='flex flex-col px-10 lg:flex-row gap-20'>
            <div className='flex flex-col gap-6 mx-auto'>
                <Image src={activeImg} alt="a" width={300} height={300} className='w-[400px] h-[300px]  object-cover rounded-xl border mt-10 lg:mx-0'/>
                <div className='flex flex-row space-x-2  sm:space-x-5 pt-16 mx-auto lg:mx-0'>
                    <Image src={images.img1} alt="a" height={14} width={14} className={`${activeImg === images.img1 ? "border border-primary" : "border"} w-14 h-14 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img1)}/>
                    <Image src={images.img2} alt="a" height={14} width={14} className={`${activeImg === images.img2 ? "border border-primary" : "border"} w-14 h-14 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img2)}/>
                    <Image src={images.img3} alt="a" height={14} width={14} className={`${activeImg === images.img3 ? "border border-primary" : "border"} w-14 h-14 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img3)}/>
                    <Image src={images.img4} alt="a" height={14} width={14}className={`${activeImg === images.img4 ? "border border-primary" : "border"} w-14 h-14 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-y-1 lg:w-2/4 mt-10 '>
                <div>
                    <span className=' text-primary font-semibold'>Beauty & Health</span>
                    <h1 className='text-xl md:text-3xl font-bold'>The Ordinary Niacinamide 10% + Zinc 1% - 30ml</h1>
                </div>
                <div className='space-y-2 text-sm pt-2'>
                    <p className='tracking-tighter text-sm text-muted-foreground'><span className='font-medium text-black'>AVAILABILITY</span> : ✅ In Stock</p>
                    <p className='tracking-tighter text-sm text-muted-foreground'><span className='font-medium text-black'>PRODUCT TYPE</span> : Skin Care Product</p>
                    <p className='tracking-tighter text-sm text-muted-foreground'><span className='font-medium text-black'>VENDOR</span> : RAAZAIN</p>
                </div>
                <p className='text-gray-700 '>
                A universal serum for blemish-prone skin that smooths, brightens, and supports. Niacinamide (Vitamin B3) is indicated to reduce the appearance of skin...
                </p>
                <div className='flex flex-row items-center gap-5 pt-2'>
                <h6 className='text-2xl font-semibold text-primary'>Dhs. 28.00</h6>
                <h6 className='line-through'>Dhs. 48.00</h6>
                </div>
                <div className='flex flex-col gap-x-12 gap-y-5'>
                    <div className='flex flex-row items-center'>
                        <Button isIconOnly className='bg-gray-200 py-2 px-5 rounded-lg text-primary text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</Button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <Button isIconOnly className='bg-gray-200 py-2 px-4 rounded-lg text-primary text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</Button>
                    </div>
                    <div className='flex flex-row gap-x-5'>
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
