import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, MessageCircle, Heart, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050914] border-t border-white/5 pt-20 pb-10">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              SBK<span className="text-blue-500">.</span>Dev
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Transformamos ideas complejas en experiencias digitales de alto impacto. 
              Calidad, velocidad y escalabilidad en cada línea de código.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-6">Servicios</h3>
            <ul className="space-y-4 text-gray-400">
              <li><FooterLink href="#">Desarrollo Web Premium</FooterLink></li>
              <li><FooterLink href="#">E-commerce Scalable</FooterLink></li>
              <li><FooterLink href="#">Aplicaciones SaaS</FooterLink></li>
              <li><FooterLink href="#">Consultoría Técnica</FooterLink></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Compañía</h3>
            <ul className="space-y-4 text-gray-400">
              <li><FooterLink href="/portfolio">Portafolio</FooterLink></li>
              <li><FooterLink href="/about">Sobre Nosotros</FooterLink></li>
              <li><FooterLink href="/careers">Carreras</FooterLink></li>
              <li><FooterLink href="/blog">Blog Tech</FooterLink></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Contáctanos</h3>
            <p className="text-gray-400 mb-6">
              ¿Tienes un proyecto en mente? Hablemos hoy mismo.
            </p>
            <div className="space-y-4">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-600/10 hover:bg-green-600/20 text-green-500 px-4 py-3 rounded-xl border border-green-600/20 transition-all group"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-bold">WhatsApp Directo</span>
                <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="mailto:hola@sbk.dev" 
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-xl border border-white/10 transition-all group"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">hola@sbk.dev</span>
                <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SBK Development. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
            <span className="flex items-center gap-1 text-gray-600">
              Hecho con <Heart className="w-3 h-3 text-red-500 fill-red-500" /> en 2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
      <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      {children}
    </Link>
  );
}
