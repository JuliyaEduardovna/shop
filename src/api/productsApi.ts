import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ApiResponse } from '../types/ApiResponse.type'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    getProducts: build.query<ApiResponse, void>({
      query: () => `/products`,
    }),
  }),
})

export const { useGetProductsQuery  } = productsApi;