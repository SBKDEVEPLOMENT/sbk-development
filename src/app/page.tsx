'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Code, Layout, Smartphone, Zap, Globe, Shield, Database, Cpu } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[#0B1120]">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay"></div>
          <div className="absolute top-[-50%] left-[-20%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/20 blur-[120px] animate-pulse-slow delay-1000" />
        </div>
        
        <motion.div 
          style={{ opacity, scale }}
          className="container-width relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
              🚀 Elevando Estándares Digitales
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-tight">
              Construimos el <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">
                Futuro Digital
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transformamos ideas complejas en experiencias web de alto impacto. 
              Tecnología de vanguardia para marcas que exigen excelencia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/contact" 
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Iniciar Proyecto <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link 
                href="/portfolio" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium rounded-full transition-all backdrop-blur-sm hover:border-white/20"
              >
                Explorar Portafolio
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Descubre Más</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="flex overflow-hidden group">
          <div className="flex space-x-16 animate-loop-scroll group-hover:paused whitespace-nowrap">
            {['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'Node.js', 'PostgreSQL', 'Vercel', 'AWS'].map((tech, i) => (
              <span key={i} className="text-xl md:text-2xl font-bold text-gray-600 uppercase tracking-wider hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
            {['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'Node.js', 'PostgreSQL', 'Vercel', 'AWS'].map((tech, i) => (
              <span key={`duplicate-${i}`} className="text-xl md:text-2xl font-bold text-gray-600 uppercase tracking-wider hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Expertise</h2>
              <p className="text-xl text-gray-400">
                Más que código, entregamos soluciones estratégicas que impulsan el crecimiento de tu negocio.
              </p>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-6 md:mt-0">
              Ver todos los servicios <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Layout className="w-10 h-10 text-blue-400" />}
              title="Diseño UI/UX Premium"
              description="Interfaces cautivadoras que fusionan estética y funcionalidad. Diseñamos experiencias memorables centradas en el usuario."
            />
            <ServiceCard 
              icon={<Code className="w-10 h-10 text-purple-400" />}
              title="Desarrollo Full Stack"
              description="Arquitecturas robustas y escalables. Desde SPAs interactivas hasta complejos sistemas SaaS empresariales."
            />
            <ServiceCard 
              icon={<Smartphone className="w-10 h-10 text-green-400" />}
              title="Optimización Móvil"
              description="Experiencias fluidas en cualquier dispositivo. PWA (Progressive Web Apps) y diseño responsive de primer nivel."
            />
            <ServiceCard 
              icon={<Database className="w-10 h-10 text-yellow-400" />}
              title="Backend & API"
              description="Integraciones seguras, bases de datos optimizadas y APIs RESTful/GraphQL de alto rendimiento."
            />
            <ServiceCard 
              icon={<Globe className="w-10 h-10 text-pink-400" />}
              title="SEO Técnico"
              description="Estructura optimizada para motores de búsqueda. Velocidad, semántica y accesibilidad para liderar rankings."
            />
            <ServiceCard 
              icon={<Shield className="w-10 h-10 text-cyan-400" />}
              title="Seguridad Web"
              description="Implementación de mejores prácticas de seguridad, autenticación robusta y protección de datos."
            />
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container-width">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proyectos Destacados</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Una muestra de nuestra capacidad para crear productos digitales de clase mundial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProjectPreview 
              title="LUSSO E-commerce"
              category="Comercio Digital"
              image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
              link="/portfolio/ecommerce"
            />
            <ProjectPreview 
              title="MediCare SaaS"
              category="Salud & Tecnología"
              image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
              link="/portfolio/medical"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 rounded-full transition-all text-white font-medium"
            >
              Ver Portafolio Completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container-width">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-4xl md:text-5xl font-bold mb-8">Nuestro Proceso</h2>
               <div className="space-y-12">
                 <ProcessStep 
                   number="01" 
                   title="Descubrimiento" 
                   description="Analizamos tus objetivos, competencia y audiencia para definir una estrategia ganadora."
                 />
                 <ProcessStep 
                   number="02" 
                   title="Diseño & Prototipado" 
                   description="Creamos wireframes y diseños visuales de alta fidelidad para validar la experiencia de usuario."
                 />
                 <ProcessStep 
                   number="03" 
                   title="Desarrollo Ágil" 
                   description="Codificamos con las mejores prácticas, sprints iterativos y feedback constante."
                 />
                 <ProcessStep 
                   number="04" 
                   title="Lanzamiento & Escala" 
                   description="Despliegue seguro, optimización final y soporte para el crecimiento continuo."
                 />
               </div>
             </div>
             <div className="relative">
               <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 p-8 backdrop-blur-sm relative">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                  {/* Abstract Visuals */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/10 rounded-full animate-spin-slow opacity-30"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-blue-500/30 rounded-full animate-reverse-spin opacity-50"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <Zap className="w-16 h-16 text-white mx-auto mb-4" />
                    <p className="text-2xl font-bold text-white">High Performance</p>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="container-width relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">¿Listo para transformar tu visión?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            No dejes tu proyecto en manos de cualquiera. Hablemos hoy y llevemos tu negocio al siguiente nivel.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl shadow-white/10"
          >
            Contáctanos por WhatsApp <Smartphone className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-blue-500/30 transition-all group hover:bg-[#1E293B]"
    >
      <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-blue-500/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function ProjectPreview({ title, category, image, link }: { title: string, category: string, image: string, link: string }) {
  return (
    <Link href={link} className="group relative block aspect-[16/9] rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
      <Image 
        src={image} 
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/90 to-transparent">
        <span className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-2 block">{category}</span>
        <h3 className="text-3xl font-bold text-white flex items-center gap-4">
          {title} <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </h3>
      </div>
    </Link>
  );
}

function ProcessStep({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="flex gap-6 group">
      <span className="text-5xl font-bold text-white/10 group-hover:text-blue-500/50 transition-colors font-serif">
        {number}
      </span>
      <div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
