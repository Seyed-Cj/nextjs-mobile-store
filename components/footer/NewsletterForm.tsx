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
      <h3 className="text-base font-bold text-gray-900 mb-1 text-right">
        در خبرنامه ما عضو شوید
      </h3>
      <p className="text-xs text-gray-500 mb-3 text-right">
        از جدیدترین تخفیف‌ها و تازه‌های محصولات اپل باخبر شوید.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 w-full sm:w-auto">
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
          className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all w-full sm:w-64 text-left"
        />
        <button
          type="submit"
          className="bg-black hover:bg-gray-800 text-white text-sm font-medium rounded-full px-5 py-2 flex items-center justify-center gap-1 transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          <span>عضویت</span>
          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        </button>
      </form>

      {error && (
        <p className="text-xs text-red-500 mt-2 font-medium text-right">
          {error}
        </p>
      )}

      {submitted && (
        <p className="text-xs text-emerald-600 mt-2 font-medium text-right">
          ایمیل شما با موفقیت در خبرنامه ثبت شد!
        </p>
      )}
    </div>
  );
}
