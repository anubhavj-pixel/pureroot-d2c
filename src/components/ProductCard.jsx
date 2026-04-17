import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/products/${product.slug}`}>
        <div className="overflow-hidden h-64 bg-[#f0ebe3]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <p className="text-xs text-[#8b6f5e] uppercase tracking-wider mb-1">{product.category}</p>
        <Link to={`/products/${product.slug}`}>
          <h3 className="text-[#3d3530] font-medium text-base mb-1 hover:underline">{product.name}</h3>
        </Link>
        <p className="text-sm text-[#7a6a5e] mb-3 line-clamp-2">{product.shortDesc}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#3d3530] font-semibold">₹{product.price * 80}</span>
          <button
            onClick={() => addToCart(product)}
            className="text-xs bg-[#8b6f5e] text-white px-3 py-1.5 rounded hover:bg-[#7a5e4d] transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
