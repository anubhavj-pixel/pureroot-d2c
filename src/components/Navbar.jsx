import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { count } = useCart()

  return (
    <nav className="bg-[#faf9f6] border-b border-[#e8e3da] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-widest text-[#3d3530] uppercase">
          PureRoot
        </Link>

        <div className="flex items-center gap-8 text-sm tracking-wide text-[#6b5e52]">
          <NavLink
            to="/products"
            className={({ isActive }) => isActive ? 'text-[#3d3530] font-medium' : 'hover:text-[#3d3530] transition-colors'}
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'text-[#3d3530] font-medium' : 'hover:text-[#3d3530] transition-colors'}
          >
            About
          </NavLink>
          <Link to="/cart" className="relative hover:text-[#3d3530] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#8b6f5e] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}
