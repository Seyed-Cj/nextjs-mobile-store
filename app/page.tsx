import CategoryShowcase from "@/components/CategoryShowcase";
import LatestProducts from "@/components/LatestProducts";

export default function Home() {
  return (
    <div>
      <div className="mt-5">
        <LatestProducts />
      </div>
      <CategoryShowcase />
      <LatestProducts />
    </div>
  );
}
