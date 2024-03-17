'use client'
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Tab, Tabs, Card, CardBody, Image, divider } from '@nextui-org/react'
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { SCosmetics, SHome, Sbeauty } from "@/utils/constant";

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true })
  }

export const SpecialOffer = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
        
      )
  return (
    <section className='mt-20 bg-primary rounded-md '>
        <div className="flex py-6 items-center rounded-lg flex-col bg-gradient-to-t from-[#ff1824] to-[#ee198e]">
            <Tabs aria-label='options' color='primary' size='lg' className="md:max-w-xl max-w-md">
                <Tab key="beauty" title={
                    <div className="flex flex-col py-1">
                        <h1 className="text-sm">Beauty & Health</h1>
                        <p className="text-xs">Shocking Sale upto 40% to 50%</p>
                    </div>
                } className="flex flex-row">
                <Carousel
                    plugins={[plugin.current]}
                    className="lg:max-w-full md:max-w-3xl max-w-md px-10 mx-16 "
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    
                >
                    <CarouselContent>
                    {Sbeauty.map((sp, index) => (
                        <CarouselItem key={index}  className="lg:basis-1/2 xl:basis-1/5 ">
                        <div className="p-1">
                            <Card className="h-[420px] cursor-pointer mt-10 flex justify-center">
                            <CardBody className="flex  aspect-auto  p-0 flex-col justify-between items-center md:items-start">
                                <Image className="py-4 w-[300px] h-[300px]" src={sp.src} alt="Tax Innovation"/>
                                <div>
                                <p className="text-muted-foreground text-sm px-5 py-1">{sp.title}</p>
                                <h1 className="text-left px-5 font-medium text-primary">Dhs. {sp.price}</h1>
                                <div className="flex flex-row items-center pb-6">
                                    <h1 className="line-through pl-5 pr-3 text-sm font-light">Dhs. {sp.cutoff}</h1>
                                    <p className="text-primary">{sp.discount}% OFF</p>
                                </div>
                                </div>
                            </CardBody>
                            </Card>
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                </Tab>
                <Tab key="cosmetics" title={
                    <div className="flex flex-col py-1">
                        <h1 className="text-sm">O.TWO.O Cosmetics</h1>
                        <p className="text-xs">Coupon Deal Upto 30% off</p>
                    </div>
                } >
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full px-6"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    
                >
                   <CarouselContent>
                    {SCosmetics.map((sp, index) => (
                        <CarouselItem key={index}  className="basis-1/5">
                        <div className="p-1">
                            <Card className="h-[420px] cursor-pointer mt-10">
                            <CardBody className="flex p-0 flex-col justify-between">
                                <div className="flex justify-center">
                                <Image className="py-4 w-[300px] h-[300px] " src={sp.src} alt="Tax Innovation"/>
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
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel> 
                </Tab>
                <Tab key="home" title={
                    <div className="flex flex-col py-1">
                        <h1 className="text-sm">HOME DÉCOR & APPLIANCES</h1>
                        <p className="text-xs">Only from 50 AED</p>
                    </div>
                } >
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full px-6"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    
                >
                   <CarouselContent>
                    {SHome.map((sp, index) => (
                        <CarouselItem key={index}  className="basis-1/5">
                        <div className="p-1">
                            <Card className="h-[450px] cursor-pointer mt-10 ">
                            <CardBody className="flex  aspect-auto  p-0 flex-col justify-between">
                                <div className="flex justify-center ">
                                <Image className="py-4 w-[300px] h-[300px] rounded-md" src={sp.src} alt="Tax Innovation"/>
                                </div>
                                <div>
                                <p className="text-muted-foreground text-sm px-5 py-1">{sp.title}</p>
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
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                </Tab>
            </Tabs>
        </div>
    </section>
  )
}