import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'María García',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      rating: 5,
      text: 'Excelente servicio de mudanza. El equipo de MudanzasBadalona fue increíblemente profesional y cuidadoso con todos nuestros muebles y objetos personales. Llegaron puntualmente, trabajaron eficientemente y mantuvieron una actitud positiva durante todo el proceso. Su atención al detalle y disposición para resolver cualquier problema que surgiera fue impresionante. Definitivamente los recomiendo para cualquier tipo de mudanza en Badalona o alrededores.'
    },
    {
      name: 'Carlos Rodríguez',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      rating: 5,
      text: 'Mi experiencia con MudanzasBadalona fue excepcional. Desde la primera llamada para solicitar un presupuesto hasta el último mueble colocado en mi nueva oficina, todo el proceso fue fluido y sin complicaciones. El equipo fue muy amable, eficiente y resolvió todas mis dudas. Aprecié especialmente su flexibilidad cuando tuvimos que hacer algunos cambios de última hora. El precio fue justo por un servicio de alta calidad. Sin duda, volveré a contar con ellos para futuras mudanzas.'
    },
    {
      name: 'Laura Martínez',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      rating: 4,
      text: 'Muy satisfecha con el servicio de MudanzasBadalona. El equipo llegó puntual y trabajó duro durante toda la jornada. Fueron muy cuidadosos con nuestras pertenencias, especialmente con algunos muebles antiguos de valor sentimental. El proceso de embalaje fue meticuloso y todo llegó en perfecto estado a nuestro nuevo hogar. Hubo un pequeño retraso en la entrega debido al tráfico, pero nos mantuvieron informados en todo momento. En general, una experiencia muy positiva y un servicio que recomendaría.'
    }
  ];

  return (
    <section id="testimonios" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes sobre nuestras mudanzas</h2>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          En MudanzasBadalona, nos enorgullece ofrecer un servicio excepcional en cada mudanza. Pero no tienes que confiar solo en nuestra palabra. Lee lo que nuestros clientes satisfechos tienen que decir sobre su experiencia con nosotros.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.photo} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold">
            Estos son solo algunos ejemplos de los cientos de clientes satisfechos que han confiado en MudanzasBadalona para sus mudanzas en Badalona y alrededores. Nos esforzamos por mantener este alto nivel de satisfacción en cada proyecto que emprendemos.
          </p>
          <a
            href="https://wa.link/my49rg"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Solicita tu presupuesto y únete a nuestros clientes satisfechos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;