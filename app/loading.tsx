import React from "react";

export default function RootLoading() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 animate-pulse"
      aria-label="در حال بارگذاری..."
    >
      {/* 1. Hero / Banner Skeleton */}
      <div className="mb-10 h-72 sm:h-96 w-full rounded-3xl bg-neutral-200/70" />

      {/* 2. Category Carousel / Showcase Skeleton */}
      <div className="mb-12 flex items-center justify-center gap-4 sm:gap-8 overflow-hidden py-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-neutral-200/70" />
            <div className="h-3.5 w-12 rounded-md bg-neutral-200/60" />
          </div>
        ))}
      </div>

      {/* 3. Section Title Skeleton */}
      <div className="mb-6 flex items-center justify-between">
        <div className="h-6 w-48 rounded-lg bg-neutral-200/80" />
        <div className="h-4 w-20 rounded-md bg-neutral-200/50" />
      </div>

      {/* 4. Products Grid Skeleton */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col justify-between rounded-3xl border border-neutral-200/60 bg-neutral-50 p-4"
          >
            <div className="aspect-square w-full rounded-2xl bg-neutral-200/70 mb-4" />
            <div className="space-y-2.5">
              <div className="h-4 w-3/4 rounded-md bg-neutral-200/80" />
              <div className="h-3.5 w-1/2 rounded-md bg-neutral-200/60" />
              <div className="h-3 w-1/3 rounded-md bg-neutral-200/40 mt-2" />
            </div>
            <div className="mt-5 h-9 w-full rounded-full bg-neutral-200/80" />
          </div>
        ))}
      </div>
    </div>
  );
}
