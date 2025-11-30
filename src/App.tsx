import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Team />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
