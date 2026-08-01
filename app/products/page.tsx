import React from "react";
import { Metadata } from "next";
import ProductListingPage from "@/components/products/listing/ProductListingPage";
import { getAllProducts } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "محصولات اپل | فروشگاه آنلاین اپل",
  description: "مشاهده و خرید تمامی محصولات رسمی اپل شامل آیفون، مک‌بوک، آی‌پد و لوازم جانبی.",
};

export default async function ProductsAllPage() {
  const products = await getAllProducts();

  return (
    <ProductListingPage
      initialProducts={products}
      categoryTitle="همه محصولات اپل"
      categorySlug="all"
    />
  );
}
