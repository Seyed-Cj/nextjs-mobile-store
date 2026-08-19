"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FaqItem } from "@/types/faq";

export interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqAccordion({
  faqs,
  title = "پرسش‌های متداول",
  subtitle = "پاسخ به سوالات پرتکرار شما درباره خرید، ارسال و گارانتی",
}: FaqAccordionProps) {
  // Set of open item IDs (collapsed by default)
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section aria-label="پرسش‌های متداول" className="mt-14 sm:mt-20">
      {/* Section Header */}
      <div className="mb-6 sm:mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
          <HelpCircle className="h-5 w-5 stroke-[1.75]" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-0.5 text-xs sm:text-sm text-neutral-500">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Accordion Items List */}
      <div className="flex flex-col gap-3">
        {faqs.map((faq) => {
          const isOpen = Boolean(openIds[faq.id]);
          return (
            <div
              key={faq.id}
              className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? "border-neutral-300 bg-neutral-50/50 shadow-2xs"
                  : "border-neutral-200/80 bg-white hover:border-neutral-300"
              }`}
            >
              {/* Accordion Trigger Header */}
              <button
                type="button"
                id={`faq-btn-${faq.id}`}
                aria-controls={`faq-content-${faq.id}`}
                aria-expanded={isOpen}
                onClick={() => toggleItem(faq.id)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 p-4.5 text-start sm:p-5 focus:outline-hidden"
              >
                <span className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                  {faq.question}
                </span>

                {/* Chevron icon on the end (Left in RTL) with smooth rotation */}
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-out ${
                    isOpen
                      ? "rotate-180 bg-neutral-200 text-neutral-900"
                      : "bg-neutral-100 text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  <ChevronDown className="h-4 w-4 stroke-2" />
                </div>
              </button>

              {/* Collapsible Content */}
              <div
                id={`faq-content-${faq.id}`}
                role="region"
                aria-labelledby={`faq-btn-${faq.id}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-neutral-200/60 px-4.5 pb-5 pt-3.5 sm:px-5 sm:pb-6 text-xs sm:text-sm font-normal leading-relaxed text-neutral-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
