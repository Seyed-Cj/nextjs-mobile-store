"use client";

import React from "react";
import { LayoutGrid, Grid3X3, SlidersHorizontal, ArrowUpDown } from "lucide-react";

export type SortOption = "newest" | "price_asc" | "price_desc" | "popular";
export type ViewMode = "grid4" | "grid3";

export interface ListingToolbarProps {
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onOpenMobileFilters: () => void;
  activeFilterCount?: number;
  className?: string;
}

export default function ListingToolbar({
  sort,
  onSortChange,
  viewMode,
  onViewModeChange,
  onOpenMobileFilters,
  activeFilterCount = 0,
  className = "",
}: ListingToolbarProps) {
  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-2xl bg-neutral-50 p-2.5 sm:p-3 border border-neutral-200/60 ${className}`}
    >
      {/* Mobile Filter Toggle & Grid View Options (in RTL, Right side) */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenMobileFilters}
          className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 border border-neutral-200 shadow-2xs hover:bg-neutral-100 lg:hidden transition-colors"
        >
          <SlidersHorizontal className="h-4 w-4 text-neutral-600" />
          <span>فیلترها</span>
          {activeFilterCount > 0 && (
            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-neutral-900 px-1 text-[10px] font-bold text-white">
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Grid Density View Mode Buttons (Hidden on mobile) */}
        <div className="hidden items-center gap-1 rounded-xl bg-white p-1 border border-neutral-200/80 shadow-2xs sm:flex">
          <button
            type="button"
            onClick={() => onViewModeChange("grid4")}
            title="چیدمان ۴ تایی"
            aria-label="چیدمان ۴ تایی"
            className={`rounded-lg p-1.5 transition-colors ${
              viewMode === "grid4"
                ? "bg-neutral-900 text-white"
                : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
            }`}
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange("grid3")}
            title="چیدمان ۳ تایی"
            aria-label="چیدمان ۳ تایی"
            className={`rounded-lg p-1.5 transition-colors ${
              viewMode === "grid3"
                ? "bg-neutral-900 text-white"
                : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
            }`}
          >
            <Grid3X3 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Sort Select Dropdown (in RTL, Left side) */}
      <div className="flex items-center gap-2">
        <label htmlFor="sort-select" className="hidden text-xs font-medium text-neutral-500 md:block">
          مرتب‌سازی:
        </label>
        <div className="relative flex items-center">
          <ArrowUpDown className="pointer-events-none absolute inset-s-3 h-3.5 w-3.5 text-neutral-500" />
          <select
            id="sort-select"
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="rounded-xl border border-neutral-200 bg-white py-2 ps-8 pe-4 text-xs font-semibold text-neutral-800 shadow-2xs focus:border-neutral-900 focus:outline-none transition-colors cursor-pointer appearance-none"
          >
            <option value="newest">جدیدترین</option>
            <option value="popular">محبوب‌ترین</option>
            <option value="price_asc">ارزان‌ترین</option>
            <option value="price_desc">گران‌ترین</option>
          </select>
        </div>
      </div>
    </div>
  );
}
