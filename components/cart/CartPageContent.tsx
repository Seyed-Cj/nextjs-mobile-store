"use client";

import React from "react";
import { useCart } from "@/lib/cart-context";
import Breadcrumb, { BreadcrumbItem } from "@/components/products/listing/Breadcrumb";
import EmptyCart from "./EmptyCart";
import CartItemList from "./CartItemList";
import CartSummary from "./CartSummary";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "خانه", href: "/" },
  { label: "سبد خرید" },
];

export default function CartPageContent() {
  const { items, isLoaded, totalPrice, totalItemsCount } = useCart();

  // Skeleton loading state while hydrating from localStorage
  if (!isLoaded) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
        <div className="h-4 w-32 bg-neutral-200 rounded-md mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="h-8 w-48 bg-neutral-200 rounded-lg mb-4" />
            <div className="h-28 bg-neutral-100 rounded-3xl" />
            <div className="h-28 bg-neutral-100 rounded-3xl" />
          </div>
          <div className="lg:col-span-4">
            <div className="h-72 bg-neutral-100 rounded-3xl" />
          </div>
        </div>
      </div>
    );
  }

  // Empty cart view
  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} className="mb-6 sm:mb-8" />
        <EmptyCart />
      </div>
    );
  }

  // Active cart view
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} className="mb-6 sm:mb-8" />

      {/* Main Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Right side in RTL: Cart Items List (lg:col-span-8) */}
        <div className="lg:col-span-8">
          <CartItemList items={items} />
        </div>

        {/* Left side in RTL: Order Summary Sidebar (lg:col-span-4, sticky) */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24">
          <CartSummary
            totalPrice={totalPrice}
            totalItemsCount={totalItemsCount}
          />
        </aside>
      </div>
    </div>
  );
}
