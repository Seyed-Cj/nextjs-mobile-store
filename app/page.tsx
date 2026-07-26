import CategoryShowcase from "@/components/CategoryShowcase";
import LatestProducts from "@/components/LatestProducts";
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
