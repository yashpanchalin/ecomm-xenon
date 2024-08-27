import ProductImages from "@/components/ProductImages";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Star, StarHalf, Truck, NotepadText } from "lucide-react";
import CustomisedProduct from "@/components/CustomisedProduct";
import Add from "@/components/Add";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import StyledProductDetails from "@/components/StyledProductDetails";

export default function SinglePage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative tracking-tighter">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages />
        </div>
        {/* TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-semibold">Fujifilm Dslr Camera</h1>
          <p className="text-gray-500 font-light">
            The Fujifilm DSLR Camera is a high-performance device designed for
            both professional photographers and enthusiasts. It features a 26.1
            MP APS-C X-Trans CMOS 4 sensor, advanced autofocus, and 5-axis
            in-body image stabilization. Capture stunning 4K video, enjoy
            intuitive controls, and explore creative possibilities with
            Fujifilm&apos;s signature Film Simulation modes. Built to withstand
            the elements with its weather-sealed body, this camera is your
            reliable partner for capturing unforgettable moments.
          </p>

          <Separator />
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">$1679</h3>
            <h2 className="text-2xl font-medium">$1499</h2>

            <div className="flex">
              <Star color="2505d8" fill="2505d8" size={16} />
              <Star color="2505d8" fill="2505d8" size={16} />
              <Star color="2505d8" fill="2505d8" size={16} />
              <StarHalf color="2505d8" fill="2505d8" size={16} />
            </div>

            <div>
              <h3 className="text-base text-gray-500">235 Reviews</h3>
            </div>
          </div>
          <Separator />
          <CustomisedProduct />
          <Add />
          <Separator />
          <StyledProductDetails />
        </div>
      </div>
    </>
  );
}
