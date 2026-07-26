"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

interface Product {
  tag: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  theme: "light" | "dark";
}

const products: Product[] = [
  {
    tag: "New Mac Pro",
    title: "مک بوک پرو",
    description: "مشاهده قیمت و خرید جدیدترین مک بوک های اپل",
    href: "/macbook-pro1",
    image: "/images/macbook-pro-2025.jpg",
    theme: "light",
  },
  {
    tag: "New Macbook",
    title: "مک بوک نئو",
    description: "مشاهده قیمت و خرید جدیدترین سری مک بوک",
    href: "/macbook-neo",
    image: "/images/neo2026.jpg",
    theme: "dark",
  },
  {
    tag: "iPhone",
    title: "گوشی های اپل",
    description: "مشاهده و خرید جدیدترین گوشی های اپل",
    href: "/iphone-15-pro",
    image: "/images/iphone-17-pro.jpg",
    theme: "light",
  },
  {
    tag: "New iPad Air",
    title: "آیپد ایر اپل",
    description: "مشاهده قیمت و خرید جدیدترین آیپد ایر اپل",
    href: "/ipad-air1",
    image: "/images/ipad-air-2026.jpg",
    theme: "dark",
  },
];

function ProductCard({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(product.image) && !imageError;
  const isLight = product.theme === "light";

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
        {isLight ? (
          <>
            <span className="text-[13px] font-bold tracking-wide text-white">
              {product.tag}
            </span>

            <h3 className="mt-1.5 text-[22px] font-bold leading-tight tracking-tight text-white">
              {product.title}
            </h3>

            <p className="mt-2 max-w-[90%] text-[13px] leading-relaxed text-white/85">
              {product.description}
            </p>
          </>
        ) : (
          <>
            <>
              <span className="text-[13px] font-bold tracking-wide text-black">
                {product.tag}
              </span>

              <h3 className="mt-1.5 text-[22px] font-bold leading-tight tracking-tight text-black">
                {product.title}
              </h3>

              <p className="mt-2 max-w-[90%] text-[13px] leading-relaxed text-black/85">
                {product.description}
              </p>
            </>
          </>
        )}
      </div>
    </Link>
  );
}

export default function LatestProducts() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [edge, setEdge] = useState({ isBeginning: true, isEnd: false });

  function syncEdge(swiper: SwiperType) {
    setEdge({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  }

  return (
    <section dir="rtl" lang="fa" className="py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-[17px] font-normal text-neutral-500 sm:text-xl">
            <span className="font-bold text-neutral-900">آخرین‌ها،</span>{" "}
            جدیدترین محصولات اپل
          </h2>

          <div className="flex items-center gap-2.5">
            <button
              ref={prevRef}
              type="button"
              aria-label="اسلاید قبلی"
              disabled={edge.isBeginning}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/8 bg-white text-neutral-700 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:shadow-md active:scale-95 disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
            </button>

            <button
              ref={nextRef}
              type="button"
              aria-label="اسلاید بعدی"
              disabled={edge.isEnd}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/8 bg-white text-neutral-700 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:shadow-md active:scale-95 disabled:pointer-events-none disabled:opacity-35"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2.2} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            dir="rtl"
            slidesPerView="auto"
            spaceBetween={20}
            onSwiper={(swiper) => {
              // @ts-expect-error
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
              syncEdge(swiper);
            }}
            onSlideChange={syncEdge}
            className="overflow-hidden"
          >
            {products.map((product) => (
              <SwiperSlide
                key={product.href}
                className="w-75! sm:w-85! lg:w-90!"
              >
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
