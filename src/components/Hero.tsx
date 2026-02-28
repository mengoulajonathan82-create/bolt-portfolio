import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Etudiant IT et Cybersécurité';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-96 h-96 mx-auto mb-6 rounded-lg bg-gradient-to-r from-emerald-400 to-blue-500 p-1 hover:scale-105 transition-transform duration-300 cursor-pointer group shadow-2xl">
              <img
                src="/bolt-portfolio/images/profil.jpg"
                alt="Profile Photo"
                className="w-full h-full rounded-lg object-cover bg-gray-800 group-hover:opacity-90 transition-opacity"
              />
            </div>
            <p className="text-sm text-gray-400 mb-6">Bienvenue sur mon portfolio</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            Jonathan MENGOULA
          </h1>

          <div className="h-16 mb-8">
            <p className="text-2xl md:text-3xl text-emerald-400 font-light">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up">
            Etudiant en réseaux, cybersécurité et développement. Passionné par les infrastructures sécurisées et l'innovation technologique.
          </p>

          <div className="flex flex-col items-center space-y-6 animate-slide-up">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jonathan-mengoula-4046a4335/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLJRfhee4RBWzV0K6asra1A%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mengoulajonathan82@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download size={20} />
              <span>Télécharger mon CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
