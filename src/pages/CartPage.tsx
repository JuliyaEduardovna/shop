import { removeFromCart, updateQuantity } from '../store/cartSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Корзина</h1>

      {cartItems.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-xl text-gray-600'>Корзина пуста</p>
          <Link
            to='/'
            className='text-purple-600 hover:text-purple-700 underline'
          >
            Продолжить покупки
          </Link>
        </div>
      ) : (
        <div className='space-y-4'>
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className='border rounded-lg p-4 bg-white flex items-center justify-between'
            >
              <div>
                <h3 className='font-semibold'>{item.product.title}</h3>
                <p className='text-purple-600 font-bold'>
                  ${item.product.price}
                </p>
                <p>Количество: {item.quantity}</p>
              </div>
              <div className='flex items-center gap-2'>
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.product.id,
                        quantity: item.quantity - 1,
                      }),
                    )
                  }
                  className='w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded'
                >
                  -
                </button>
                <span className='w-8 text-center'>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.product.id,
                        quantity: item.quantity + 1,
                      }),
                    )
                  }
                  className='w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded'
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.product.id))}
                  className='text-red-500 hover:text-red-700 ml-4'
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
