"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductImages({ items }: { items: any }) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div>
        <div className="h-[500px] relative">
          <Image
            src={items[index].image?.url}
            alt=""
            layout="fill"
            objectFit="cover"
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="flex justify-between gap-4 mt-8">
          {items.map((item: any, index: number) => (
            <div
              className="w-1/4 h-32 relative gap-4 mt-2"
              key={item.id}
              onClick={() => setIndex(index)}
            >
              <Image
                src={item.image?.url}
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
