import React from "react";
import { HeroSlideData } from "@/types/hero";
import HeroSlider from "./HeroSlider";

export interface HeroBannerProps {
  slides?: HeroSlideData[];
  className?: string;
}

export default function HeroBanner({
  slides = [],
  className = "",
}: HeroBannerProps) {
  return (
    <section
      dir="rtl"
      lang="fa"
      aria-label="اسلایدر تبلیغاتی"
      className={`py-3 sm:py-6 lg:py-8 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <HeroSlider slides={slides} />
      </div>
    </section>
  );
}
