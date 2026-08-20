"use client";

import React, { useState, useRef, useEffect } from "react";
import { ProductDetailInterface } from "@/types/product";
import { formatPersianPrice, toPersianDigits } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { STORE_PHONE } from "@/lib/data/contact";
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Heart,
  ShoppingBag,
  Headphones,
  Check,
  AlertCircle,
  PackageX,
} from "lucide-react";

interface ProductInfoProps {
  product: ProductDetailInterface;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const { addItem } = useCart();
  const feedbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Color selection state
  const defaultColor =
    product.colors && product.colors.length > 0
      ? product.colors[0]
      : { name: "پیش‌فرض", hex: "#000000" };
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  // Storage selection state
  const storageOptions =
    product.storageOptions && product.storageOptions.length > 0
      ? product.storageOptions
      : ["256GB", "512GB", "1TB", "2TB"];
  const [selectedStorage, setSelectedStorage] = useState(storageOptions[0]);

  // Active Variant & Stock Lookup
  const activeVariant = product.variants?.find(
    (v) => v.colorName === selectedColor.name && v.storage === selectedStorage,
  );

  // Stock status conditions (Case 1: Stock 0 vs Case 2: Non-existent SKU vs In-stock)
  const isOfferedSku = product.variants ? activeVariant !== undefined : true;
  const stockCount = activeVariant ? activeVariant.stock : (product.totalStock ?? 10);
  const isInStock = isOfferedSku && stockCount > 0;
  const isLowStock = isOfferedSku && stockCount > 0 && stockCount <= 3;

  // Base unit price dynamically resolved from variant or product fallback
  const baseUnitPrice = activeVariant?.price ?? product.priceFrom;

