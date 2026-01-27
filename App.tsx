import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { Events } from './components/Events';
import { Inventory } from './components/Inventory';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased bg-kadosh-dark text-gray-100 selection:bg-gold-500 selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Team />
        <Events />
        <Inventory />
      </main>

      <Footer />
    </div>
  );
};

export default App;