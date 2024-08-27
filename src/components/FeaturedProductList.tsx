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
import Link from "next/link";

export default function FeaturedProductList() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-16 md:px-12 xl:px-4 lg:px-20">
          <Link href="/test">
            <Card className="rounded-3xl overflow-hidden sm:w-64 md:w-72 lg:w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                    <div className="font-bold text-2xl text-gray-800">
                      $1490
                    </div>
                  </div>
                  <Button className="bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full p-3 transition-colors duration-300">
                    <ShoppingCart size={24} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/test2">
            <Card className="rounded-3xl overflow-hidden sm:w-64 md:w-72 lg:w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src="https://images.pexels.com/photos/26924214/pexels-photo-26924214/free-photo-of-chanel-chance-perfume-bottle.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500 ease-in-out"
                />
                <Image
                  src="https://images.pexels.com/photos/26924217/pexels-photo-26924217/free-photo-of-chanel-chance-perfume-bottle-on-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="font-semibold text-xl mb-3 text-gray-800">
                  Chance Chanel Perfume
                </h2>
                <div className="flex items-center justify-between">
                  <div className="text-gray-600">
                    <div className="text-sm font-medium">Price</div>
                    <div className="font-bold text-2xl text-gray-800">$55</div>
                  </div>
                  <Button className="bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full p-3 transition-colors duration-300">
                    <ShoppingCart size={24} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/test3">
            <Card className="rounded-3xl overflow-hidden sm:w-64 md:w-72 lg:w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src="https://images.pexels.com/photos/3766113/pexels-photo-3766113.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500 ease-in-out"
                />
                <Image
                  src="https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="font-semibold text-xl mb-3 text-gray-800">
                  Sapphire Analog Wrist Watch
                </h2>
                <div className="flex items-center justify-between">
                  <div className="text-gray-600">
                    <div className="text-sm font-medium">Price</div>
                    <div className="font-bold text-2xl text-gray-800">$175</div>
                  </div>
                  <Button className="bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full p-3 transition-colors duration-300">
                    <ShoppingCart size={24} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/test4">
            <Card className="rounded-3xl overflow-hidden sm:w-64 md:w-72 lg:w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src="https://images.pexels.com/photos/4938503/pexels-photo-4938503.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500 ease-in-out"
                />
                <Image
                  src="https://images.pexels.com/photos/3735617/pexels-photo-3735617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="font-semibold text-xl mb-3 text-gray-800">
                  Face Rollers
                </h2>
                <div className="flex items-center justify-between">
                  <div className="text-gray-600">
                    <div className="text-sm font-medium">Price</div>
                    <div className="font-bold text-2xl text-gray-800">$45</div>
                  </div>
                  <Button className="bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full p-3 transition-colors duration-300">
                    <ShoppingCart size={24} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/test5">
            <Card className="rounded-3xl overflow-hidden sm:w-64 md:w-72 lg:w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src="https://images.pexels.com/photos/3766113/pexels-photo-3766113.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500 ease-in-out"
                />
                <Image
                  src="https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="font-semibold text-xl mb-3 text-gray-800">
                  Sapphire Analog Wrist Watch
                </h2>
                <div className="flex items-center justify-between">
                  <div className="text-gray-600">
                    <div className="text-sm font-medium">Price</div>
                    <div className="font-bold text-2xl text-gray-800">$175</div>
                  </div>
                  <Button className="bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full p-3 transition-colors duration-300">
                    <ShoppingCart size={24} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/test6">
            <Card className="rounded-3xl overflow-hidden sm:w-64 md:w-72 lg:w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src="https://images.pexels.com/photos/4938503/pexels-photo-4938503.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500 ease-in-out"
                />
                <Image
                  src="https://images.pexels.com/photos/3735617/pexels-photo-3735617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="font-semibold text-xl mb-3 text-gray-800">
                  Face Rollers
                </h2>
                <div className="flex items-center justify-between">
                  <div className="text-gray-600">
                    <div className="text-sm font-medium">Price</div>
                    <div className="font-bold text-2xl text-gray-800">$45</div>
                  </div>
                  <Button className="bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full p-3 transition-colors duration-300">
                    <ShoppingCart size={24} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
}
