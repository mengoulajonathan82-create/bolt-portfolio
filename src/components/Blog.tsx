import { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  read_time: string;
  image: string;
  tags: string[];
}

interface BlogProps {
  onArticleSelect?: (articleId: string) => void;
}

const categories = ['Tous', 'Sécurité', 'Cybersécurité', 'Développement', 'Infrastructure', 'Réseaux'];

export default function Blog({ onArticleSelect }: BlogProps) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('blog_articles')
        .select('*')
        .order('date', { ascending: false });

      if (data) {
        setBlogPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const filteredPosts = selectedCategory === 'Tous'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">Chargement des articles...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Blog
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Articles et tutoriels sur la cybersécurité, les réseaux et le développement IT
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:text-emerald-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group flex flex-col cursor-pointer"
              onClick={() => onArticleSelect?.(post.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm flex-1">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-emerald-400 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4 flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <span>{post.read_time}</span>
                  </div>
                </div>

                <button className="mt-4 flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold text-sm">
                  <span>Lire l'article</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Aucun article trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
