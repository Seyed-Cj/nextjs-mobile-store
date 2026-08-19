import React from "react";
import Link from "next/link";
import { ProductDetailInterface } from "@/types/product";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import { ShieldCheck, BadgeCheck, Headphones, Package, ChevronLeft } from "lucide-react";

interface ProductPageProps {
  product: ProductDetailInterface;
}

const bottomTrustBadges = [
  {
    title: "پرداخت امن",
    description: "با درگاه‌های معتبر بانکی",
    icon: ShieldCheck,
  },
  {
    title: "نماد اعتماد الکترونیکی",
    description: "خریدی مطمئن و ایمن",
    icon: BadgeCheck,
  },
  {
    title: "پشتیبانی ۲۴/۷",
    description: "پاسخگو در تمام روزهای هفته",
    icon: Headphones,
  },
  {
    title: "بسته‌بندی اختصاصی",
    description: "در بسته‌بندی اصلی اپل",
    icon: Package,
  },
];

export default function ProductPage({ product }: ProductPageProps) {
  // Gallery images fallback
  const galleryImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* 1. Breadcrumb */}
      <nav
        aria-label="مسیر صفحه"
        className="mb-6 sm:mb-8 flex items-center gap-1.5 text-xs sm:text-sm text-gray-500"
      >
        <Link href="/" className="hover:text-black transition-colors">
          خانه
        </Link>
        <ChevronLeft className="h-3.5 w-3.5 stroke-2 text-gray-400" />
        <Link href="/" className="hover:text-black transition-colors">
          محصولات
        </Link>
        <ChevronLeft className="h-3.5 w-3.5 stroke-2 text-gray-400" />
        <span className="font-medium text-gray-900 line-clamp-1" aria-current="page">
          {product.name}
        </span>
      </nav>

      {/* 2. Main Product Section (Two Columns RTL: Gallery on RIGHT, Info on LEFT) */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
        {/* Right side — Image Gallery (lg:col-span-7 or 6) */}
        <div className="lg:col-span-7">
          <ProductGallery images={galleryImages} productName={product.name} />
        </div>

        {/* Left side — Product Info (lg:col-span-5 or 6) */}
        <div className="lg:col-span-5">
          <ProductInfo product={product} />
        </div>
      </div>

      {/* 3. Product Tabs Section */}
      <ProductTabs />

      {/* 4. Bottom Trust Bar */}
      <div className="mt-12 sm:mt-16 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {bottomTrustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="flex flex-col items-center p-2"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
                  <Icon className="h-6 w-6 stroke-[1.75]" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">
                  {badge.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
