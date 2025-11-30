import { ServerIcon, AlertTriangleIcon, CheckCircleIcon, DatabaseIcon, NetworkIcon, FileCheckIcon } from './Icons';
import { useEffect, useState, useRef } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const services = [
    {
      icon: ServerIcon,
      title: 'Seguridad de Infraestructura',
      description: 'Protección integral de servidores y sistemas críticos',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: AlertTriangleIcon,
      title: 'Detección de Amenazas',
      description: 'Identificación proactiva de vulnerabilidades y ataques',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: CheckCircleIcon,
      title: 'Auditorías de Seguridad',
      description: 'Evaluación exhaustiva de tu postura de seguridad',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: DatabaseIcon,
      title: 'Protección de Datos',
      description: 'Salvaguarda de información sensible y cumplimiento normativo',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: NetworkIcon,
      title: 'Seguridad de Red',
      description: 'Firewall avanzado y protección perimetral',
      color: 'from-blue-500 to-sky-500',
    },
    {
      icon: FileCheckIcon,
      title: 'Respuesta a Incidentes',
      description: 'Gestión rápida y efectiva de brechas de seguridad',
      color: 'from-emerald-500 to-green-500',
    },
  ];

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones completas de ciberseguridad adaptadas a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const marginClass = index % 3 === 0 ? 'mt-0' : index % 3 === 1 ? 'mt-6' : 'mt-12';
              return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 ${marginClass} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => {
                  setClickedIndex(index);
                  window.setTimeout(() => setClickedIndex(null), 900);
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white" effect="lightning" ariaLabel={service.title} trigger={clickedIndex === index} triggerOn="both" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="absolute -top-2 -right-2 w-16 h-16 bg-emerald-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
