import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "محصولات", href: "/products" },
  { label: "آیفون", href: "/category/iphone" },
  { label: "مک", href: "/category/mac" },
  { label: "ایپد", href: "/category/ipad" },
  { label: "اپل واچ", href: "/category/watch" },
  { label: "ایرپاد", href: "/category/airpods" },
  { label: "تماس با ما", href: "/contact-us" },
];

export async function getNavItems(): Promise<NavItem[]> {
  return navItems;
}
