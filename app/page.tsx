import CategoryShowcase from "@/components/categories/CategoryShowcase";
import LatestProducts from "@/components/products/LatestProducts";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import HeroBanner from "@/components/hero/HeroBanner";
import { getFeaturedProducts, getIPhoneProducts } from "@/lib/data/products";

export default async function Home() {
  const featured = await getFeaturedProducts();
  const iPhones = await getIPhoneProducts();

  return (
    <>
      <section>
        <HeroBanner />
      </section>
      <section>
        <CategoryShowcase />
      </section>
      <section>
        <LatestProducts />
      </section>
      <section>
        <FeaturedProducts products={featured} />
      </section>
      <section>
        <FeaturedProducts title="آیفون‌ها" products={iPhones} />
      </section>
    </>
  );
}

