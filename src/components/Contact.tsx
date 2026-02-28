import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const { error } = await supabase.from('contacts').insert({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Contact
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Vous avez un projet ou souhaitez discuter ? N'hésitez pas à me contacter
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Restons en contact
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Je suis toujours ouvert aux nouvelles opportunités, collaborations et projets intéressants. Que ce soit pour une mission, un poste ou simplement échanger sur la technologie, n'hésitez pas à me contacter.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <Mail className="text-emerald-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href="mailto:mengoulajonathan82@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    mengoulajonathan82@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <Phone className="text-emerald-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Téléphone</h4>
                  <a href="tel:+237659030156" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    +237 6 59 03 01 56
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <MapPin className="text-emerald-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Localisation</h4>
                  <p className="text-gray-400">Yaoundé, Cameroun</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                  placeholder="votre.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span>Envoi en cours...</span>
                ) : status === 'success' ? (
                  <span>Message envoyé !</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-emerald-400 text-center">
                  Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-400 text-center">
                  Une erreur s'est produite. Veuillez réessayer.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
