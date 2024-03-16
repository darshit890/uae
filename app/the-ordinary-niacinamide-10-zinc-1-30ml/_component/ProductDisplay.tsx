'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { PackageCheck, RefreshCwOff, Truck } from 'lucide-react'

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
    <div className='flex flex-col justify-between lg:flex-row gap-16 '>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <Image src={activeImg} alt="a" width={400} height={400} className='w-[400px] h-[370px]  object-cover rounded-xl border mt-10'/>
                <div className='flex flex-row space-x-7 pt-5 h-24'>
                    <Image src={images.img1} alt="a" height={20} width={20} className={`${activeImg === images.img1 ? "border border-primary" : "border"} w-20 h-20 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img1)}/>
                    <Image src={images.img2} alt="a" height={20} width={20} className={`${activeImg === images.img2 ? "border border-primary" : "border"} w-20 h-20 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img2)}/>
                    <Image src={images.img3} alt="a" height={20} width={20} className={`${activeImg === images.img3 ? "border border-primary" : "border"} w-20 h-20 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img3)}/>
                    <Image src={images.img4} alt="a" height={20} width={20}className={`${activeImg === images.img4 ? "border border-primary" : "border"} w-20 h-20 rounded-md cursor-pointer`} onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4 justify-center '>
                <div>
                    <span className=' text-primary font-semibold'>Beauty & Health</span>
                    <h1 className='text-3xl font-bold'>The Ordinary Niacinamide 10% + Zinc 1% - 30ml</h1>
                </div>
                <div className='space-y-2'>
                    <p className='tracking-tighter text-sm text-muted-foreground'><span className='font-medium text-black'>AVAILABILITY</span> : ✔️ In Stock</p>
                    <p className='tracking-tighter text-sm text-muted-foreground'><span className='font-medium text-black'>PRODUCT TYPE</span> : Skin Care Product</p>
                    <p className='tracking-tighter text-sm text-muted-foreground'><span className='font-medium text-black'>VENDOR</span> : RAAZAIN</p>
                </div>
                <p className='text-gray-700'>
                A universal serum for blemish-prone skin that smooths, brightens, and supports. Niacinamide (Vitamin B3) is indicated to reduce the appearance of skin...
                </p>
                <div className='flex flex-row items-center gap-5'>
                <h6 className='text-2xl font-semibold text-primary'>Dhs. 28.00</h6>
                <h6 className='line-through'>Dhs. 48.00</h6>
                </div>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <Button isIconOnly className='bg-gray-200 py-2 px-5 rounded-lg text-primary text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</Button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <Button isIconOnly className='bg-gray-200 py-2 px-4 rounded-lg text-primary text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</Button>
                    </div>
                    <Button color='primary' size="lg">Add to Cart</Button>
                </div>
            </div>
            <div className='flex flex-col space-y-9 mt-10'>
                <div className='py-1 border-b flex flex-row items-center space-x-2'>
                    <div className='w-16 flex items-center h-9 bg-primary/10 rounded-lg justify-center'>
                        <PackageCheck className='text-primary h-6 w-6 ' />
                    </div>
                    <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium'>Free shipping</p>
                    <p className='text-xs text-muted-foreground tracking-tighter max-w-xl'>Free shipping when you spend AED 100 and above on express items</p>
                    </div>
                </div>
                <div className='py-1 border-b flex flex-row items-center space-x-2'>
                <div className='w-12 flex items-center h-9 bg-primary/10 rounded-lg justify-center'>
                        <RefreshCwOff className='text-primary h-5 w-5' />
                    </div>
                    <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium'>Return Policy</p>
                    <p className='text-xs text-muted-foreground tracking-tighter max-w-xl'>This item cannot be exchanged or returned</p>
                    </div>
                </div>
                <div className='py-1 border-b flex flex-row items-center space-x-4'>
                    <div className='w-16 flex items-center h-9 bg-primary/10 rounded-lg justify-center'>
                        <Truck className='text-primary h-6 w-6 ' />
                    </div>
                    <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium'>Trusted shipping</p>
                    <p className='text-xs text-muted-foreground tracking-tighter max-w-xl'>Free shipping when you spend AED 100 and above on express items</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
