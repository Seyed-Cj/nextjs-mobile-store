import { HeroSlideData } from "@/types/hero";

export const heroSlides: HeroSlideData[] = [
  {
    id: "iphone-17-pro-banner",
    image: {
      src: "/images/macbook-pro-slide-1.jpg",
      alt: "بنر تبلیغاتی آیفون ۱۷ پرومکس با طراحی بدنه تیتانیوم",
    },
  },
  {
    id: "macbook-pro-banner",
    image: {
      src: "/images/ipad-slide-3.jpg",
      alt: "بنر تبلیغاتی مک‌بوک پرو با پردازنده قدرتمند M5",
    },
  },
  {
    id: "ipad-air-banner",
    image: {
      src: "/images/macbook-air-slide-2-1.jpg",
      alt: "بنر تبلیغاتی آیپد ایر ۲۰۲۶ با طراحی فوق باریک",
    },
  },
];

export async function getHeroSlides(): Promise<HeroSlideData[]> {
  return heroSlides;
}
