import React, { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Guide complet : Configuration FortiGate pour PME',
    excerpt: 'Apprenez à configurer une infrastructure de sécurité robuste avec FortiGate. Un tutoriel complet pour débuter.',
    content: 'Contenu complet de l\'article...',
    author: 'Jonathan Mengoula',
    date: '15 Jan 2024',
    category: 'Sécurité',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['FortiGate', 'Sécurité', 'Réseau']
  },
  {
    id: '2',
    title: 'Cybersécurité : Les 5 erreurs à éviter en 2024',
    excerpt: 'Découvrez les pièges courants de la cybersécurité et comment les éviter pour protéger votre infrastructure.',
    content: 'Contenu complet de l\'article...',
    author: 'Jonathan Mengoula',
    date: '12 Jan 2024',
    category: 'Cybersécurité',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Cybersécurité', 'Bonnes Pratiques']
  },
  {
    id: '3',
    title: 'Assembly x86 : Les bases pour débuter',
    excerpt: 'Une introduction complète à la programmation en assembly x86. Concepts fondamentaux et premiers pas.',
    content: 'Contenu complet de l\'article...',
    author: 'Jonathan Mengoula',
    date: '8 Jan 2024',
    category: 'Développement',
    readTime: '10 min',
    image: 'https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Assembly', 'x86', 'Programmation']
  },
  {
    id: '4',
    title: 'VMware ESXi : Déployer une infrastructure virtualisée',
    excerpt: 'Guide pratique pour mettre en place une infrastructure virtualisée avec VMware ESXi et vSphere.',
    content: 'Contenu complet de l\'article...',
    author: 'Jonathan Mengoula',
    date: '5 Jan 2024',
    category: 'Infrastructure',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['VMware', 'Virtualisation', 'Infrastructure']
  },
  {
    id: '5',
    title: 'Réseau d\'entreprise : Architecture et segmentation',
    excerpt: 'Concevoir une architecture réseau d\'entreprise sécurisée. Segmentation VLAN et bonnes pratiques.',
    content: 'Contenu complet de l\'article...',
    author: 'Jonathan Mengoula',
    date: '2 Jan 2024',
    category: 'Réseaux',
    readTime: '9 min',
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Réseaux', 'Architecture', 'VLAN']
  },
  {
    id: '6',
    title: 'CTF Bandit : Solutions et explications détaillées',
    excerpt: 'Résolutions complètes des challenges Bandit avec explications pour améliorer vos compétences en cybersécurité.',
    content: 'Contenu complet de l\'article...',
    author: 'Jonathan Mengoula',
    date: '28 Dec 2023',
    category: 'Cybersécurité',
    readTime: '12 min',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['CTF', 'Cybersécurité', 'OverTheWire']
  }
];

const categories = ['Tous', 'Sécurité', 'Cybersécurité', 'Développement', 'Infrastructure', 'Réseaux'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredPosts = selectedCategory === 'Tous'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

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
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group flex flex-col"
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
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
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
