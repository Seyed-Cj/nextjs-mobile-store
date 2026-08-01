"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Maximize2,
  Share2,
  ChevronDown,
  ChevronUp,
  X,
  Check,
} from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  // Ensure we have at least 1 image
  const galleryImages =
    images && images.length > 0
      ? images
      : ["/products/iphone-card-40-17pro-202509.jpg"];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Limit initial thumbnail strip to 4 when collapsed
  const visibleThumbnails = isExpanded
    ? galleryImages
    : galleryImages.slice(0, 4);
  const hasMoreThumbnails = galleryImages.length > 4;

  const checkScroll = () => {
    const el = thumbnailContainerRef.current;
    if (!el) return;
    const hasScrollUp = el.scrollTop > 5;
    const hasScrollDown =
      el.scrollTop + el.clientHeight < el.scrollHeight - 5;
    setCanScrollUp(hasScrollUp);
    setCanScrollDown(hasScrollDown);
  };

  useEffect(() => {
    if (isExpanded && galleryImages.length > 6) {
      checkScroll();
      const el = thumbnailContainerRef.current;
      if (!el) return;

      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [isExpanded, galleryImages.length]);

  const handleScrollStep = (direction: "up" | "down") => {
    const el = thumbnailContainerRef.current;
    if (!el) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const amount = direction === "up" ? -90 : 90;
    el.scrollBy({
      top: amount,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      if (navigator.share) {
        try {
          await navigator.share({
            title: productName,
            url: window.location.href,
          });
        } catch {
          copyToClipboard();
        }
      } else {
        copyToClipboard();
      }
    }
  };

  const copyToClipboard = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Gallery Main Layout (Thumbnails on the Right in RTL, Main Image + Controls on the Left) */}
      <div className="flex flex-col-reverse gap-4 sm:flex-row-reverse items-start">
        {/* Vertical Thumbnail Strip (positioned to the RIGHT of main image in RTL) */}
        {galleryImages.length > 1 && (
          <div className="relative w-full sm:w-auto shrink-0 flex flex-col items-center">
            {/* Top Gradient Fade & Scroll Up Button */}
            {isExpanded && galleryImages.length > 6 && canScrollUp && (
              <>
                <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-8 rounded-t-xl bg-linear-to-b from-white to-transparent transition-opacity duration-200" />
                <button
                  type="button"
                  onClick={() => handleScrollStep("up")}
                  className="absolute -top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white/90 shadow-xs text-gray-500 hover:text-black hover:bg-gray-50 transition-all active:scale-95 cursor-pointer backdrop-blur-xs"
                  aria-label="اسکرول به بالا"
                  title="اسکرول به بالا"
                >
                  <ChevronUp className="h-4 w-4 stroke-2" />
                </button>
              </>
            )}

            {/* Thumbnails Container */}
            <div
              ref={thumbnailContainerRef}
              onScroll={checkScroll}
              className={`flex sm:flex-col items-center gap-2.5 p-1 w-full sm:w-auto rounded-xl ${
                isExpanded && galleryImages.length > 6
                  ? "overflow-y-auto max-h-134.5 scrollbar-hide"
                  : ""
              }`}
            >
              {visibleThumbnails.map((img, index) => {
                const isSelected = selectedIndex === index;
                return (
                  <button
                    key={`${img}-${index}`}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-2xl bg-white p-1.5 transition-all duration-200 border focus:outline-none cursor-pointer ${
                      isSelected
                        ? "border-black ring-2 ring-black"
                        : "border-gray-200 hover:border-gray-400 opacity-80 hover:opacity-100"
                    }`}
                    aria-label={`تصویر ${index + 1} از ${galleryImages.length}`}
                    aria-pressed={isSelected}
                  >
                    <Image
                      src={img}
                      alt={`${productName} - تصویر ${index + 1}`}
                      fill
                      sizes="80px"
                      className="object-contain p-1"
                    />
                  </button>
                );
              })}
            </div>

            {/* Bottom Gradient Fade & Scroll Down Button */}
            {isExpanded && galleryImages.length > 6 && canScrollDown && (
              <>
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-8 rounded-b-xl bg-linear-to-t from-white to-transparent transition-opacity duration-200" />
                <button
                  type="button"
                  onClick={() => handleScrollStep("down")}
                  className="absolute -bottom-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white/90 shadow-xs text-gray-500 hover:text-black hover:bg-gray-50 transition-all active:scale-95 cursor-pointer backdrop-blur-xs"
                  aria-label="اسکرول به پایین"
                  title="اسکرول به پایین"
                >
                  <ChevronDown className="h-4 w-4 stroke-2" />
                </button>
              </>
            )}

            {/* Expand Button ("˅") when collapsed */}
            {hasMoreThumbnails && !isExpanded && (
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-600 transition-colors hover:bg-gray-50 hover:text-black mt-2 cursor-pointer"
                title="تصاویر بیشتر"
                aria-label="نمایش تصاویر بیشتر"
              >
                <ChevronDown className="h-5 w-5 stroke-2" />
              </button>
            )}
          </div>
        )}

        {/* Inner Container for Main Image, Dots, and Utility Row (matching main image width) */}
        <div className="flex flex-1 flex-col items-center gap-3 w-full min-w-0">
          {/* Main Product Image Container */}
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-6 sm:p-10">
            <Image
              src={galleryImages[selectedIndex] || galleryImages[0]}
              alt={productName}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4 transition-all duration-300"
            />
          </div>

          {/* Dot Pagination Indicator (Centered under main image) */}
          {galleryImages.length > 1 && (
            <div
              className="flex items-center justify-center gap-2 pt-1 flex-wrap"
              aria-label="انتخاب تصویر محصول"
            >
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`h-2 rounded-full shrink-0 transition-all duration-300 ${
                    selectedIndex === idx
                      ? "w-6 bg-black"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`برو به تصویر ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Slim Utility Row (Zoom & Share buttons, Centered under main image) */}
          <div className="flex items-center justify-center gap-2 pt-1">
            {/* Zoom Button */}
            <button
              type="button"
              onClick={() => setIsZoomOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:bg-gray-100 hover:text-black active:scale-95"
              title="بزرگ‌نمایی تصویر"
              aria-label="بزرگ‌نمایی تصویر"
            >
              <Maximize2 className="h-4 w-4 stroke-[1.75]" />
            </button>

            {/* Share Button */}
            <div className="relative">
              <button
                type="button"
                onClick={handleShare}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:bg-gray-100 hover:text-black active:scale-95"
                title="اشتراک‌گذاری محصول"
                aria-label="اشتراک‌گذاری محصول"
              >
                {isCopied ? (
                  <Check className="h-4 w-4 text-emerald-600 stroke-2" />
                ) : (
                  <Share2 className="h-4 w-4 stroke-[1.75]" />
                )}
              </button>
              {isCopied && (
                <span className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[11px] font-medium text-white shadow-md">
                  لینک کپی شد!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs transition-all duration-300 animate-in fade-in"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative flex h-[85vh] w-[85vw] max-w-4xl items-center justify-center rounded-3xl bg-white p-6 sm:p-12 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 hover:text-black"
              aria-label="بستن"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative h-full w-full">
              <Image
                src={galleryImages[selectedIndex] || galleryImages[0]}
                alt={`${productName} - نمای بزرگ`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

