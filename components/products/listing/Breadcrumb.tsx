import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs ${className}`}>
      <ol className="flex items-center gap-1.5 flex-wrap text-neutral-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-neutral-900 rounded-xs"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-neutral-900" aria-current="page">
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronLeft
                  className="h-3.5 w-3.5 shrink-0 text-neutral-400"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
