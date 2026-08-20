"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Global Error Boundary caught an exception:", error);
  }, [error]);

  return (
    <main
      dir="rtl"
      lang="fa"
      className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8"
    >
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-rose-100 bg-rose-50 shadow-2xs">
        <AlertCircle className="h-10 w-10 stroke-[1.75] text-rose-500" />
      </div>

      <span className="mb-2 text-sm font-bold tracking-wider text-rose-600">
        خطای غیرمنتظره
      </span>

      {/* Main Title */}
      <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
        مشکلی در بارگذاری صفحه رخ داد
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
        متأسفانه در پردازش این درخواست خطایی رخ داده است. می‌توانید دوباره تلاش
        کنید یا به صفحه اصلی بازگردید.
      </p>

      <div className="mt-8 flex w-full max-w-xs flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
        <button
          type="button"
          onClick={() => reset()}
          className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-semibold text-white shadow-xs transition-all hover:bg-neutral-800 active:scale-[0.98] sm:w-auto"
        >
          <RotateCcw className="h-4 w-4 stroke-2" />
          <span>تلاش مجدد</span>
        </button>

        <Link
          href="/"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 text-sm font-semibold text-neutral-700 shadow-2xs transition-all hover:border-neutral-400 hover:bg-neutral-50 active:scale-[0.98] sm:w-auto"
        >
          <Home className="h-4 w-4 stroke-[1.75]" />
          <span>بازگشت به صفحه اصلی</span>
        </Link>
      </div>

      {error.digest && (
        <div className="mt-10 max-w-md rounded-xl border border-neutral-200/70 bg-neutral-50 p-3 text-start">
          <p className="font-mono text-[11px] text-neutral-400">
            کد رهگیری خطا:{" "}
            <span className="text-neutral-700 select-all">{error.digest}</span>
          </p>
        </div>
      )}
    </main>
  );
}
