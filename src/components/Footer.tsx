import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 pt-12 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <span className="font-bold text-xl tracking-tight block mb-4">SBK Development</span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformamos ideas en experiencias digitales de alto impacto. Desarrollo web profesional a medida.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Desarrollo Web</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">E-commerce</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Aplicaciones Web</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Consultoría Técnica</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors">Portafolio</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contacto</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Sobre Nosotros</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SBK Development. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
