import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeFromCart, updateQty, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-32 text-center">
        <p className="text-4xl mb-4">🛍️</p>
        <h2 className="text-2xl font-light text-[#3d3530] mb-3">Your cart is empty</h2>
        <p className="text-[#7a6a5e] mb-8">Discover our range of organic skincare.</p>
        <Link to="/products" className="inline-block bg-[#8b6f5e] text-white px-8 py-3 rounded-sm hover:bg-[#7a5e4d] transition-colors">
          Shop Now
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-light text-[#3d3530] mb-10">Your Cart</h1>

      <div className="space-y-6 mb-10">
        {items.map(item => (
          <div key={item.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-20 h-20 rounded bg-[#f0ebe3] overflow-hidden flex-shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-[#8b6f5e] uppercase tracking-wider">{item.category}</p>
              <p className="font-medium text-[#3d3530]">{item.name}</p>
              <p className="text-sm text-[#7a6a5e]">{item.size}</p>
            </div>
            <div className="flex flex-col items-end justify-between">
              <p className="font-semibold text-[#3d3530]">₹{item.price * 80 * item.qty}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQty(item.id, item.qty - 1)}
                  className="w-7 h-7 border border-[#d4c9bc] rounded text-[#6b5e52] hover:border-[#8b6f5e] flex items-center justify-center"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  className="w-7 h-7 border border-[#d4c9bc] rounded text-[#6b5e52] hover:border-[#8b6f5e] flex items-center justify-center"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-2 text-[#b0a090] hover:text-red-400 transition-colors text-sm"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between text-[#3d3530] text-lg font-medium mb-2">
          <span>Subtotal</span>
          <span>₹{total * 80}</span>
        </div>
        <p className="text-xs text-[#9a8878] mb-6">Taxes and shipping calculated at checkout.</p>
        <button
          disabled
          className="w-full bg-[#c9b9a8] text-white py-3 rounded-sm tracking-wide cursor-not-allowed"
        >
          Checkout — Coming Soon
        </button>
        <Link to="/products" className="block text-center text-sm text-[#8b6f5e] hover:underline mt-4">
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
