import { ProductColor } from "./product";

export interface CartItem {
  id: string; 
  productId: string;
  name: string;
  image: string;
  unitPrice: number;
  currency?: string;
  selectedColor?: ProductColor;
  selectedStorage?: string;
  quantity: number;
  href: string;
}

export interface CartContextType {
  items: CartItem[];
  isLoaded: boolean;
  totalItemsCount: number;
  totalPrice: number;
  addItem: (item: Omit<CartItem, "id" | "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}
