import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../api/productsApi'
import cartReducer from './cartSlice'
import { loadCartFromLocalStorage } from '../utils/localStorage';
import { cartMiddleware } from './cartMiddleware';

const preloadedState = {
  cart: {
    items: loadCartFromLocalStorage() || [],
  },
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware).concat(cartMiddleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch