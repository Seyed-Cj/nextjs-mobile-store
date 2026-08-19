import React from "react";
import { Star, StarHalf } from "lucide-react";
import { RatingSummary } from "@/types/review";
import { toPersianDigits } from "@/lib/utils";

export interface RatingSummaryCardProps {
  summary: RatingSummary;
}

export default function RatingSummaryCard({ summary }: RatingSummaryCardProps) {
  const { average, totalCount, distribution } = summary;

  // Star calculation helpers
  const fullStars = Math.floor(average);
  const hasHalfStar = average - fullStars >= 0.3 && average - fullStars <= 0.7;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-neutral-200/80 bg-neutral-50/40 p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-12">
      {/* Left (Main Rating Average Block) */}
      <div className="flex flex-col items-center justify-center text-center lg:border-e lg:border-neutral-200 lg:pe-12 min-w-44">
        <span className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight">
          {toPersianDigits(average > 0 ? average.toFixed(1) : "۰")}
        </span>
        <span className="mt-1 text-xs sm:text-sm font-normal text-neutral-500">
          از ۵ نمره
        </span>

        {/* Stars */}
        <div className="mt-2.5 flex items-center gap-1 text-amber-400" aria-label={`امتیاز ${average} از ۵`}>
          {Array.from({ length: fullStars }).map((_, i) => (
            <Star key={`full-${i}`} className="h-5 w-5 fill-amber-400 stroke-amber-400" />
          ))}
          {hasHalfStar && (
            <StarHalf className="h-5 w-5 fill-amber-400 stroke-amber-400" />
          )}
          {Array.from({ length: emptyStars }).map((_, i) => (
            <Star key={`empty-${i}`} className="h-5 w-5 fill-neutral-200 stroke-neutral-200 text-neutral-200" />
          ))}
        </div>

        <span className="mt-2 text-xs text-neutral-500">
          بر اساس {toPersianDigits(totalCount)} نظر
        </span>
      </div>

      {/* Right (Star Distribution Bars) */}
      <div className="flex flex-1 flex-col gap-2.5">
        {distribution.map((item) => {
          const percentage = totalCount > 0 ? (item.count / totalCount) * 100 : 0;
          return (
            <div key={item.star} className="flex items-center gap-3 text-xs sm:text-sm">
              {/* Star Label (Right in RTL) */}
              <span className="w-16 shrink-0 font-medium text-neutral-600">
                {toPersianDigits(item.star)} ستاره
              </span>

              {/* Progress Bar */}
              <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-neutral-200/80">
                <div
                  className="h-full rounded-full bg-amber-400 transition-all duration-500 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              {/* Count (Left in RTL) */}
              <span className="w-8 shrink-0 text-end font-medium text-neutral-500">
                {toPersianDigits(item.count)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
