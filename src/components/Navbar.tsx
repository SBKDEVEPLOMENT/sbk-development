'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/#servicios' },
  { name: 'Portafolio', href: '/portfolio' },
  { name: 'Contacto', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-nav w-full transition-all duration-300">
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-500 transition-colors">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">SBK Development</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm"
              >
                Área Clientes
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Área Clientes
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
