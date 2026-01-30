'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  Filter, 
  ChevronDown, 
  Heart, 
  X,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  Star
} from 'lucide-react';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Silla Minimalista Eames', category: 'Sillas', price: 249, rating: 4.8, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80', badge: 'Nuevo' },
  { id: 2, name: 'Lámpara de Pie Arco', category: 'Iluminación', price: 129, rating: 4.5, image: 'https://images.unsplash.com/photo-1507473888900-52e1ad1459ce?w=500&q=80' },
  { id: 3, name: 'Jarrón Cerámica Wabi-Sabi', category: 'Decoración', price: 89, rating: 4.9, image: 'https://images.unsplash.com/photo-1581783342308-f792ca11df53?w=500&q=80' },
  { id: 4, name: 'Mesa de Centro Nogal', category: 'Mesas', price: 499, rating: 4.7, image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500&q=80', badge: 'Oferta' },
  { id: 5, name: 'Sofá Modular Gris', category: 'Sofás', price: 899, rating: 4.6, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80' },
  { id: 6, name: 'Espejo Circular Dorado', category: 'Decoración', price: 159, rating: 4.4, image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&q=80' },
  { id: 7, name: 'Estantería Industrial', category: 'Almacenaje', price: 349, rating: 4.3, image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&q=80' },
  { id: 8, name: 'Maceta Colgante', category: 'Plantas', price: 39, rating: 4.8, image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145583?w=500&q=80' },
];

const categories = ['Todo', 'Sillas', 'Mesas', 'Iluminación', 'Decoración', 'Sofás'];

export default function EcommerceDemo() {
  const [activeCategory, setActiveCategory] = useState('Todo');
  const [cartCount, setCartCount] = useState(2);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts = activeCategory === 'Todo' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-black selection:text-white">
      
      {/* Top Banner */}
      <div className="bg-black text-white text-xs py-2 text-center font-medium tracking-wide">
        ENVÍO GRATIS EN PEDIDOS SUPERIORES A $500 — DEVOLUCIONES EN 30 DÍAS
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
            <a href="#" className="font-serif text-2xl font-bold tracking-tighter">LUSSO.</a>
            
            <div className="hidden lg:flex gap-8 text-sm font-medium ml-8">
              <a href="#" className="text-black border-b-2 border-black">Novedades</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">Muebles</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">Iluminación</a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">Accesorios</a>
              <a href="#" className="text-red-600 hover:text-red-700 transition-colors">Sale</a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
              <Search className="w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar productos..." 
                className="bg-transparent border-none outline-none text-sm ml-2 w-full placeholder:text-gray-400"
              />
            </div>
            <button className="hover:text-gray-600 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button className="relative hover:text-gray-600 transition-colors group">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[80vh] bg-gray-100 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=80" 
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl bg-white/90 backdrop-blur p-12 rounded-sm"
          >
            <span className="text-xs font-bold tracking-widest text-gray-500 mb-4 block uppercase">Nueva Colección 2024</span>
            <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6 leading-tight">Diseño que inspira tu vida.</h1>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">Descubre nuestra selección curada de muebles y decoración minimalista para crear espacios únicos.</p>
            <button className="bg-black text-white px-10 py-4 font-medium hover:bg-gray-800 transition-all flex items-center gap-2 group">
              Explorar Colección
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0 space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filtros
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                      activeCategory === cat 
                        ? 'bg-black text-white font-medium' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="font-medium mb-4">Rango de Precio</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" /> $0 - $100
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" /> $100 - $300
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" /> $300+
                </label>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="font-medium mb-4">Colores</h4>
              <div className="flex flex-wrap gap-2">
                {['bg-black', 'bg-white border', 'bg-gray-500', 'bg-amber-800', 'bg-blue-900'].map((color, i) => (
                  <button key={i} className={`w-8 h-8 rounded-full ${color} shadow-sm hover:scale-110 transition-transform`} />
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-500">{filteredProducts.length} Productos encontrados</p>
              <div className="flex items-center gap-2 text-sm font-medium">
                Ordenar por:
                <button className="flex items-center gap-1 hover:text-black text-gray-600">
                  Relevancia <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={product.id}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden relative">
                      {product.badge && (
                        <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider z-10">
                          {product.badge}
                        </span>
                      )}
                      <img 
                        src={product.image} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        alt={product.name} 
                      />
                      <div className="absolute inset-x-4 bottom-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <button 
                          onClick={() => setCartCount(c => c + 1)}
                          className="flex-1 bg-white text-black py-3 text-sm font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
                        >
                          Añadir al Carrito
                        </button>
                        <button className="bg-white p-3 text-black hover:bg-black hover:text-white transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                        <h3 className="font-medium text-lg mb-1 group-hover:underline">{product.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-black text-black" />
                          <span className="text-xs font-medium">{product.rating}</span>
                        </div>
                      </div>
                      <span className="font-bold text-lg">${product.price}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            <div className="mt-16 text-center">
              <button className="border border-black px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                Cargar Más Productos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-900 text-white py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Únete al club LUSSO</h2>
          <p className="text-gray-400 mb-8">Suscríbete para recibir ofertas exclusivas, acceso anticipado a nuevas colecciones y consejos de diseño.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors"
            />
            <button className="bg-white text-black px-8 font-bold uppercase text-sm tracking-wider hover:bg-gray-200 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">LUSSO.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefiniendo el lujo moderno a través del diseño minimalista y la artesanía excepcional.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Comprar</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Novedades</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Muebles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Iluminación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accesorios</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Ayuda</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Envíos y Devoluciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Lusso Store. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}