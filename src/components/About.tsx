import { Briefcase, GraduationCap, MapPin, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          À propos
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Mon parcours et mes expériences 
        </p>

        <div className="max-w-6xl mx-auto">
          {/* Section avec image à droite */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Partie gauche : contenu textuel */}
            <div className="md:w-1/2">
              <div className="bg-gray-900 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <User className="text-emerald-400 mr-2" size={24} />
                  Qui suis-je ?
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Passionné par la technologie depuis mon plus jeune âge, j'ai développé une expertise approfondie en réseaux, cybersécurité et développement. Mon parcours m'a permis d'acquérir des compétences techniques solides, notamment en administration système Linux, configuration d'infrastructures réseau et analyse de sécurité.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Basé à Yaoundé, j'ai eu l'opportunité de travailler sur des projets variés allant de la mise en place de réseaux campus à la participation à des CTF internationaux. Je suis constamment à la recherche de nouveaux défis techniques et d'opportunités pour approfondir mes connaissances.
                </p>
              </div>
            </div>

            {/* Partie droite : image en pleine hauteur */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden h-full shadow-2xl border-4 border-emerald-400/30 hover:border-emerald-400 transition-all duration-300">
                <img
                  src="/images/profil.jpg"
                  alt="Jonathan MENGOULA"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
            </div>
          </div>

          {/* Formation et Expériences */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="text-emerald-400" size={28} />
                <h3 className="text-xl font-bold text-white">Formation</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold">Licence 1 réseau et sécurité</h4>
                  <p className="text-gray-400 text-sm">Institut Supérieure de Technologie et de commerce</p>
                  <p className="text-gray-500 text-xs">2022 - 2024</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Licence Réseaux & Télécommunications</h4>
                  <p className="text-gray-400 text-sm">Institut Universitaire de Technologie</p>
                  <p className="text-gray-500 text-xs">2019 - 2022</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="text-emerald-400" size={28} />
                <h3 className="text-xl font-bold text-white">Expériences</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold">Stagiaire Administrateur Réseau</h4>
                  <p className="text-gray-400 text-sm">Entreprise ISARE - Yaoundé</p>
                  <p className="text-gray-500 text-xs">2024 - 2025</p>
                </div>
                
              </div>
            </div>
          </div>

          {/* Localisation */}
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="text-emerald-400" size={28} />
              <h3 className="text-xl font-bold text-white">Localisation</h3>
            </div>
            <p className="text-gray-300">
              Basé à <span className="text-emerald-400 font-semibold">Yaoundé, Cameroun</span>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Actuellement à la recherche d'un stage professionnel et éventuellement une alternance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}