  // Wishlist toggle state
  const [isWishlisted, setIsWishlisted] = useState(false);
  // Add to cart state feedback
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current) {
        clearTimeout(feedbackTimerRef.current);
      }
    };
  }, []);

  const PLACEHOLDER_INSURANCE = {
    price: 2500000,
    title: "بیمه کالا",
    description: "در برابر آسیب‌های تصادفی تا ۱۲ ماه",
  };

  // Insurance checkbox state
  const [hasInsurance, setHasInsurance] = useState(false);

  // Price formatting (updates total when insurance is checked)
  const currentTotalPrice =
    baseUnitPrice + (hasInsurance ? PLACEHOLDER_INSURANCE.price : 0);
  const formattedPriceDigits = toPersianDigits(
    currentTotalPrice.toLocaleString("en-US"),
  );
  const currencyLabel = product.currency ?? "تومان";

  const handleAddToCart = () => {
    if (!isInStock) return;

    addItem({
      productId: product.id,
      name: product.name,
      image: product.image,
      unitPrice: currentTotalPrice,
      currency: currencyLabel,
      selectedColor:
        product.colors && product.colors.length > 0 ? selectedColor : undefined,
      selectedStorage:
        storageOptions.length > 0 ? selectedStorage : undefined,
      maxStock: activeVariant ? activeVariant.stock : undefined,
      href: product.href,
    });

    setIsAddedToCart(true);
    if (feedbackTimerRef.current) {
      clearTimeout(feedbackTimerRef.current);
    }
    feedbackTimerRef.current = setTimeout(() => {
      setIsAddedToCart(false);
    }, 2500);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header Info */}
      <div>
        {/* Text Badge/Tag above title */}
        <span className="mb-1.5 inline-block text-xs font-bold text-gray-500 tracking-wider">
          {product.badge ?? "جدید"}
        </span>

        {/* Product Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          {product.name}
        </h1>

        {/* Tagline / Subtitle */}
        <p className="mt-1.5 text-sm sm:text-base font-normal text-gray-500">
          {product.tagline ?? "بیشترین توانایی. بیشترین پیشرفت."}
        </p>
      </div>

      {/* Price Section & Stock Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-neutral-50/60 p-4">
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl sm:text-3xl font-bold text-neutral-900">
            {formattedPriceDigits}
          </span>
          <span className="text-base font-normal text-gray-600">
            {currencyLabel}
          </span>
        </div>

        {/* Stock Status Badge */}
        <div>
          {!isOfferedSku ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-200/70 px-3 py-1 text-xs font-semibold text-neutral-600">
              <PackageX className="h-3.5 w-3.5" />
              <span>این ترکیب ارائه نمی‌شود</span>
            </span>
          ) : !isInStock ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
              <PackageX className="h-3.5 w-3.5" />
              <span>ناموجود در انبار</span>
            </span>
          ) : isLowStock ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 animate-pulse">
              <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
              <span>تنها {toPersianDigits(stockCount)} عدد در انبار</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/60">
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              <span>موجود در انبار</span>
            </span>
          )}
        </div>
      </div>

      {/* Color Selector */}
      {product.colors && product.colors.length > 0 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-gray-900">رنگ:</span>
            <span className="text-gray-600 font-medium">{selectedColor.name}</span>
          </div>
          <div className="flex items-center gap-3">
            {product.colors.map((color, index) => {
              const isSelected = selectedColor.name === color.name;
              return (
                <button
                  key={`${color.name}-${index}`}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`relative h-7 w-7 rounded-full border border-black/15 shadow-2xs transition-all duration-200 hover:scale-110 cursor-pointer ${
                    isSelected
                      ? "ring-2 ring-black ring-offset-2 scale-110"
                      : "opacity-90 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`انتخاب رنگ ${color.name}`}
                  aria-pressed={isSelected}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Storage Selector */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">
            حافظه داخلی
          </span>
          {activeVariant && (
            <span className="text-xs text-neutral-500">
              کد کالا: <span className="font-mono text-neutral-700 dir-ltr">{activeVariant.sku}</span>
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2.5">
          {storageOptions.map((option) => {
            const isSelected = selectedStorage === option;
            const optVariant = product.variants?.find(
              (v) => v.colorName === selectedColor.name && v.storage === option,
            );
            const isOptOffered = product.variants ? optVariant !== undefined : true;
            const isOptInStock = optVariant ? optVariant.stock > 0 : isOptOffered;

            return (
              <button
                key={option}
                type="button"
                onClick={() => setSelectedStorage(option)}
                className={`relative rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200 min-w-17.5 text-center cursor-pointer ${
                  isSelected
                    ? "border-black bg-black text-white shadow-xs"
                    : !isOptOffered || !isOptInStock
                    ? "border-dashed border-gray-200 bg-gray-50 text-gray-400 hover:border-gray-300"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                }`}
                aria-pressed={isSelected}
              >
                <span>{toPersianDigits(option)}</span>
                {!isOptInStock && isOptOffered && (
                  <span className="block text-[9px] font-normal text-rose-500">ناموجود</span>
                )}
                {!isOptOffered && (
                  <span className="block text-[9px] font-normal text-gray-400">ارائه نمی‌شود</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mini Trust & Benefit Icons Row (3 items) */}
      <div className="grid grid-cols-3 border border-gray-200 rounded-xl overflow-hidden bg-white">
        <div className="flex flex-col items-center text-center gap-1.5 p-4 border-l border-gray-200">
          <ShieldCheck className="w-5 h-5 text-gray-400 shrink-0 stroke-[1.75]" />
          <p className="text-sm font-semibold text-gray-900 leading-snug">
            ضمانت اصالت کالا
          </p>
          <p className="text-xs text-gray-500 leading-snug">
            کالای اورجینال با گارانتی رسمی
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-1.5 p-4 border-l border-gray-200">
          <Truck className="w-5 h-5 text-gray-400 shrink-0 stroke-[1.75]" />
          <p className="text-sm font-semibold text-gray-900 leading-snug">
            ارسال سریع
          </p>
          <p className="text-xs text-gray-500 leading-snug">
            ۲ تا ۳ روز کاری
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-1.5 p-4">
          <RotateCcw className="w-5 h-5 text-gray-400 shrink-0 stroke-[1.75]" />
          <p className="text-sm font-semibold text-gray-900 leading-snug">
            ۱۴ روز ضمانت بازگشت
          </p>
          <p className="text-xs text-gray-500 leading-snug">
            بازگشت بدون قید و شرط
          </p>
        </div>
      </div>

      {/* Insurance Opt-in Box */}
      <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3.5 transition-colors hover:border-gray-300">
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={hasInsurance}
            onChange={(e) => setHasInsurance(e.target.checked)}
            className="h-4.5 w-4.5 accent-black rounded border-gray-300 cursor-pointer"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900">
              {PLACEHOLDER_INSURANCE.title}
            </span>
            <span className="text-xs text-gray-500">
              {PLACEHOLDER_INSURANCE.description}
            </span>
          </div>
        </label>
        <span className="text-xs sm:text-sm font-semibold text-gray-700">
          + {toPersianDigits(PLACEHOLDER_INSURANCE.price.toLocaleString("en-US"))} تومان
        </span>
      </div>

      {/* Action Row */}
      <div className="flex items-center gap-3 pt-2">
        {/* Wishlist Button */}
        <button
          type="button"
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 cursor-pointer ${
            isWishlisted
              ? "border-rose-500 bg-rose-50 text-rose-500"
              : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"
          }`}
          aria-label="افزودن به علاقمندی‌ها"
          title="افزودن به علاقمندی‌ها"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted ? "fill-rose-500 stroke-rose-500" : "stroke-[1.75]"
            }`}
          />
        </button>

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!isInStock}
          className={`flex h-12 flex-1 items-center justify-center gap-2.5 rounded-full px-6 text-sm font-semibold transition-all duration-200 shadow-xs ${
            !isInStock
              ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-neutral-800 active:scale-[0.98] cursor-pointer"
          }`}
        >
          {isAddedToCart ? (
            <>
              <Check className="h-5 w-5 text-emerald-400" />
              <span>به سبد خرید اضافه شد</span>
            </>
          ) : !isOfferedSku ? (
            <>
              <PackageX className="h-5 w-5" />
              <span>این ترکیب ارائه نمی‌شود</span>
            </>
          ) : !isInStock ? (
            <>
              <PackageX className="h-5 w-5" />
              <span>ناموجود در این ترکیب</span>
            </>
          ) : (
            <>
              <ShoppingBag className="h-5 w-5 stroke-[1.75]" />
              <span>افزودن به سبد خرید</span>
            </>
          )}
        </button>
      </div>

      {/* Contact / Support Box */}
      <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
            <Headphones className="h-5 w-5 stroke-[1.75]" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            برای مشاوره یا سوالی دارید؟
          </span>
        </div>
        <a
          href={STORE_PHONE.href}
          className="text-xs sm:text-sm font-bold dir-ltr text-black hover:underline tracking-wide"
        >
          {STORE_PHONE.value}
        </a>
      </div>
    </div>
  );
}
