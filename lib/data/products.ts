import { ProductDetailInterface } from "@/types/product";

export const featuredProducts: ProductDetailInterface[] = [
  {
    id: "iphone-17-pro",
    name: "آیفون 17 پرومکس",
    tagline: "بیشترین توانایی. بیشترین پیشرفت.",
    image: "/products/iphone-card-40-17pro-202509.jpg",
    images: [
      "/products/iphone-card-40-17pro-202509.jpg",
      "/products/iphone-card-40-17-202509.jpg",
      "/products/iphone-card-40-16plus-202509.jpg",
      "/products/mac-card-40-macbook-air-202503.jpg",
      "/products/mac-card-40-macbook-neo-202603.jpg",
      "/products/mac-card-40-macbook-neo-202603.jpg",
    ],
    priceFrom: 255000000,
    currency: "تومان",
    colors: [
      { name: "صحرا (Desert Titanium)", hex: "#C0A794" },
      { name: "طبیعی (Natural Titanium)", hex: "#BEB7A4" },
      { name: "سفید (White Titanium)", hex: "#F2F1EC" },
      { name: "مشکی (Black Titanium)", hex: "#38373B" },
    ],
    storageOptions: ["256GB", "512GB", "1TB", "2TB"],
    href: "/products/iphone-17-pro",
    badge: "ویژه",
  },
  {
    id: "macbook-pro-m4",
    name: "مکبوک M5",
    tagline: "قدرت بی‌نظیر برای حرفه‌ای‌ترین کارها.",
    image: "/products/mac-card-40-macbook-air-202503.jpg",
    images: [
      "/products/mac-card-40-macbook-air-202503.jpg",
      "/products/mac-card-40-macbook-neo-202603.jpg",
    ],
    priceFrom: 236000000,
    currency: "تومان",
    colors: [
      { name: "مشکی فضایی (Space Black)", hex: "#232426" },
      { name: "نقره‌ای (Silver)", hex: "#E2E4E1" },
    ],
    storageOptions: ["512GB", "1TB", "2TB", "4TB"],
    href: "/products/macbook-pro-m4",
    badge: "جدید",
  },
  {
    id: "macbook-neo",
    name: "مک‌بوک نئو ۲۰۲۶",
    tagline: "سبک‌ترین، باریک‌ترین، هوشمندترین.",
    image: "/products/mac-card-40-macbook-neo-202603.jpg",
    images: [
      "/products/mac-card-40-macbook-neo-202603.jpg",
      "/products/mac-card-40-macbook-air-202503.jpg",
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
  },
  {
    id: "iphone-16",
    name: "آیفون ۱۶",
    tagline: "طراحی نوآورانه با عملکرد عالی.",
    image: "/products/iphone-card-40-16plus-202509.jpg",
    images: [
      "/products/iphone-card-40-16plus-202509.jpg",
      "/products/iphone-card-40-17-202509.jpg",
    ],
    priceFrom: 180000000,
    currency: "تومان",
    colors: [
      { name: "صورتی (Pink)", hex: "#EBCBD4" },
      { name: "سبز آبی (Teal)", hex: "#A8C3BD" },
      { name: "سرمه‌ای (Ultramarine)", hex: "#95A3CD" },
      { name: "مشکی (Black)", hex: "#2E3033" },
    ],
    storageOptions: ["128GB", "256GB", "512GB"],
    href: "/products/iphone-16",
  },
  {
    id: "iphone-17",
    name: "آیفون 17",
    tagline: "پیشرفته‌تر از همیشه در دستان شما.",
    image: "/products/iphone-card-40-17-202509.jpg",
    images: [
      "/products/iphone-card-40-17-202509.jpg",
      "/products/iphone-card-40-17pro-202509.jpg",
    ],
    priceFrom: 205000000,
    currency: "تومان",
    colors: [
      { name: "صورتی (Pink)", hex: "#EBCBD4" },
      { name: "سبز آبی (Teal)", hex: "#A8C3BD" },
      { name: "سفید (White Titanium)", hex: "#F2F1EC" },
      { name: "مشکی (Black Titanium)", hex: "#38373B" },
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
    href: "/products/iphone-17",
    badge: "ویژه",
  },
];

export const iPhoneProducts: ProductDetailInterface[] = [
  {
    id: "iphone-17",
    name: "آیفون 17",
    tagline: "پیشرفته‌تر از همیشه در دستان شما.",
    image: "/products/iphone-card-40-17-202509.jpg",
    images: [
      "/products/iphone-card-40-17-202509.jpg",
      "/products/iphone-card-40-17pro-202509.jpg",
    ],
    priceFrom: 205000000,
    currency: "تومان",
    colors: [
      { name: "صورتی (Pink)", hex: "#EBCBD4" },
      { name: "سبز آبی (Teal)", hex: "#A8C3BD" },
      { name: "سفید (White Titanium)", hex: "#F2F1EC" },
      { name: "مشکی (Black Titanium)", hex: "#38373B" },
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
    href: "/products/iphone-17",
  },
  {
    id: "iphone-16",
    name: "آیفون ۱۶",
    tagline: "طراحی نوآورانه با عملکرد عالی.",
    image: "/products/iphone-card-40-16plus-202509.jpg",
    images: [
      "/products/iphone-card-40-16plus-202509.jpg",
      "/products/iphone-card-40-17-202509.jpg",
    ],
    priceFrom: 180000000,
    currency: "تومان",
    colors: [
      { name: "صورتی (Pink)", hex: "#EBCBD4" },
      { name: "سبز آبی (Teal)", hex: "#A8C3BD" },
      { name: "سرمه‌ای (Ultramarine)", hex: "#95A3CD" },
      { name: "مشکی (Black)", hex: "#2E3033" },
    ],
    storageOptions: ["128GB", "256GB", "512GB"],
    href: "/products/iphone-16",
  },
  {
    id: "iphone-17-pro",
    name: "آیفون 17 پرومکس",
    tagline: "بیشترین توانایی. بیشترین پیشرفت.",
    image: "/products/iphone-card-40-17pro-202509.jpg",
    images: [
      "/products/iphone-card-40-17pro-202509.jpg",
      "/products/iphone-card-40-17-202509.jpg",
      "/products/iphone-card-40-16plus-202509.jpg",
      "/products/mac-card-40-macbook-air-202503.jpg",
      "/products/mac-card-40-macbook-neo-202603.jpg",
    ],
    priceFrom: 255000000,
    currency: "تومان",
    colors: [
      { name: "صحرا (Desert Titanium)", hex: "#C0A794" },
      { name: "طبیعی (Natural Titanium)", hex: "#BEB7A4" },
      { name: "سفید (White Titanium)", hex: "#F2F1EC" },
      { name: "مشکی (Black Titanium)", hex: "#38373B" },
    ],
    storageOptions: ["256GB", "512GB", "1TB", "2TB"],
    href: "/products/iphone-17-pro",
    badge: "ویژه",
  },
];

export function getProductById(id: string): ProductDetailInterface | undefined {
  const normalizedId = id.toLowerCase().trim();
  return (
    featuredProducts.find((p) => p.id.toLowerCase() === normalizedId) ||
    iPhoneProducts.find((p) => p.id.toLowerCase() === normalizedId)
  );
}

