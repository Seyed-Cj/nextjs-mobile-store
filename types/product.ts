export interface ColorOption {
  name: string;
  hex: string;
}

export interface FeaturedProduct {
  id: string;
  name: string;
  image: string;
  priceFrom: number;
  currency?: string;
  colors: ColorOption[];
  href: string;
  badge?: string;
}
