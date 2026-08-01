import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Product } from "@/types/product";
import ProductSlider from "./ProductSlider";

export interface FeaturedProductsProps {
  title?: string;
  viewAllHref?: string;
  products: Product[];
}

export default function FeaturedProducts({
  title = "محصولات ویژه",
  viewAllHref = "/products",
  products,
}: FeaturedProductsProps) {
  return (
    <section dir="rtl" lang="fa" className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header (RTL order: Title on Right, View All on Left) */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
            {title}
          </h2>

          <Link
            href={viewAllHref}
            className="group flex items-center gap-1 text-sm font-semibold text-neutral-700 transition-colors hover:text-black"
          >
            <span>مشاهده همه</span>
            <ChevronLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
              strokeWidth={2.5}
            />
          </Link>
        </div>

        {/* Product Slider */}
        <ProductSlider products={products} />
      </div>
    </section>
  );
}

