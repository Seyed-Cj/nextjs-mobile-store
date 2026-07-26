import CategoryShowcase from "@/components/CategoryShowcase";
import LatestProducts from "@/components/LatestProducts";
import FeaturedProducts from "@/components/products/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <div className="mt-5">
        <LatestProducts />
      </div>
      <CategoryShowcase />
      <FeaturedProducts />
    </div>
  );
}
