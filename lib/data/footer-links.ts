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
    heading: "محصولات آیفون",
    items: [
      { label: "آیفون ۱۷ پرومکس", href: "/products/iphone-17-pro-max" },
      { label: "آیفون ۱۷", href: "/products/iphone-17" },
      { label: "آیفون ۱۶ پرو", href: "/products/iphone-16-pro" },
      { label: "آیفون ۱۶", href: "/products/iphone-16" },
      { label: "همه مدل‌های آیفون", href: "/category/iphone" },
    ],
  },
  {
    heading: "محصولات مک",
    items: [
      { label: "مک‌بوک پرو ۲۰۲۶", href: "/products/macbook-pro-2026" },
      { label: "مک‌بوک نئو ۲۰۲۶", href: "/products/macbook-neo" },
      { label: "همه مدل‌های مک", href: "/category/mac" },
      { label: "همه محصولات اپل", href: "/products" },
    ],
  },
  {
    heading: "دسته‌بندی‌ها",
    items: [
      { label: "گوشی آیفون", href: "/category/iphone" },
      { label: "لپ‌تاپ مک‌بوک", href: "/category/mac" },
      { label: "آیپد اپل", href: "/category/ipad" },
      { label: "اپل واچ", href: "/category/watch" },
    ],
  },
  {
    heading: "خدمات و پشتیبانی",
    items: [
      { label: "تماس با ما", href: "/contact-us" },
      { label: "مشاوره و پشتیبانی", href: "/contact-us" },
      { label: "ضمانت اصالت و گارانتی", href: "/contact-us" },
      { label: "ارسال سریع و پیگیری", href: "/contact-us" },
    ],
  },
  {
    heading: "ما را دنبال کنید",
    items: [
      {
        label: "اینستاگرام",
        href: "https://instagram.com",
        iconType: "instagram",
      },
      { label: "تلگرام", href: "https://t.me", iconType: "telegram" },
      { label: "یوتیوب", href: "https://youtube.com", iconType: "youtube" },
    ],
  },
];

export async function getFooterLinks(): Promise<FooterLinkColumn[]> {
  return footerLinkColumns;
}
