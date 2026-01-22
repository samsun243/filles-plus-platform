import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import NewsCard from '@/components/NewsCard';
import { news, categoryLabels } from '@/data/news';
import { Card } from '@/components/ui/card';
import { Sparkles, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function News() {
  const featuredNews = news.filter(item => item.featured)[0];
  const otherNews = news.filter(item => !item.featured);

  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Actualités', href: '/news' }
        ]}
      />
      <main className="overflow-hidden">
        {/* Page Hero */}
        <section className="relative min-h-[45vh] flex items-center overflow-hidden py-12 sm:py-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-pink-50">
            <div className="absolute top-10 right-10 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
          </div>

          <div className="relative container mx-auto px-4 z-10 text-center py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full px-6 py-3 mb-6 border border-rose-200">
              <Sparkles size={18} className="text-rose-600" />
              <span className="text-rose-700 font-bold text-sm">Actualités</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Dernières <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">Actualités</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-900 max-w-2xl mx-auto">
              Restez informé des dernières nouvelles et initiatives de l&apos;ONG FILLES+
            </p>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews && (
          <section className="py-12 sm:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">À la Une</h2>
              </div>

              <Card className="border-0 shadow-2xl overflow-hidden max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-full min-h-80 bg-gradient-to-br from-rose-200 via-pink-200 to-fuchsia-200 flex items-center justify-center relative">
                    <Image
                      src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&h=600&fit=crop"
                      alt="Actualités et communication"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 sm:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xs font-bold bg-rose-100 text-rose-700 px-4 py-2 rounded-full">
                        {categoryLabels[featuredNews.category]}
                      </span>
                      <span className="text-xs text-gray-900 flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(featuredNews.date).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {featuredNews.title}
                    </h3>
                    <p className="text-gray-900 text-base sm:text-lg mb-6 leading-relaxed">
                      {featuredNews.content || featuredNews.description}
                    </p>
                    <Link
                      href={`/news/${featuredNews.id}`}
                      className="inline-block bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:from-rose-700 hover:to-pink-700 transition-all hover:shadow-lg w-fit"
                    >
                      Lire la suite →
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* All News Grid */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            {otherNews.length > 0 && (
              <>
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Autres Actualités</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {otherNews.map(item => (
                    <NewsCard key={item.id} article={item} />
                  ))}
                </div>
              </>
            )}

            {news.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-900 text-lg font-medium">Aucune actualité pour le moment.</p>
                <p className="text-gray-500 mt-2">Revenez bientôt pour les dernières mises à jour.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
