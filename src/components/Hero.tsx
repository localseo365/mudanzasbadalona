import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Mudanzas sin estrés en Badalona y alrededores</h1>
        <p className="text-xl md:text-2xl mb-8">
          Expertos en mudanzas residenciales y comerciales. Hacemos que tu mudanza sea una experiencia fácil, segura y sin complicaciones.
          Con más de 15 años de experiencia, somos la elección confiable para mudanzas en Badalona, Barcelona y toda el área metropolitana.
        </p>
        <a
          href="https://wa.link/my49rg"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
        >
          Solicita presupuesto gratuito
          <ArrowRight className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Hero;