import FeaturedProductList from "@/components/FeaturedProductList";
import HeroSlider from "@/components/HeroSlider";
import ProductCategories from "@/components/ProductCategories";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeaturedProductList />
      <ProductCategories />
    </>
  );
}
