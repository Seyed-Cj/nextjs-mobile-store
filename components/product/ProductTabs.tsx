"use client";

import React, { useState } from "react";
import { toPersianDigits } from "@/lib/utils";

export type TabId = "intro" | "specs" | "reviews";

export interface TabItem {
  id: TabId;
  label: string;
  count?: number;
}

export interface ProductTabsProps {
  initialTab?: TabId;
  reviewCount?: number;
  introContent?: React.ReactNode;
  specsContent?: React.ReactNode;
  reviewsContent?: React.ReactNode;
}

export default function ProductTabs({
  initialTab = "intro",
  reviewCount = 0,
  introContent,
  specsContent,
  reviewsContent,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>(initialTab);

  const tabs: TabItem[] = [
    {
      id: "intro",
      label: "معرفی",
    },
    {
      id: "specs",
      label: "مشخصات فنی",
    },
    {
      id: "reviews",
      label: "نظرات کاربران",
      count: reviewCount > 0 ? reviewCount : undefined,
    },
  ];

  return (
    <section aria-label="اطلاعات تکمیلی محصول" className="mt-12 sm:mt-16">
      {/* Tabs Header Navigation */}
      <div className="border-b border-neutral-200">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="scrollbar-hide flex items-center gap-4 overflow-x-auto sm:gap-8"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-controls={`tabpanel-${tab.id}`}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex shrink-0 cursor-pointer items-center gap-1.5 pt-2 pb-3 text-sm transition-colors duration-200 focus-visible:outline-hidden sm:text-base ${
                  isActive
                    ? "-mb-px border-b-2 border-black font-bold text-neutral-900"
                    : "font-normal text-neutral-500 hover:text-neutral-800"
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`text-xs transition-colors ${
                      isActive
                        ? "font-bold text-neutral-900"
                        : "text-neutral-400"
                    }`}
                  >
                    ({toPersianDigits(tab.count)})
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panels */}
      <div className="pt-8">
        <div
          role="tabpanel"
          id="tabpanel-intro"
          aria-labelledby="tab-intro"
          hidden={activeTab !== "intro"}
          className={activeTab === "intro" ? "block" : "hidden"}
        >
          {introContent || (
            <div className="py-6 text-sm text-neutral-500">
              توضیحات معرفی در دسترس نیست.
            </div>
          )}
        </div>

        <div
          role="tabpanel"
          id="tabpanel-specs"
          aria-labelledby="tab-specs"
          hidden={activeTab !== "specs"}
          className={activeTab === "specs" ? "block" : "hidden"}
        >
          {specsContent || (
            <div className="py-6 text-sm text-neutral-500">
              مشخصات فنی در دسترس نیست.
            </div>
          )}
        </div>

        <div
          role="tabpanel"
          id="tabpanel-reviews"
          aria-labelledby="tab-reviews"
          hidden={activeTab !== "reviews"}
          className={activeTab === "reviews" ? "block" : "hidden"}
        >
          {reviewsContent || (
            <div className="py-6 text-sm text-neutral-500">
              بخش نظرات کاربران در حال بارگذاری است...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
