"use client";
import { SanityProduct } from "@/lib/inventory";
import { Tabs, Tab } from "@nextui-org/react";
import Image from "next/image";

interface props {
  product: SanityProduct;
}

export const ProductDescription = ({ product }: props) => {
  return (
    <div className="flex flex-col lg:flex-row mt-20  justify-between">
      <div className="flex flex-col justify-center">
        <h1 className="text-xl lg:text-2xl font-medium">
          <span className="font-semibold text-primary">| </span>Product
          Description
        </h1>
        <div className="mt-10">
          <Tabs
            color="primary"
            variant="underlined"
            aria-label="Tabs variants"
            className=" w-[200px] sm:w-[400px]"
          >
            <Tab key="photos" title="Description">
              <p className="text-muted-foreground pl-10 max-w-4xl">
                {product.description}
              </p>
            </Tab>
            <Tab key="music" title="Shipping & Returns">
              <p className="text-muted-foreground pl-10 max-w-4xl">
                {product.description}
              </p>
            </Tab>
            <Tab key="videos" title="Reviews">
              <p className="text-muted-foreground pl-10 max-w-4xl">
                {product.description}
              </p>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="pt-20 flex ">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${product.youtubelink}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};
