'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'E-commerce Premium',
    category: 'Desarrollo Web',
    description: 'Plataforma de comercio electrónico de alto rendimiento con pasarela de pagos, gestión de inventario en tiempo real y panel de administración.',
    tags: ['Next.js', 'Supabase', 'Stripe', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    link: '/portfolio/ecommerce',
    github: '#'
  },
  {
    title: 'Dashboard Corporativo',
    category: 'Aplicación Web',
    description: 'Sistema de gestión interna para empresa logística. Visualización de datos, reportes automáticos y gestión de usuarios.',
    tags: ['React', 'TypeScript', 'Recharts', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    link: '/portfolio/dashboard',
    github: '#'
  },
  {
    title: 'Inmobiliaria Deluxe',
    category: 'Sitio Web',
    description: 'Portal inmobiliario con búsqueda avanzada, mapas interactivos y tours virtuales 3D.',
    tags: ['Next.js', 'Mapbox', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    link: '/portfolio/real-estate',
    github: '#'
  },
  {
    title: 'Fintech App',
    category: 'Fintech',
    description: 'Aplicación web para gestión de finanzas personales, integración bancaria y análisis de gastos con IA.',
    tags: ['Next.js', 'OpenAI', 'Tailwind', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    link: '/portfolio/fintech',
    github: '#'
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen py-20">
      <div className="container-width">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestro Trabajo</h1>
          <p className="text-xl text-gray-400">
            Una selección de proyectos que demuestran nuestra pasión por la calidad y el detalle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors"
            >
              {/* Image Placeholder - In a real app use next/image with local assets */}
              <div className="aspect-video relative overflow-hidden bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                {/* Using a simple div as placeholder if image fails to load or for simplicity */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <span className="text-blue-400 text-sm font-medium mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <Link 
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Ver Proyecto
                  </Link>
                  <Link 
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" /> Código
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
