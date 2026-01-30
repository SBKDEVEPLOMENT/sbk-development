'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    alert('Mensaje enviado (Simulación). En producción esto conectaría con tu backend.');
  };

  const whatsappNumber = "1234567890"; // Replace with real number
  const whatsappMessage = "Hola SBK Development, estoy interesado en sus servicios.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen py-20">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Hablemos de tu <br />
              <span className="text-blue-500">Próximo Proyecto</span>
            </motion.h1>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Estamos listos para llevar tu negocio al siguiente nivel. Contáctanos y recibe una consultoría gratuita.
            </p>

            <div className="space-y-8">
              <ContactItem 
                icon={<MessageSquare className="w-6 h-6 text-green-500" />}
                title="WhatsApp Directo"
                content="Chat inmediato con un experto"
                link={whatsappLink}
                isLink
              />
              <ContactItem 
                icon={<Mail className="w-6 h-6 text-blue-500" />}
                title="Email"
                content="contacto@sbkdevelopment.com"
                link="mailto:contacto@sbkdevelopment.com"
                isLink
              />
              <ContactItem 
                icon={<MapPin className="w-6 h-6 text-purple-500" />}
                title="Ubicación"
                content="Remote / Worldwide"
              />
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Servicio de interés</label>
                <select className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                  <option>Desarrollo Web</option>
                  <option>E-commerce</option>
                  <option>Aplicación Web</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {loading ? 'Enviando...' : (
                  <>
                    Enviar Mensaje <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, content, link, isLink }: { icon: React.ReactNode, title: string, content: string, link?: string, isLink?: boolean }) {
  const Wrapper = isLink && link ? Link : 'div';
  const props = isLink && link ? { href: link, className: "flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer" } : { className: "flex items-start gap-4 p-4" };

  return (
    // @ts-ignore
    <Wrapper {...props}>
      <div className="bg-white/10 p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{content}</p>
      </div>
    </Wrapper>
  );
}
