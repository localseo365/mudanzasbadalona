import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceArea: React.FC = () => {
  const areas = [
    'Badalona', 'Barcelona', 'Santa Coloma de Gramenet', 'Sant Adrià de Besòs',
    'Montgat', 'Tiana', 'Montcada i Reixac', 'Ripollet', 'Cerdanyola del Vallès',
    'L\'Hospitalet de Llobregat', 'El Masnou', 'Alella', 'Teià', 'Premià de Mar'
  ];

  return (
    <section id="area" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Área de Servicio de Mudanzas</h2>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          En MudanzasBadalona, nos enorgullecemos de ofrecer nuestros servicios de mudanza de alta calidad en Badalona y sus alrededores. Nuestra amplia cobertura geográfica nos permite atender a clientes en toda el área metropolitana de Barcelona, garantizando la misma excelencia y profesionalidad en cada localidad que servimos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Zonas que cubrimos:</h3>
            <ul className="grid grid-cols-2 gap-2">
              {areas.map((area, index) => (
                <li key={index} className="flex items-center">
                  <MapPin size={18} className="text-blue-600 mr-2" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600">
              Nuestro compromiso es proporcionar servicios de mudanza excepcionales en todas estas áreas y más allá. Si tu localidad no aparece en la lista, no dudes en contactarnos. Es probable que también podamos atenderte.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">¿Por qué elegir MudanzasBadalona para tu próxima mudanza?</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Conocimiento local: Nuestro equipo conoce perfectamente las calles, normativas y peculiaridades de Badalona y sus alrededores.</li>
              <li>Puntualidad: Nos adaptamos a tu horario y respetamos los tiempos acordados.</li>
              <li>Flexibilidad: Ofrecemos servicios a medida para mudanzas de cualquier tamaño y complejidad.</li>
              <li>Equipo profesional: Nuestro personal está altamente capacitado y comprometido con la excelencia en el servicio.</li>
              <li>Tecnología avanzada: Utilizamos herramientas y vehículos modernos para garantizar la eficiencia y seguridad de tu mudanza.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;