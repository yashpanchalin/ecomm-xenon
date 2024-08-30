import ProductImages from "@/components/ProductImages";
import React, { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { Star, StarHalf, Truck, NotepadText } from "lucide-react";
import CustomisedProduct from "@/components/CustomisedProduct";
import Add from "@/components/Add";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import StyledProductDetails from "@/components/StyledProductDetails";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import DOMpurify from "isomorphic-dompurify";

export default async function SinglePage({
  params,
}: {
  params: { slug: string };
}) {
  const wixClient = await wixClientServer();
  const productPage = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!productPage.items[0]) {
    return notFound();
  }

  const product = productPage.items[0];

  console.log(product.productOptions);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative tracking-tighter">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages items={product.media?.items} />
        </div>
        {/* TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-semibold">{product.name}</h1>
          <p className="text-gray-500 font-light">{product.description}</p>

          <Separator />
          <div className="flex items-center gap-4">
            {product.price?.price === product.price?.discountedPrice ? (
              <h3 className="text-2xl text-gray-500 ">
                {`$` + product.priceData?.price}
              </h3>
            ) : (
              <>
                <h3 className="text-xl text-gray-500 line-through">
                  {`$` + product.priceData?.price}
                </h3>
                <h2 className="text-2xl font-medium">
                  {`$` + product.priceData?.discountedPrice}
                </h2>
              </>
            )}

            {/* <div className="flex">
              <Star color="2505d8" fill="2505d8" size={16} />
              <Star color="2505d8" fill="2505d8" size={16} />
              <Star color="2505d8" fill="2505d8" size={16} />
              <StarHalf color="2505d8" fill="2505d8" size={16} />
            </div>

            <div>
              <h3 className="text-base text-gray-500">235 Reviews</h3>
            </div> */}
          </div>
          <Separator />

          <div></div>
          {product.variants && product.productOptions ? (
            <CustomisedProduct
              productId={product._id!}
              variants={product.variants}
              productOptions={product.productOptions}
            />
          ) : (
            <Add
              productId={product._id}
              variantId="00000000-000000-000000-000000000001"
              stockNumber={product.stock?.quantity || 0}
            />
          )}
          <Separator />
          <div className="">
            {product.additionalInfoSections?.map((section: any) => (
              <div className="text-sm" key={section.title}>
                <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                  {/* <NotepadText className="text-[#2505d8]" /> */}
                  {section.title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMpurify.sanitize(section.description),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
