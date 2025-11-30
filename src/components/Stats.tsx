import { useEffect, useState, useRef } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ clients: 0, threats: 0, uptime: 0 });
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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const targets = { clients: 500, threats: 10000, uptime: 99.9 };
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        clients: Math.floor(targets.clients * progress),
        threats: Math.floor(targets.threats * progress),
        uptime: parseFloat((targets.uptime * progress).toFixed(1)),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    { label: 'Clientes Protegidos', value: `${counts.clients}+`, suffix: '' },
    { label: 'Amenazas Bloqueadas', value: `${counts.threats.toLocaleString()}+`, suffix: '' },
    { label: 'Disponibilidad', value: counts.uptime.toFixed(1), suffix: '%' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-gray-900/20 to-emerald-900/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-emerald-400/20 blur-2xl rounded-full animate-pulse"></div>
                <div className="relative text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  {stat.value}{stat.suffix}
                </div>
              </div>
              <p className="mt-4 text-xl text-gray-300 font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
