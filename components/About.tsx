import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-kadosh-dark relative">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-white relative inline-block">
          Nuestro Ministerio
          <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></span>
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed font-light mt-12">
          <p>
            En el Ministerio <strong className="text-gold-500">Kadosh</strong>, creemos que la adoración es más que música; es un estilo de vida que busca la presencia de Dios. Nacidos en el corazón de la Catedral de la Fe, nuestra misión es crear una atmósfera donde el Espíritu Santo pueda moverse con libertad, transformando vidas a través de la alabanza genuina.
          </p>
          <p>
            Buscamos la excelencia no para nuestra propia gloria, sino para honrar a Aquel que nos dio los talentos. Somos una familia de adoradores apasionados por llevar el mensaje de salvación a través de cada nota y cada canción.
          </p>
        </div>
      </div>
    </section>
  );
};