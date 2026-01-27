import React from 'react';

export const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-kadosh-dark border-t border-neutral-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Próximos Eventos
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Aquí puedes ver nuestras próximas presentaciones, ensayos y eventos especiales.
          </p>
        </div>

        {/* Calendar Container */}
        <div className="glass-card p-4 rounded-xl shadow-2xl overflow-hidden border border-neutral-800">
          <div className="relative w-full pb-[60%] md:pb-[50%] lg:pb-[40%] bg-neutral-900 rounded-lg flex items-center justify-center">
             {/* 
                In a real scenario, you would replace the src below with your actual Google Calendar Embed URL.
                Example: src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America%2FNew_York"
             */}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <iframe 
                  src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York" 
                  style={{border: 0}} 
                  width="100%" 
                  height="100%" 
                  className="absolute inset-0 rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
                  frameBorder="0" 
                  scrolling="no"
                  title="Google Calendar"
                ></iframe>
                
                {/* Fallback text if iframe doesn't load or is just a placeholder visually */}
                <div className="pointer-events-none z-0 hidden">
                    <p className="text-gray-500 mb-2 font-mono text-sm">
                        &lt;!-- Inserta aquí el código para embeber tu Google Calendar --&gt;
                    </p>
                </div>
             </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
            <button className="text-gold-500 border-b border-gold-500 pb-1 hover:text-white hover:border-white transition-colors">
                Suscribirse al calendario
            </button>
        </div>
      </div>
    </section>
  );
};