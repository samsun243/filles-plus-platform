'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { orgConfig } from '@/config/org';
import { FormEvent, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([
    'jeanpaulde@gmail.com',
    'ulrichwo@yahoo.com',
    'charbelvi@outlook.com',
    'chrisroi@gmail.com',
    'amourag@yahoo.com',
    'orphelia@outlook.com',
    'samlk@gmail.com',
    'sunsam@yahoo.com'
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterSubmitting(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (response.ok) {
        if (!subscribedEmails.includes(newsletterEmail)) {
          setSubscribedEmails(prev => [...prev, newsletterEmail]);
        }
        setNewsletterEmail('');
        alert('Merci pour votre inscription à notre newsletter ! Un email de confirmation vous a été envoyé.');
      } else {
        const error = await response.json();
        alert(`Erreur: ${error.error}`);
      }
    } catch (error) {
      console.error('Erreur lors de l\'abonnement:', error);
      alert('Erreur lors de l\'abonnement. Veuillez réessayer.');
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
          setSubmitted(false);
        }, 3000);
      } else {
        const error = await response.json();
        alert(`Erreur: ${error.error}`);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden py-12 sm:py-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
            </div>
          </div>

          <div className="relative container mx-auto px-4 z-10 text-center py-16 sm:py-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Restez <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">en contact</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              Des questions? Nous sommes là pour vous aider. Contactez-nous et explorons ensemble comment soutenir notre mission.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
              {/* Contact Info Cards */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Informations</h2>

                <div className="space-y-6">
                  {/* Email Card */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all p-6 bg-gradient-to-br from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 cursor-pointer">
                    <div className="flex gap-4">
                      <div className="p-3 bg-rose-600 rounded-lg flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                        <a href={`mailto:${orgConfig.contact.email}`} className="text-rose-600 hover:text-rose-700 font-semibold transition">
                          {orgConfig.contact.email}
                        </a>
                      </div>
                    </div>
                  </Card>

                  {/* Phone Card */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all p-6 bg-gradient-to-br from-pink-50 to-fuchsia-50 hover:from-pink-100 hover:to-fuchsia-100 cursor-pointer">
                    <div className="flex gap-4">
                      <div className="p-3 bg-pink-600 rounded-lg flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                        <a href={`tel:${orgConfig.contact.phone}`} className="text-pink-600 hover:text-pink-700 font-semibold transition">
                          {orgConfig.contact.phone}
                        </a>
                      </div>
                    </div>
                  </Card>

                  {/* Horaires */}
                  <Card className="border-0 shadow-lg p-6 bg-white border-2 border-rose-100">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="w-6 h-6 text-rose-600" /> Horaires d'ouverture
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-700"><span className="font-semibold">Lun-Ven:</span> 8h00 - 17h00</p>
                      <p className="text-gray-700"><span className="font-semibold">Samedi:</span> 9h00 - 13h00</p>
                      <p className="text-gray-700"><span className="font-semibold">Dimanche:</span> <span className="text-rose-600 font-semibold">Fermé</span></p>
                    </div>
                  </Card>
                </div>

                {/* Newsletter Subscription */}
                <div className="mt-8">
                  <Card className="border-0 shadow-lg p-6 bg-gradient-to-br from-rose-50 to-pink-50">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Mail className="w-6 h-6 text-rose-600" /> Newsletter FILLES+
                    </h3>
                    <p className="text-gray-700 mb-4">Restez informé(e) de nos actions et programmes pour l'émancipation des filles.</p>
                    <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                      <input
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="votre@email.com"
                        required
                        disabled={newsletterSubmitting}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-600 disabled:opacity-50"
                      />
                      <Button type="submit" disabled={newsletterSubmitting} className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-rose-700 hover:to-pink-700 transition disabled:opacity-50">
                        {newsletterSubmitting ? 'Inscription...' : 'S\'abonner'}
                      </Button>
                    </form>
                  </Card>
                </div>

                {/* Subscribed Emails Display */}
                <div className="mt-6">
                  <Card className="border-0 shadow-lg p-6 bg-white">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-rose-600" /> Nos abonné(e)s récent(e)s
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">Découvrez qui nous suit dans notre mission :</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {subscribedEmails.slice(-10).map((email, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg">
                          <Mail className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700 truncate">{email}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      {subscribedEmails.length} abonné{subscribedEmails.length > 1 ? 's' : ''} à notre newsletter
                    </p>
                  </Card>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-bold text-gray-900 mb-4">Réseaux sociaux</h3>
                  <div className="flex gap-3 flex-wrap">
                    {orgConfig.contact.socialMedia.facebook && (
                      <a href={orgConfig.contact.socialMedia.facebook} target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-rose-600 to-pink-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all hover:scale-110">
                        <span className="text-lg">f</span>
                      </a>
                    )}
                    {orgConfig.contact.socialMedia.twitter && (
                      <a href={orgConfig.contact.socialMedia.twitter} target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-pink-600 to-fuchsia-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all hover:scale-110">
                        <span className="text-lg">𝕏</span>
                      </a>
                    )}
                    {orgConfig.contact.socialMedia.instagram && (
                      <a href={orgConfig.contact.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-fuchsia-600 to-rose-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all hover:scale-110">
                        <span className="text-lg">📷</span>
                      </a>
                    )}
                    {orgConfig.contact.socialMedia.linkedin && (
                      <a href={orgConfig.contact.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-rose-600 to-pink-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all hover:scale-110">
                        <span className="text-lg">💼</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Form Premium */}
              <div>
                <Card className="border-0 shadow-2xl p-8 bg-white">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Envoyez-nous un message</h2>
                  <p className="text-gray-600 mb-6">Réponse rapide garantie en 24h</p>

                  {submitted && (
                    <div className="bg-green-50 border-2 border-green-500 p-4 rounded-lg mb-6 flex gap-3">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                      <div>
                        <p className="text-green-900 font-bold">Message envoyé avec succès!</p>
                        <p className="text-sm text-green-700">Nous vous répondrons dans les plus brefs délais.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200 transition bg-white disabled:opacity-50"
                        placeholder="Votre nom complet"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                        Adresse email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200 transition bg-white disabled:opacity-50"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="type" className="block text-sm font-bold text-gray-900 mb-2">
                        Type de message *
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200 transition bg-white disabled:opacity-50"
                      >
                        <option value="general">Demande générale</option>
                        <option value="partnership">Partenariat</option>
                        <option value="volunteer">Bénévolat</option>
                        <option value="donation">Don</option>
                        <option value="feedback">Retour d'expérience</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200 transition bg-white disabled:opacity-50"
                        placeholder="Sujet de votre message"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200 transition resize-none bg-white disabled:opacity-50"
                        placeholder="Votre message..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-4 rounded-lg font-bold hover:from-rose-700 hover:to-pink-700 transition-all hover:shadow-lg flex items-center justify-center gap-2 text-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
