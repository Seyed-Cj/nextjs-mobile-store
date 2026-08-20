import CategoryShowcase from "@/components/categories/CategoryShowcase";
import LatestProducts from "@/components/products/LatestProducts";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import HeroBanner from "@/components/hero/HeroBanner";
import {
  getFeaturedProducts,
  getIPhoneProducts,
  getLatestProducts,
} from "@/lib/data/products";
import { getHeroSlides } from "@/lib/data/hero-slides";
import { getCategories } from "@/lib/data/categories";

export default async function Home() {
  const [heroSlides, categories, latest, featured, iPhones] = await Promise.all([
    getHeroSlides(),
    getCategories(),
    getLatestProducts(),
    getFeaturedProducts(),
    getIPhoneProducts(),
  ]);

  return (
    <>
      <section>
        <HeroBanner slides={heroSlides} />
      </section>
      <section>
        <CategoryShowcase categories={categories} />
      </section>
      <section>
        <LatestProducts products={latest} />
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

