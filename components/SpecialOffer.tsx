'use client'
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { SCosmetics, SHome, Sbeauty } from "@/utils/constant";
import { Button } from "./ui/button";
import { Heart, ShoppingBagIcon } from "lucide-react";
import { FaStar } from "react-icons/fa";

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true })
  }

export const SpecialOffer = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
        
      )
  return (
    <section className='mt-20 bg-primary rounded-md max-w-7xl mx-auto hidden lg:block'>
        <div className="flex pb-6 items-center rounded-lg flex-col bg-gradient-to-t from-[#ff1824] to-[#ee198e]">
        <Tabs defaultValue="beauty" className="">
            <TabsList className="flex mx-auto ">
                <TabsTrigger value="beauty">Beauty/Health</TabsTrigger>
                <TabsTrigger value="cosmetics">O.Two.O</TabsTrigger>
                <TabsTrigger value="home">Home Decor</TabsTrigger>
            </TabsList>
            <TabsContent value="beauty">
                <Carousel
                    plugins={[plugin.current]}
                    className="xl:max-w-7xl lg:max-w-7xl px-10"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    
                >
                    <CarouselContent className="flex mx-auto ">
                    {Sbeauty.map((sp, index) => (
                        <CarouselItem key={index}  className="lg:basis-1/3 xl:basis-1/4  ">
                        <div className="p-1">
                            <Card key={sp.title} className='flex justify-between cursor-pointer items-stretch w-[250px] h-[400px]'>
                                <CardHeader>
                                    <Image width={300} height={300} src={sp.src} alt='product'  />
                                    <div className='absolute bottom-28 right-12'>
                                        <Button variant='outline' size='icon'>
                                            <Heart className='text-primary' />
                                        </Button>
                                        </div>
                                        <div className='absolute bottom-28 right-1'>
                                        <Button variant='outline' size='icon'>
                                            <ShoppingBagIcon className='text-primary' />
                                        </Button>
                                        </div>
                                </CardHeader>
                                <CardFooter className='flex flex-col items-start space-y-1'>
                                    <h1 className='text-sm'>{sp.title}</h1>
                                    <p className='text-primary font-medium'>Dhs. {sp.price}</p>
                                    <div className='flex flex-row  items-center justify-between'>
                                <div className='flex flex-row  items-center justify-between'>
                                    <div className='flex flex-row items-center'>
                                    <h1 className='line-through pr-1 text-sm'>Dhs. {sp.cutoff}</h1>
                                    <p className='text-xs text-primary'>{sp.discount}% OFF</p>
                                    </div>
                                    <div className='ml-16 flex items-center gap-x-1'>
                                    <p>{sp.rating}</p>
                                    <FaStar className='text-yellow-500' />
                                    </div>
                                </div>
                                </div>
                                </CardFooter>
                            </Card>
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
                </TabsContent>
            <TabsContent value="cosmetics">
            <Carousel
                    plugins={[plugin.current]}
                    className="xl:max-w-7xl lg:max-w-7xl px-10"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    
                >
                   <CarouselContent className="flex mx-auto ">
                    {SCosmetics.map((sp, index) => (
                        <CarouselItem key={index}  className="lg:basis-1/3 xl:basis-1/4  ">
                        <div className="p-1">
                            <Card className="h-[420px] cursor-pointer mt-10 ">
                            <CardBody className="flex p-0 flex-col justify-between">
                                <div className="flex justify-center">
                                <Image width={300} height={300} src={sp.src} alt="Tax Innovation"/>
                                <div className='absolute bottom-28 right-12'>
                                <Button variant='outline' size='icon'>
                                    <Heart className='text-primary' />
                                </Button>
                                </div>
                                <div className='absolute bottom-28 right-1'>
                                <Button variant='outline' size='icon'>
                                    <ShoppingBagIcon className='text-primary' />
                                </Button>
                                </div>
                                </div>
                                <div>
                                <p className="text-muted-foreground text-sm px-5 py-1 max-w-sm">{sp.title}</p>
                                <h1 className="text-left px-5 font-medium text-primary">Dhs. {sp.price}</h1>
                                <div className="flex flex-row items-center pb-6">
                                    {sp.cutoff ? 
                                    <>
                                    <h1 className="line-through pl-5 pr-3 text-sm font-light">Dhs. {sp.cutoff}</h1>
                                    <p className="text-primary">{sp.discount}% OFF</p>
                                    <div className="ml-16 flex flex-row items-center gap-x-1">
                                        <h1>{sp.rating}</h1>
                                        <FaStar className="text-yellow-500" />
                                    </div>
                                    </>
                                    : <div className="hidden">

                                    </div>
                                }
                                </div>
                                </div>
                            </CardBody>
                            </Card>
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel> 
                </TabsContent>
            <TabsContent value="home">
            <Carousel
                    plugins={[plugin.current]}
                    className="xl:max-w-7xl lg:max-w-7xl px-10"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    
                >
                   <CarouselContent className="flex mx-auto ">
                    {SHome.map((sp, index) => (
                        <CarouselItem key={index}  className="lg:basis-1/3 xl:basis-1/4  ">
                        <div className="p-1">
                            <Card className="h-[420px] cursor-pointer mt-10 ">
                            <CardBody className="flex p-0 flex-col justify-between">
                                <div className="flex justify-center">
                                <Image width={300} height={300} src={sp.src} alt="Tax Innovation"/>
                                <div className='absolute bottom-28 right-12'>
                                    <Button variant='outline' size='icon'>
                                        <Heart className='text-primary' />
                                    </Button>
                                    </div>
                                    <div className='absolute bottom-28 right-1'>
                                    <Button variant='outline' size='icon'>
                                        <ShoppingBagIcon className='text-primary' />
                                    </Button>
                                    </div>
                                </div>
                                <div>
                                <p className="text-muted-foreground text-sm px-5 py-1 max-w-sm">{sp.title}</p>
                                <h1 className="text-left px-5 font-medium text-primary">Dhs. {sp.price}</h1>
                                <div className="flex flex-row items-center pb-6">
                                    {sp.cutoff ? 
                                    <>
                                    <h1 className="line-through pl-5 pr-3 text-sm font-light">Dhs. {sp.cutoff}</h1>
                                    <p className="text-primary">{sp.discount}% OFF</p>
                                    <div className="ml-16 flex flex-row items-center gap-x-1">
                                        <h1>{sp.rating}</h1>
                                        <FaStar className="text-yellow-500" />
                                    </div>
                                    </>
                                    : <div className="hidden">

                                    </div>
                                }
                                </div>
                                </div>
                            </CardBody>
                            </Card>
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
                </TabsContent>
            </Tabs>

        </div>
    </section>
  )
}