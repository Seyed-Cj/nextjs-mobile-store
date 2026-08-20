import React from "react";

export default function ProductDetailLoading() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8 animate-pulse"
      aria-label="در حال بارگذاری مشخصات محصول..."
    >
      {/* 1. Breadcrumb Skeleton */}
      <div className="mb-6 sm:mb-8 flex items-center gap-2">
        <div className="h-4 w-12 rounded bg-neutral-200/80" />
        <div className="h-3 w-3 rounded bg-neutral-200/50" />
        <div className="h-4 w-16 rounded bg-neutral-200/80" />
        <div className="h-3 w-3 rounded bg-neutral-200/50" />
        <div className="h-4 w-14 rounded bg-neutral-200/80" />
        <div className="h-3 w-3 rounded bg-neutral-200/50" />
        <div className="h-4 w-28 rounded bg-neutral-200/60" />
      </div>

      {/* 2. Main 2-Column Section (Gallery Right, Info Left) */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
        {/* Right side: Gallery Skeleton (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="aspect-square w-full rounded-3xl bg-neutral-200/70 border border-neutral-100" />
          <div className="flex items-center gap-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-20 w-20 rounded-2xl bg-neutral-200/60 border border-neutral-100 shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Left side: Product Info Skeleton (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Header */}
          <div className="space-y-2">
            <div className="h-4 w-14 rounded bg-neutral-200/70" />
            <div className="h-8 w-3/4 rounded-xl bg-neutral-200/90" />
            <div className="h-4 w-5/6 rounded bg-neutral-200/60" />
          </div>

          {/* Price Box */}
          <div className="h-16 w-full rounded-2xl bg-neutral-200/60 border border-neutral-100" />

          {/* Color Selector */}
          <div className="space-y-3">
            <div className="h-4 w-20 rounded bg-neutral-200/70" />
            <div className="flex items-center gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-7 w-7 rounded-full bg-neutral-200/80" />
              ))}
            </div>
          </div>

          {/* Storage Selector */}
          <div className="space-y-3">
            <div className="h-4 w-24 rounded bg-neutral-200/70" />
            <div className="flex flex-wrap gap-2.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-11 w-20 rounded-xl bg-neutral-200/70" />
              ))}
            </div>
          </div>

          {/* Trust Row */}
          <div className="h-20 w-full rounded-xl bg-neutral-200/50 border border-neutral-100" />

          {/* Action Row */}
          <div className="flex items-center gap-3 pt-2">
            <div className="h-12 w-12 rounded-full bg-neutral-200/70 shrink-0" />
            <div className="h-12 flex-1 rounded-full bg-neutral-200/90" />
          </div>

          {/* Support Strip */}
          <div className="h-14 w-full rounded-2xl bg-neutral-200/50" />
        </div>
      </div>

      {/* 3. Tabs Skeleton */}
      <div className="mt-16 space-y-6">
        <div className="flex items-center gap-4 border-b border-neutral-200 pb-4">
          <div className="h-8 w-24 rounded-lg bg-neutral-200/80" />
          <div className="h-8 w-24 rounded-lg bg-neutral-200/60" />
          <div className="h-8 w-24 rounded-lg bg-neutral-200/60" />
        </div>
        <div className="h-48 w-full rounded-2xl bg-neutral-200/40" />
      </div>
    </div>
  );
}
