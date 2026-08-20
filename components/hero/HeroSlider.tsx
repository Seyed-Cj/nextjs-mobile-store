"use client";

import React, { useSyncExternalStore } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Keyboard, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { HeroSlideData } from "@/types/hero";
import HeroSlide from "./HeroSlide";

export interface HeroSliderProps {
  slides: HeroSlideData[];
  className?: string;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export default function HeroSlider({
  slides,
  className = "",
}: HeroSliderProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className={`relative w-full ${className}`}>
      <Swiper
        modules={[Pagination, A11y, Keyboard, Autoplay]}
        dir="rtl"
        slidesPerView={1}
        spaceBetween={12}
        breakpoints={{
          640: {
            spaceBetween: 0,
          },
        }}
        speed={reducedMotion ? 0 : 500}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        pagination={{
          clickable: true,
          el: ".hero-swiper-pagination",
          bulletClass:
            "hero-bullet inline-block h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-black/25 transition-all duration-300 cursor-pointer hover:bg-black/50 mx-1",
          bulletActiveClass:
            "hero-bullet-active !w-5 sm:!w-7 !bg-neutral-900 !rounded-full shadow-2xs",
        }}
        className="hero-swiper w-full overflow-hidden rounded-2xl sm:rounded-3xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide slide={slide} priority={index === 0} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Container */}
      <div className="pointer-events-none absolute right-0 bottom-2.5 sm:bottom-4 left-0 z-20 flex justify-center">
        <div className="hero-swiper-pagination pointer-events-auto flex items-center justify-center rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5" />
      </div>
    </div>
  );
}
