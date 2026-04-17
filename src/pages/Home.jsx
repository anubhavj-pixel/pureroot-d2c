import { Link } from 'react-router-dom'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

const featured = products.slice(0, 4)

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#f0ebe3] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-[#8b6f5e] text-sm uppercase tracking-widest mb-4">100% Organic · Cruelty Free</p>
            <h1 className="text-4xl md:text-6xl font-light text-[#3d3530] leading-tight mb-6">
              Skin that feels<br />as good as it looks.
            </h1>
            <p className="text-[#7a6a5e] text-lg mb-8 max-w-md">
              PureRoot is built on one belief — your skin deserves only what nature intended.
              No fillers, no compromise.
            </p>
            <Link
              to="/products"
              className="inline-block bg-[#8b6f5e] text-white px-8 py-3 rounded-sm tracking-wide hover:bg-[#7a5e4d] transition-colors"
            >
              Shop All Products
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3 max-w-sm md:max-w-none">
            {featured.slice(0, 4).map(p => (
              <div key={p.id} className="rounded-lg overflow-hidden aspect-square bg-[#e8e3da]">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="border-y border-[#e8e3da] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-sm text-[#6b5e52]">
          <div>🌿 <span className="ml-2">Certified Organic Ingredients</span></div>
          <div>🐰 <span className="ml-2">Vegan & Cruelty Free</span></div>
          <div>♻️ <span className="ml-2">Plastic-Neutral Packaging</span></div>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-light text-[#3d3530]">Best Sellers</h2>
          <Link to="/products" className="text-sm text-[#8b6f5e] hover:underline">View all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand promise */}
      <section className="bg-[#3d3530] text-white">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-light mb-6">Every ingredient earned its place.</h2>
          <p className="text-[#c9b9a8] text-lg leading-relaxed mb-8">
            We source every botanical directly from certified organic farms. No synthetic fillers,
            no greenwashing — just clean, effective skincare that works with your skin's biology.
          </p>
          <Link to="/about" className="inline-block border border-[#c9b9a8] text-[#c9b9a8] px-8 py-3 rounded-sm hover:bg-[#5a4a3f] transition-colors">
            Our Story
          </Link>
        </div>
      </section>
    </div>
  )
}
