import React from "react";
import { ProductSpec } from "@/types/product";

export interface SpecsTableProps {
  specs?: ProductSpec[];
}

export default function SpecsTable({ specs }: SpecsTableProps) {
  if (!specs || specs.length === 0) {
    return (
      <div className="py-8 text-center text-sm text-neutral-500">
        مشخصات فنی برای این محصول ثبت نشده است.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white">
      <div className="divide-y divide-neutral-100">
        {specs.map((spec, index) => (
          <div
            key={`${spec.label}-${index}`}
            className="flex items-center justify-between gap-4 px-4 py-3.5 transition-colors hover:bg-neutral-50/60 sm:px-6 sm:py-4 odd:bg-neutral-50/30"
          >
            {/* Label (Right in RTL) */}
            <span className="shrink-0 text-xs sm:text-sm font-medium text-neutral-500">
              {spec.label}
            </span>

            {/* Value (Left in RTL) */}
            <span className="text-xs sm:text-sm font-semibold text-neutral-900 text-end dir-auto">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
