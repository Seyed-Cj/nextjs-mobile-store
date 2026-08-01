import React from "react";
import { toPersianDigits } from "@/lib/utils";

export interface PageHeaderProps {
  title: string;
  totalCount: number;
  subtitle?: string;
  className?: string;
}

export default function PageHeader({
  title,
  totalCount,
  subtitle,
  className = "",
}: PageHeaderProps) {
  const formattedCount = `${toPersianDigits(totalCount)} محصول`;

  return (
    <header className={`flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between border-b border-neutral-200/80 pb-5 ${className}`}>
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1.5 text-sm text-neutral-500 font-normal">
            {subtitle}
          </p>
        )}
      </div>
      <div className="mt-2 sm:mt-0">
        <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 border border-neutral-200/60">
          {formattedCount}
        </span>
      </div>
    </header>
  );
}
