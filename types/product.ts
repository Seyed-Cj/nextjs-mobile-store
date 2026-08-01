export interface ColorOption {
  name: string;
  hex: string;
}

export interface ProductCardInterface {
  id: string;
  name: string;
  image: string;
  priceFrom: number;
  currency?: string;
  colors: ColorOption[];
  href: string;
  badge?: string;
}

export interface ProductDetailInterface extends ProductCardInterface {
  tagline?: string;
  images?: string[];
  storageOptions?: string[];
  installmentPrice?: number;
  description?: string;
}

