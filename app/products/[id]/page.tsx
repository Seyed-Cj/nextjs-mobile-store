import React from "react";
import { Metadata } from "next";
import ProductPage from "@/components/product/ProductPage";
import { getProductById, getFeaturedProducts } from "@/lib/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const featured = await getFeaturedProducts();
  const product = (await getProductById(id)) ?? featured[0];

  return {
    title: `${product.name} | فروشگاه اپل`,
    description: product.tagline ?? "فروشگاه آنلاین محصولات رسمی اپل",
  };
}

export async function generateStaticParams() {
  const featured = await getFeaturedProducts();
  return featured.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const featured = await getFeaturedProducts();
  const product = (await getProductById(id)) ?? featured[0];

  return <ProductPage product={product} />;
}

