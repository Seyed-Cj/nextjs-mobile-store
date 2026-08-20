"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { CartItem, CartContextType } from "@/types/cart";

const CART_STORAGE_KEY = "iphone_shop_cart_v1";

export function generateCartItemId(
  productId: string,
  colorName?: string,
  storage?: string,
): string {
  return `${productId}__${colorName ?? "default"}__${storage ?? "default"}`;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // SSR-safe client mount hydration from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Sync state changes to localStorage after initial mount
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Failed to persist cart to localStorage:", error);
    }
  }, [items, isLoaded]);

  const addItem = useCallback(
    (itemData: Omit<CartItem, "id" | "quantity"> & { quantity?: number }) => {
      const qtyToAdd = Math.max(1, itemData.quantity ?? 1);
      const id = generateCartItemId(
        itemData.productId,
        itemData.selectedColor?.name,
        itemData.selectedStorage,
      );

      setItems((prevItems) => {
        const existingIndex = prevItems.findIndex((item) => item.id === id);
        if (existingIndex > -1) {
          const updated = [...prevItems];
          const currentItem = updated[existingIndex];
          updated[existingIndex] = {
            ...currentItem,
            quantity: Math.min(99, currentItem.quantity + qtyToAdd),
            unitPrice: itemData.unitPrice,
          };
          return updated;
        }

        const newItem: CartItem = {
          ...itemData,
          id,
          quantity: qtyToAdd,
          currency: itemData.currency ?? "تومان",
        };
        return [...prevItems, newItem];
      });
    },
    [],
  );

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) {
        return prev.filter((item) => item.id !== id);
      }
      return prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(99, Math.max(1, quantity)) }
          : item,
      );
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItemsCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      isLoaded,
      totalItemsCount,
      totalPrice,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [
      items,
      isLoaded,
      totalItemsCount,
      totalPrice,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
