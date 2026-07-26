"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import { products } from "@/constants/products";
import ProductCard from "@/components/ProductCard";

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
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            onSwiper={(swiper) => {
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
