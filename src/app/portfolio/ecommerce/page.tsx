'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Star, Search, Menu } from 'lucide-react';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Minimalist Chair', price: '$249', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80' },
  { id: 2, name: 'Modern Lamp', price: '$129', image: 'https://images.unsplash.com/photo-1507473888900-52e1ad1459ce?w=500&q=80' },
  { id: 3, name: 'Ceramic Vase', price: '$89', image: 'https://images.unsplash.com/photo-1581783342308-f792ca11df53?w=500&q=80' },
  { id: 4, name: 'Wooden Table', price: '$499', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500&q=80' },
];

export default function EcommerceDemo() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Mock Navigation */}
      <nav className="border-b px-6 py-4 flex justify-between items-center sticky top-0 bg-white z-10">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 md:hidden" />
          <span className="font-bold text-xl tracking-tighter">STORE.</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-black/60">New Arrivals</a>
          <a href="#" className="hover:text-black/60">Furniture</a>
          <a href="#" className="hover:text-black/60">Decor</a>
        </div>
        <div className="flex gap-4">
          <Search className="w-5 h-5" />
          <ShoppingCart className="w-5 h-5" />
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl font-bold mb-6 leading-tight">Elevate Your Living Space</h1>
            <p className="text-gray-600 mb-8 text-lg">Curated collection of premium furniture for the modern home.</p>
            <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Shop Now
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="aspect-square bg-gray-200 rounded-2xl relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?w=800&q=80" className="w-full h-full object-cover" alt="Hero" />
          </motion.div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-12">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                 <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={product.name} />
                 <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                   <ShoppingCart className="w-4 h-4" />
                 </button>
              </div>
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
