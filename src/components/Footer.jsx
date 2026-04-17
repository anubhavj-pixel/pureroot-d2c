import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#3d3530] text-[#c9b9a8] mt-20">
      <div className="max-w-5xl mx-auto px-8 md:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-white text-lg font-semibold tracking-widest uppercase mb-3">PureRoot</p>
          <p className="text-sm leading-relaxed">
            Clean, conscious skincare rooted in nature. Every ingredient earned its place.
          </p>
        </div>
        <div>
          <p className="text-white text-sm font-medium uppercase tracking-wider mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-white transition-colors">Shop All</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/cart" className="hover:text-white transition-colors">Cart</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-white text-sm font-medium uppercase tracking-wider mb-4">Values</p>
          <ul className="space-y-2 text-sm">
            <li>100% Organic Ingredients</li>
            <li>Cruelty Free & Vegan</li>
            <li>Plastic-Neutral Packaging</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#5a4a3f] text-center text-xs py-4 text-[#8b7b6e]">
        © {new Date().getFullYear()} PureRoot. All rights reserved.
      </div>
    </footer>
  )
}
