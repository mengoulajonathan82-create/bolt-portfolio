import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: any; // ou utiliser un type plus spécifique après traitement
  github_url?: string;
  demo_url?: string;
  image: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Erreur Supabase:', error);
          return;
        }

        if (data) {
          console.log('Données brutes:', data); // Pour déboguer
          
          // Transformer les données si nécessaire
          const formattedProjects = data.map(project => ({
            ...project,
            // S'assurer que technologies est un tableau
            technologies: Array.isArray(project.technologies) 
              ? project.technologies 
              : project.technologies?.tags || [] // Ajustez selon la structure réelle
          }));
          
          setProjects(formattedProjects);
        }
      } catch (err) {
        console.error('Erreur:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Projets
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Une sélection de mes réalisations techniques en réseaux, cybersécurité et développement
          </p>
          <p className="text-gray-400">Aucun projet à afficher pour le moment.</p>
        </div>
      </section>
    );
  }

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
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Image par défaut en cas d'erreur
                    e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Projet';
                  }}
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
                  {project.technologies && Array.isArray(project.technologies) && project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-emerald-400 text-xs rounded-full"
                    >
                      {typeof tech === 'string' ? tech : JSON.stringify(tech)}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
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