import React from "react";
import { Metadata } from "next";
import ProductListingPage from "@/components/products/listing/ProductListingPage";
import ProductPage from "@/components/product/ProductPage";
import {
  getProductById,
  getProductsByCategory,
  allProducts,
} from "@/lib/data/products";

interface PageProps {
  params: Promise<{ category: string }>;
}

const CATEGORY_NAMES: Record<string, string> = {
  iphone: "آیفون",
  mac: "مک‌بوک و مک",
  ipad: "آیپد",
  watch: "اپل واچ",
  airpods: "ایرپاد",
  accessories: "لوازم جانبی",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const slug = category.toLowerCase();

  // Check if slug is a product detail ID
  const product = await getProductById(slug);
  if (product) {
    return {
      title: `${product.name} | فروشگاه اپل`,
      description: product.tagline ?? "فروشگاه آنلاین رسمی محصولات اپل",
    };
  }

  // Category page metadata
  const categoryTitle = CATEGORY_NAMES[slug] || category;
  return {
    title: `خرید ${categoryTitle} | فروشگاه آنلاین اپل`,
    description: `مشاهده آخرین مدل‌ها و قیمت روز انواع ${categoryTitle} اصل با گارانتی.`,
  };
}

export async function generateStaticParams() {
  const categories = ["iphone", "mac", "ipad", "watch", "airpods", "accessories"];
  const productIds = allProducts.map((p) => p.id);
  
  return [...categories, ...productIds].map((param) => ({
    category: param,
  }));
}

export default async function CategoryOrDetailPage({ params }: PageProps) {
  const { category } = await params;
  const slug = category.toLowerCase();

  // 1. Check if parameter matches a product detail ID
  const product = await getProductById(slug);
  if (product) {
    return <ProductPage product={product} />;
  }

  // 2. Otherwise render category listing page
  const products = await getProductsByCategory(slug);
  const categoryTitle = CATEGORY_NAMES[slug] || category;

  return (
    <ProductListingPage
      initialProducts={products}
      categoryTitle={categoryTitle}
      categorySlug={slug}
    />
  );
}
