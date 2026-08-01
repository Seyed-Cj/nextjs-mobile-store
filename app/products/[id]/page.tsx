import React from "react";
import { Metadata } from "next";
import ProductPage from "@/components/product/ProductPage";
import { getProductById, featuredProducts } from "@/lib/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id) ?? featuredProducts[0];

  return {
    title: `${product.name} | فروشگاه اپل`,
    description: product.tagline ?? "فروشگاه آنلاین محصولات رسمی اپل",
  };
}

export async function generateStaticParams() {
  return featuredProducts.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id) ?? featuredProducts[0];

  return <ProductPage product={product} />;
}
