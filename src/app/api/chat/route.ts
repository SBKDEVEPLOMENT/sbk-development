import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const chat = model.startChat({
      history: history || [],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    // System instruction context
    const context = `
      Actúa como el asistente virtual experto de SBK Development, una agencia de desarrollo web de alto nivel.
      
      Información sobre SBK Development:
      - Servicios: Diseño Web a Medida, Desarrollo Full Stack (Next.js, React, Supabase), Aplicaciones Móviles (PWA), E-commerce, SEO Técnico.
      - Enfoque: Calidad profesional, alto rendimiento, código limpio, sin plantillas baratas.
      - Contacto: Preferiblemente vía WhatsApp o formulario de contacto en la web.
      - Tono: Profesional, tecnológico, servicial y persuasivo.
      
      Tu objetivo es ayudar a los visitantes a entender nuestros servicios, resolver dudas técnicas básicas y animarles a iniciar un proyecto con nosotros.
      Si te preguntan precios, diles que cada proyecto es único y les invitamos a contactarnos para un presupuesto sin compromiso.
      
      Responde de manera concisa y elegante.
    `;

    const result = await chat.sendMessage(`${context}\n\nUser: ${message}`);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
}
