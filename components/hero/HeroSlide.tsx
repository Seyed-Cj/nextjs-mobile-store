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
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-[#f5f5f7] sm:aspect-21/8 lg:aspect-25/9 ${className}`}
    >
      <Image
        src={slide.image.src}
        alt={slide.image.alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
        className="rounded-3xl p-2"
      />
    </div>
  );
}
