import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { orgConfig } from '@/config/org';
import { projects } from '@/data/projects';
import { news } from '@/data/news';
import ProjectCard from '@/components/ProjectCard';
import NewsCard from '@/components/NewsCard';
import ValueCard from '@/components/ValueCard';
import { Button } from '@/components/ui/button';
import { ChevronRight, Target, Eye, Heart, Sparkles, ArrowRight } from 'lucide-react';
// Nouveaux composants professionnels
import FadeInSection from '@/components/FadeInSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import StatsGrid from '@/components/StatsGrid';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const latestNews = news.slice(0, 3);

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section Ultra Moderne */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-rose-50/50">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-1000"></div>
            <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-fuchsia-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-2000"></div>
          </div>

          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
            backgroundImage: `radial-gradient(#e11d48 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}>
          </div>

          {/* Contenu */}
          <div className="relative container mx-auto px-4 z-10 py-12 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge Animé */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-rose-100 rounded-full px-5 py-2 mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                </span>
                <span className="text-rose-700 text-sm font-semibold tracking-wide uppercase">Transformez des avenirs</span>
              </div>

              {/* Titre Principal */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-slate-900 mb-8 leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
                L&apos;Autonomisation <br className="hidden sm:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600">des Filles au Bénin</span>
              </h1>

              {/* Sous-titre */}
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                {orgConfig.slogan} <br className="hidden md:block" />
                Nous œuvrons pour un monde où chaque fille peut réaliser son plein potentiel.
              </p>

              {/* Boutons CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
                <Button
                  asChild
                  className="bg-rose-600 hover:bg-rose-700 text-white text-base sm:text-lg px-8 py-6 rounded-full shadow-xl shadow-rose-200 hover:shadow-2xl hover:shadow-rose-300 transition-all hover:-translate-y-1 font-semibold"
                >
                  <Link href="/about" className="flex items-center justify-center gap-2">
                    Découvrir notre impact
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-rose-200 text-base sm:text-lg px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 font-semibold"
                >
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Soutenir notre mission
                    <Heart size={20} className="text-rose-500" />
                  </Link>
                </Button>
              </div>

              {/* Stats Rapides */}
              <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 border-t border-slate-100 pt-12 animate-in fade-in zoom-in-95 duration-1000 delay-700">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                    <AnimatedCounter end={5000} suffix="+" />
                  </div>
                  <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">Filles impactées</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                    <AnimatedCounter end={15} suffix="+" />
                  </div>
                  <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">Projets actifs</div>
                </div>
                <div className="text-center col-span-2 md:col-span-1">
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                    <AnimatedCounter end={30} suffix="+" />
                  </div>
                  <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">Partenaires</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section Modernisée */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <span className="text-rose-600 font-bold tracking-widest text-sm uppercase mb-3 block">Notre Raison d&apos;être</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Vision & Mission</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Guidées par des valeurs fortes, nous travaillons chaque jour pour créer un impact durable dans la vie des filles béninoises.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Mission */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-50 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
                <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-xl ring-1 ring-slate-900/5 hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 text-rose-600 shadow-sm">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Notre Mission</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {orgConfig.mission}
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative group mt-6 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-fuchsia-50 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500"></div>
                <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-xl ring-1 ring-slate-900/5 hover:shadow-2xl transition-all duration-500">
                  <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-8 text-pink-600 shadow-sm">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Notre Vision</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {orgConfig.vision}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Notre Impact Chiffré</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Des résultats concrets qui témoignent de notre engagement quotidien.
                </p>
              </div>

              <StatsGrid
                stats={[
                  {
                    id: 'girls-educated',
                    title: 'Filles formées',
                    value: 5000,
                    suffix: '+',
                    description: 'Éducation et autonomisation',
                    color: 'rose'
                  },
                  {
                    id: 'communities',
                    title: 'Communautés',
                    value: 25,
                    suffix: '+',
                    description: 'Impactées positivement',
                    color: 'blue'
                  },
                  {
                    id: 'projects',
                    title: 'Projets',
                    value: 15,
                    suffix: '+',
                    description: 'En cours ou terminés',
                    color: 'green'
                  },
                  {
                    id: 'partners',
                    title: 'Partenaires',
                    value: 30,
                    suffix: '+',
                    description: 'Organisations engagées',
                    color: 'purple'
                  }
                ]}
                columns={4}
              />
            </FadeInSection>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <span className="text-rose-600 font-bold tracking-widest text-sm uppercase mb-3 block">Nos Principes</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Ce qui nous guide</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Six piliers fondamentaux qui structurent nos actions et notre engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {orgConfig.values.map((value, idx) => (
                <div key={idx} className="group">
                  <ValueCard value={value} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-24 bg-gradient-to-b from-rose-50 to-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Témoignages</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Découvrez l&apos;impact de nos programmes à travers les voix de celles qui en bénéficient.
                </p>
              </div>

              <TestimonialCarousel
                testimonials={[
                  {
                    id: 1,
                    name: 'Marie Kounarou',
                    role: 'Bénéficiaire du programme Éducation',
                    content: 'Grâce à FILLES+, j&apos;ai pu reprendre mes études et réaliser mon rêve de devenir enseignante. Cette organisation m&apos;a donné les moyens de croire en moi.',
                    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=800&fit=crop'
                  },
                  {
                    id: 2,
                    name: 'Clarisse Mensah',
                    role: 'Jeune entrepreneur',
                    content: 'Le programme d&apos;autonomisation financière m&apos;a permis de lancer ma petite entreprise. Aujourd&apos;hui, j&apos;emploie 3 personnes dans mon village.',
                    image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=800&h=800&fit=crop'
                  },
                  {
                    id: 3,
                    name: 'Sophie Bernard',
                    role: 'Coordinatrice communautaire',
                    content: 'FILLES+ a transformé notre communauté. Les filles sont plus confiantes, plus éduquées, et prêtes à prendre leur avenir en main.',
                    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&h=800&fit=crop'
                  }
                ]}
              />
            </FadeInSection>
          </div>
        </section>

        {/* Projets en Vedette */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
              <div>
                <span className="text-rose-600 font-bold tracking-widest text-sm uppercase mb-2 block">Nos Initiatives</span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900">Projets Récents</h2>
              </div>
              <Link href="/projects" className="text-rose-600 font-semibold hover:text-rose-700 flex items-center gap-2 whitespace-nowrap transition-colors group">
                Voir tous les projets
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Actualités */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
              <div>
                <span className="text-rose-600 font-bold tracking-widest text-sm uppercase mb-2 block">Blog</span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900">Dernières Actualités</h2>
              </div>
              <Link href="/news" className="text-rose-600 font-semibold hover:text-rose-700 flex items-center gap-2 whitespace-nowrap transition-colors group">
                Lire tous les articles
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Appel à Action Final */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900 to-slate-900 opacity-90"></div>

          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
          </div>

          <div className="relative container mx-auto px-4 text-center z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white tracking-tight">Rejoignez notre mission</h2>
            <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ensemble, nous pouvons créer un avenir meilleur pour les filles et jeunes femmes du Bénin. Votre soutien fait la différence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-rose-900/50 hover:shadow-xl transition-all hover:scale-105 font-bold"
              >
                <Link href="/contact">Faire un don</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-white border-slate-600 hover:bg-slate-800 hover:text-white text-lg px-8 py-6 rounded-full transition-all hover:scale-105 font-bold"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
