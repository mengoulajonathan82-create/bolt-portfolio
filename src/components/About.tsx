import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          À propos de moi
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Mon parcours et mes expériences dans le domaine de l'IT
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Qui suis-je ?</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Passionné par la technologie depuis mon plus jeune âge, je développé une expertise approfondie en réseaux, cybersécurité et un peu de développement. Mon parcours actuel me permet d'acquérir des compétences techniques solides, notamment en administration système Linux, configuration d'infrastructures réseau et analyse de sécurité.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Basé à Yaoundé, j'ai eu l'opportunité de travailler sur des projets variés allant de la mise en place de réseaux campus à la participation à des CTF internationaux sur des platteformes. Je suis constamment à la recherche de nouveaux défis techniques et d'opportunités pour approfondir mes connaissances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="text-emerald-400" size={28} />
                <h3 className="text-xl font-bold text-white">Formation</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold">License 1 réseau et sécurité</h4>
                  <p className="text-gray-400 text-sm">Institut Superieure de Technologie et de commerce</p>
                  <p className="text-gray-500 text-xs">2022 - 2024</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">License 2 réseau et sécurité</h4>
                  <p className="text-gray-400 text-sm">Institut Universitaire de Technologie</p>
                  <p className="text-gray-500 text-xs">2025- 2026</p>
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
                  <h4 className="text-white font-semibold"> Stagiaire Administrateur Réseau</h4>
                  <p className="text-gray-400 text-sm">Entreprise ISARE - Yaoundé</p>
                  <p className="text-gray-500 text-xs">2024 - 2025</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Stage Cybersécurité</h4>
                  <p className="text-gray-400 text-sm">Centre de Recherche IT</p>
                  <p className="text-gray-500 text-xs">2022 - 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="text-emerald-400" size={28} />
              <h3 className="text-xl font-bold text-white">Localisation</h3>
            </div>
            <p className="text-gray-300">
              Basé à <span className="text-emerald-400 font-semibold">Yaoundé, Cameroun</span>
            </p>
            <p className="text-xl-1600 font-bold mt-4">
              Actuellement à la recherche d'un stage professionnel et eventuelement une alternance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
