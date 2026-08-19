"use client";

import React, { useState, useEffect } from "react";
import { X, Star, MessageSquarePlus } from "lucide-react";
import { StarRating } from "@/types/review";
import { toPersianDigits } from "@/lib/utils";

export interface NewReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (data: { authorName: string; rating: number; text: string }) => void;
}

export default function NewReviewModal({
  isOpen,
  onClose,
  onSubmitReview,
}: NewReviewModalProps) {
  const [authorName, setAuthorName] = useState("");
  const [rating, setRating] = useState<StarRating>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim()) {
      setError("لطفاً نام و نام خانوادگی خود را وارد کنید.");
      return;
    }
    if (!text.trim()) {
      setError("لطفاً متن دیدگاه خود را وارد کنید.");
      return;
    }

    setError(null);
    onSubmitReview({
      authorName: authorName.trim(),
      rating,
      text: text.trim(),
    });

    // Reset form
    setAuthorName("");
    setRating(5);
    setText("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
              <MessageSquarePlus className="h-5 w-5 stroke-[1.75]" />
            </div>
            <h3 id="modal-title" className="text-base sm:text-lg font-bold text-neutral-900">
              ثبت نظر جدید
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="بستن"
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <X className="h-4.5 w-4.5 stroke-2" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
          {error && (
            <div className="rounded-xl bg-rose-50 p-3 text-xs font-medium text-rose-700 border border-rose-200">
              {error}
            </div>
          )}

          {/* Author Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="authorName" className="text-xs sm:text-sm font-semibold text-neutral-800">
              نام و نام خانوادگی <span className="text-rose-500">*</span>
            </label>
            <input
              id="authorName"
              type="text"
              required
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="مثال: سارا محمدی"
              className="w-full rounded-xl border border-neutral-200 px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors"
            />
          </div>

          {/* Star Rating Selector */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs sm:text-sm font-semibold text-neutral-800">
              امتیاز شما به این محصول <span className="text-rose-500">*</span>
            </span>
            <div className="flex items-center gap-1.5 pt-0.5">
              {([1, 2, 3, 4, 5] as StarRating[]).map((starNum) => {
                const isFilled = (hoverRating !== null ? hoverRating : rating) >= starNum;
                return (
                  <button
                    key={starNum}
                    type="button"
                    onClick={() => setRating(starNum)}
                    onMouseEnter={() => setHoverRating(starNum)}
                    onMouseLeave={() => setHoverRating(null)}
                    aria-label={`امتیاز ${toPersianDigits(starNum)} ستاره`}
                    className="p-1 text-amber-400 transition-transform hover:scale-115 focus:outline-hidden cursor-pointer"
                  >
                    <Star
                      className={`h-6 w-6 transition-colors ${
                        isFilled
                          ? "fill-amber-400 stroke-amber-400"
                          : "fill-neutral-100 stroke-neutral-300 text-neutral-300"
                      }`}
                    />
                  </button>
                );
              })}
              <span className="ms-2 text-xs font-bold text-neutral-600">
                {toPersianDigits(hoverRating !== null ? hoverRating : rating)} از ۵ ستاره
              </span>
            </div>
          </div>

          {/* Review Text */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="reviewText" className="text-xs sm:text-sm font-semibold text-neutral-800">
              متن دیدگاه <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="reviewText"
              rows={4}
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="نقاط قوت، تجربه کاربری یا نظرتان در مورد این کالا..."
              className="w-full resize-none rounded-xl border border-neutral-200 p-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none transition-colors"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-2 flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium text-neutral-600 hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="rounded-full bg-black px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-95 cursor-pointer shadow-xs"
            >
              ثبت و ارسال نظر
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
