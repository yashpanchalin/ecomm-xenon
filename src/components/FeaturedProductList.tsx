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
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";

export default async function FeaturedProductList({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit: number;
  searchParams?: any;
}) {
  const wixClient = await wixClientServer();
  let productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 9999999)
    .eq("collectionIds", categoryId)
    .limit(limit || 10);
  // .find();

  if (searchParams?.sort) {
    switch (searchParams.sort) {
      case "price:low-to-high":
        productQuery = productQuery.ascending("priceData.price");
        break;
      case "price:high-to-low":
        productQuery = productQuery.descending("priceData.price");
        break;
      // Add other sorting options here if needed
    }
  }

  const res = await productQuery.find();
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-16 md:px-12 xl:px-4 lg:px-20">
          {res.items.map((product: products.Product) => (
            <Link href={"/" + product.slug} key={product._id}>
              <Card className="rounded-3xl overflow-hidden sm:w-64 md:w-72 lg:w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 sm:h-56 md:h-64">
                  <Image
                    src={product.media?.mainMedia?.image?.url || "/product.png"}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-500 ease-in-out"
                  />
                  {product.media?.items && (
                    <Image
                      src={
                        product.media?.items[1]?.image?.url || "/product.png"
                      }
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    />
                  )}
                </div>
                <CardContent className="p-6">
                  <h2 className="font-semibold text-xl mb-3 text-gray-800">
                    {product.name}
                  </h2>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-600">
                      <div className="text-sm font-medium">Price</div>
                      <div className="font-bold text-2xl text-gray-800">
                        {`$` + product.price?.price}
                      </div>
                    </div>
                    <Button className="bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full p-3 transition-colors duration-300">
                      <ShoppingCart size={24} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
