import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Share2, Calendar, ArrowLeft, Clock, Tag, Star } from 'lucide-react';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function BlogDetail({ params }: PageProps) {
    const { id } = await params;
    const post = blogPosts.find(p => p.id === parseInt(id));

    if (!post) {
        return (
            <>
                <Header />
                <main className="min-h-screen flex items-center justify-center bg-slate-50">
                    <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md mx-4">
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">Article Non Trouvé</h1>
                        <p className="text-slate-600 mb-6">L&apos;article que vous cherchez n&apos;existe pas ou a été déplacé.</p>
                        <Link href="/blog" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-bold hover:underline">
                            <ArrowLeft size={18} /> Retour au blog
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    // Fallback image if specific post image is missing (most have them in data now)
    const heroImage = post.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop';

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
                            <Link href="/blog" className="hover:text-rose-600 transition-colors">Blog</Link>
                            <span>/</span>
                            <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-md">{post.title}</span>
                        </div>
                    </div>
                </section>

                {/* Hero Article */}
                <section className="relative h-[60vh] min-h-[500px] flex items-end pb-12 sm:pb-20 overflow-hidden">
                    <Image
                        src={heroImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>

                    <div className="container mx-auto px-4 relative z-10 text-white">
                        <div className="max-w-4xl animate-in slide-in-from-bottom-6 fade-in duration-700">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="bg-rose-600/90 backdrop-blur-sm shadow-lg text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-2">
                                    <Tag size={12} /> {post.category}
                                </span>
                                <span className="flex items-center gap-2 text-sm font-medium text-slate-200">
                                    <Calendar size={16} />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-2 text-sm font-medium text-slate-200">
                                    <Clock size={16} />
                                    5 min de lecture
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black leading-tight mb-8 text-white drop-shadow-2xl">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-4 text-sm text-slate-300 bg-white/10 backdrop-blur-md p-3 rounded-xl w-fit border border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">
                                        {post.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-300 uppercase font-semibold">Auteur</p>
                                        <span className="font-bold text-white text-base">{post.author}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 sm:py-20 -mt-10 relative z-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                            {/* Main Content */}
                            <div className="lg:col-span-8">
                                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 sm:p-12 border border-slate-100">
                                    {/* Lead Paragraph */}
                                    <p className="text-xl sm:text-2xl text-slate-800 font-medium leading-relaxed mb-8 font-heading border-l-4 border-rose-500 pl-6 italic">
                                        {post.excerpt}
                                    </p>

                                    {/* Main Body */}
                                    <div className="prose prose-lg prose-slate max-w-none 
                      prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 
                      prose-p:text-slate-600 prose-p:leading-relaxed 
                      prose-a:text-rose-600 prose-a:font-semibold hover:prose-a:text-rose-700
                      prose-strong:text-slate-900 prose-strong:font-bold
                      prose-img:rounded-xl prose-img:shadow-lg
                      prose-blockquote:border-l-rose-500 prose-blockquote:bg-rose-50/50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-slate-700">

                                        {post.content ? (
                                            <div className="whitespace-pre-line">{post.content}</div>
                                        ) : (
                                            <div className="space-y-4">
                                                <p>Contenu de l&apos;article en cours de rédaction...</p>
                                                <p>{post.excerpt}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Share Section */}
                                    <div className="mt-16 pt-10 border-t border-slate-100">
                                        <h3 className="text-slate-900 font-bold mb-6 flex items-center gap-2 text-lg">
                                            <Share2 size={20} className="text-rose-600" />
                                            Partager cet article
                                        </h3>
                                        <div className="flex gap-3 flex-wrap">
                                            <button className="flex items-center gap-2 px-5 py-3 bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-all rounded-xl font-bold group">
                                                <Facebook size={18} className="group-hover:fill-current" /> Facebook
                                            </button>
                                            <button className="flex items-center gap-2 px-5 py-3 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2] text-[#1DA1F2] hover:text-white transition-all rounded-xl font-bold group">
                                                <Twitter size={18} className="group-hover:fill-current" /> Twitter
                                            </button>
                                            <button className="flex items-center gap-2 px-5 py-3 bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white transition-all rounded-xl font-bold group">
                                                <Linkedin size={18} className="group-hover:fill-current" /> LinkedIn
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-4 space-y-8">
                                {/* Author Card */}
                                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-rose-600 font-bold text-2xl">
                                            {post.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-rose-600 uppercase tracking-wider">À propos de l&apos;auteur</p>
                                            <h4 className="text-lg font-bold text-slate-900">{post.author}</h4>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                        Expert(e) engagé(e) au sein de l&apos;ONG FILLES+, contribuant régulièrement à notre mission d&apos;éducation et d&apos;autonomisation.
                                    </p>
                                </div>

                                {/* Newsletter Widget */}
                                <div className="bg-gradient-to-br from-slate-900 to-rose-900 rounded-2xl p-8 text-center text-white relative overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl"></div>

                                    <h3 className="text-xl font-bold mb-2 relative z-10">Newsletter</h3>
                                    <p className="text-slate-200 text-sm mb-6 relative z-10">Recevez nos meilleures histoires chaque semaine.</p>
                                    <Link href="/contact" className="inline-block w-full bg-white text-rose-900 font-bold py-3 rounded-xl transition-transform hover:scale-105 active:scale-95 relative z-10 shadow-lg">
                                        S&apos;abonner
                                    </Link>
                                </div>

                                {/* Related Posts */}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                                        <Star className="text-rose-500" size={18} />
                                        Articles populaires
                                    </h3>
                                    <div className="space-y-4">
                                        {blogPosts
                                            .filter(p => p.id !== post.id)
                                            .slice(0, 3)
                                            .map(item => (
                                                <Link key={item.id} href={`/blog/${item.id}`} className="flex gap-4 group bg-white p-3 rounded-xl hover:shadow-md transition-all border border-transparent hover:border-rose-100">
                                                    <div className="w-20 h-20 rounded-lg bg-slate-200 overflow-hidden relative flex-shrink-0">
                                                        <Image
                                                            src={item.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop'}
                                                            alt={item.title}
                                                            fill
                                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider mb-1 block">{item.category}</span>
                                                        <h4 className="font-bold text-slate-800 text-sm leading-snug line-clamp-2 group-hover:text-rose-600 transition-colors">
                                                            {item.title}
                                                        </h4>
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
