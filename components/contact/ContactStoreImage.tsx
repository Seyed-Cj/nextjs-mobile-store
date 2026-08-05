import React from "react";
import Image from "next/image";

interface ContactStoreImageProps {
  src: string;
  alt: string;
}

export default function ContactStoreImage({ src, alt }: ContactStoreImageProps) {
  return (
    <div className="relative w-full h-full min-h-80 sm:min-h-105 lg:min-h-full rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-100 shadow-xs">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
        className="object-cover object-center transition-transform duration-500 hover:scale-102"
      />
    </div>
  );
}
