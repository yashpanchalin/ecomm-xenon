import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function FeaturedProductList() {
  return (
    <>
      {/* <div>
        <h1 className=" text-2xl">Featured Products</h1>
      </div>
      <div className="p-32 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        <Card className="rounded-3xl overflow-hidden flex flex-col w-full sm:w-64 md:w-72 lg:w-80 shadow-lg">
          <div className="relative h-48 sm:h-56 md:h-64">
            <Image
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out"
            />
            <Image
              src="https://images.pexels.com/photos/4566688/pexels-photo-4566688.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
            />
          </div>
          <CardContent className="flex flex-col items-center p-4 bg-white">
            <h2 className="font-semibold text-lg mb-2">
              Black Fujifilm DSLR Camera
            </h2>
            <div className="flex items-center justify-between w-full">
              <div className="text-gray-600">
                <div className="text-sm">Price :</div>
                <div className="font-extrabold text-lg">$75</div>
              </div>
              <Button className="bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white rounded-md p-2">
                <ShoppingCart size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-3xl overflow-hidden flex flex-col w-full sm:w-64 md:w-72 lg:w-80 shadow-lg">
          <div className="relative h-48 sm:h-56 md:h-64">
            <Image
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out"
            />
            <Image
              src="https://images.pexels.com/photos/4566688/pexels-photo-4566688.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
            />
          </div>
          <CardContent className="flex flex-col items-center p-4 bg-white">
            <h2 className="font-semibold text-lg mb-2">
              Black Fujifilm DSLR Camera
            </h2>
            <div className="flex items-center justify-between w-full">
              <div className="text-gray-600">
                <div className="text-sm">Price :</div>
                <div className="font-extrabold text-lg">$75</div>
              </div>
              <Button className="bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white rounded-md p-2">
                <ShoppingCart size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-3xl overflow-hidden flex flex-col w-full sm:w-64 md:w-72 lg:w-80 shadow-lg">
          <div className="relative h-48 sm:h-56 md:h-64">
            <Image
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out"
            />
            <Image
              src="https://images.pexels.com/photos/4566688/pexels-photo-4566688.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
            />
          </div>
          <CardContent className="flex flex-col items-center p-4 bg-white">
            <h2 className="font-semibold text-lg mb-2">
              Black Fujifilm DSLR Camera
            </h2>
            <div className="flex items-center justify-between w-full">
              <div className="text-gray-600">
                <div className="text-sm">Price :</div>
                <div className="font-extrabold text-lg">$75</div>
              </div>
              <Button className="bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white rounded-md p-2">
                <ShoppingCart size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-3xl overflow-hidden flex flex-col w-full sm:w-64 md:w-72 lg:w-80 shadow-lg">
          <div className="relative h-48 sm:h-56 md:h-64">
            <Image
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out"
            />
            <Image
              src="https://images.pexels.com/photos/4566688/pexels-photo-4566688.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
            />
          </div>
          <CardContent className="flex flex-col items-center p-4 bg-white">
            <h2 className="font-semibold text-lg mb-2">
              Black Fujifilm DSLR Camera
            </h2>
            <div className="flex items-center justify-between w-full">
              <div className="text-gray-600">
                <div className="text-sm">Price :</div>
                <div className="font-extrabold text-lg">$75</div>
              </div>
              <Button className="bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white rounded-md p-2">
                <ShoppingCart size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-3xl overflow-hidden flex flex-col w-full sm:w-64 md:w-72 lg:w-80 shadow-lg">
          <div className="relative h-48 sm:h-56 md:h-64">
            <Image
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out"
            />
            <Image
              src="https://images.pexels.com/photos/4566688/pexels-photo-4566688.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
            />
          </div>
          <CardContent className="flex flex-col items-center p-4 bg-white">
            <h2 className="font-semibold text-lg mb-2">
              Black Fujifilm DSLR Camera
            </h2>
            <div className="flex items-center justify-between w-full">
              <div className="text-gray-600">
                <div className="text-sm">Price :</div>
                <div className="font-extrabold text-lg">$75</div>
              </div>
              <Button className="bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white rounded-md p-2">
                <ShoppingCart size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-3xl overflow-hidden flex flex-col w-full sm:w-64 md:w-72 lg:w-80 shadow-lg">
          <div className="relative h-48 sm:h-56 md:h-64">
            <Image
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out"
            />
            <Image
              src="https://images.pexels.com/photos/4566688/pexels-photo-4566688.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
            />
          </div>
          <CardContent className="flex flex-col items-center p-4 bg-white">
            <h2 className="font-semibold text-lg mb-2">
              Black Fujifilm DSLR Camera
            </h2>
            <div className="flex items-center justify-between w-full">
              <div className="text-gray-600">
                <div className="text-sm">Price :</div>
                <div className="font-extrabold text-lg">$75</div>
              </div>
              <Button className="bg-[#E9E6FB] text-[#2505D8] hover:bg-[#2505D8] hover:text-white rounded-md p-2">
                <ShoppingCart size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-8 md:px-24 lg:px-0 xl:px-32">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card
              key={item}
              className="rounded-3xl overflow-hidden sm:w-64 md:w-72 lg:w-80 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500 ease-in-out"
                />
                <Image
                  src="https://images.pexels.com/photos/4566688/pexels-photo-4566688.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="font-semibold text-xl mb-3 text-gray-800">
                  Black Fujifilm DSLR Camera
                </h2>
                <div className="flex items-center justify-between">
                  <div className="text-gray-600">
                    <div className="text-sm font-medium">Price</div>
                    <div className="font-bold text-2xl text-gray-800">$75</div>
                  </div>
                  <Button className="bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full p-3 transition-colors duration-300">
                    <ShoppingCart size={24} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
