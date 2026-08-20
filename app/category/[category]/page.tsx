import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductListingPage from "@/components/products/listing/ProductListingPage";
import { getProductsByCategory } from "@/lib/data/products";
import { getCategoryBySlug, getCategories } from "@/lib/data/categories";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const slug = category.toLowerCase();

  const categoryInfo = getCategoryBySlug(slug);
  const categoryTitle = categoryInfo?.label || category;

  return {
    title: `خرید ${categoryTitle} | فروشگاه آنلاین اپل`,
    description: `مشاهده آخرین مدل‌ها و قیمت روز انواع ${categoryTitle} اصل با گارانتی.`,
  };
}

export async function generateStaticParams() {
  const categories = ["iphone", "mac", "ipad", "watch", "airpods", "accessories", "appletv"];
  return categories.map((cat) => ({
    category: cat,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const slug = category.toLowerCase();

  const products = await getProductsByCategory(slug);
  const categoryInfo = getCategoryBySlug(slug);
  const categoryTitle = categoryInfo?.label || category;

  return (
    <ProductListingPage
      initialProducts={products}
      categoryTitle={categoryTitle}
      categorySlug={slug}
    />
  );
}
