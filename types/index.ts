export interface NavItem {
  label: string;
  href: string;
}

export interface Category {
  label: string;
  href: string;
  image?: string;
}

export interface LatestProductSlide {
  tag: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  theme: "light" | "dark";
}

export * from "./product";
export * from "./contact";
export * from "./cart";
export * from "./faq";
export * from "./hero";
export * from "./review";
