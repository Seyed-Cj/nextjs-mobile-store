"use client";

import React from "react";
import { RotateCcw, X, Check, Filter } from "lucide-react";
import PriceRangeSlider from "./PriceRangeSlider";
import { toPersianDigits } from "@/lib/utils";
import { ProductColor } from "@/types/product";

export interface FilterState {
  series: string;
  selectedColor: string;
  selectedStorage: string;
  priceRange: [number, number];
  onlyInStock: boolean;
}

export interface FilterSeriesOption {
  name: string;
  count: number;
}

export interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onResetFilters: () => void;
  seriesOptions: FilterSeriesOption[];
  colorOptions: ProductColor[];
  storageOptions: string[];
  minPriceLimit: number;
  maxPriceLimit: number;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
  className?: string;
}

export default function FilterSidebar({
  filters,
  onFilterChange,
  onResetFilters,
  seriesOptions,
  colorOptions,
  storageOptions,
  minPriceLimit,
  maxPriceLimit,
  isOpenMobile = false,
  onCloseMobile,
  className = "",
}: FilterSidebarProps) {
  const hasActiveFilters =
    filters.series !== "" ||
    filters.selectedColor !== "" ||
    filters.selectedStorage !== "" ||
    filters.onlyInStock ||
    filters.priceRange[0] > minPriceLimit ||
    filters.priceRange[1] < maxPriceLimit;

  const renderHeader = (isMobile: boolean) => (
    <div className="border-b border-neutral-200/80 pb-4">
      <div className="flex items-center justify-between gap-3">
        {/* Title */}
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-neutral-600" />
          <h2 className="text-base font-bold tracking-tight text-neutral-900">
            فیلترها
          </h2>
        </div>

        {/* Action: Mobile Close Button vs Desktop Reset Button */}
        {isMobile ? (
          <button
            type="button"
            onClick={onCloseMobile}
            aria-label="بستن فیلترها"
            className="rounded-full p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        ) : (
          hasActiveFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="flex items-center gap-1 text-xs font-semibold text-neutral-600 transition-colors hover:text-red-600 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>حذف فیلترها</span>
            </button>
          )
        )}
      </div>

      {/* On Mobile: Clear Filters action below the title row when filters are active */}
      {isMobile && hasActiveFilters && (
        <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-[11px] font-medium text-neutral-400">فیلترهای اعمال‌شده</span>
          <button
            type="button"
            onClick={onResetFilters}
            className="flex items-center gap-1 text-xs font-semibold text-neutral-600 transition-colors hover:text-red-600 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>حذف فیلترها</span>
          </button>
        </div>
      )}
    </div>
  );

  const renderFilterGroups = (
    <div className="flex flex-col gap-6 text-neutral-800">
      {/* 1. Category / Series Radio List */}
      {seriesOptions.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            دسته‌بندی و سری
          </h3>
          <div className="space-y-1.5">
            <label className="flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-xs transition-colors hover:bg-neutral-100/80">
              <div className="flex items-center gap-2.5">
                <input
                  type="radio"
                  name="series"
                  checked={filters.series === ""}
                  onChange={() =>
                    onFilterChange({ ...filters, series: "" })
                  }
                  className="h-4 w-4 accent-neutral-900 cursor-pointer"
                />
                <span className={filters.series === "" ? "font-bold text-neutral-900" : "text-neutral-700"}>
                  همه مدل‌ها
                </span>
              </div>
            </label>

            {seriesOptions.map((item) => (
              <label
                key={item.name}
                className="flex cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-xs transition-colors hover:bg-neutral-100/80"
              >
                <div className="flex items-center gap-2.5">
                  <input
                    type="radio"
                    name="series"
                    checked={filters.series === item.name}
                    onChange={() =>
                      onFilterChange({ ...filters, series: item.name })
                    }
                    className="h-4 w-4 accent-neutral-900 cursor-pointer"
                  />
                  <span
                    className={
                      filters.series === item.name
                        ? "font-bold text-neutral-900"
                        : "text-neutral-700"
                    }
                  >
                    {item.name}
                  </span>
                </div>
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-semibold text-neutral-500">
                  ({toPersianDigits(item.count)})
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* 2. Color Swatches */}
      {colorOptions.length > 0 && (
        <div className="space-y-3 border-t border-neutral-200/60 pt-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            رنگ‌بندی
          </h3>
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => onFilterChange({ ...filters, selectedColor: "" })}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                filters.selectedColor === ""
                  ? "bg-neutral-900 text-white shadow-2xs"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              همه
            </button>
            {colorOptions.map((color) => {
              const isSelected = filters.selectedColor === color.name;
              return (
                <button
                  key={color.name}
                  type="button"
                  onClick={() =>
                    onFilterChange({
                      ...filters,
                      selectedColor: isSelected ? "" : color.name,
                    })
                  }
                  title={color.name}
                  className={`group relative flex h-7 w-7 items-center justify-center rounded-full border border-black/15 shadow-2xs transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-neutral-900 ${
                    isSelected ? "ring-2 ring-neutral-900 ring-offset-2" : ""
                  }`}
                  style={{ backgroundColor: color.hex }}
                >
                  {isSelected && (
                    <Check
                      className={`h-3.5 w-3.5 ${
                        color.hex.toLowerCase() === "#f2f1ec" || color.hex.toLowerCase() === "#ffffff"
                          ? "text-black"
                          : "text-white"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Storage Filter */}
      {storageOptions.length > 0 && (
        <div className="space-y-3 border-t border-neutral-200/60 pt-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            حافظه داخلی
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {storageOptions.map((storage) => {
              const isSelected = filters.selectedStorage === storage;
              return (
                <button
                  key={storage}
                  type="button"
                  onClick={() =>
                    onFilterChange({
                      ...filters,
                      selectedStorage: isSelected ? "" : storage,
                    })
                  }
                  className={`rounded-xl py-2 px-3 text-xs font-semibold transition-all border ${
                    isSelected
                      ? "bg-neutral-900 text-white border-neutral-900 shadow-2xs"
                      : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                  }`}
                >
                  {toPersianDigits(storage)}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Price Range Slider */}
      <div className="space-y-3 border-t border-neutral-200/60 pt-5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
          محدوده قیمت
        </h3>
        <PriceRangeSlider
          minPrice={minPriceLimit}
          maxPrice={maxPriceLimit}
          value={filters.priceRange}
          onChange={(newRange) =>
            onFilterChange({ ...filters, priceRange: newRange })
          }
        />
      </div>

      {/* 5. In-Stock Availability Toggle */}
      <div className="border-t border-neutral-200/60 pt-5">
        <label className="flex cursor-pointer items-center justify-between rounded-xl bg-neutral-50 p-3 border border-neutral-200/60 transition-colors hover:bg-neutral-100/80">
          <span className="text-xs font-bold text-neutral-800">
            فقط کالاهای موجود
          </span>
          <input
            type="checkbox"
            checked={filters.onlyInStock}
            onChange={(e) =>
              onFilterChange({ ...filters, onlyInStock: e.target.checked })
            }
            className="h-4 w-4 rounded-md accent-neutral-900 cursor-pointer"
          />
        </label>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar Layout */}
      <aside
        className={`hidden lg:block w-72 shrink-0 rounded-3xl bg-white p-5 border border-neutral-200/80 shadow-2xs h-fit sticky top-24 ${className}`}
      >
        <div className="flex flex-col gap-6">
          {renderHeader(false)}
          {renderFilterGroups}
        </div>
      </aside>

      {/* Mobile Off-canvas Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs lg:hidden">
          <div className="relative flex h-full w-full max-w-xs flex-col bg-white p-6 shadow-xl overflow-y-auto gap-6">
            {renderHeader(true)}
            {renderFilterGroups}
          </div>
        </div>
      )}
    </>
  );
}
