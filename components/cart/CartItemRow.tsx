"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";
import { CartItem } from "@/types/cart";
import { useCart } from "@/lib/cart-context";
import { formatPersianPrice, toPersianDigits } from "@/lib/utils";

export interface CartItemRowProps {
  item: CartItem;
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCart();

  const lineTotal = item.unitPrice * item.quantity;
  const formattedUnitPrice = formatPersianPrice(
    item.unitPrice,
    item.currency ?? "تومان",
    "",
  );
  const formattedLineTotal = formatPersianPrice(
    lineTotal,
    item.currency ?? "تومان",
    "",
  );

  const maxStockLimit = item.maxStock ?? 99;
  const isMaxStockReached = item.quantity >= maxStockLimit;

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  const handleIncrease = () => {
    if (!isMaxStockReached) {
      updateQuantity(item.id, item.quantity + 1);
    }
  };

  return (
    <article className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border border-neutral-200/70 bg-white p-4 sm:p-5 shadow-xs transition-all duration-200 hover:border-neutral-300">
      {/* Product Image & Title Section */}
      <div className="flex items-center gap-4 w-full sm:w-auto flex-1 min-w-0">
        {/* Product Thumbnail */}
        <Link
          href={item.href}
          className="relative flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-100/70 p-2 transition-transform duration-200 hover:scale-105"
          aria-label={item.name}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="96px"
            className="object-contain p-1"
          />
        </Link>

        {/* Product Details */}
        <div className="flex flex-col flex-1 min-w-0 gap-1.5">
          <h3 className="text-base font-bold text-neutral-900 truncate">
            <Link
              href={item.href}
              className="hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          </h3>

          {/* Config Specs: Color & Storage */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-600">
            {item.selectedColor && (
              <span className="inline-flex items-center gap-1.5 rounded-md bg-neutral-100 px-2 py-0.5 font-medium text-neutral-700">
                <span
                  className="h-3 w-3 rounded-full border border-black/15 shadow-2xs shrink-0"
                  style={{ backgroundColor: item.selectedColor.hex }}
                />
                <span>{item.selectedColor.name}</span>
              </span>
            )}

            {item.selectedStorage && (
              <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-0.5 font-medium text-neutral-700">
                {toPersianDigits(item.selectedStorage)}
              </span>
            )}
          </div>

          {/* Unit Price (Small screen indicator or extra info) */}
          <div className="text-xs text-neutral-500">
            قیمت واحد:{" "}
            <span className="font-semibold text-neutral-700">
              {formattedUnitPrice}
            </span>
          </div>
        </div>
      </div>

      {/* Controls & Price Section */}
      <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-neutral-100">
        {/* Quantity Stepper Column */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center rounded-full border border-neutral-200 bg-neutral-50 p-1 shadow-2xs">
            <button
              type="button"
              onClick={handleDecrease}
              className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white text-neutral-700 shadow-xs transition-all hover:bg-neutral-100 hover:text-black active:scale-90 cursor-pointer"
              aria-label={item.quantity === 1 ? "حذف کالا" : "کاهش تعداد"}
              title={item.quantity === 1 ? "حذف کالا" : "کاهش تعداد"}
            >
              {item.quantity === 1 ? (
                <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-500" />
              ) : (
                <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              )}
            </button>

            <span className="min-w-8 text-center text-sm font-bold text-neutral-900 select-none">
              {toPersianDigits(item.quantity)}
            </span>

            <button
              type="button"
              onClick={handleIncrease}
              disabled={isMaxStockReached}
              className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white text-neutral-700 shadow-xs transition-all hover:bg-neutral-100 hover:text-black active:scale-90 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
              aria-label="افزایش تعداد"
              title={isMaxStockReached ? "حداکثر موجودی در انبار" : "افزایش تعداد"}
            >
              <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </div>

          {isMaxStockReached && item.maxStock !== undefined && item.maxStock < 99 && (
            <span className="text-[10px] text-amber-600 font-medium select-none">
              حداکثر موجودی ({toPersianDigits(item.maxStock)})
            </span>
          )}
        </div>

        {/* Line Total Price */}
        <div className="text-start sm:text-end min-w-28">
          <div className="text-xs text-neutral-400 hidden sm:block">
            مجموع قیمت
          </div>
          <div className="text-base sm:text-lg font-extrabold text-neutral-900">
            {formattedLineTotal}
          </div>
        </div>

        {/* Remove Button (Desktop quick delete) */}
        <button
          type="button"
          onClick={() => removeItem(item.id)}
          className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-red-50 hover:text-red-600 focus-visible:outline-1 focus-visible:outline-red-500"
          aria-label="حذف این محصول از سبد خرید"
          title="حذف این محصول"
        >
          <Trash2 className="h-4.5 w-4.5" />
        </button>
      </div>
    </article>
  );
}
