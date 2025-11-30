import { useEffect, useState, useRef } from 'react';
import { CheckIcon, ZapIcon } from './Icons';

export default function Pricing() {
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

  const [clickedPlan, setClickedPlan] = useState<number | null>(null);

  const pricing = [
    {
      name: 'Planes de Seguridad Básicos',
      description: 'Ideal para pequeños negocios',
      color: 'from-emerald-500 to-teal-500',
      services: [
        {
          name: 'Auditoría de seguridad informática',
          price: '100 MXN',
          description: 'Evaluación inicial de tu infraestructura',
        },
        {
          name: 'Análisis de vulnerabilidades',
          price: '200 MXN',
          description: 'Identificación de debilidades en sistemas',
        },
        {
          name: 'Evaluación de riesgos en sistemas informáticos',
          price: '300 MXN',
          description: 'Análisis completo de posibles riesgos',
        },
        {
          name: 'Desarrollo de políticas y procedimientos de seguridad',
          price: '400 MXN',
          description: 'Establecer protocolos de seguridad',
        },
      ],
    },
    {
      name: 'Servicios de Protección Avanzados',
      description: 'Para empresas medianas y grandes',
      color: 'from-teal-500 to-cyan-500',
      featured: true,
      services: [
        {
          name: 'Implementación de medidas de seguridad en redes y sistemas',
          price: '100 MXN',
          description: 'Soluciones de seguridad empresarial',
        },
        {
          name: 'Monitoreo y detección de amenazas cibernéticas',
          price: '200 MXN',
          description: 'Vigilancia 24/7 de tu infraestructura',
        },
        {
          name: 'Capacitación y entrenamiento en seguridad informática',
          price: '300 MXN',
          description: 'Formación de tu equipo en seguridad',
        },
        {
          name: 'Respuesta a incidentes de seguridad',
          price: '500 MXN',
          description: 'Actuación inmediata ante amenazas',
        },
      ],
    },
  ];

  return (
    <section
      id="precios"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Precios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos una lista de precios competitiva y accesible para que puedas garantizar la seguridad de tu empresa
          </p>
        </div>

        <div className="space-y-16">
          {pricing.map((plan, planIndex) => (
            <div
              key={planIndex}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${planIndex * 300}ms` }}
              onClick={() => {
                setClickedPlan(planIndex);
                window.setTimeout(() => setClickedPlan(null), 900);
              }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`h-1 w-16 bg-gradient-to-r ${plan.color}`}></div>
                <h3 className="text-3xl font-bold text-white">{plan.name}</h3>
                {plan.featured && (
                  <div className="flex items-center space-x-2 ml-auto bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 rounded-lg">
                    <ZapIcon className="h-4 w-4 text-white" effect="lightning" ariaLabel="Más Popular" trigger={clickedPlan === planIndex} triggerOn="both" />
                    <span className="text-sm font-semibold text-white">Más Popular</span>
                  </div>
                )}
              </div>

              <p className="text-gray-400 mb-8">{plan.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {plan.services.map((service, serviceIndex) => {
                  const marginClass = serviceIndex % 2 === 0 ? 'mt-0' : 'mt-4';
                  return (
                  <div
                    key={serviceIndex}
                    className={`group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-emerald-400/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/20 ${marginClass}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-white pr-4 group-hover:text-emerald-400 transition-colors duration-300">
                          {service.name}
                        </h4>
                        <CheckIcon className="h-5 w-5 flex-shrink-0 text-emerald-400" effect="spark" ariaLabel="Incluido" trigger={clickedPlan === planIndex} triggerOn="both" />
                      </div>

                      <p className="text-sm text-gray-400 mb-4">
                        {service.description}
                      </p>

                      <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                        {service.price}
                      </div>
                    </div>
                  </div>
                );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-green-500/10 border border-emerald-400/20 rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Necesitas una solución personalizada?
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Contáctanos para obtener una propuesta adaptada específicamente a las necesidades de tu empresa
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:from-emerald-600 hover:to-teal-700 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105">
            <span className="relative z-10">Solicitar Presupuesto</span>
          </button>
        </div>
      </div>
    </section>
  );
}
