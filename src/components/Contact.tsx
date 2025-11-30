import { MailIcon, PhoneIcon, MapPinIcon } from './Icons';
import { useState } from 'react';

export default function Contact() {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  return (
    <section id="contacto" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Listo para proteger tu infraestructura digital? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 group" onClick={() => { setClickedIndex(0); window.setTimeout(() => setClickedIndex(null), 900); }}>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
                <MailIcon className="h-6 w-6 text-white" ariaLabel="Email" effect="storm" trigger={clickedIndex === 0} triggerOn="both" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-400">contacto@ciberseguridad.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group" onClick={() => { setClickedIndex(1); window.setTimeout(() => setClickedIndex(null), 900); }}>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
                <PhoneIcon className="h-6 w-6 text-white" ariaLabel="Teléfono" effect="lightning" trigger={clickedIndex === 1} triggerOn="both" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Teléfono</h3>
                <p className="text-gray-400">+52 55 1234 5678</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group" onClick={() => { setClickedIndex(2); window.setTimeout(() => setClickedIndex(null), 900); }}>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
                <MapPinIcon className="h-6 w-6 text-white" ariaLabel="Ubicación" effect="storm" trigger={clickedIndex === 2} triggerOn="both" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Ubicación</h3>
                <p className="text-gray-400">México City, México</p>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition-colors duration-300"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition-colors duration-300"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition-colors duration-300 resize-none"
                placeholder="¿Cómo podemos ayudarte?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-24 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400">
            © 2024 Ciberseguridad. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </section>
  );
}
