import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FeaturedProduct } from "@/types/product";
import { formatPersianPrice } from "@/lib/utils";

export interface ProductCardProps {
  product: FeaturedProduct;
  onBuyNow?: (product: FeaturedProduct) => void;
  className?: string;
}

export default function ProductCard({
  product,
  onBuyNow,
  className = "",
}: ProductCardProps) {
  const formattedPrice = formatPersianPrice(
    product.priceFrom,
    product.currency ?? "تومان",
    "از",
  );

  const handleBuyClick = (e: React.MouseEvent) => {
    if (onBuyNow) {
      e.preventDefault();
      onBuyNow(product);
    }
  };

  return (
    <article
      className={`group relative flex h-full flex-col justify-between rounded-3xl bg-neutral-100 p-5 transition-all duration-300 hover:shadow-md ${className}`}
    >
      {/* Image Container with rounded top background */}
      <Link
        href={product.href}
        className="relative mb-4 flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-white p-4 transition-transform duration-300 group-hover:scale-[1.02]"
        aria-label={product.name}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 280px"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 right-3 rounded-full bg-black px-2.5 py-1 text-[11px] font-medium text-white shadow-xs">
            {product.badge}
          </span>
        )}
      </Link>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="line-clamp-1 text-base font-bold tracking-tight text-neutral-900">
            <Link href={product.href} className="hover:text-black">
              {product.name}
            </Link>
          </h3>

          {/* Price */}
          <p className="mt-1 text-sm font-semibold text-neutral-700">
            {formattedPrice}
          </p>

          {/* Color Swatches */}
          {product.colors && product.colors.length > 0 && (
            <div
              className="mt-3.5 flex items-center gap-1.5"
              aria-label="رنگ‌های موجود"
            >
              {product.colors.map((color, index) => (
                <span
                  key={`${color.hex}-${index}`}
                  className="h-4.5 w-4.5 rounded-full border border-black/15 shadow-2xs transition-transform hover:scale-110"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          )}
        </div>

        {/* Buy Button */}
        <div className="mt-5">
          {onBuyNow ? (
            <button
              type="button"
              onClick={handleBuyClick}
              className="w-full rounded-full bg-black py-2.5 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 active:scale-[0.98]"
            >
              خرید
            </button>
          ) : (
            <Link
              href={product.href}
              className="block w-full rounded-full bg-black py-2.5 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 active:scale-[0.98]"
            >
              خرید
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
