"use client";

import React, { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";
import { Review } from "@/types/review";
import { calculateRatingSummary } from "@/lib/data/reviews";
import { toPersianDigits } from "@/lib/utils";
import RatingSummaryCard from "./RatingSummaryCard";
import ReviewItem from "./ReviewItem";
import NewReviewModal from "./NewReviewModal";

export interface ProductReviewsSectionProps {
  productId: string;
  initialReviews: Review[];
  onReviewCountChange?: (newCount: number) => void;
}

export default function ProductReviewsSection({
  productId,
  initialReviews,
  onReviewCountChange,
}: ProductReviewsSectionProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Compute live rating summary
  const summary = calculateRatingSummary(reviews);

  const handleAddReview = (data: {
    authorName: string;
    rating: number;
    text: string;
  }) => {
    const today = new Intl.DateTimeFormat("fa-IR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());

    const newReview: Review = {
      id: `rev-custom-${Date.now()}`,
      productId,
      authorName: data.authorName,
      rating: data.rating,
      date: today,
      text: data.text,
      helpfulCount: 0,
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    setVisibleCount((prev) => Math.max(prev, 4));
    onReviewCountChange?.(updatedReviews.length);
  };

  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
              امتیاز و دیدگاه خریداران
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-500">
              نظرات ثبت‌شده توسط خریداران تایید شده این محصول
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:bg-neutral-800 active:scale-95 cursor-pointer shadow-xs"
          >
            <Plus className="h-4 w-4 stroke-2" />
            <span>ثبت نظر جدید</span>
          </button>
        </div>
        <RatingSummaryCard summary={summary} />
      </div>

      {/* 2. Reviews List */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-neutral-800">
            فهرست دیدگاه‌ها ({toPersianDigits(reviews.length)})
          </h4>
        </div>

        {reviews.length > 0 ? (
          <div className="flex flex-col gap-3.5">
            {visibleReviews.map((rev) => (
              <ReviewItem key={rev.id} review={rev} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-neutral-200 p-8 text-center text-sm text-neutral-500">
            هنوز دیدگاهی برای این محصول ثبت نشده است. شما اولین نفر باشید!
          </div>
        )}

        {hasMore && (
          <div className="mt-2 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount(reviews.length)}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-neutral-800 transition-all duration-200 hover:border-black hover:bg-neutral-50 active:scale-95 cursor-pointer shadow-2xs"
            >
              <span>
                مشاهده همه نظرات ({toPersianDigits(reviews.length - visibleCount)})
              </span>
              <ChevronDown className="h-4 w-4 stroke-2" />
            </button>
          </div>
        )}
      </div>

      {/* 3. New Review Modal */}
      <NewReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </div>
  );
}
