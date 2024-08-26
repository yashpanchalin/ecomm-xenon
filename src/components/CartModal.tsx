"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export default function CartModal() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const cartItems = true;

  return (
    <>
      <div className="tracking-tighter p-4 absolute top-12 left-2/6 text-sm z-20 w-max flex flex-col gap-6">
        {!cartItems ? (
          <div>Cart is Empty!</div>
        ) : (
          // <div className="">
          //   <Image
          //     src="/orange-perfume.jpg"
          //     alt=""
          //     width={72}
          //     height={96}
          //     className="object-cover rounded-md"
          //   />
          //   <div className="">
          //     {/*Top*/}
          //     <div className="">
          //       {/*Title*/}
          //       <div className="">
          //         <h3>Products</h3>
          //         <div className="">$49</div>
          //       </div>
          //       {/*Description*/}
          //       <div className="">
          //         <h4>Description</h4>
          //         <div className=""> Only 4 units left ! Hurry Up!!</div>
          //       </div>
          //       {/*Bottom*/}
          //     </div>
          //   </div>
          // </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Shopping Cart
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Here&apos;s some of your items
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start">
                    <Image
                      src="/orange-perfume.jpg"
                      alt=""
                      width={72}
                      height={96}
                      className="object-cover rounded-md"
                    />
                    <div className="flex-grow ml-4">
                      <div className="flex justify-between items-center gap-28 px-2">
                        <h3 className="text-lg font-semibold">Perfume</h3>
                        <p className="text-lg font-medium">$49</p>
                      </div>
                      <div className="mt-1 text-sm text-gray-700 px-2">
                        <div>Only 4 units left! Hurry Up!!</div>
                      </div>
                    </div>
                    {/* TODO Add Quantity functionality with backend logics*/}
                    {/* <div className="flex justify-between text-sm">
                      <span className="text-lg font-medium">Qty</span>
                      {/* <Button
                        className="w-8 h-8 text-lg font-bold rounded-r-none focus:outline-none"
                        onClick={decrement}
                      >
                        -
                      </Button>
                      <span className="px-1 py-1 text-lg">{count}</span>
                      <Button
                        className="w-8 h-8 text-lg font-bold rounded-l-none focus:outline-none"
                        onClick={increment}
                      >
                        +
                      </Button>
                    </div> */}
                  </div>
                </div>
              </CardContent>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start">
                    <Image
                      src="https://media.istockphoto.com/id/1199475480/photo/blank-perfume-bottle-and-box-for-branding-3d-render-illustration.jpg?b=1&s=612x612&w=0&k=20&c=VsjaVYLCcq53bqCrHkOsU1D5j6qPUoJLakeiH6MbhuM="
                      alt=""
                      width={72}
                      height={96}
                      className="object-cover rounded-md"
                    />
                    <div className="flex-grow ml-4">
                      <div className="flex justify-between items-center gap-28 px-2">
                        <h3 className="text-lg font-semibold">Perfume</h3>
                        <p className="text-lg font-medium">$49</p>
                      </div>
                      <div className="mt-1 text-sm text-gray-700 px-2">
                        <div>Only 4 units left! Hurry Up!!</div>
                      </div>
                    </div>
                    {/* TODO Add Quantity functionality with backend logics*/}
                    {/* <div className="flex justify-between text-sm">
                      <span className="text-lg font-medium">Qty</span>
                      {/* <Button
                        className="w-8 h-8 text-lg font-bold rounded-r-none focus:outline-none"
                        onClick={decrement}
                      >
                        -
                      </Button>
                      <span className="px-1 py-1 text-lg">{count}</span>
                      <Button
                        className="w-8 h-8 text-lg font-bold rounded-l-none focus:outline-none"
                        onClick={increment}
                      >
                        +
                      </Button>
                    </div> */}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-2">
                    <h1 className="font-extrabold">Summary</h1>
                    <div className="font-semibold">$49</div>
                  </div>
                  <div className="flex px-2">
                    Shipping and Taxes are calculated at checkouts.
                  </div>
                  <div className="flex justify-between gap-4 mt-4">
                    <Button className="tracking-tighter flex gap-3 bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white cursor-pointer">
                      View Cart
                    </Button>
                    <Button className="tracking-tighter flex gap-3 bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white cursor-pointer">
                      Checkout
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}
