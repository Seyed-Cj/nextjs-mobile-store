import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowRight, ArrowLeft, ShoppingBag, Headphones } from "lucide-react";
import AppleLogo from "@/components/ui/AppleLogo";

export const metadata: Metadata = {
  title: "درگاه پرداخت و تسویه حساب | فروشگاه اپل",
  description: "فرآیند نهایی‌سازی سفارش و اتصال به درگاه پرداخت امن بانکی.",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
      {/* Icon Circle */}
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 shadow-xs border border-neutral-200">
        <ShieldCheck className="h-10 w-10 stroke-[1.5]" />
      </div>

      <div className="mb-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-neutral-500">
        <AppleLogo className="h-4 w-4 text-black" />
        <span>فروشگاه رسمی محصولات اپل</span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
        آماده‌سازی درگاه پرداخت امن
      </h1>

      {/* Description */}
      <p className="mt-3 max-w-lg mx-auto text-sm sm:text-base text-neutral-500 leading-relaxed">
        بخش تسویه حساب و اتصال به درگاه‌های شاپرک در حال به‌روزرسانی نهایی است. سفارش شما در سبد خرید ذخیره شده است.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/cart"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-95 shadow-xs"
        >
          <ArrowRight className="h-4 w-4" />
          <span>بازگشت به سبد خرید</span>
        </Link>
        <Link
          href="/products"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3 text-sm font-semibold text-neutral-700 transition-all hover:bg-neutral-50 hover:border-neutral-400 active:scale-95"
        >
          <ShoppingBag className="h-4 w-4" />
          <span>مشاهده سایر محصولات</span>
        </Link>
      </div>

      {/* Support Box */}
      <div className="mt-12 inline-flex items-center gap-3 rounded-2xl border border-neutral-200/80 bg-neutral-50 px-5 py-3 text-xs text-neutral-600">
        <Headphones className="h-4 w-4 text-neutral-700" />
        <span>برای ثبت تلفنی سفارش یا راهنمایی با ما در تماس باشید:</span>
        <a
          href="tel:02191012345"
          className="font-bold text-black hover:underline dir-ltr"
        >
          ۰۲۱-۹۱۰۱۲۳۴۵
        </a>
      </div>
    </div>
  );
}
