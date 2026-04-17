import { useState } from 'react'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

const categories = ['All', ...new Set(products.map(p => p.category))]

export default function Products() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <div className="max-w-5xl mx-auto px-8 md:px-20 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-light text-[#3d3530] mb-2">Shop All</h1>
        <p className="text-[#7a6a5e]">{products.length} products — all certified organic</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
              active === cat
                ? 'bg-[#8b6f5e] text-white border-[#8b6f5e]'
                : 'border-[#d4c9bc] text-[#6b5e52] hover:border-[#8b6f5e]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
