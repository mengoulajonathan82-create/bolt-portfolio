import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
          >
            Portfolio
          </a>

          <div className="hidden md:flex space-x-8">
            {['home', 'projects', 'skills', 'blog', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className="text-gray-300 hover:text-emerald-400 transition-colors capitalize"
              >
                {item === 'home' ? 'Accueil' : item === 'projects' ? 'Projets' : item === 'skills' ? 'Compétences' : item === 'blog' ? 'Blog' : item === 'about' ? 'À propos' : 'Contact'}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-emerald-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {['home', 'projects', 'skills', 'blog', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className="block text-gray-300 hover:text-emerald-400 transition-colors capitalize"
              >
                {item === 'home' ? 'Accueil' : item === 'projects' ? 'Projets' : item === 'skills' ? 'Compétences' : item === 'blog' ? 'Blog' : item === 'about' ? 'À propos' : 'Contact'}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
