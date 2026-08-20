import React from "react";
import { Metadata } from "next";
import CartPageContent from "@/components/cart/CartPageContent";

export const metadata: Metadata = {
  title: "سبد خرید | فروشگاه آنلاین اپل",
  description: "مشاهده و مدیریت اقلام سبد خرید محصولات و لوازم جانبی اپل.",
};

export default function CartPage() {
  return <CartPageContent />;
}
