import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";

export default async function ProductCategories({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || 10)
    .find();

  console.log(res);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold px-6 mb-8 mt-10">
          Shop by Categories
        </h1>

        <Carousel className="w-full mx-auto max-w-full">
          <CarouselContent className="-ml-1">
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              {res.items.map((product: products.Product) => (
                <Link href={"/categories/" + product.slug} key={product._id}>
                  <div className="pl-8">
                    <Card className="relative overflow-hidden flex items-center justify-center h-[250px] px-16">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={
                            product.media?.mainMedia?.image?.url ||
                            "/product.png"
                          }
                          alt=""
                          layout="fill"
                          sizes="100%"
                          objectFit="cover"
                          className=" rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              ))}
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
