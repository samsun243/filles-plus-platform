import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { news, categoryLabels } from '@/data/news';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Share2, Calendar, ArrowLeft } from 'lucide-react';

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
        <main className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md mx-4">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Article Non Trouvé</h1>
            <p className="text-slate-600 mb-6">L&apos;article que vous cherchez n&apos;existe pas ou a été déplacé.</p>
            <Link href="/news" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-bold hover:underline">
              <ArrowLeft size={18} /> Retour aux actualités
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Use Unsplash images based on ID or fallback to generic ones, ensuring high quality
  const heroImage = newsItem.image || 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1920&h=1080&fit=crop';

  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen">
        {/* Breadcrumb Section */}
        <section className="bg-white border-b border-slate-100 py-4 sticky top-[72px] z-30 transition-all">
          <div className="container mx-auto px-4">
            <div className="flex items-center flex-wrap gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-rose-600 transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/news" className="hover:text-rose-600 transition-colors">Actualités</Link>
              <span>/</span>
              <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-md">{newsItem.title}</span>
            </div>
          </div>
        </section>

        {/* Hero Article */}
        <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12 sm:pb-20 overflow-hidden">
          <Image
            src={heroImage}
            alt={newsItem.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-rose-900/20">
                  {categoryLabels[newsItem.category]}
                </span>
                <span className="flex items-center gap-1 text-sm font-medium text-slate-200">
                  <Calendar size={14} />
                  {new Date(newsItem.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold leading-tight mb-6 text-white drop-shadow-sm">
                {newsItem.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 -mt-8 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 sm:p-10 border border-slate-100">
                  <div className="prose prose-lg prose-slate max-w-none 
                      prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 
                      prose-p:text-slate-600 prose-p:leading-relaxed 
                      prose-a:text-rose-600 prose-a:font-semibold hover:prose-a:text-rose-700
                      prose-strong:text-slate-900 prose-strong:font-bold
                      prose-blockquote:border-l-rose-500 prose-blockquote:bg-rose-50/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic">
                    {/* Simulating rich content if plain string */}
                    {newsItem.content ? (
                      <div className="whitespace-pre-line">{newsItem.content}</div>
                    ) : (
                      <p className="text-lg text-slate-600">{newsItem.description}</p>
                    )}
                  </div>

                  {/* Share Section */}
                  <div className="mt-12 pt-8 border-t border-slate-100">
                    <h3 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                      <Share2 size={18} className="text-rose-600" />
                      Partager cet article
                    </h3>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-[#1877F2] hover:text-white transition-all rounded-lg text-slate-600 font-medium text-sm group">
                        <Facebook size={16} className="group-hover:fill-current" /> Facebook
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-[#1DA1F2] hover:text-white transition-all rounded-lg text-slate-600 font-medium text-sm group">
                        <Twitter size={16} className="group-hover:fill-current" /> Twitter
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-[#0A66C2] hover:text-white transition-all rounded-lg text-slate-600 font-medium text-sm group">
                        <Linkedin size={16} className="group-hover:fill-current" /> LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar / More News */}
              <div className="lg:col-span-4 space-y-8">
                {/* Newsletter Widget */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>

                  <h3 className="text-xl font-bold mb-2 relative z-10">Restez informé(e)</h3>
                  <p className="text-slate-300 text-sm mb-6 relative z-10">Recevez nos dernières actualités directement dans votre boîte mail.</p>
                  <Link href="/contact" className="inline-block w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-lg transition-colors relative z-10">
                    S&apos;abonner
                  </Link>
                </div>

                {/* Related News */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 px-2 border-l-4 border-rose-500">À lire aussi</h3>
                  <div className="space-y-6">
                    {news
                      .filter(n => n.id !== newsItem.id)
                      .slice(0, 3)
                      .map(item => (
                        <Link key={item.id} href={`/news/${item.id}`} className="block group bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 border border-slate-100">
                          <div className="flex gap-4">
                            <div className="w-20 h-20 rounded-lg bg-slate-200 overflow-hidden relative flex-shrink-0">
                              <Image
                                src={item.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop'}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="flex-1">
                              <span className="text-xs font-bold text-rose-600 mb-1 block">{categoryLabels[item.category]}</span>
                              <h4 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-rose-700 transition-colors">
                                {item.title}
                              </h4>
                              <span className="text-xs text-slate-400 mt-2 block">{new Date(item.date).toLocaleDateString('fr-FR')}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
