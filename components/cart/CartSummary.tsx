"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Tag,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { formatPersianPrice, toPersianDigits } from "@/lib/utils";

export interface CartSummaryProps {
  totalPrice: number;
  totalItemsCount: number;
}

export default function CartSummary({
  totalPrice,
  totalItemsCount,
}: CartSummaryProps) {
  const [promoCodeOpen, setPromoCodeOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const formattedSubtotal = formatPersianPrice(totalPrice, "تومان", "");
  const formattedFinalTotal = formatPersianPrice(totalPrice, "تومان", "");

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim()) return;

    // Real validation placeholder (no fake discounts applied without backend verification)
    if (promoCode.trim().toUpperCase() === "APPLE2026") {
      setPromoMessage({
        text: "کد تخفیف با موفقیت در مرحله پرداخت اعمال خواهد شد.",
        type: "success",
      });
    } else {
      setPromoMessage({
        text: "کد تخفیف وارد شده نامعتبر یا منقضی شده است.",
        type: "error",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Summary Card */}
      <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/70 p-5 sm:p-6 shadow-xs backdrop-blur-xs">
        <h2 className="text-lg font-bold text-neutral-900 pb-4 border-b border-neutral-200/60">
          خلاصه سفارش
        </h2>

        {/* Pricing Rows */}
        <div className="flex flex-col gap-3.5 py-4 border-b border-neutral-200/60 text-sm">
          {/* Subtotal */}
          <div className="flex items-center justify-between text-neutral-600">
            <span>قیمت کالاها ({toPersianDigits(totalItemsCount)})</span>
            <span className="font-semibold text-neutral-900">
              {formattedSubtotal}
            </span>
          </div>

          {/* Shipping */}
          <div className="flex items-center justify-between text-neutral-600">
            <span className="flex items-center gap-1.5">
              <Truck className="h-4 w-4 text-emerald-600" />
              <span>هزینه ارسال</span>
            </span>
            <span className="font-bold text-emerald-600">رایگان</span>
          </div>

          {/* Shipping Guarantee note */}
          <div className="text-[11px] text-neutral-500 bg-white/70 rounded-xl p-2.5 border border-neutral-200/40">
            ارسال سریع با بسته‌بندی ویژه و بیمه کامل مرسولات پستی
          </div>
        </div>

        {/* Promo Code Accordion */}
        <div className="py-3.5 border-b border-neutral-200/60">
          <button
            type="button"
            onClick={() => setPromoCodeOpen(!promoCodeOpen)}
            className="flex w-full items-center justify-between text-xs font-semibold text-neutral-700 hover:text-black transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5 text-neutral-500" />
              <span>کد تخفیف یا کارت هدیه دارید؟</span>
            </span>
            <ChevronDown
              className={`h-4 w-4 text-neutral-400 transition-transform duration-200 ${
                promoCodeOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {promoCodeOpen && (
            <form onSubmit={handleApplyPromo} className="mt-3 flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="کد تخفیف را وارد کنید"
                  className="flex-1 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-black active:scale-95"
                >
                  ثبت
                </button>
              </div>
              {promoMessage && (
                <p
                  className={`text-[11px] font-medium ${
                    promoMessage.type === "success"
                      ? "text-emerald-600"
                      : "text-rose-600"
                  }`}
                >
                  {promoMessage.text}
                </p>
              )}
            </form>
          )}
        </div>

        {/* Final Total */}
        <div className="pt-4 flex items-baseline justify-between">
          <span className="text-base font-extrabold text-neutral-900">
            مبلغ قابل پرداخت
          </span>
          <div className="text-start sm:text-end">
            <span className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
              {formattedFinalTotal}
            </span>
          </div>
        </div>

        {/* Checkout CTA Button */}
        <div className="mt-6">
          <Link
            href="/checkout"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-3.5 px-6 text-sm font-bold text-white shadow-xs transition-all duration-200 hover:bg-neutral-800 hover:shadow-md active:scale-[0.98]"
          >
            <span>ادامه فرآیند خرید</span>
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Trust Mini Card */}
      <div className="rounded-2xl border border-neutral-200/60 bg-white p-4 text-xs text-neutral-600 flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-neutral-700 shrink-0" />
          <span>تضمین اصالت اورجینال و رجیستری رسمی کالاها</span>
        </div>
        <div className="flex items-center gap-2">
          <RotateCcw className="h-4 w-4 text-neutral-700 shrink-0" />
          <span>۱۴ روز ضمانت بازگشت بی قید و شرط کالا</span>
        </div>
      </div>
    </div>
  );
}
