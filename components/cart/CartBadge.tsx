"use client";
import { useCart } from "@/lib/cart-context";
import { toPersianDigits } from "@/lib/utils";

export interface CartBadgeProps {
  className?: string;
  count?: number;
}

export default function CartBadge({ className = "", count }: CartBadgeProps) {
  const { totalItemsCount, isLoaded } = useCart();
  const effectiveCount = count !== undefined ? count : totalItemsCount;

  if (!isLoaded || effectiveCount <= 0) {
    return null;
  }

  return (
    <span
      className={`absolute -top-1 -right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-white shadow-xs transition-transform duration-200 animate-in zoom-in-75 ${className}`}
      aria-hidden="true"
    >
      {toPersianDigits(effectiveCount)}
    </span>
  );
}
