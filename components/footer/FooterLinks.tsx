import Link from "next/link";
import { Send } from "lucide-react";
import { FooterLinkColumn, FooterLinkItem } from "@/lib/data/footer-links";

export interface FooterLinksProps {
  columns?: FooterLinkColumn[];
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

function renderSocialIcon(iconType?: FooterLinkItem["iconType"]) {
  switch (iconType) {
    case "instagram":
      return <InstagramIcon className="h-4 w-4 shrink-0 text-gray-500" />;
    case "telegram":
      return <Send className="h-4 w-4 shrink-0 text-gray-500" />;
    case "youtube":
      return <YoutubeIcon className="h-4 w-4 shrink-0 text-gray-500" />;
    default:
      return null;
  }
}

export default function FooterLinks({ columns = [] }: FooterLinksProps) {
  return (
    <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
      {columns.map((col) => (
        <nav key={col.heading} aria-label={col.heading}>
          <h4 className="mb-4 text-base font-bold text-gray-900">
            {col.heading}
          </h4>
          <ul className="space-y-3">
            {col.items.map((item) => {
              const isExternal = item.href.startsWith("http");
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="flex w-fit items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
                  >
                    {renderSocialIcon(item.iconType)}
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ))}
    </div>
  );
}
