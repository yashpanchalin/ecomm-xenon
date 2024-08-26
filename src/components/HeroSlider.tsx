"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { title } from "process";
import { url } from "inspector";
export default function HeroSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const items = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Lenovo Idea ThinkPad",
      description: "Powerful laptop for work and play",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/27520808/pexels-photo-27520808/free-photo-of-a-tube-of-green-body-wash-on-a-white-surface.jpeg",
      title: "Anua, Heartlean Pore Deep Cleansing Foam",
      description: "Deeply cleanses pores for a radiant complexion",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Perfume",
      description:
        "A fragrant liquid typically composed of essential oils and a solvent, used to enhance personal scent.",
    },
    {
      id: 4,
      title: "Black Fujifilm DSLR Camera",
      description:
        "Fujifilm's black DSLR camera offers high-quality images, advanced features, and a sleek design, perfect for photography enthusiasts.",
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "/",
    },
    // Add more items as needed
  ];
  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full mx-auto max-w-7xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className=" relative overflow-hidden flex items-center justify-center w-full h-[600px] px-16">
                  <CardContent className="flex items-center justify-center p-6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      sizes="100%"
                      objectFit="cover"
                      className=" rounded-md"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                      <div className="p-8 text-white">
                        <h2 className="text-3xl font-bold mb-2">
                          {item.title}
                        </h2>
                        <p className="text-lg">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </>
  );
}
