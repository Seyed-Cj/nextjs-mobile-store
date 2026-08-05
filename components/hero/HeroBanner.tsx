import React from "react";
import { HeroSlideData } from "@/types/hero";
import { heroSlides as defaultSlides } from "@/lib/data/hero-slides";
import HeroSlider from "./HeroSlider";

export interface HeroBannerProps {
  slides?: HeroSlideData[];
  className?: string;
}

export default function HeroBanner({
  slides = defaultSlides,
  className = "",
}: HeroBannerProps) {
  return (
    <section
      dir="rtl"
      lang="fa"
      aria-label="اسلایدر تبلیغاتی"
      className={`py-4 sm:py-6 lg:py-10 lg:pt-15 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <HeroSlider slides={slides} />
      </div>
    </section>
  );
}
