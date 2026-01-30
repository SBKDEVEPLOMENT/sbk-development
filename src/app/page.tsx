'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code, Layout, Smartphone, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
        <div className="container-width relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6"
            >
              Desarrollo Web de <br/>
              <span className="text-blue-500">Alto Nivel</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
            >
              En SBK Development creamos soluciones digitales robustas, rápidas y escalables. 
              Tu socio tecnológico para el éxito online.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                Iniciar Proyecto <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/portfolio" 
                className="w-full sm:w-auto px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/10 font-medium rounded-full transition-all"
              >
                Ver Portafolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/5 border-y border-white/5" id="servicios">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ofrecemos un abanico completo de servicios de desarrollo para cubrir todas tus necesidades digitales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Layout className="w-8 h-8 text-blue-400" />}
              title="Diseño Web a Medida"
              description="Sitios web únicos diseñados para captar la esencia de tu marca y convertir visitantes en clientes."
            />
            <ServiceCard 
              icon={<Code className="w-8 h-8 text-purple-400" />}
              title="Desarrollo Full Stack"
              description="Aplicaciones web complejas con tecnologías modernas como Next.js, React y Supabase."
            />
            <ServiceCard 
              icon={<Smartphone className="w-8 h-8 text-green-400" />}
              title="Responsive & Mobile First"
              description="Tu sitio se verá perfecto en cualquier dispositivo, desde móviles hasta pantallas 4K."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Por qué elegir SBK Development</h2>
              <div className="space-y-6">
                <FeatureItem 
                  title="Calidad Profesional" 
                  description="Código limpio, mantenible y escalable. No usamos plantillas baratas, construimos calidad."
                />
                <FeatureItem 
                  title="Velocidad y Rendimiento" 
                  description="Optimizamos cada línea de código para asegurar tiempos de carga ultrarrápidos (Core Web Vitals)."
                />
                <FeatureItem 
                  title="Soporte Continuo" 
                  description="No te dejamos solo después del lanzamiento. Ofrecemos mantenimiento y actualizaciones."
                />
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 p-8 flex items-center justify-center">
              {/* Abstract Visual Representation */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                 <div className="bg-blue-500/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                    <Zap className="w-10 h-10 text-blue-400 mb-2" />
                    <div className="h-2 w-16 bg-blue-400/50 rounded mb-1"></div>
                    <div className="h-2 w-10 bg-blue-400/30 rounded"></div>
                 </div>
                 <div className="bg-purple-500/20 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm mt-8">
                    <Code className="w-10 h-10 text-purple-400 mb-2" />
                    <div className="h-2 w-16 bg-purple-400/50 rounded mb-1"></div>
                    <div className="h-2 w-10 bg-purple-400/30 rounded"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para empezar?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Cuéntanos tu idea y te ayudaremos a hacerla realidad. Presupuesto sin compromiso.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            Contáctanos por WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}

function FeatureItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">
        <CheckCircle className="w-6 h-6 text-blue-500" />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
