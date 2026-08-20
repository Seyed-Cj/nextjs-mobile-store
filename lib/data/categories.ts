import { Category } from "@/types";

export const categoryMap: Record<string, { label: string; href: string; image?: string }> = {
  mac: { label: "مک", href: "/category/mac", image: "/categories/mac-nav.png" },
  iphone: { label: "آیفون", href: "/category/iphone", image: "/categories/iphone-nav.png" },
  ipad: { label: "آیپد", href: "/category/ipad", image: "/categories/ipad-nav.png" },
  watch: { label: "اپل واچ", href: "/category/watch", image: "/categories/watch-nav.png" },
  airpods: { label: "ایرپاد", href: "/category/airpods", image: "/categories/airpods-nav.png" },
  accessories: { label: "لوازم جانبی", href: "/category/accessories", image: "/categories/accessories-nav.png" },
  appletv: { label: "اپل تی‌وی", href: "/category/appletv", image: "/categories/appletv-nav.png" },
};

export const categories: Category[] = Object.values(categoryMap).map((c) => ({
  label: c.label,
  href: c.href,
  image: c.image || "",
}));

export async function getCategoryBySlug(slug?: string): Promise<{ label: string; href: string } | undefined> {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return categoryMap[normalized];
}

export async function getCategories(): Promise<Category[]> {
  return categories;
}
