import { useParams, Link } from 'react-router-dom'
import products from '../data/products.json'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { slug } = useParams()
  const { addToCart } = useCart()
  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-[#7a6a5e] mb-4">Product not found.</p>
        <Link to="/products" className="text-[#8b6f5e] hover:underline">Back to Shop</Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <Link to="/products" className="text-sm text-[#8b6f5e] hover:underline mb-8 inline-block">
        ← Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Image */}
        <div className="rounded-lg overflow-hidden bg-[#f0ebe3] aspect-square">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <p className="text-xs text-[#8b6f5e] uppercase tracking-widest mb-2">{product.category}</p>
          <h1 className="text-3xl font-light text-[#3d3530] mb-3">{product.name}</h1>
          <p className="text-2xl text-[#3d3530] font-medium mb-6">₹{product.price * 80}</p>

          <p className="text-[#7a6a5e] leading-relaxed mb-6">{product.description}</p>

          <div className="mb-6">
            <p className="text-sm font-medium text-[#3d3530] mb-1">Size</p>
            <p className="text-sm text-[#7a6a5e]">{product.size}</p>
          </div>

          <div className="mb-8">
            <p className="text-sm font-medium text-[#3d3530] mb-2">Key Ingredients</p>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.split(',').map(ing => (
                <span key={ing} className="text-xs bg-[#f0ebe3] text-[#6b5e52] px-3 py-1 rounded-full">
                  {ing.trim()}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-[#8b6f5e] text-white py-3 rounded-sm hover:bg-[#7a5e4d] transition-colors tracking-wide"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
