import { useEffect, useState, useRef } from 'react';
import { AwardIcon, BriefcaseIcon } from './Icons';

export default function Team() {
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

  const team = [
    {
      name: 'Carlos Mendez',
      role: 'Especialista en Seguridad Informática',
      image: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: 'Penetration Testing',
    },
    {
      name: 'María González',
      role: 'Ingeniera de Seguridad de Información',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: 'Arquitectura de Seguridad',
    },
    {
      name: 'Roberto Silva',
      role: 'Analista de Amenazas',
      image: 'https://images.pexels.com/photos/3775501/pexels-photo-3775501.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: 'Análisis de Malware',
    },
  ];

  return (
    <section
      id="equipo"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-4 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Conoce nuestro equipo
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto"></div>
        </div>

        <div
          className={`max-w-3xl mx-auto text-center mb-16 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Nuestro equipo en Ciberseguridad se destaca por su amplio conocimiento y experiencia en el campo de la seguridad informática. Estamos comprometidos en proteger a nuestros clientes de las amenazas cibernéticas que cada vez son más sofisticadas y peligrosas. Contamos con expertos en diferentes áreas, desde la detección y prevención de intrusiones hasta la gestión de riesgos y la recuperación de datos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {team.map((member, index) => (
            <div
              key={index}
              className={`text-center group transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onClick={() => {
                setClickedIndex(index);
                window.setTimeout(() => setClickedIndex(null), 900);
              }}
            >
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl transform scale-110 group-hover:scale-120 transition-transform duration-300 opacity-0 group-hover:opacity-20"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-2xl object-cover border-2 border-emerald-400/30 group-hover:border-emerald-400 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-500/30"
                />
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <AwardIcon className="h-6 w-6 text-white" ariaLabel="Premio" effect="spark" trigger={clickedIndex === index} triggerOn="both" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                {member.name}
              </h3>

              <p className="text-emerald-400 font-semibold mb-3">
                {member.role}
              </p>

              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <BriefcaseIcon className="h-4 w-4" ariaLabel="Experiencia" effect="spark" trigger={clickedIndex === index} triggerOn="both" />
                <span className="text-sm">{member.expertise}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-400/20 rounded-2xl p-8 text-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            Cada miembro de nuestro equipo tiene años de experiencia probada en la industria de la ciberseguridad, con certificaciones internacionales como CISSP, CEH y OSCP. Estamos dedicados a mantenernos actualizados con las últimas amenazas y tendencias de seguridad para ofrecerle las mejores soluciones.
          </p>
        </div>
      </div>
    </section>
  );
}
