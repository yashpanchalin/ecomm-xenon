import FeaturedProductList from "@/components/FeaturedProductList";
import HeroSlider from "@/components/HeroSlider";
import ProductCategories from "@/components/ProductCategories";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <div className="mt-24">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h1>
        <FeaturedProductList />
      </div>
      <ProductCategories />
    </>
  );
}
