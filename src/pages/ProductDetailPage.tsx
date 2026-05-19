import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../api/productsApi';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addToCart } from '../store/cartSlice';
import type { Product } from '../types/Product.type';

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  
  const { data, isLoading, error } = useGetProductsQuery();
  
  const product: Product | undefined = data?.products.find(
    (p) => p.id === Number(id)
  );

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  const discountedPrice = product
    ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
    : null;

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <p className='text-xl text-gray-600'>Загрузка...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center py-12'>
          <p className='text-xl text-red-600'>Товар не найден</p>
          <button
            onClick={() => navigate('/')}
            className='mt-4 text-purple-600 hover:text-purple-700 underline'
          >
            Вернуться к каталогу
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <button
        onClick={() => navigate('/')}
        className='mb-6 flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M19 12H5M12 19l-7-7 7-7' />
        </svg>
        Назад к каталогу
      </button>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex items-center justify-center'>
          <img
            src={product.thumbnail}
            alt={product.title}
            className='w-full max-w-md h-96 object-contain rounded-lg bg-gray-100'
          />
        </div>

        <div className='space-y-6'>
          <div>
            <span className='inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full mb-3'>
              {product.category}
            </span>
            <h1 className='text-3xl font-bold text-gray-800 mb-3'>
              {product.title}
            </h1>
            <p className='text-gray-600 leading-relaxed'>
              {product.description}
            </p>
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <span className='text-yellow-500 text-xl'>⭐</span>
              <span className='text-lg font-semibold'>{product.rating}</span>
            </div>
            <span className='text-gray-400'>|</span>
            <span className='text-gray-600'>{product.reviews.length} отзывов</span>
          </div>

          <div className='flex items-end gap-3'>
            <p className='text-4xl font-bold text-purple-600'>
              ${discountedPrice}
            </p>
            {product.discountPercentage > 0 && (
              <div>
                <p className='text-gray-400 line-through text-lg'>
                  ${product.price}
                </p>
                <p className='text-green-600 font-semibold'>
                  -{product.discountPercentage}%
                </p>
              </div>
            )}
          </div>

          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <span className='text-gray-600 font-semibold'>Бренд:</span>
              <span className='text-gray-800'>{product.brand}</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-gray-600 font-semibold'>Наличие:</span>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  product.availabilityStatus === 'In Stock'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {product.availabilityStatus}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-gray-600 font-semibold'>Количество на складе:</span>
              <span className='text-gray-800'>{product.stock} шт.</span>
            </div>
          </div>

          <div className='flex items-center gap-4 pt-4'>
            <button
              onClick={handleAddToCart}
              className='flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold'
            >
              Добавить в корзину
            </button>
            <button
              onClick={() => navigate('/')}
              className='px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
            >
              Продолжить покупки
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}