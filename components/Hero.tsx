import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/453/1920/1080" 
          alt="Worship Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kadosh-dark/70 via-kadosh-dark/60 to-kadosh-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter mb-4 animate-fade-in-up">
          KADOSH
        </h1>
        <div className="h-1 w-24 bg-gold-500 mx-auto mb-8 rounded-full"></div>
        <p className="font-light text-xl md:text-2xl lg:text-3xl text-gray-300 tracking-wide uppercase">
          Ministerio de Adoración y Alabanza <br className="hidden md:block"/>
          <span className="font-semibold text-white">Catedral de la Fe</span>
        </p>
        
        <div className="mt-12">
          <a 
            href="#events" 
            className="px-8 py-3 border border-gold-500 text-gold-500 font-heading font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-all duration-300"
          >
            Ver Eventos
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};