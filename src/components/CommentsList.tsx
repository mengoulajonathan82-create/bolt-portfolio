import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

interface CommentsListProps {
  articleId: string;
  refreshTrigger?: number;
}

export default function CommentsList({ articleId, refreshTrigger }: CommentsListProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await supabase
        .from('blog_comments')
        .select('id, author_name, content, created_at')
        .eq('article_id', articleId)
        .order('created_at', { ascending: false });

      if (data) {
        setComments(data);
      }
      setLoading(false);
    };

    fetchComments();
  }, [articleId, refreshTrigger]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return <p className="text-gray-400">Chargement des commentaires...</p>;
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
        <MessageCircle size={24} />
        <span>Commentaires ({comments.length})</span>
      </h3>

      {comments.length === 0 ? (
        <p className="text-gray-400">Aucun commentaire pour le moment. Soyez le premier à en ajouter!</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-white">{comment.author_name}</p>
                <p className="text-sm text-gray-400">{formatDate(comment.created_at)}</p>
              </div>
              <p className="text-gray-300">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
