import FeaturedProductList from "@/components/FeaturedProductList";
import Filter from "@/components/Filter";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ListPage() {
  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative tracking-tighter">
        {/* CAMPAIGN AID */}
        <div className="bg-slate-100 p-4 flex justify-between h-64 rounded-md">
          <div className="w-2/3 flex flex-col items-center justify-center gap-8">
            <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
              SALE is Live Now! Get upto 50%
            </h1>
            <Button className="rounding-3xl tracking-tighter flex gap-3 bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white cursor-pointer">
              Buy Now
            </Button>
          </div>
          <div className="relative w-1/3">
            <Image
              src="/perfumepng.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
        <Filter />
        {/* PRODUCT */}
        <h1 className="mt-12 text-xl font-semibold">Watches for you!</h1>
        <FeaturedProductList />
      </div>
    </>
  );
}
