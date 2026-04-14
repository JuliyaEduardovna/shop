import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex items-center justify-between px-6 py-4 bg-white shadow-md'>
      <img src={logo} alt='Logo' className='h-10 w-auto' />
      <ul className='flex gap-6'>
        <li>
          <Link to='/catalog' className='text-gray-700 hover:text-purple-600 transition-colors'>
            Каталог
          </Link>
        </li>
        <li>
          <Link to='/about' className='text-gray-700 hover:text-purple-600 transition-colors'>
            О нас
          </Link>
        </li>
        <li>
          <Link to='/contacts' className='text-gray-700 hover:text-purple-600 transition-colors'>
            Контакты
          </Link>
        </li>
      </ul>
      <Link to='/cart' className='relative text-gray-700 hover:text-purple-600 transition-colors'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <span className='absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
          0
        </span>
      </Link>
    </header>
  );
}
