import { Category } from "@/types";

export const categoryMap: Record<string, { label: string; href: string; image?: string }> = {
  mac: { label: "مک", href: "/products/mac", image: "/categories/mac-nav.png" },
  iphone: { label: "آیفون", href: "/products/iphone", image: "/categories/iphone-nav.png" },
  ipad: { label: "آیپد", href: "/products/ipad", image: "/categories/ipad-nav.png" },
  watch: { label: "اپل واچ", href: "/products/watch", image: "/categories/watch-nav.png" },
  airpods: { label: "ایرپاد", href: "/products/airpods", image: "/categories/airpods-nav.png" },
  accessories: { label: "لوازم جانبی", href: "/products/accessories", image: "/categories/accessories-nav.png" },
  appletv: { label: "اپل تی‌وی", href: "/products/appletv", image: "/categories/appletv-nav.png" },
};

export const categories: Category[] = Object.values(categoryMap).map((c) => ({
  label: c.label,
  href: c.href,
  image: c.image || "",
}));

export function getCategoryBySlug(slug?: string): { label: string; href: string } | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return categoryMap[normalized];
}

export async function getCategories(): Promise<Category[]> {
  return categories;
}
