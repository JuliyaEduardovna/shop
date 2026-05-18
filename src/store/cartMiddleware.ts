import type { Middleware } from '@reduxjs/toolkit';
import { saveCartToLocalStorage } from '../utils/localStorage';

export const cartMiddleware: Middleware = (store) => (next) => (action) => {
  const prevState = store.getState();
  
  const result = next(action);

  const nextState = store.getState();
  
  const isCartAction = (action as { type: string }).type.startsWith('cart/');
  
  if (isCartAction && prevState.cart.items !== nextState.cart.items) {
    saveCartToLocalStorage(nextState.cart.items);
  }
  
  return result;
};
