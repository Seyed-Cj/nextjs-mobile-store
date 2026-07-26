"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import { FeaturedProduct } from "@/types/product";
import ProductCard from "./ProductCard";

export interface ProductSliderProps {
  products: FeaturedProduct[];
  onBuyNow?: (product: FeaturedProduct) => void;
}

export default function ProductSlider({
  products,
  onBuyNow,
}: ProductSliderProps) {
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
    <div className="group/slider relative w-full">
      {/* Visual Right Button (Previous in RTL) */}
      <button
        ref={prevRef}
        type="button"
        disabled={edge.isBeginning}
        aria-label="اسلاید قبلی"
        className="absolute -right-2 sm:-right-4 lg:-right-5 top-1/2 z-10 flex h-10 w-10 sm:h-11 sm:w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 text-neutral-800 shadow-md backdrop-blur-xs transition-all duration-200 hover:bg-white hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-30"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
      </button>

      {/* Visual Left Button (Next in RTL) */}
      <button
        ref={nextRef}
        type="button"
        disabled={edge.isEnd}
        aria-label="اسلاید بعدی"
        className="absolute -left-2 sm:-left-4 lg:-left-5 top-1/2 z-10 flex h-10 w-10 sm:h-11 sm:w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 text-neutral-800 shadow-md backdrop-blur-xs transition-all duration-200 hover:bg-white hover:shadow-lg active:scale-95 disabled:pointer-events-none disabled:opacity-30"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
      </button>

      {/* Swiper Slider Container */}
      <Swiper
        modules={[Navigation, A11y, Keyboard]}
        dir="rtl"
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
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
        className="overflow-hidden py-2"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="h-auto">
            <ProductCard product={product} onBuyNow={onBuyNow} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
