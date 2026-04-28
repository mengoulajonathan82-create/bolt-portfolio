import { Shield, Terminal, Network, Server, Code, Database, Award, ExternalLink } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cybersécurité',
    icon: <Shield className="text-emerald-400" size={24} />,
    skills: ['Pentest', 'CTF', 'FortiGate', 'IDS/IPS']
  },
  {
    title: 'Réseaux',
    icon: <Network className="text-emerald-400" size={24} />,
    skills: ['Cisco', 'TCP/IP', 'VPN', 'VLAN', 'Firewall']
  },
  {
    title: 'Systèmes',
    icon: <Server className="text-emerald-400" size={24} />,
    skills: ['Linux', 'VMware', 'Docker', 'Active Directory', 'Ubuntu']
  },
  {
    title: 'Développement',
    icon: <Code className="text-emerald-400" size={24} />,
    skills: ['Python', 'Bash', 'Assembly x86', 'C', 'Git']
  },
  {
    title: 'Bases de données',
    icon: <Database className="text-emerald-400" size={24} />,
    skills: ['PostgreSQL', 'MySQL', 'MariaDB', 'SQL']
  },
  {
    title: 'Terminal & Scripts',
    icon: <Terminal className="text-emerald-400" size={24} />,
    skills: ['Bash', 'PowerShell', 'tmux']
  }
];

const certificates = [

  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "06/03/2026",
    description: "Cisco certifie que le titulaire de ce badge a réussi le cours Introduction aux réseaux et a obtenu ce niveau de reconnaissance étudiant.",
    skills: [ "Ethernet", "IP connectivity", "IP services", "IP Subnetting", "IPv4 And IPv6 Addressing", "Network Fundamentals", "Security Fundamentals", "Switching",],

    badge: true,
    image: "/images/ccna-introduction-to-networks.png",
    badgeUrl: "https://www.credly.com/badges/9fd8fa11-3395-47a1-b32b-692d32d45858/public_url",
    pdfUrl: "/documents/CCNA-_Introduction_to_Networks_certificate.pdf",
  },
  {
      title: "Introduction à la Cybersécurité",
      issuer: "Cisco Networking Academy",
      date: "Jan 28, 2026",
      description: "Formation complète sur les fondamentaux de la cybersécurité et les meilleures pratiques de protection",
      skills: [
        "Cybersécurité & bonnes pratiques",
        "Réseaux & vulnérabilités",
        "Protection des données",
        "Détection des menaces",
        "Sécurité informatique"
      ],

      badge: true,
      image: "/images/introduction-to-cybersecurity.png",
      pdfUrl: "/documents/Introduction_to_Cybersecurity_certificate.pdf",
      badgeUrl: "https://www.credly.com/badges/1e2b3be8-a838-421d-bc5d-62bacff09261/public_url",
    },
  {
    title: "Introduction to Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "Jan 31, 2026",
    image: "/images/introduction-to-packet-tracer.png",
    description: "Bases de l'analyse et de la visualisation de données",
    skills: [
      "Cisco Packet Tracer",
      "IoT Simulation",
      "Network Simulation",
      "                                                                                                               "
    ],
    badge: true,
    
    badgeUrl: "https://www.credly.com/badges/3112d4b7-e7c3-4f1a-b926-cf7fec034c31/public_url",
    pdfUrl: "/documents/IntrotoPacketTracer.pdf",
  },
  {
    title: "Fortinet Certified Associate Cybersecurity",
    issuer: "Fortinet",
    date: "27/02/2026",
    description: "La certification Fortinet Certified Associate in Cybersecurity valide que son titulaire est capable d'effectuer des opérations de haut niveau sur un équipement FortiGate.",
    skills: ["Antivirus", "Application Control", "Authentication", "Cybersecurity", "Firewall", "FortiGate", "Intrusion Detection Systems", "SSL Inspection", "Virtual Private Networks (VPN)", "Web Filtering"],

    badge: true,
    image: "/images/fortinet-certified-associate-cybersecurity.1.png",
    badgeUrl: "https://www.credly.com/badges/fb22e8a4-4d29-471c-be69-9b0d88a5ec48/public_url",
    pdfUrl: "/documents/Fortinet Certified Associate in Cybersecurity.pdf",
  },
  {
    title: "Fortinet Certified Fundamentals Cybersecurity",
    issuer: "Fortinet",
    date: "27/02/2026",
    description: "La certification Fortinet Certified Fundamentals in Cybersecurity valide que son titulaire a maîtrisé les compétences techniques et les connaissances requises pour tout poste de débutant en cybersécurité",
    skills: [ "Application Security",
      "Cybersecurity",
      "Malware Attacks",
      "Network Security",
      "Secure SD-WAN",
      "Security Operations",
      "Social Engineering",],

    badge: true,
    image: "/images/fortinet-certified-fundamentals-cybersecurity.png",
    badgeUrl: "https://www.credly.com/badges/3f55308f-77b1-44a3-9bd9-a1434459236b/public_url",
    pdfUrl: "/documents/Fortinet Certified Fundamentals in Cybersecurity.pdf",
  },
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

        {/* Compétences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

        {/* Section Certificats - AVEC CADRE POUR IMAGES */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Certifications & Formations
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
              >
                

                {/* Contenu de la carte */}
                <div className="p-6">
                  {/* En-tête avec icône et badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-lg">
                      <Award className="w-6 h-6 text-emerald-400" />
                    </div>
                    {cert.badge && (
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/30">
                        Badge en ligne
                      </span>
                    )}
                  </div>
                  {/* CADRE POUR L'IMAGE DU CERTIFICAT */}
                <div className="w-full h-40 bg-gray-900 border-b border-gray-700 overflow-hidden flex items-center justify-center">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-600">
                      <Award className="w-12 h-12 mb-2 opacity-30" />
                      <span className="text-xs">Image non disponible</span>
                    </div>
                  )}
                </div>

                  {/* Titre et métadonnées */}
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-emerald-400">{cert.issuer}</span>
                      <span className="text-sm text-gray-400">{cert.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 mb-4">{cert.description}</p>

                  {/* Compétences */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-transparent text-gray-300 text-xs rounded-full border border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Boutons */}
                  <div className="space-y-2">
                    {cert.badge && cert.badgeUrl && (
                      <a
                        href={cert.badgeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/25"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Voir le badge</span>
                      </a>
                    )}

                    {cert.pdfUrl && (
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white hover:bg-gray-100 text-gray-900 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-white/25"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Voir le certificat (PDF)</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}