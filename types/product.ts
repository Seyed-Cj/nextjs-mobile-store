export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  sku: string;
  colorName: string;
  colorHex?: string;
  storage: string;
  price: number;
  originalPrice?: number;
  stock: number;
  inStock: boolean;
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
  variants?: ProductVariant[];
  totalStock?: number;
  specs?: ProductSpec[];
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


