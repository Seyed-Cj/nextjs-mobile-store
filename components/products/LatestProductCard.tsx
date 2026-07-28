"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";

export interface LatestProductCardProps {
  product: Product;
}

export default function LatestProductCard({ product }: LatestProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(product.image) && !imageError;
  const isLight = product.theme === "light";

  const textColorClass = isLight ? "text-white" : "text-black";
  const descColorClass = isLight ? "text-white/85" : "text-black/85";

  return (
    <Link
      href={product.href}
      className="group relative block h-115 w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      {showImage ? (
        <Image
          src={product.image!}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 85vw, 380px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-neutral-300" />
      )}

      <div className="absolute inset-x-0 top-0 z-10 p-6 text-right">
        <span
          className={`text-[13px] font-bold tracking-wide ${textColorClass}`}
        >
          {product.tag}
        </span>

        <h3
          className={`mt-1.5 text-[22px] leading-tight font-bold tracking-tight ${textColorClass}`}
        >
          {product.title}
        </h3>

        <p
          className={`mt-2 max-w-[90%] text-[13px] leading-relaxed ${descColorClass}`}
        >
          {product.description}
        </p>
      </div>
    </Link>
  );
}
