import { useEffect, useState } from 'react';
import { ShieldIcon } from './Icons';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNiwgMTg1LCAxMjksIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div
          className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        >
          <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
            <span className="text-emerald-400 text-sm font-semibold">Seguridad Digital de Vanguardia</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Protegiendo tu
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
              Ciberespacio
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            Soluciones integrales de ciberseguridad para proteger tus datos y sistemas contra amenazas digitales avanzadas.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105">
              <span className="relative z-10">Consulta Gratuita</span>
            </button>
            <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/10 rounded-lg font-semibold hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300">
              Ver Servicios
            </button>
          </div>
        </div>

        <div
          className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-emerald-500/20">
              <img
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipo de ciberseguridad"
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-emerald-500/30">
                    <ShieldIcon className="h-6 w-6 text-emerald-400" effect="lightning" ariaLabel="Shield" triggerOn="both" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Protección 24/7</p>
                    <p className="text-gray-400 text-sm">Monitoreo continuo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
