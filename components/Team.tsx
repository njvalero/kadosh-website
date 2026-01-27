import React from 'react';
import { TeamMember } from '../types';

const MEMBERS: TeamMember[] = [
  { id: 1, name: 'Javier Morales', role: 'Líder de Alabanza', image: 'https://picsum.photos/id/1005/400/400' },
  { id: 2, name: 'Ana Lucía Pérez', role: 'Voz Principal', image: 'https://picsum.photos/id/338/400/400' },
  { id: 3, name: 'David Torres', role: 'Guitarra Eléctrica', image: 'https://picsum.photos/id/342/400/400' },
  { id: 4, name: 'Sofía Méndez', role: 'Teclados', image: 'https://picsum.photos/id/399/400/400' },
  { id: 5, name: 'Carlos Ruíz', role: 'Batería', image: 'https://picsum.photos/id/452/400/400' },
  { id: 6, name: 'Miguel Ángel', role: 'Ingeniero de Sonido', image: 'https://picsum.photos/id/551/400/400' },
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-kadosh-gray relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Conoce al Equipo
          </h2>
          <p className="text-gray-400 font-light">Las manos y voces detrás de la adoración</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEMBERS.map((member) => (
            <div 
              key={member.id} 
              className="group relative overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 transition-all duration-300 hover:border-gold-500/50"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1">
                  {member.role}
                </p>
                <h3 className="text-2xl font-heading font-bold text-white">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};