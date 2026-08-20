import React from "react";
import Link from "next/link";
import { ArrowRight, Home, ShoppingBag, Search } from "lucide-react";
import AppleLogo from "@/components/ui/AppleLogo";

export default function NotFound() {
  return (
    <main
      dir="rtl"
      lang="fa"
      className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8"
    >
      {/* 404 Badge */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-neutral-100/90 shadow-2xs border border-neutral-200/60">
        <AppleLogo className="h-10 w-10 text-neutral-800" />
      </div>

      <span className="mb-2 text-sm font-bold tracking-widest text-neutral-400 uppercase">
        خطای ۴۰۴
      </span>

      {/* Main Title */}
      <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
        صفحه مورد نظر پیدا نشد
      </h1>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-md text-sm sm:text-base leading-relaxed text-neutral-500">
        متأسفانه صفحه‌ای که به دنبال آن هستید ممکن است حذف شده باشد، نام آن تغییر کرده باشد یا موقتاً در دسترس نباشد.
      </p>

      {/* Action CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none">
        <Link
          href="/"
          className="flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-semibold text-white shadow-xs transition-all hover:bg-neutral-800 active:scale-[0.98]"
        >
          <Home className="h-4 w-4 stroke-[1.75]" />
          <span>بازگشت به صفحه اصلی</span>
        </Link>

        <Link
          href="/products"
          className="flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 text-sm font-semibold text-neutral-700 shadow-2xs transition-all hover:border-neutral-400 hover:bg-neutral-50 active:scale-[0.98]"
        >
          <ShoppingBag className="h-4 w-4 stroke-[1.75]" />
          <span>مشاهده تمام محصولات</span>
        </Link>
      </div>

      {/* Quick Category Shortcuts */}
      <div className="mt-12 border-t border-neutral-100 pt-8">
        <p className="text-xs font-semibold text-neutral-400 mb-3">
          یا به یکی از بخش‌های زیر بروید:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Link
            href="/category/iphone"
            className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
          >
            آیفون
          </Link>
          <Link
            href="/category/mac"
            className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
          >
            مک‌بوک
          </Link>
          <Link
            href="/category/ipad"
            className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
          >
            آیپد
          </Link>
          <Link
            href="/category/watch"
            className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
          >
            اپل واچ
          </Link>
          <Link
            href="/contact-us"
            className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
          >
            تماس با ما
          </Link>
        </div>
      </div>
    </main>
  );
}
