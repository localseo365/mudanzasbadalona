import React from 'react';
import { Home, Building, Package, Truck, Shield, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Mudanzas Residenciales',
      description: 'Trasladamos tus pertenencias con cuidado y eficiencia a tu nuevo hogar. Nuestro equipo de profesionales se encarga de cada detalle, desde el embalaje hasta la colocación de muebles en tu nueva residencia. Utilizamos materiales de alta calidad y técnicas avanzadas para garantizar la seguridad de tus objetos más preciados durante todo el proceso de mudanza.',
      icon: <Home size={48} />,
      image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Mudanzas de Oficinas',
      description: 'Minimizamos el tiempo de inactividad de tu negocio con nuestras mudanzas comerciales. Entendemos la importancia de mantener tu empresa en funcionamiento, por lo que planificamos meticulosamente cada paso de la mudanza. Nos ocupamos de trasladar equipos informáticos, archivos, mobiliario de oficina y más, asegurando una transición suave y rápida a tu nuevo espacio de trabajo.',
      icon: <Building size={48} />,
      image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Servicios de Embalaje',
      description: 'Ofrecemos embalaje profesional para garantizar la seguridad de tus objetos valiosos. Nuestro equipo utiliza materiales de primera calidad y técnicas especializadas para proteger tus pertenencias durante el transporte. Desde objetos frágiles hasta muebles voluminosos, nos aseguramos de que todo llegue a su destino en perfectas condiciones.',
      icon: <Package size={48} />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Transporte Especializado',
      description: 'Contamos con una flota de vehículos modernos y equipados para todo tipo de mudanzas. Desde furgonetas para traslados pequeños hasta camiones de gran capacidad para mudanzas completas, tenemos el vehículo adecuado para cada necesidad. Todos nuestros vehículos están equipados con sistemas de seguimiento GPS y medidas de seguridad avanzadas.',
      icon: <Truck size={48} />,
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Seguro de Mudanza',
      description: 'Tu tranquilidad es nuestra prioridad. Ofrecemos seguros de mudanza completos para proteger tus pertenencias durante todo el proceso. Nuestras pólizas cubren daños accidentales, pérdidas y otros imprevistos, brindándote la paz mental que necesitas durante tu mudanza.',
      icon: <Shield size={48} />,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Servicios de Almacenaje',
      description: 'Si necesitas almacenar tus pertenencias durante la mudanza, ofrecemos soluciones de almacenaje seguras y flexibles. Nuestras instalaciones están vigiladas las 24 horas y cuentan con control de clima para proteger tus objetos. Disponemos de opciones de almacenaje a corto y largo plazo para adaptarnos a tus necesidades.',
      icon: <Clock size={48} />,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios de Mudanza en Badalona</h2>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          En MudanzasBadalona, nos enorgullecemos de ofrecer una gama completa de servicios de mudanza diseñados para satisfacer todas tus necesidades. Con años de experiencia en el sector, hemos perfeccionado nuestros procesos para garantizar mudanzas eficientes, seguras y sin estrés para nuestros clientes en Badalona y sus alrededores.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;