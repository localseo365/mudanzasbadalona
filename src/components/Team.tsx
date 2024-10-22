import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Juan Pérez',
      role: 'Jefe de Mudanzas',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      name: 'Ana Gómez',
      role: 'Especialista en Embalaje',
      photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      name: 'Miguel Sánchez',
      role: 'Conductor',
      photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      name: 'Elena Martín',
      role: 'Coordinadora de Logística',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    }
  ];

  return (
    <section id="equipo" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.photo} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;