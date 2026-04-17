import { useGetProductsQuery } from '../api/productsApi';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../types/Product.type';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addToCart } from '../store/cartSlice';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetProductsQuery();

  const handleAddToCart = (product: Product) => {
    console.log('Добавлено в корзину:', product.title);
    dispatch(addToCart(product));
  };

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <p className='text-xl text-gray-600'>Загрузка...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <p className='text-xl text-red-600'>Ошибка загрузки товаров</p>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-gray-800 mb-8'>Каталог товаров</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data?.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}