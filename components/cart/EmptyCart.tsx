import React from "react";
import Link from "next/link";
import { ShoppingBag, ArrowLeft, Smartphone, Laptop, Tablet, Watch } from "lucide-react";

const quickCategories = [
  { label: "آیفون", href: "/category/iphone", icon: Smartphone },
  { label: "مک‌بوک", href: "/category/mac", icon: Laptop },
  { label: "آیپد", href: "/category/ipad", icon: Tablet },
  { label: "اپل واچ", href: "/category/watch", icon: Watch },
];

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {/* Icon Circle */}
      <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100/80 shadow-xs border border-neutral-200/60">
        <ShoppingBag className="h-10 w-10 text-neutral-400 stroke-[1.5]" />
        <span className="absolute -top-1 -inset-e-1 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white">
          ۰
        </span>
      </div>

      {/* Main Copy */}
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
        سبد خرید شما خالی است
      </h2>
      <p className="mt-3 max-w-md text-sm sm:text-base text-neutral-500 leading-relaxed">
        هنوز هیچ محصولی به سبد خرید خود اضافه نکرده‌اید. جدیدترین محصولات و پرچمداران اپل را بررسی کنید.
      </p>

      {/* Primary CTA */}
      <div className="mt-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-neutral-800 hover:shadow-md active:scale-95"
        >
          <span>مشاهده و خرید محصولات</span>
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>

      {/* Category Quick Chips */}
      <div className="mt-12 flex flex-col items-center gap-3">
        <span className="text-xs font-medium text-neutral-400">
          دسترسی سریع به دسته‌بندی‌ها:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {quickCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.href}
                href={cat.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50"
              >
                <Icon className="h-3.5 w-3.5 text-neutral-500" />
                <span>{cat.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
