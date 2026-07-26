"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Category {
  label: string;
  href: string;
  image?: string;
}

const categories: Category[] = [
  { label: "مک", href: "/mac", image: "/categories/mac-nav.png" },
  { label: "آیفون", href: "/iphone", image: "/categories/iphone-nav.png" },
  { label: "آیپد", href: "/ipad", image: "/categories/ipad-nav.png" },
  { label: "اپل واچ", href: "/watch", image: "/categories/watch-nav.png" },
  { label: "ایرپاد", href: "/airpods", image: "/categories/airpods-nav.png" },
  {
    label: "لوازم جانبی",
    href: "/accessories",
    image: "/categories/accessories-nav.png",
  },
  { label: "اپل تیوی", href: "/appletv", image: "/categories/appletv-nav.png" },
];

function CategoryItem({ label, href, image }: Category) {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(image) && !imageError;

  return (
    <li className="flex flex-col items-center">
      <Link
        href={href}
        className="group flex flex-col items-center gap-2 rounded-lg p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        <span className="flex h-16 w-16 items-center justify-center sm:h-26 sm:w-26">
          {showImage && (
            <Image
              src={image as string}
              alt={label}
              width={256}
              height={256}
              loading="eager"
              className="h-full w-full object-contain transition-transform duration-200 ease-out group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          )}
        </span>
        <span className="whitespace-nowrap text-xs font-normal text-neutral-700 transition-colors group-hover:text-black">
          {label}
        </span>
      </Link>
    </li>
  );
}

export default function CategoryShowcase() {
  return (
    <section
      aria-label="دسته‌بندی محصولات"
      dir="rtl"
      lang="fa"
      className="py-6"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ul className="grid grid-cols-4 justify-items-center gap-y-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-8">
          {categories.map((category) => (
            <CategoryItem key={category.href} {...category} />
          ))}
        </ul>
      </div>
    </section>
  );
}
