import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Blog />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
