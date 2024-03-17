"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardBody, Image } from "@nextui-org/react";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true })
}

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
    
  )
  const images = [
    "/carousel/Ramadan.webp",
    "/carousel/LAROCHE.webp",
    "/carousel/O_TWO_O_.webp",
    "/carousel/COSRX_banner.webp",
    "/carousel/FEAMLE.webp",
    "/carousel/SKIN_CARE_.webp",
    "/carousel/FAV_.webp",
    "/carousel/HOME_DECURATION.webp",
    "/carousel/lengires.webp",
    "/carousel/mens.webp",
  ];
  return (
    <Carousel
    plugins={[plugin.current]}
    className="w-full mx-auto"
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
    
  >
    <CarouselContent>
      {images.map((image, index) => (
        <CarouselItem key={index}  className="">
          <div className="p-1">
            <Card>
              <CardBody className="flex aspect-auto items-center justify-center p-0">
                <Image src={image} alt="Tax Innovation"/>
              </CardBody>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
  );
}
