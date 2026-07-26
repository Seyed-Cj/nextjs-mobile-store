export interface NavItem {
  label: string;
  href: string;
}

export interface Category {
  label: string;
  href: string;
  image?: string;
}

export interface Product {
  tag: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  theme: "light" | "dark";
}

export * from "./product";
