import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Play } from 'lucide-react';
import { supabase } from '../lib/supabase';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  read_time: string;
  image: string;
  video_url: string | null;
  tags: string[];
}

interface ArticleDetailProps {
  articleId: string;
  onBack: () => void;
}

export default function ArticleDetail({ articleId, onBack }: ArticleDetailProps) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [commentRefresh, setCommentRefresh] = useState(0);

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from('blog_articles')
        .select('*')
        .eq('id', articleId)
        .maybeSingle();

      if (data) {
        setArticle(data);
      }
      setLoading(false);
    };

    fetchArticle();
  }, [articleId]);

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">Chargement...</div>
        </div>
      </section>
    );
  }

  if (!article) {
    return (
      <section className="min-h-screen bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">Article non trouvé</div>
        </div>
      </section>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const extractYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const extractVimeoId = (url: string) => {
    const regExp = /(?:vimeo\.com\/)?(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const renderMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    const elements: JSX.Element[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={i} className="text-4xl font-bold text-white mt-8 mb-4">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-2xl font-bold text-emerald-400 mt-6 mb-3">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-xl font-bold text-white mt-4 mb-2">
            {line.substring(4)}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={i} className="text-gray-300 ml-6">
            {line.substring(2)}
          </li>
        );
      } else if (line.startsWith('```')) {
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        elements.push(
          <pre key={i} className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4 text-emerald-400 text-sm">
            <code>{codeLines.join('\n')}</code>
          </pre>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="mb-4" />);
      } else if (line.trim()) {
        elements.push(
          <p key={i} className="text-gray-300 mb-4 leading-relaxed">
            {line}
          </p>
        );
      }

      i++;
    }

    return elements;
  };

  return (
    <section className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          <span>Retour au blog</span>
        </button>

        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />

            {article.video_url && (
              <div className="mb-8">
                <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  {article.video_url.includes('youtube') || article.video_url.includes('youtu.be') ? (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${extractYoutubeId(article.video_url)}`}
                      title={article.title}
                      allowFullScreen
                    />
                  ) : article.video_url.includes('vimeo') ? (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://player.vimeo.com/video/${extractVimeoId(article.video_url)}`}
                      title={article.title}
                      allowFullScreen
                    />
                  ) : (
                    <video
                      className="absolute top-0 left-0 w-full h-full"
                      controls
                      src={article.video_url}
                    />
                  )}
                </div>
                <p className="text-gray-400 text-sm mt-2 flex items-center space-x-1">
                  <Play size={16} />
                  <span>Vidéo complète sur ce sujet</span>
                </p>
              </div>
            )}
            <div className="flex items-center space-x-4 text-gray-400 mb-6">
              <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {article.category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{formatDate(article.date)}</span>
              </div>
              <span>{article.read_time}</span>
            </div>

            <h1 className="text-5xl font-bold text-white mb-4">{article.title}</h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-emerald-400 text-sm rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-gray-300">
            {renderMarkdown(article.content)}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JM</span>
              </div>
              <div>
                <p className="text-white font-semibold">{article.author}</p>
                <p className="text-gray-400">Professionnel IT & Cybersécurité</p>
              </div>
            </div>
          </div>

          <CommentsList articleId={article.id} refreshTrigger={commentRefresh} />

          <CommentForm
            articleId={article.id}
            onCommentAdded={() => setCommentRefresh(prev => prev + 1)}
          />
        </article>
      </div>
    </section>
  );
}
