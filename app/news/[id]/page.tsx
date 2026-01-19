import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { news, categoryLabels } from '@/data/news';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsDetail({ params }: PageProps) {
  const { id } = await params;
  const newsItem = news.find(n => n.id === id);

  if (!newsItem) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Article Non Trouvé</h1>
            <Link href="/news" className="text-pink-600 hover:text-pink-700 font-semibold">
              Retour aux actualités →
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-pink-600 hover:text-pink-700">Accueil</Link>
              <span>/</span>
              <Link href="/news" className="text-pink-600 hover:text-pink-700">Actualités</Link>
              <span>/</span>
              <span className="text-gray-600">{newsItem.title}</span>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-4">
              <span className="text-xs font-semibold bg-white bg-opacity-20 px-3 py-1 rounded-full inline-block">
                {categoryLabels[newsItem.category]}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
            <p className="text-lg opacity-90">
              Publié le {new Date(newsItem.date).toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-lg flex items-center justify-center">
              <span className="text-8xl">📰</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {newsItem.content}
                </p>
              </div>

              {/* Share buttons */}
              <div className="mt-12 pt-8 border-t">
                <p className="font-semibold text-gray-800 mb-4">Partager cet article</p>
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Partager sur Facebook
                  </button>
                  <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">
                    Partager sur Twitter
                  </button>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">
                    Partager sur LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other News */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Autres Actualités</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {news
                .filter(n => n.id !== newsItem.id)
                .slice(0, 3)
                .map(otherNews => (
                  <Link
                    key={otherNews.id}
                    href={`/news/${otherNews.id}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="h-40 bg-gradient-to-br from-blue-300 to-purple-300 flex items-center justify-center">
                      <span className="text-3xl">📰</span>
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-pink-600 font-semibold mb-2">
                        {categoryLabels[otherNews.category]}
                      </p>
                      <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{otherNews.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{otherNews.description}</p>
                      <p className="text-xs text-gray-500 mt-3">
                        {new Date(otherNews.date).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
