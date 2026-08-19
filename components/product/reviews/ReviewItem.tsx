"use client";

import React, { useState } from "react";
import { Star, ThumbsUp } from "lucide-react";
import { Review } from "@/types/review";
import { toPersianDigits } from "@/lib/utils";

export interface ReviewItemProps {
  review: Review;
}

export default function ReviewItem({ review }: ReviewItemProps) {
  const [helpfulCount, setHelpfulCount] = useState(review.helpfulCount);
  const [hasVoted, setHasVoted] = useState(false);

  const handleHelpfulClick = () => {
    if (hasVoted) return;
    setHelpfulCount((prev) => prev + 1);
    setHasVoted(true);
  };

  return (
    <article className="flex flex-col gap-3.5 rounded-2xl border border-neutral-200/70 bg-white p-5 sm:p-6 transition-all hover:border-neutral-300">
      {/* Top Header: Author + Stars + Date */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-3">
        <div className="flex items-center gap-3">
          {/* Avatar initial circle */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-bold text-neutral-700">
            {review.authorName.slice(0, 1)}
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-900">
              {review.authorName}
            </h4>
            <div className="flex items-center gap-0.5 text-amber-400 mt-0.5" aria-label={`${review.rating} ستاره`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${
                    i < review.rating
                      ? "fill-amber-400 stroke-amber-400"
                      : "fill-neutral-200 stroke-neutral-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Persian Date */}
        <span className="text-xs text-neutral-400 font-medium">
          {toPersianDigits(review.date)}
        </span>
      </div>

      {/* Review Text */}
      <p className="text-xs sm:text-sm leading-relaxed text-neutral-700 font-normal">
        {review.text}
      </p>

      {/* Helpful Reaction Button */}
      <div className="flex items-center justify-end pt-1">
        <button
          type="button"
          onClick={handleHelpfulClick}
          disabled={hasVoted}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
            hasVoted
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-default"
              : "bg-neutral-50 text-neutral-600 border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 active:scale-95"
          }`}
          aria-label={`این نظر برای ${helpfulCount} نفر مفید بود`}
        >
          <ThumbsUp className={`h-3.5 w-3.5 stroke-[1.75] ${hasVoted ? "text-emerald-600 fill-emerald-600" : ""}`} />
          <span>مفید بود؟</span>
          <span className="font-bold">({toPersianDigits(helpfulCount)})</span>
        </button>
      </div>
    </article>
  );
}
