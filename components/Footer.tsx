import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-neutral-900">
      <div className="container mx-auto px-6 text-center">
        
        <h3 className="text-2xl font-heading font-bold text-white mb-2">Kadosh</h3>
        <p className="text-gray-500 mb-8 text-sm">Catedral de la Fe</p>

        <div className="flex justify-center space-x-8 mb-8">
          {/* Facebook Icon Placeholder */}
          <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-neutral-800 transition-all cursor-pointer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
          </div>
          
          {/* Instagram Icon Placeholder */}
          <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-neutral-800 transition-all cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path><rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="2"></rect></svg>
          </div>

          {/* YouTube Icon Placeholder */}
          <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:bg-neutral-800 transition-all cursor-pointer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </div>
        </div>

        <div className="mb-8">
            <p className="text-gray-400">Contacto: <a href="mailto:contacto@kadosh-catedral.org" className="text-gold-500 hover:underline">contacto@kadosh-catedral.org</a></p>
        </div>

        <div className="pt-8 border-t border-neutral-900">
          <p className="text-neutral-600 text-sm">
            © 2026 Ministerio Kadosh. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};