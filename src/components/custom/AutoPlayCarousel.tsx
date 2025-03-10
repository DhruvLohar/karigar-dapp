"use client";
import Autoplay from "embla-carousel-autoplay";
import React, { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const imageSources = [
    "/homePageImage1.png",
    "/homePageImage2.jpg",
    "/homePageImage3.jpg",
  ];


  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{ align: "center", loop: true }}
    >
      <CarouselContent className="pt-3 px-5 md:px-5 space-x-4 md:space-x-5">
        {imageSources.map((src, index) => (
          <Card
            key={index}
            className="h-[25vh] md:h-[55vh] w-full shrink-0 border-none shadow-none relative"
          >
            <Image
              src={src}
              alt={`Carousel image ${index + 1}`}
              fill={true}
              className="object-cover rounded-lg"
            />
          </Card>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
