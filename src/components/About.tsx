import { ShieldIcon, LockIcon, EyeIcon } from './Icons';
import { useEffect, useState, useRef } from 'react';

export default function About() {
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

  const features = [
    {
      icon: ShieldIcon,
      title: 'Protección Total',
      description: 'Sistemas de seguridad avanzados que protegen tu infraestructura 24/7',
    },
    {
      icon: LockIcon,
      title: 'Encriptación Avanzada',
      description: 'Tecnología de cifrado de última generación para tus datos sensibles',
    },
    {
      icon: EyeIcon,
      title: 'Monitoreo Continuo',
      description: 'Vigilancia constante para detectar y neutralizar amenazas en tiempo real',
    },
  ];

  return (
    <section
      id="sobre-nosotros"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const margins = index === 0 ? 'mt-0' : index === 1 ? 'mt-8' : 'mt-16';
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2 ${margins} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-emerald-500/20">
                    <Icon className="h-8 w-8 text-white" effect="spark" ariaLabel={feature.title} triggerOn="hover" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
