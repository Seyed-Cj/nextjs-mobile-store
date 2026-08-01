export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  priceFrom: number;
  currency?: string;
  colors: ProductColor[];
  href: string;
  badge?: string;
  tagline?: string;
  images?: string[];
  storageOptions?: string[];
  installmentPrice?: number;
  description?: string;
  category?: string;
  series?: string;
  inStock?: boolean;
  isNew?: boolean;
  createdAt?: string;
  popularity?: number;
}

// Backward-compatible aliases for legacy imports
export type ColorOption = ProductColor;
export type ProductCardInterface = Product;
export type ProductDetailInterface = Product;


