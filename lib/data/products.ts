import { FeaturedProduct } from "@/types/product";

export const featuredProducts: FeaturedProduct[] = [
  {
    id: "iphone-17-pro",
    name: "آیفون 17 پرومکس",
    image: "/products/iphone-card-40-17pro-202509.jpg",
    priceFrom: 255000000,
    currency: "تومان",
    colors: [
      { name: "صحرا (Desert Titanium)", hex: "#C0A794" },
      { name: "طبیعی (Natural Titanium)", hex: "#BEB7A4" },
      { name: "سفید (White Titanium)", hex: "#F2F1EC" },
      { name: "مشکی (Black Titanium)", hex: "#38373B" },
    ],
    href: "/products/iphone-16-pro",
    badge: "ویژه",
  },
  {
    id: "macbook-pro-m4",
    name: "مکبوک M5",
    image: "/products/mac-card-40-macbook-air-202503.jpg",
    priceFrom: 236000000,
    currency: "تومان",
    colors: [
      { name: "مشکی فضایی (Space Black)", hex: "#232426" },
      { name: "نقره‌ای (Silver)", hex: "#E2E4E1" },
    ],
    href: "/products/macbook-pro-m4",
    badge: "جدید",
  },
  {
    id: "macbook-neo",
    name: "مک‌بوک نئو ۲۰۲۶",
    image: "/products/mac-card-40-macbook-neo-202603.jpg",
    priceFrom: 130000000,
    currency: "تومان",
    colors: [
      { name: "میدنایت (Midnight)", hex: "#1C2331" },
      { name: "استارلایت (Starlight)", hex: "#F5EBE6" },
      { name: "نقره‌ای (Silver)", hex: "#E3E4E6" },
    ],
    href: "/products/macbook-neo",
  },
  {
    id: "iphone-16",
    name: "آیفون ۱۶",
    image: "/products/iphone-card-40-16plus-202509.jpg",
    priceFrom: 180000000,
    currency: "تومان",
    colors: [
      { name: "صورتی (Pink)", hex: "#EBCBD4" },
      { name: "سبز آبی (Teal)", hex: "#A8C3BD" },
      { name: "سرمه‌ای (Ultramarine)", hex: "#95A3CD" },
      { name: "مشکی (Black)", hex: "#2E3033" },
    ],
    href: "/products/iphone-16",
  },
  {
    id: "iphone-17",
    name: "آیفون 17",
    image: "/products/iphone-card-40-17-202509.jpg",
    priceFrom: 205000000,
    currency: "تومان",
    colors: [
      { name: "صورتی (Pink)", hex: "#EBCBD4" },
      { name: "سبز آبی (Teal)", hex: "#A8C3BD" },
      { name: "سفید (White Titanium)", hex: "#F2F1EC" },
      { name: "مشکی (Black Titanium)", hex: "#38373B" },
    ],
    href: "/products/iphone-16-pro",
    badge: "ویژه",
  },
];
