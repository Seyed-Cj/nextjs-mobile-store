"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("لطفاً یک آدرس ایمیل معتبر وارد کنید.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
    console.log("Newsletter subscription success:", email);
    setEmail("");

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="w-full md:w-auto">
      <h3 className="mb-1 text-right text-base font-bold text-gray-900">
        در خبرنامه ما عضو شوید
      </h3>
      <p className="mb-3 text-right text-xs text-gray-500">
        از جدیدترین تخفیف‌ها و تازه‌های محصولات اپل باخبر شوید.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-stretch gap-1.5 sm:w-auto sm:flex-row sm:items-center"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          پست الکترونیکی
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          dir="ltr"
          className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-left text-sm text-gray-900 placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none sm:w-64"
        />
        <button
          type="submit"
          className="flex shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full bg-black px-5 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-gray-800"
        >
          <span>عضویت</span>
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>

      {error && (
        <p className="mt-2 text-right text-xs font-medium text-red-500">
          {error}
        </p>
      )}

      {submitted && (
        <p className="mt-2 text-right text-xs font-medium text-emerald-600">
          ایمیل شما با موفقیت در خبرنامه ثبت شد!
        </p>
      )}
    </div>
  );
}
