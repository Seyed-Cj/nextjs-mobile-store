"use client";

import React, { useState, useMemo } from "react";
import Breadcrumb from "./Breadcrumb";
import PageHeader from "./PageHeader";
import ListingToolbar, { SortOption, ViewMode } from "./ListingToolbar";
import FilterSidebar, { FilterState } from "./FilterSidebar";
import ProductGridCard from "./ProductGridCard";
import Pagination from "./Pagination";
import { Product, ProductColor } from "@/types/product";
import { SlidersHorizontal, RotateCcw } from "lucide-react";

export interface ProductListingPageProps {
  initialProducts: Product[];
  categoryTitle?: string;
  categorySlug?: string;
}

const ITEMS_PER_PAGE = 8;

export default function ProductListingPage({
  initialProducts,
  categoryTitle = "همه محصولات",
  categorySlug = "all",
}: ProductListingPageProps) {
  // Compute min and max price limits from dataset
  const { minPriceLimit, maxPriceLimit, colorOptions, storageOptions, seriesOptions } =
    useMemo(() => {
      let minP = Infinity;
      let maxP = -Infinity;
      const colorsMap = new Map<string, ProductColor>();
      const storageSet = new Set<string>();
      const seriesMap = new Map<string, number>();

      initialProducts.forEach((p) => {
        if (p.priceFrom < minP) minP = p.priceFrom;
        if (p.priceFrom > maxP) maxP = p.priceFrom;

        p.colors?.forEach((c) => {
          if (!colorsMap.has(c.name)) colorsMap.set(c.name, c);
        });

        p.storageOptions?.forEach((s) => storageSet.add(s));

        if (p.series) {
          seriesMap.set(p.series, (seriesMap.get(p.series) || 0) + 1);
        }
      });

      if (minP === Infinity) minP = 0;
      if (maxP === -Infinity) maxP = 300000000;

      const seriesList = Array.from(seriesMap.entries()).map(([name, count]) => ({
        name,
        count,
      }));

      return {
        minPriceLimit: minP,
        maxPriceLimit: maxP,
        colorOptions: Array.from(colorsMap.values()),
        storageOptions: Array.from(storageSet.values()),
        seriesOptions: seriesList,
      };
    }, [initialProducts]);

  // Filters state
  const [filters, setFilters] = useState<FilterState>({
    series: "",
    selectedColor: "",
    selectedStorage: "",
    priceRange: [minPriceLimit, maxPriceLimit],
    onlyInStock: false,
  });

  const [sort, setSort] = useState<SortOption>("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid4");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Reset filters handler
  const handleResetFilters = () => {
    setFilters({
      series: "",
      selectedColor: "",
      selectedStorage: "",
      priceRange: [minPriceLimit, maxPriceLimit],
      onlyInStock: false,
    });
    setCurrentPage(1);
  };

  // Filtered & Sorted products computation
  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((product) => {
        // Series filter
        if (filters.series && product.series !== filters.series) {
          return false;
        }

        // Color filter
        if (
          filters.selectedColor &&
          !product.colors?.some((c) => c.name === filters.selectedColor)
        ) {
          return false;
        }

        // Storage filter
        if (
          filters.selectedStorage &&
          !product.storageOptions?.includes(filters.selectedStorage)
        ) {
          return false;
        }

        // Price filter
        if (
          product.priceFrom < filters.priceRange[0] ||
          product.priceFrom > filters.priceRange[1]
        ) {
          return false;
        }

        // In-stock filter
        if (filters.onlyInStock && product.inStock === false) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sort === "price_asc") {
          return a.priceFrom - b.priceFrom;
        }
        if (sort === "price_desc") {
          return b.priceFrom - a.priceFrom;
        }
        if (sort === "popular") {
          return (b.popularity || 0) - (a.popularity || 0);
        }
        // "newest" default sort by createdAt date or isNew flag
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
      });
  }, [initialProducts, filters, sort]);

  // Paginated slices
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const activeFilterCount =
    (filters.series ? 1 : 0) +
    (filters.selectedColor ? 1 : 0) +
    (filters.selectedStorage ? 1 : 0) +
    (filters.onlyInStock ? 1 : 0) +
    (filters.priceRange[0] > minPriceLimit || filters.priceRange[1] < maxPriceLimit
      ? 1
      : 0);

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "خانه", href: "/" },
    { label: "محصولات", href: "/products" },
    ...(categorySlug !== "all" ? [{ label: categoryTitle }] : []),
  ];

  // Grid layout class based on viewMode
  const gridClasses = useMemo(() => {
    if (viewMode === "grid3")
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5";
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5";
  }, [viewMode]);

  return (
    <div className="min-h-screen bg-white dir-rtl text-neutral-900 pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 1. Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-4" />

        {/* 2. Page Header */}
        <PageHeader
          title={categoryTitle}
          totalCount={filteredProducts.length}
          subtitle="فروشگاه آنلاین رسمی محصولات اپل با گارانتی معتبر"
          className="mb-8"
        />

        {/* Main Content Layout: Sidebar + Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* 3. Sidebar Filters (Right side in RTL) */}
          <FilterSidebar
            filters={filters}
            onFilterChange={(newFilters) => {
              setFilters(newFilters);
              setCurrentPage(1);
            }}
            onResetFilters={handleResetFilters}
            seriesOptions={seriesOptions}
            colorOptions={colorOptions}
            storageOptions={storageOptions}
            minPriceLimit={minPriceLimit}
            maxPriceLimit={maxPriceLimit}
            isOpenMobile={isMobileFilterOpen}
            onCloseMobile={() => setIsMobileFilterOpen(false)}
          />

          {/* 4. Main Product Area (Left side in RTL) */}
          <main className="flex-1 w-full space-y-6">
            {/* Toolbar */}
            <ListingToolbar
              sort={sort}
              onSortChange={(s) => setSort(s)}
              viewMode={viewMode}
              onViewModeChange={(m) => setViewMode(m)}
              onOpenMobileFilters={() => setIsMobileFilterOpen(true)}
              activeFilterCount={activeFilterCount}
            />

            {/* Product Cards Grid or Empty State */}
            {paginatedProducts.length > 0 ? (
              <div className={gridClasses}>
                {paginatedProducts.map((product) => (
                  <ProductGridCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-300 bg-white p-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 mb-4">
                  <SlidersHorizontal className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">
                  محصولی با این فیلترها یافت نشد
                </h3>
                <p className="mt-1 text-xs text-neutral-500 max-w-sm">
                  لطفاً فیلترهای انتخابی خود را تغییر دهید یا دکمه حذف فیلترها را برای مشاهده تمام محصولات فشاری دهید.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-semibold text-white shadow-2xs hover:bg-black transition-colors"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>حذف همه فیلترها</span>
                </button>
              </div>
            )}

            {/* 6. Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 200, behavior: "smooth" });
              }}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
