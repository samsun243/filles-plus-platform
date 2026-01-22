import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects, categoryNames } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Target, Users, ArrowLeft, CheckCircle, MapPin, ArrowRight, Heart } from 'lucide-react';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetail({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md mx-4">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Projet Non Trouvé</h1>
            <p className="text-slate-600 mb-6">Le projet que vous cherchez n&apos;existe pas ou a été retiré.</p>
            <Link href="/projects" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-bold hover:underline">
              <ArrowLeft size={18} /> Retour aux projets
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Fallback image
  const heroImage = project.image || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1920&h=1080&fit=crop';

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
              <Link href="/projects" className="hover:text-rose-600 transition-colors">Projets</Link>
              <span>/</span>
              <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-md">{project.title}</span>
            </div>
          </div>
        </section>

        {/* Hero Project */}
        <section className="relative h-[60vh] min-h-[500px] flex items-end pb-12 sm:pb-20 overflow-hidden">
          <Image
            src={heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="max-w-4xl animate-in slide-in-from-bottom-6 fade-in duration-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {categoryNames[project.category]}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${project.status === 'active' ? 'bg-green-500/20 border-green-400 text-green-300' :
                    project.status === 'completed' ? 'bg-blue-500/20 border-blue-400 text-blue-300' :
                      'bg-yellow-500/20 border-yellow-400 text-yellow-300'
                  }`}>
                  {project.status === 'active' ? 'En cours' : project.status === 'completed' ? 'Terminé' : 'À venir'}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black leading-tight mb-6 text-white drop-shadow-lg">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed font-light mb-8">
                Un projet ambitieux pour l&apos;avenir des filles au Bénin, axé sur {categoryNames[project.category].toLowerCase()}.
              </p>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 sm:py-24 -mt-10 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

              {/* Sidebar Info - Desktop: Left, Mobile: Bottom */}
              <div className="lg:col-span-4 lg:order-2 space-y-6">
                {/* Key Info Card */}
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 sm:p-8 border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Détails du projet</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 flex-shrink-0">
                        <Target size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-1">Catégorie</p>
                        <p className="font-bold text-slate-900">{categoryNames[project.category]}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-1">Lancement</p>
                        <p className="font-bold text-slate-900">
                          {new Date(project.startDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-1">Localisation</p>
                        <p className="font-bold text-slate-900">Bénin (National)</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg group"
                    >
                      Soutenir ce projet
                      <Heart size={18} className="text-rose-500 group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Impact Card */}
                {project.impact && (
                  <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 relative z-10">
                      <Users size={20} /> Impact Attendu
                    </h3>
                    <p className="text-rose-50 leading-relaxed font-medium relative z-10">
                      {project.impact}
                    </p>
                  </div>
                )}
              </div>

              {/* Main Content - Desktop: Right */}
              <div className="lg:col-span-8 lg:order-1 space-y-8">
                {/* Description Block */}
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 sm:p-10 border border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 font-heading">À propos du projet</h2>
                  <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
                    {project.description}
                  </div>
                </div>

                {/* Objectives & Targets Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100/50">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="text-rose-600" size={20} />
                      Objectifs Clés
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-slate-600 bg-white/50 p-3 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></span>
                        <span>Améliorer l&apos;accès à {categoryNames[project.category].toLowerCase()}</span>
                      </li>
                      <li className="flex gap-3 text-slate-600 bg-white/50 p-3 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></span>
                        <span>Autonomiser durablement les bénéficiaires</span>
                      </li>
                      <li className="flex gap-3 text-slate-600 bg-white/50 p-3 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></span>
                        <span>Renforcer le tissu communautaire local</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100/50">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Users className="text-blue-600" size={20} />
                      Bénéficiaires
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3 text-slate-600 bg-white/50 p-3 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                        <span>Jeunes filles scolarisées</span>
                      </li>
                      <li className="flex gap-3 text-slate-600 bg-white/50 p-3 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                        <span>Femmes entrepreneures</span>
                      </li>
                      <li className="flex gap-3 text-slate-600 bg-white/50 p-3 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                        <span>Familles et communautés rurales</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Projects CTA */}
            <div className="mt-20 border-t border-slate-200 pt-16">
              <div className="flex flex-col sm:flex-row justify-between items-end mb-8 gap-4">
                <div>
                  <span className="text-rose-600 font-bold tracking-widest text-sm uppercase mb-2 block">Découvrir</span>
                  <h2 className="text-3xl font-heading font-bold text-slate-900">Projets Similaires</h2>
                </div>
                <Link href="/projects" className="group flex items-center gap-2 text-slate-600 hover:text-rose-600 font-semibold transition-colors">
                  Voir tout <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {projects
                  .filter(p => p.category === project.category && p.id !== project.id)
                  .slice(0, 3)
                  .map(item => (
                    <Link key={item.id} href={`/projects/${item.id}`} className="group bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                      <div className="h-48 relative overflow-hidden">
                        <Image
                          src={item.image || 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=300&fit=crop'}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-rose-600">
                          {categoryNames[item.category]}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-1 group-hover:text-rose-600 transition-colors">{item.title}</h3>
                        <p className="text-slate-500 text-sm line-clamp-2">{item.description}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
