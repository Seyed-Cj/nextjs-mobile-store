"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Product } from "@/types/product";
import { formatPersianPrice } from "@/lib/utils";

export interface ProductGridCardProps {
  product: Product;
  className?: string;
}

export default function ProductGridCard({
  product,
  className = "",
}: ProductGridCardProps) {
  const [isWishlist, setIsWishlist] = useState(false);

  const formattedPrice = formatPersianPrice(
    product.priceFrom,
    product.currency ?? "تومان",
    "از",
  );

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-3xl bg-neutral-50 border border-neutral-200/60 p-4 transition-all duration-300 hover:shadow-lg hover:border-neutral-300 ${className}`}
    >
      {/* Product Image Container */}
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-white p-4 transition-transform duration-300">
        <Link
          href={product.href}
          aria-label={product.name}
          className="relative flex h-full w-full items-center justify-center"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Top-Right Wishlist Heart Icon (in RTL, top-right is inset-e-3) */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setIsWishlist(!isWishlist);
          }}
          aria-label="افزودن به علاقه‌مندی‌ها"
          className="absolute top-3 inset-e-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow-2xs backdrop-blur-xs transition-colors hover:bg-white hover:text-red-500 z-10 cursor-pointer"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isWishlist ? "fill-red-500 text-red-500" : ""
            }`}
          />
        </button>
      </div>

      {/* Product Information Section */}
      <div className="mt-4 flex flex-1 flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="line-clamp-1 text-base font-bold tracking-tight text-neutral-900">
            <Link
              href={product.href}
              className="transition-colors hover:text-neutral-600"
            >
              {product.name}
            </Link>
          </h3>

          {/* Price */}
          <p className="mt-2 text-sm font-bold text-neutral-900">
            {formattedPrice}
          </p>

          {/* Color Swatch Row (Display-only) */}
          {product.colors && product.colors.length > 0 && (
            <div
              className="mt-3.5 flex items-center gap-1.5"
              aria-label="رنگ‌های موجود"
            >
              {product.colors.map((color, index) => (
                <span
                  key={`${color.hex}-${index}`}
                  className="h-4.5 w-4.5 rounded-full border border-black/15 shadow-2xs"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          )}
        </div>

        {/* View Details / Action Button */}
        <div className="mt-5">
          <Link
            href={product.href}
            className="block w-full rounded-full bg-neutral-900 py-2.5 text-center text-xs font-semibold text-white transition-all duration-200 hover:bg-black active:scale-[0.98] shadow-2xs"
          >
            مشاهده جزئیات
          </Link>
        </div>
      </div>
    </article>
  );
}
