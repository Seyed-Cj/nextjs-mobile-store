"use client";

import React, { useEffect, useState } from "react";
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

export default function HeroSlider({
  slides,
  className = "",
}: HeroSliderProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className={`relative w-full ${className}`}>
      <Swiper
        modules={[Pagination, A11y, Keyboard, Autoplay]}
        dir="rtl"
        slidesPerView={1}
        spaceBetween={0}
        speed={reducedMotion ? 0 : 500}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        pagination={{
          clickable: true,
          el: ".hero-swiper-pagination",
          bulletClass:
            "hero-bullet inline-block h-2.5 w-2.5 rounded-full bg-black/25 transition-all duration-300 cursor-pointer hover:bg-black/50 mx-1",
          bulletActiveClass:
            "hero-bullet-active !w-7 !bg-neutral-900 !rounded-full shadow-2xs",
        }}
        className="hero-swiper w-full overflow-hidden rounded-3xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide slide={slide} priority={index === 0} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Container with subtle backdrop pill for contrast */}
      <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center pointer-events-none sm:bottom-4">
        <div className="hero-swiper-pagination pointer-events-auto flex items-center justify-center rounded-full px-3 py-1.5 " />
      </div>
    </div>
  );
}
