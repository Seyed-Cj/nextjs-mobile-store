import React from "react";

interface ContactHeaderProps {
  title: string;
  subtitle: string;
}

export default function ContactHeader({ title, subtitle }: ContactHeaderProps) {
  return (
    <header className="mb-8 sm:mb-10 text-start">
      <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
        {title}
      </h1>
      <p className="mt-2 text-sm sm:text-base text-neutral-500 max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    </header>
  );
}
