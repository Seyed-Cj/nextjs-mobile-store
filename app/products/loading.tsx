import React from "react";

export default function ProductsAllLoading() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 animate-pulse"
      aria-label="در حال بارگذاری کاتالوگ محصولات..."
    >
      {/* 1. Catalog Header Skeleton */}
      <div className="mb-8 flex flex-col gap-2">
        <div className="h-8 w-56 rounded-xl bg-neutral-200/90" />
        <div className="h-4 w-80 rounded-md bg-neutral-200/60" />
      </div>

      {/* 2. Main Layout: Sidebar Filters + Products Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 items-start">
        {/* Sidebar Filters (3 cols) */}
        <div className="lg:col-span-3 space-y-6 rounded-3xl border border-neutral-200/60 bg-neutral-50 p-5">
          <div className="flex items-center justify-between border-b border-neutral-200/60 pb-3">
            <div className="h-5 w-20 rounded bg-neutral-200/80" />
            <div className="h-4 w-12 rounded bg-neutral-200/50" />
          </div>

          <div className="flex items-center justify-between">
            <div className="h-4 w-28 rounded bg-neutral-200/70" />
            <div className="h-6 w-11 rounded-full bg-neutral-200/80" />
          </div>

          <div className="space-y-2">
            <div className="h-4 w-20 rounded bg-neutral-200/70" />
            <div className="h-2 w-full rounded-full bg-neutral-200/60" />
          </div>

          <div className="space-y-2.5">
            <div className="h-4 w-16 rounded bg-neutral-200/70" />
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-6 w-6 rounded-full bg-neutral-200/80" />
              ))}
            </div>
          </div>
        </div>

        {/* Products Column (9 cols) */}
        <div className="lg:col-span-9 space-y-6">
          {/* Top Sort & Count Bar */}
          <div className="flex items-center justify-between rounded-2xl border border-neutral-200/60 bg-white p-3.5">
            <div className="h-4 w-24 rounded bg-neutral-200/70" />
            <div className="h-8 w-40 rounded-xl bg-neutral-200/80" />
          </div>

          {/* 6-Card Product Grid Skeleton */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-3xl border border-neutral-200/60 bg-neutral-50 p-4"
              >
                <div className="aspect-square w-full rounded-2xl bg-neutral-200/70 mb-4" />
                <div className="space-y-2">
                  <div className="h-4 w-3/4 rounded-md bg-neutral-200/80" />
                  <div className="h-3.5 w-1/2 rounded-md bg-neutral-200/60" />
                  <div className="flex gap-1.5 pt-1">
                    {[...Array(3)].map((_, ci) => (
                      <div key={ci} className="h-3 w-3 rounded-full bg-neutral-200/80" />
                    ))}
                  </div>
                </div>
                <div className="mt-5 h-9 w-full rounded-full bg-neutral-200/80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
