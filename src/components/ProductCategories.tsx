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

  const res = await wixClient.collections.queryCollections().find();

  console.log(res);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold px-6 mb-8 mt-10">
          Shop by Categories
        </h1>

        <Carousel className="w-full mx-auto max-w-full">
          <CarouselContent className="-ml-1">
            {res.items.map((item) => (
              <CarouselItem
                key={item._id}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <Link href={`/categories?cat=${item.slug}`}>
                  <div className="pl-8">
                    <Card className="relative overflow-hidden flex items-center justify-center h-[250px] px-16">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={
                            item.media?.mainMedia?.image?.url || "/product.png"
                          }
                          alt=""
                          layout="fill"
                          sizes="100%"
                          objectFit="cover"
                          className=" rounded-md"
                        />
                      </CardContent>
                    </Card>
                    <h3 className="mt-2 font-semibold">{item.name}</h3>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
