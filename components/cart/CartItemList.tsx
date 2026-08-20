"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Trash2, ArrowRight, AlertCircle } from "lucide-react";
import { CartItem } from "@/types/cart";
import { useCart } from "@/lib/cart-context";
import { toPersianDigits } from "@/lib/utils";
import CartItemRow from "./CartItemRow";

export interface CartItemListProps {
  items: CartItem[];
}

export default function CartItemList({ items }: CartItemListProps) {
  const { clearCart, totalItemsCount } = useCart();
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
        <div className="flex items-center gap-2.5">
          <h1 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
            سبد خرید شما
          </h1>
          <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-bold text-neutral-700">
            {toPersianDigits(totalItemsCount)} کالا
          </span>
        </div>

        {/* Clear Cart Button */}
        {!showClearConfirm ? (
          <button
            type="button"
            onClick={() => setShowClearConfirm(true)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 transition-colors hover:text-red-600 cursor-pointer"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>حذف همه</span>
          </button>
        ) : (
          <div className="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full text-xs animate-in fade-in">
            <span className="text-red-700 font-medium">حذف همه اقلام؟</span>
            <button
              type="button"
              onClick={() => {
                clearCart();
                setShowClearConfirm(false);
              }}
              className="font-bold text-red-700 hover:underline cursor-pointer"
            >
              بله
            </button>
            <span className="text-red-300">|</span>
            <button
              type="button"
              onClick={() => setShowClearConfirm(false)}
              className="text-neutral-600 hover:underline cursor-pointer"
            >
              انصراف
            </button>
          </div>
        )}
      </div>

      {/* Items List */}
      <div className="flex flex-col gap-3.5">
        {items.map((item) => (
          <CartItemRow key={item.id} item={item} />
        ))}
      </div>

      {/* Back to Products link */}
      <div className="pt-2">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-600 transition-colors hover:text-black"
        >
          <ArrowRight className="h-4 w-4" />
          <span>افزودن محصولات بیشتر به سبد خرید</span>
        </Link>
      </div>
    </div>
  );
}
