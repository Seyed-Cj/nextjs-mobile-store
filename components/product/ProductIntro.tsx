import React from "react";

export interface ProductIntroProps {
  description?: string;
  className?: string;
}

export default function ProductIntro({
  description,
  className = "",
}: ProductIntroProps) {
  if (!description || description.trim() === "") {
    return (
      <div className={`rounded-2xl border border-neutral-200/60 bg-neutral-50/40 p-6 sm:p-8 text-center text-sm text-neutral-500 ${className}`}>
        اطلاعات معرفی برای این محصول هنوز ثبت نشده است.
      </div>
    );
  }

  // Split description by newlines to render formatted paragraphs
  const paragraphs = description
    .split("\n\n")
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  return (
    <div
      dir="rtl"
      className={`rounded-2xl border border-neutral-200/60 bg-neutral-50/40 p-6 sm:p-8 lg:p-10 ${className}`}
    >
      <div className="space-y-4 sm:space-y-5 text-sm sm:text-base leading-loose sm:leading-relaxed text-neutral-700">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-justify font-normal">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
