import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github_url?: string;
  demo_url?: string;
  image: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (data) {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">Chargement des projets...</p>
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
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-emerald-400 text-xs rounded-full"
                    >
                      {tech}
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
