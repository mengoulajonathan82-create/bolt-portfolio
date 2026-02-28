import { Github, Linkedin, Mail, } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">LionKinG.1972</h3>
            <p className="text-gray-400 leading-relaxed">
              Etudiant IT passionné par la cybersécurité, les réseaux et le développement.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Accueil', 'Projets', 'Compétences', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '')}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Réseaux Sociaux</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jonathan-mengoula-4046a4335/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLJRfhee4RBWzV0K6asra1A%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
              <a
                href="mailto:mengoulajonathan82@gmail.com"
                className="p-3 bg-gray-800 rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              mengoulajonathan82@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Jonathan. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Développé avec React, TypeScript et Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
