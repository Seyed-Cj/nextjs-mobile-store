import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "همه محصولات", href: "/products" },
  { label: "آیفون", href: "/products/iphone" },
  { label: "مک", href: "/products/mac" },
  { label: "آیفون ۱۷ پرومکس", href: "/products/iphone-17-pro-max" },
  { label: "مک‌بوک پرو ۲۰۲۶", href: "/products/macbook-pro-2026" },
  { label: "تماس با ما", href: "/contact-us" },
];

export async function getNavItems(): Promise<NavItem[]> {
  return navItems;
}
