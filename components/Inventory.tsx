import React from 'react';
import { InventoryItem } from '../types';

const EQUIPMENT: InventoryItem[] = [
  { id: 1, name: 'Guitarra Eléctrica Fender Stratocaster', category: 'Instrumentos', quantity: 2 },
  { id: 2, name: 'Bajo Ibanez 5 Cuerdas SR505', category: 'Instrumentos', quantity: 1 },
  { id: 3, name: 'Batería DW Collector\'s Series', category: 'Percusión', quantity: 1 },
  { id: 4, name: 'Teclado Nord Stage 3', category: 'Instrumentos', quantity: 1 },
  { id: 5, name: 'Consola de Sonido Behringer X32', category: 'Audio', quantity: 1 },
  { id: 6, name: 'Micrófonos Shure SM58', category: 'Audio', quantity: 6 },
  { id: 7, name: 'Monitores In-Ear Shure SE215', category: 'Audio', quantity: 8 },
  { id: 8, name: 'Amplificador Guitarra Vox AC30', category: 'Amplificación', quantity: 1 },
];

export const Inventory: React.FC = () => {
  return (
    <section id="inventory" className="py-24 bg-neutral-900 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-12 text-center">
          Nuestro Equipo Técnico
        </h2>

        <div className="overflow-x-auto rounded-lg border border-neutral-800 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-950 text-gold-500 uppercase text-sm tracking-wider">
                <th className="p-6 font-bold border-b border-neutral-800">Equipo</th>
                <th className="p-6 font-bold border-b border-neutral-800 text-right">Cantidad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {EQUIPMENT.map((item) => (
                <tr 
                  key={item.id} 
                  className="bg-kadosh-dark/50 hover:bg-neutral-800 transition-colors duration-200"
                >
                  <td className="p-6 text-gray-300 font-light">
                    <span className="block text-white font-medium">{item.name}</span>
                    <span className="text-xs text-neutral-500 uppercase tracking-wide">{item.category}</span>
                  </td>
                  <td className="p-6 text-right text-gold-500 font-bold font-mono text-lg">
                    {item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};