import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { toPersianDigits } from "@/lib/utils";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="صفحه‌بندی"
      className={`flex items-center justify-center gap-2 pt-10 pb-4 ${className}`}
    >
      {/* Previous button (RTL points Right) */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="صفحه قبلی"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition-colors hover:bg-neutral-100 disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-neutral-900"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1.5 px-2">
        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={isActive ? "page" : undefined}
              className={`flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-neutral-900 text-white shadow-xs"
                  : "border border-neutral-200/80 bg-white text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              {toPersianDigits(page)}
            </button>
          );
        })}
      </div>

      {/* Next button (RTL points Left) */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="صفحه بعدی"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition-colors hover:bg-neutral-100 disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-neutral-900"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
    </nav>
  );
}
