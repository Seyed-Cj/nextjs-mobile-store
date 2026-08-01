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
      <section className="hidden sm:block">
        <HeroBanner />
      </section>
      <section className="pt-8 sm:pt-0">
        <CategoryShowcase />
      </section>
      <section className="">
        <LatestProducts />
      </section>
      <section className="">
        <FeaturedProducts products={featured} />
      </section>
      <section className="">
        <FeaturedProducts title="آیفون‌ها" products={iPhones} />
      </section>
    </>
  );
}

