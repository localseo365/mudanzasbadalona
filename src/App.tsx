import React from 'react';
import { Menu, X, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceArea from './components/ServiceArea';
import Testimonials from './components/Testimonials';
import Team from './components/Team';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HelmetProvider>
      <SEO />
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">MudanzasBadalona</div>
            <div className="hidden md:flex space-x-4">
              <a href="#inicio" className="hover:text-blue-200">Inicio</a>
              <a href="#servicios" className="hover:text-blue-200">Servicios</a>
              <a href="#area" className="hover:text-blue-200">Área de Servicio</a>
              <a href="#testimonios" className="hover:text-blue-200">Testimonios</a>
              <a href="#equipo" className="hover:text-blue-200">Nuestro Equipo</a>
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-500 text-white">
            <a href="#inicio" className="block py-2 px-4 hover:bg-blue-600">Inicio</a>
            <a href="#servicios" className="block py-2 px-4 hover:bg-blue-600">Servicios</a>
            <a href="#area" className="block py-2 px-4 hover:bg-blue-600">Área de Servicio</a>
            <a href="#testimonios" className="block py-2 px-4 hover:bg-blue-600">Testimonios</a>
            <a href="#equipo" className="block py-2 px-4 hover:bg-blue-600">Nuestro Equipo</a>
          </div>
        )}

        {/* Main Content */}
        <main>
          <Hero />
          <Services />
          <ServiceArea />
          <Testimonials />
          <Team />
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">MudanzasBadalona</h3>
                <p>Tu compañía de confianza para mudanzas en Badalona y alrededores.</p>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Contacto</h3>
                <a href="https://wa.link/my49rg" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2 hover:text-blue-400">
                  <Phone size={18} className="mr-2" /> 690 22 09 44
                </a>
                <p className="flex items-center"><Clock size={18} className="mr-2" /> Lun-Vie: 8:00-20:00, Sáb: 9:00-14:00</p>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-xl font-bold mb-2">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
                  <a href="#" className="hover:text-blue-400"><Instagram size={24} /></a>
                  <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2024 MudanzasBadalona. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default App;