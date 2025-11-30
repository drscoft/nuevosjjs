import { ShieldIcon } from './Icons';
import { useState, useEffect } from 'react';
import { useEffectContext } from '../context/EffectContext';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { effectsEnabled, setEffectsEnabled } = useEffectContext();

  function toggleEffects() {
    setEffectsEnabled(!effectsEnabled);
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-2xl border-b border-emerald-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-lg group-hover:bg-emerald-400/30 transition-all duration-300"></div>
              <ShieldIcon className="h-8 w-8 text-emerald-400 transition-transform group-hover:rotate-12 duration-300 relative z-10" effect="lightning" ariaLabel="Logo" triggerOn="both" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">SecureShield</span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="#inicio" className="px-4 py-2 text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-200">
              Inicio
            </a>
            <a href="#sobre-nosotros" className="px-4 py-2 text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-200">
              Sobre nosotros
            </a>
            <a href="#servicios" className="px-4 py-2 text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-200">
              Servicios
            </a>
            <a href="#equipo" className="px-4 py-2 text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-200">
              Equipo
            </a>
            <a href="#precios" className="px-4 py-2 text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-200">
              Precios
            </a>
            <a href="#contacto" className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 ml-2">
              Contacto
            </a>
            <button
              aria-pressed={effectsEnabled}
              onClick={toggleEffects}
              className={`ml-3 px-3 py-2 rounded-full text-sm flex items-center space-x-2 transition-colors duration-200 ${
                effectsEnabled ? 'bg-emerald-500 text-white' : 'bg-gray-800 text-gray-300'
              }`}
            >
              <span className="text-xs">Efectos</span>
              <span className="text-lg font-bold">{effectsEnabled ? '⚡' : '🚫'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
