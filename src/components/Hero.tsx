import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Professionnel IT & Cybersécurité';
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
            <div className="w-64 h-64 mx-auto mb-6 rounded-lg bg-gradient-to-r from-emerald-400 to-blue-500 p-1 hover:scale-105 transition-transform duration-300 cursor-pointer group shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Profile Photo"
                className="w-full h-full rounded-lg object-cover bg-gray-800 group-hover:opacity-90 transition-opacity"
              />
            </div>
            <p className="text-sm text-gray-400 mb-6">Cliquez pour ajouter votre photo</p>
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
            Spécialiste en réseaux, cybersécurité et développement. Passionné par les infrastructures sécurisées et l'innovation technologique.
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
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#contact"
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
