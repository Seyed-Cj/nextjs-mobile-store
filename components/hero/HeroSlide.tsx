import React from "react";
import Image from "next/image";
import { HeroSlideData } from "@/types/hero";

export interface HeroSlideProps {
  slide: HeroSlideData;
  priority?: boolean;
  className?: string;
}

export default function HeroSlide({
  slide,
  priority = false,
  className = "",
}: HeroSlideProps) {
  return (
    <div
      className={`relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-black/5 bg-[#f5f5f7] shadow-xs sm:aspect-21/8 sm:rounded-3xl lg:aspect-25/9 ${className}`}
    >
      <Image
        src={slide.image.src}
        alt={slide.image.alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
        className="rounded-2xl object-cover p-1.5 sm:rounded-3xl sm:p-2"
      />
    </div>
  );
}
