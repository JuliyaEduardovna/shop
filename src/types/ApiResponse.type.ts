import type { Product } from './Product.type';

export type ApiResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
