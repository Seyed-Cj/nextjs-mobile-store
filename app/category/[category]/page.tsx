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

  const categoryInfo = await getCategoryBySlug(slug);
  if (!categoryInfo) {
    return {
      title: "دسته‌بندی یافت نشد | فروشگاه آنلاین اپل",
      description: "دسته‌بندی مورد نظر یافت نشد.",
    };
  }

  const categoryTitle = categoryInfo.label;

  return {
    title: `خرید ${categoryTitle} | فروشگاه آنلاین اپل`,
    description: `مشاهده آخرین مدل‌ها و قیمت روز انواع ${categoryTitle} اصل با گارانتی.`,
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((cat) => ({
    category: cat.href.replace("/category/", ""),
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const slug = category.toLowerCase();

  const categoryInfo = await getCategoryBySlug(slug);
  if (!categoryInfo) {
    notFound();
  }

  const products = await getProductsByCategory(slug);
  const categoryTitle = categoryInfo.label;

  return (
    <ProductListingPage
      initialProducts={products}
      categoryTitle={categoryTitle}
      categorySlug={slug}
    />
  );
}
