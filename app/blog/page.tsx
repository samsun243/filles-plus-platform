import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Sparkles, Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { blogPosts } from '@/data/blog';

export default function Blog() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Blog', href: '/blog' }
        ]}
      />
      <main className="overflow-hidden">
        {/* Page Hero Modernisé */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-rose-50">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>

          <div className="relative container mx-auto px-4 z-10 text-center py-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full px-6 py-3 mb-8 border border-rose-200/50">
              <Sparkles size={18} className="text-rose-600" />
              <span className="text-rose-700 font-bold text-sm">Notre Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Histoires et <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lisez nos articles sur l&apos;empowerment, l&apos;éducation, la santé et le leadership féminin au Bénin.
            </p>
          </div>
        </section>

        {/* Blog Grid Modernisé */}
        <section className="py-24 bg-gradient-to-b from-white via-rose-50/20 to-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e11d48' fill-opacity='0.1'%3E%3Ccircle cx='60' cy='60' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-20 text-center">
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Restez informés de nos actions, découvrez les témoignages inspirants et plongez dans notre univers dédié à l&apos;empowerment féminin.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden group cursor-pointer flex flex-col"
                >
                  <div className="h-40 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <post.icon className="w-16 h-16 text-rose-600" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block text-xs font-bold bg-rose-100 text-rose-700 px-3 py-1 rounded-full mb-3 w-fit">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-900 text-sm mb-4 line-clamp-2 flex-1">{post.excerpt}</p>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center gap-2 text-xs text-gray-900 mb-3">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-900 mb-4">
                        <User size={14} />
                        {post.author}
                      </div>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition"
                      >
                        Lire plus <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-screen blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Restez informé(e)</h2>
              <p className="text-base sm:text-lg mb-8 text-white/90">
                Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et mises à jour.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-6 py-4 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-gray-50 transition-all hover:shadow-lg">
                  S&apos;inscrire
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
