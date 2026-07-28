export interface FooterLinkItem {
  label: string;
  href: string;
  iconType?: "instagram" | "telegram" | "x" | "youtube";
}

export interface FooterLinkColumn {
  heading: string;
  items: FooterLinkItem[];
}

export const footerLinkColumns: FooterLinkColumn[] = [
  {
    heading: "ما را دنبال کنید",
    items: [
      { label: "اینستاگرام", href: "#", iconType: "instagram" },
      { label: "تلگرام", href: "#", iconType: "telegram" },
      { label: "یوتیوب", href: "#", iconType: "youtube" },
    ],
  },
  {
    heading: "اطلاعات تماس",
    items: [
      { label: "تماس با ما", href: "#" },
      { label: "درباره ما", href: "#" },
      { label: "قوانین سایت", href: "#" },
      { label: "ضمانت بازگشت کالا", href: "#" },
      { label: "رجیستری", href: "#" },
    ],
  },
  {
    heading: "محصولات جدید",
    items: [
      { label: "آیفون 17E", href: "#" },
      { label: "مک بوک پرو M5 Pro, M5 max", href: "#" },
      { label: "مک بوک ایر M5", href: "#" },
      { label: "مک بوک نئو Neo", href: "#" },
      { label: "آیپد ایر M4", href: "#" },
    ],
  },
  {
    heading: "خدمات و پشتیبانی",
    items: [
      { label: "تماس با ما", href: "#" },
      { label: "سوالات متداول", href: "#" },
      { label: "گارانتی و اصالت", href: "#" },
      { label: "خدمات و تعمیرات", href: "#" },
      { label: "پیگیری سفارش", href: "#" },
    ],
  },
  {
    heading: "محصولات",
    items: [
      { label: "iPhone", href: "#" },
      { label: "iPad", href: "#" },
      { label: "Mac", href: "#" },
      { label: "Watch", href: "#" },
      { label: "AirPods", href: "#" },
    ],
  },
];
