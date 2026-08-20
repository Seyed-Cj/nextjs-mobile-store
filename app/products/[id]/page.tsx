import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPage from "@/components/product/ProductPage";
import { getProductById, allProducts } from "@/lib/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id.toLowerCase());

  if (!product) {
    return {
      title: "محصول یافت نشد | فروشگاه آنلاین اپل",
      description: "محصول مورد نظر یافت نشد.",
    };
  }

  return {
    title: `${product.name} | فروشگاه اپل`,
    description: product.tagline ?? "فروشگاه آنلاین رسمی محصولات اپل",
  };
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProductById(id.toLowerCase());

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
