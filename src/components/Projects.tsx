import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Configuration FortiGate',
    description: 'Mise en place complète d\'une infrastructure réseau sécurisée avec FortiGate. Configuration de VPN, politiques de sécurité et monitoring.',
    tags: ['Réseaux', 'Sécurité', 'FortiGate', 'VPN'],
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'CTF Bandit - OverTheWire',
    description: 'Résolution complète du challenge Bandit. Exploitation de vulnérabilités, scripting bash et analyse de sécurité.',
    tags: ['CTF', 'Cybersécurité', 'Linux', 'Bash'],
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Infrastructure VMware',
    description: 'Déploiement et gestion d\'une infrastructure virtualisée complète avec VMware ESXi. Haute disponibilité et sauvegarde.',
    tags: ['VMware', 'Virtualisation', 'Infrastructure'],
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Logos Associations Étudiantes',
    description: 'Création de logos et d\'identités visuelles pour plusieurs associations étudiantes. Design moderne et professionnel.',
    tags: ['Design', 'Branding', 'Graphisme'],
    demo: 'https://example.com',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Réseau Campus',
    description: 'Architecture et déploiement du réseau du campus. Configuration switches, routage inter-VLAN et sécurisation.',
    tags: ['Réseaux', 'Cisco', 'VLAN', 'Routing'],
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Assembly x86 Projects',
    description: 'Projets de programmation bas niveau en assembly x86. Optimisation et reverse engineering.',
    tags: ['Assembly', 'x86', 'Low-level', 'Reverse'],
    github: 'https://github.com',
    image: 'https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Projets
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Une sélection de mes réalisations techniques en réseaux, cybersécurité et développement
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-emerald-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Démo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
