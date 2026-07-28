import CategoryShowcase from "@/components/categories/CategoryShowcase";
import LatestProducts from "@/components/products/LatestProducts";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import HeroBanner from "@/components/hero/HeroBanner";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <CategoryShowcase />
      <div>
        <LatestProducts />
      </div>
      <FeaturedProducts />
    </div>
  );
}
