import { Product } from "@/types/product";

export const allProducts: Product[] = [
  {
    id: "iphone-17-pro-max",
    name: "آیفون 17 پرومکس",
    tagline: "بیشترین توانایی. پیشرفته‌ترین تراشه، دوربین تلسکوپی و باتری عظیم.",
    image: "/products/iphone-17pro/iphone-card-40-17pro-202509.jpg",
    images: [
      "/products/iphone-17pro/iphone-card-40-17pro-202509.jpg",
      "/products/iphone-17pro/iphone-17-promax-deep-blue-256-untitled-1_0006_iphone-17-pro-finish-select-202509-6-9inch-deepblue.jpg",
      "/products/iphone-17pro/iphone-17-promax-silver-256-untitled-1_0000_iphone-17-pro-finish-select-202509-6-9inch-silver.jpg",
    ],
    priceFrom: 275000000,
    currency: "تومان",
    colors: [
      { name: "نارنجی (Orange)", hex: "#FE8E49" },
      { name: "نقره‌ای (Silver)", hex: "#E2E4E1" },
      { name: "آبی (Blue)", hex: "#42475C" },
    ],
    storageOptions: ["256GB", "512GB", "1TB", "2TB"],
    href: "/products/iphone-17-pro-max",
    badge: "جدید",
    category: "iphone",
    series: "iPhone 17 Series",
    inStock: true,
    isNew: true,
    createdAt: "2026-01-15",
    popularity: 99,
  },
  {
    id: "iphone-17",
    name: "آیفون 17",
    tagline: "پیشرفته‌تر از همیشه در دستان شما با نمایشگر پروموشن ۱۲۰ هرتز.",
    image: "/products/iphone-17/iphone-card-40-17-202509.jpg",
    images: [
      "/products/iphone-17/iphone-card-40-17-202509.jpg",
      "/products/iphone-17/apple-iphone-17-256gb-sage.png",
      "/products/iphone-17/apple-iphone-17-4.png",
      "/products/iphone-17/apple-iphone-17-5.png",
    ],
    priceFrom: 205000000,
    currency: "تومان",
    colors: [
      { name: "سبز مریم‌گلی (Sage)", hex: "#8FA698" },
      { name: "صورتی (Pink)", hex: "#EBCBD4" },
      { name: "سفید (White)", hex: "#F2F1EC" },
      { name: "مشکی (Black)", hex: "#38373B" },
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
    href: "/products/iphone-17",
    badge: "جدید",
    category: "iphone",
    series: "iPhone 17 Series",
    inStock: true,
    isNew: true,
    createdAt: "2026-01-05",
    popularity: 95,
  },
  {
    id: "iphone-16-pro",
    name: "آیفون 16 پرو",
    tagline: "طراحی تیتانیومی مستحکم، تراشه A18 Pro و دکمه کنترل دوربین.",
    image: "/products/iphone-16pro/iphone16pro.jpg",
    images: ["/products/iphone-16pro/iphone16pro.jpg"],
    priceFrom: 215000000,
    currency: "تومان",
    colors: [
      { name: "صحرا (Desert Titanium)", hex: "#C0A794" },
      { name: "طبیعی (Natural Titanium)", hex: "#BEB7A4" },
      { name: "سفید (White Titanium)", hex: "#F2F1EC" },
      { name: "مشکی (Black Titanium)", hex: "#38373B" },
    ],
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    href: "/products/iphone-16-pro",
    badge: "پرفروش",
    category: "iphone",
    series: "iPhone 16 Series",
    inStock: true,
    isNew: false,
    createdAt: "2025-09-10",
    popularity: 92,
  },
  {
    id: "iphone-16",
    name: "آیفون 16",
    tagline: "طراحی نوآورانه با دکمه کمرا کنترل و تراشه پرقدرت A18.",
    image: "/products/iphone-16/iphone-card-40-16plus-202509.jpg",
    images: [
      "/products/iphone-16/iphone-card-40-16plus-202509.jpg",
      "/products/iphone-16/apple-iphone-16-black.png.webp",
      "/products/iphone-16/apple-iphone-16-pink.png-3.webp",
      "/products/iphone-16/apple-iphone-16-white.png.webp",
    ],
    priceFrom: 185000000,
    currency: "تومان",
    colors: [
      { name: "صورتی (Pink)", hex: "#EBCBD4" },
      { name: "سفید (White)", hex: "#F2F1EC" },
      { name: "مشکی (Black)", hex: "#2E3033" },
      { name: "آبی آسمانی (Sky Blue)", hex: "#A2B4F9" },
    ],
    storageOptions: ["128GB", "256GB", "512GB"],
    href: "/products/iphone-16",
    category: "iphone",
    series: "iPhone 16 Series",
    inStock: true,
    isNew: false,
    createdAt: "2025-09-01",
    popularity: 88,
  },
  {
    id: "macbook-pro-2026",
    name: "مک‌بوک پرو ۲۰۲۶",
    tagline: "قدرت پردازشی بی‌نظیر با تراشه M5 Pro/Max برای حرفه‌ای‌ترین پروژه‌ها.",
    image: "/products/macbook2026/mac-card-40-macbook-air-202503.jpg",
    images: [
      "/products/macbook2026/mac-card-40-macbook-air-202503.jpg",
      "/products/macbook2026/macbook2026.jpg",
      "/products/macbook2026/macbook20262.jpg",
    ],
    priceFrom: 240000000,
    currency: "تومان",
    colors: [
      { name: "مشکی فضایی (Space Black)", hex: "#232426" },
      { name: "نقره‌ای (Silver)", hex: "#E2E4E1" },
      { name: "خاکستری فضایی (Space Gray)", hex: "#68696E" },
    ],
    storageOptions: ["512GB", "1TB", "2TB", "4TB"],
    href: "/products/macbook-pro-2026",
    badge: "جدید",
    category: "mac",
    series: "MacBook Pro",
    inStock: true,
    isNew: true,
    createdAt: "2026-02-01",
    popularity: 97,
  },
  {
    id: "macbook-neo",
    name: "مک‌بوک نئو ۲۰۲۶",
    tagline: "سبک‌ترین، باریک‌ترین و هوشمندترین مک‌بوک نسل جدید اپل.",
    image: "/products/macbook-neo/mac-card-40-macbook-neo-202603.jpg",
    images: [
      "/products/macbook-neo/mac-card-40-macbook-neo-202603.jpg",
    ],
    priceFrom: 130000000,
    currency: "تومان",
    colors: [
      { name: "میدنایت (Midnight)", hex: "#1C2331" },
      { name: "استارلایت (Starlight)", hex: "#F5EBE6" },
      { name: "نقره‌ای (Silver)", hex: "#E3E4E6" },
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
    href: "/products/macbook-neo",
    badge: "جدید",
    category: "mac",
    series: "MacBook Neo",
    inStock: true,
    isNew: true,
    createdAt: "2026-03-01",
    popularity: 93,
  },
];

export const featuredProducts: Product[] = allProducts;
export const iPhoneProducts: Product[] = allProducts.filter(
  (p) => p.category === "iphone",
);

export async function getFeaturedProducts(): Promise<Product[]> {
  return featuredProducts;
}

export async function getIPhoneProducts(): Promise<Product[]> {
  return iPhoneProducts;
}

export async function getAllProducts(): Promise<Product[]> {
  return allProducts;
}

export async function getProductsByCategory(
  categorySlug?: string,
): Promise<Product[]> {
  if (!categorySlug || categorySlug.toLowerCase() === "all") {
    return allProducts;
  }
  const norm = categorySlug.toLowerCase().trim();
  return allProducts.filter(
    (p) => (p.category && p.category.toLowerCase() === norm) || p.id === norm,
  );
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const normalizedId = id.toLowerCase().trim();
  const rawId = normalizedId.replace(/-/g, "");
  
  return allProducts.find((p) => {
    const pNorm = p.id.toLowerCase().trim();
    const pRaw = pNorm.replace(/-/g, "");

    if (pNorm === normalizedId || pRaw === rawId) return true;

    // Common aliases & fallbacks
    if ((normalizedId === "iphone-17-pro" || rawId === "iphone17pro" || rawId === "iphone17promax") && p.id === "iphone-17-pro-max") return true;
    if ((normalizedId === "iphone-16pro" || rawId === "iphone16pro") && p.id === "iphone-16-pro") return true;
    if ((normalizedId === "macbook-pro" || normalizedId === "macbook2026" || rawId === "macbookpro" || rawId === "macbook2026" || rawId === "macbookprom4") && p.id === "macbook-pro-2026") return true;
    if ((normalizedId === "macbookneo" || rawId === "macbookneo") && p.id === "macbook-neo") return true;

    return false;
  });
}

export const latestProducts: Array<{
  tag: string;
  title: string;
  description: string;
  href: string;
  image: string;
  theme: "light" | "dark";
}> = [
  {
    tag: "New Mac Pro",
    title: "مک‌بوک پرو ۲۰۲۶",
    description: "مشاهده قیمت و خرید قدرتمندترین مک‌بوک اپل با تراشه M5",
    href: "/products/macbook-pro-2026",
    image: "/images/macbook-pro-2025.jpg",
    theme: "light",
  },
  {
    tag: "New Macbook",
    title: "مک‌بوک نئو",
    description: "مشاهده قیمت و خرید جدیدترین سری مک‌بوک نئو ۲۰۲۶",
    href: "/products/macbook-neo",
    image: "/images/neo2026.jpg",
    theme: "dark",
  },
  {
    tag: "iPhone 17 Pro",
    title: "آیفون ۱۷ پرومکس",
    description: "مشاهده و خرید جدیدترین پرچمدار اپل با بدنه تیتانیومی",
    href: "/products/iphone-17-pro-max",
    image: "/images/iphone-17-pro.jpg",
    theme: "light",
  },
  {
    tag: "iPhone 17",
    title: "آیفون ۱۷",
    description: "مشاهده قیمت و خرید آیفون ۱۷ با نمایشگر پروموشن ۱۲۰ هرتز",
    href: "/products/iphone-17",
    image: "/images/ipad-air-2026.jpg",
    theme: "dark",
  },
];

export const products = latestProducts;

export async function getLatestProducts() {
  return latestProducts;
}





