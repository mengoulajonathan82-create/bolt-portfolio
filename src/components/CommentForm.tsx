import { useState } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface CommentFormProps {
  articleId: string;
  onCommentAdded: () => void;
}

export default function CommentForm({ articleId, onCommentAdded }: CommentFormProps) {
  const [formData, setFormData] = useState({
    author_name: '',
    author_email: '',
    content: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('blog_comments').insert({
        article_id: articleId,
        author_name: formData.author_name,
        author_email: formData.author_email,
        content: formData.content,
      });

      if (error) throw error;

      setMessage('Commentaire publié avec succès!');
      setFormData({ author_name: '', author_email: '', content: '' });
      onCommentAdded();

      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      setMessage('Erreur lors de la publication du commentaire');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg mt-8">
      <h3 className="text-2xl font-bold text-white mb-4">Ajouter un commentaire</h3>

      {message && (
        <div className={`p-4 rounded-lg mb-4 ${message.includes('succès') ? 'bg-emerald-900 text-emerald-200' : 'bg-red-900 text-red-200'}`}>
          {message}
        </div>
      )}

      <div className="space-y-4">
        <input
          type="text"
          name="author_name"
          placeholder="Votre nom"
          value={formData.author_name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="email"
          name="author_email"
          placeholder="Votre email"
          value={formData.author_email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <textarea
          name="content"
          placeholder="Votre commentaire..."
          value={formData.content}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          <Send size={18} />
          <span>{loading ? 'Publication...' : 'Publier'}</span>
        </button>
      </div>
    </form>
  );
}
