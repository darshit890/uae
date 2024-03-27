'use client'
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Tab, Tabs, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { SCosmetics, SHome, Sbeauty } from "@/utils/constant";
import { Button } from "./ui/button";
import { Heart, ShoppingBagIcon } from "lucide-react";

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true })
  }

export const SpecialOffer = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
        
      )
  return (
    <section className='mt-20 bg-primary rounded-md max-w-7xl mx-auto hidden lg:block'>
        <div className="flex py-6 items-center rounded-lg flex-col bg-gradient-to-t from-[#ff1824] to-[#ee198e]">
            <Tabs aria-label='options' color='primary' size='lg' className="md:max-w-xl max-w-md">
                <Tab key="beauty" title={'Beauty/Health'} className="flex flex-row text-xs">
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
                                    <div className='flex flex-row  items-center'>

                                    <h1 className='line-through pr-1 text-sm'>Dhs. {sp.cutoff}</h1>
                                    <p className='text-xs text-primary'>{sp.discount}% OFF</p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
                </Tab>
                <Tab key="cosmetics" title={'O.Two.O'} className="flex flex-row text-xs">
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
                                    <><h1 className="line-through pl-5 pr-3 text-sm font-light">Dhs. {sp.cutoff}</h1><p className="text-primary">{sp.discount}% OFF</p></>
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
                </Tab>
                <Tab key="home" title={'Home Decor'} className="flex flex-row text-xs">
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
                                    <><h1 className="line-through pl-5 pr-3 text-sm font-light">Dhs. {sp.cutoff}</h1><p className="text-primary">{sp.discount}% OFF</p></>
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
                </Tab>
            </Tabs>
        </div>
    </section>
  )
}