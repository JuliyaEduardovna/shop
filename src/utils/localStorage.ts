import type { CartItem } from '../store/cartSlice';
import { CART_KEY } from '../constants/constants';

export function saveCartToLocalStorage(items: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function loadCartFromLocalStorage(): CartItem[] | null {
  const cart = localStorage.getItem(CART_KEY);
  if (cart) {
    try {
      return JSON.parse(cart);
    } catch {
      return null;
    }
  }
  return null;
}

export function clearCartFromLocalStorage() {
  localStorage.removeItem(CART_KEY);
}
