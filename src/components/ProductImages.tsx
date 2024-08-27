"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    URL: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    URL: "https://images.pexels.com/photos/4566688/pexels-photo-4566688.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 3,
    URL: "https://images.pexels.com/photos/4566687/pexels-photo-4566687.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 4,
    URL: "https://images.pexels.com/photos/11486469/pexels-photo-11486469.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 5,
    URL: "https://images.pexels.com/photos/9747114/pexels-photo-9747114.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];

export default function ProductImages() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div>
        <div className="h-[500px] relative">
          <Image
            src={images[index].URL}
            alt=""
            layout="fill"
            objectFit="cover"
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="flex justify-between gap-4 mt-8">
          {images.map((img, index) => (
            <div
              className="w-1/4 h-32 relative gap-4 mt-2"
              key={img.id}
              onClick={() => setIndex(index)}
            >
              <Image
                src={img.URL}
                alt=""
                layout="fill"
                objectFit="cover"
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
