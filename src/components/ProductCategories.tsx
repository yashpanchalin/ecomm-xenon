"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function ProductCategories() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
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
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Lenovo Idea ThinkPad",
      description: "Powerful laptop for work and play",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/27520808/pexels-photo-27520808/free-photo-of-a-tube-of-green-body-wash-on-a-white-surface.jpeg",
      title: "Anua, Heartlean Pore Deep Cleansing Foam",
      description: "Deeply cleanses pores for a radiant complexion",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Perfume",
      description:
        "A fragrant liquid typically composed of essential oils and a solvent, used to enhance personal scent.",
    },
    {
      id: 8,
      title: "Black Fujifilm DSLR Camera",
      description:
        "Fujifilm's black DSLR camera offers high-quality images, advanced features, and a sleek design, perfect for photography enthusiasts.",
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      url: "/",
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Lenovo Idea ThinkPad",
      description: "Powerful laptop for work and play",
    },
    {
      id: 10,
      image:
        "https://images.pexels.com/photos/27520808/pexels-photo-27520808/free-photo-of-a-tube-of-green-body-wash-on-a-white-surface.jpeg",
      title: "Anua, Heartlean Pore Deep Cleansing Foam",
      description: "Deeply cleanses pores for a radiant complexion",
    },
    // Add more items as needed
  ];
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-8 text-center mt-10">
          Shop by Categories
        </h1>
        <Carousel
          plugins={[plugin.current]}
          className="w-full mx-auto max-w-full"
        >
          <CarouselContent className="-ml-1">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="pl-8">
                  <Card className="relative overflow-hidden flex items-center justify-center h-[250px] px-16">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        sizes="100%"
                        objectFit="cover"
                        className=" rounded-md"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
        <CarouselNext /> */}
        </Carousel>
      </div>
    </>
  );
}
