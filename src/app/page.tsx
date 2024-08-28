import FeaturedProductList from "@/components/FeaturedProductList";
import HeroSlider from "@/components/HeroSlider";
import ProductCategories from "@/components/ProductCategories";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <HeroSlider />
      <div className="mt-24">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h1>
        <Suspense fallback={"loading"}>
          <FeaturedProductList
            categoryId={process.env.WIX_FEATURE_PRODUCT_ID!}
            limit={6}
          />
        </Suspense>
      </div>
      <Suspense fallback={"loading"}>
        <ProductCategories
          categoryId={process.env.WIX_CATEGORY_ID!}
          limit={4}
        />
      </Suspense>
    </>
  );
}
