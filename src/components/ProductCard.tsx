import type { Product } from '../types/Product.type';

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className='border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white'>
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className='w-full h-48 object-contain rounded-md mb-4 bg-gray-100'
      />
      <h3 className='text-lg font-semibold text-gray-800 mb-2'>
        {product.title}
      </h3>
      <p className='text-purple-600 font-bold text-xl mb-2'>
        ${product.price}
      </p>
      <div className='flex items-center gap-1 mb-4'>
        <span>⭐ {product.rating}</span>
      </div>
      <button 
        onClick={() => onAddToCart(product)}
        className='w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors'
      >
        Добавить в корзину
      </button>
    </div>
  );
}