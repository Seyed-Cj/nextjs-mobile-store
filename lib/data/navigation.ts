import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "محصولات", href: "/products" },
  { label: "آیفون", href: "/products/iphone" },
  { label: "مک", href: "/products/mac" },
  { label: "ایپد", href: "/products/ipad" },
  { label: "اپل واچ", href: "/products/watch" },
  { label: "ایرپاد", href: "/products/airpods" },
  { label: "تماس با ما", href: "/contact-us" },
];

export async function getNavItems(): Promise<NavItem[]> {
  return navItems;
}
