import { Shield, Terminal, Network, Server, Code, Database } from 'lucide-react';

interface Skill {
  name: string;
  icon: JSX.Element;
  level: number;
}

const skillCategories = [
  {
    title: 'Cybersécurité',
    icon: <Shield className="text-emerald-400" size={24} />,
    skills: ['CTF', 'FortiGate', 'IDS/IPS', ]
  },
  {
    title: 'Réseaux',
    icon: <Network className="text-emerald-400" size={24} />,
    skills: ['Cisco', 'TCP/IP', 'VPN', 'VLAN', 'Firewall']
  },
  {
    title: 'Systèmes',
    icon: <Server className="text-emerald-400" size={24} />,
    skills: ['Linux', 'VMware', 'Docker','Ubuntu']
  },
  {
    title: 'Développement',
    icon: <Code className="text-emerald-400" size={24} />,
    skills: ['Python', 'Bash', 'Assembly x86', 'Git']
  },
  {
    title: 'Bases de données',
    icon: <Database className="text-emerald-400" size={24} />,
    skills: ['MySQL', 'MariaDB', 'SQL']
  },
  {
    title: 'Terminal & Scripts',
    icon: <Terminal className="text-emerald-400" size={24} />,
    skills: ['Bash',]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Compétences
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Expertise technique développée à travers projets académiques et expériences professionnelles
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gray-900 text-gray-300 text-sm rounded-full hover:bg-emerald-500 hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Certifications et Formations
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-emerald-400">
              <h4 className="text-lg font-bold text-white mb-2">CCNA - Cisco Certified Network Associate</h4>
              <p className="text-gray-400 text-sm">Cisco Systems</p>
              <p className="text-gray-400 text-sm ms-18">En cours...</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-emerald-400">
              <h4 className="text-lg font-bold text-white mb-2">CEH - Certified Ethical Hacker</h4>
              <p className="text-gray-400 text-sm">EC-Council</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-emerald-400">
              <h4 className="text-lg font-bold text-white mb-2">Linux Professional Institute</h4>
              <p className="text-gray-400 text-sm">LPIC-1 Certification</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-emerald-400">
              <h4 className="text-lg font-bold text-white mb-2">Formation Cybersécurité</h4>
              <p className="text-gray-400 text-sm">École Spécialisée</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
