"use client";

import React from "react";
import { formatPersianPrice, toPersianDigits } from "@/lib/utils";

export interface PriceRangeSliderProps {
  minPrice: number;
  maxPrice: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  step?: number;
  className?: string;
}

export default function PriceRangeSlider({
  minPrice,
  maxPrice,
  value,
  onChange,
  step = 1000000,
  className = "",
}: PriceRangeSliderProps) {
  const [minVal, maxVal] = value;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.min(Number(e.target.value), maxVal - step);
    onChange([val, maxVal]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(Number(e.target.value), minVal + step);
    onChange([minVal, val]);
  };

  // Percentages for high-lighting connecting track line
  const minPercent = Math.max(0, Math.min(100, ((minVal - minPrice) / (maxPrice - minPrice)) * 100));
  const maxPercent = Math.max(0, Math.min(100, ((maxVal - minPrice) / (maxPrice - minPrice)) * 100));

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Slider Track Container */}
      <div className="relative pt-2 pb-1">
        {/* Background track */}
        <div className="h-1.5 w-full rounded-full bg-neutral-200" />
        
        {/* Active colored track line between handles */}
        <div
          className="absolute top-2 h-1.5 rounded-full bg-neutral-900"
          style={{
            right: `${minPercent}%`,
            left: `${100 - maxPercent}%`,
          }}
        />

        {/* Dual Input Range Sliders overlay */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step={step}
          value={minVal}
          onChange={handleMinChange}
          className="pointer-events-none absolute top-1 h-3 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-neutral-900 [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 focus:outline-none"
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          step={step}
          value={maxVal}
          onChange={handleMaxChange}
          className="pointer-events-none absolute top-1 h-3 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-neutral-900 [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 focus:outline-none"
        />
      </div>

      {/* Min and Max Text Box Display Inputs */}
      <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
        <div className="rounded-xl border border-neutral-200 bg-white p-2 text-center">
          <span className="block text-[10px] font-normal text-neutral-400">از</span>
          <span className="font-semibold text-neutral-900 dir-rtl">
            {formatPersianPrice(minVal, "تومان", "")}
          </span>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-2 text-center">
          <span className="block text-[10px] font-normal text-neutral-400">تا</span>
          <span className="font-semibold text-neutral-900 dir-rtl">
            {formatPersianPrice(maxVal, "تومان", "")}
          </span>
        </div>
      </div>
    </div>
  );
}
