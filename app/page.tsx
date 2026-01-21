import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { orgConfig } from '@/config/org';
import { projects } from '@/data/projects';
import { news } from '@/data/news';
import ProjectCard from '@/components/ProjectCard';
import NewsCard from '@/components/NewsCard';
import ValueCard from '@/components/ValueCard';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Target, Eye, Zap, Heart, Sparkles, ArrowRight } from 'lucide-react';
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
        <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden pt-4 sm:pt-0">
          {/* Background Gradient Premium */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
              <div className="absolute top-1/3 -right-20 w-80 h-80 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Grid Background Subtle */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5"></div>

          {/* Contenu */}
          <div className="relative container mx-auto px-4 z-10 max-w-5xl py-12 sm:py-0">
            <div className="text-center">
              {/* Badge Animé */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full px-6 py-3 mb-8 border border-rose-200 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all">
                <Sparkles size={18} className="text-rose-600 animate-spin" style={{animationDuration: '3s'}} />
                <span className="text-rose-700 text-sm font-bold">Transformez les vies des filles</span>
              </div>

              {/* Titre Principal Élégant */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                <span className="block">Empowerment</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600">Des Filles</span>
              </h1>

              {/* Sous-titre Premium */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-10 max-w-3xl leading-relaxed mx-auto font-medium">
                {orgConfig.slogan}
              </p>

              {/* Descriptif */}
              <p className="text-base sm:text-lg text-gray-900 mb-10 max-w-2xl leading-relaxed mx-auto">
                Nous transformons des vies à travers l'éducation, la santé, le leadership et l'inclusion sociale au Bénin.
              </p>

              {/* Boutons CTA Premium */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:from-rose-700 hover:to-pink-700 text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto font-bold"
                >
                  <Link href="/about" className="flex items-center justify-center gap-2">
                    Découvrir notre impact
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-white text-rose-600 hover:bg-gray-50 text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto font-bold border-2 border-white"
                >
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Soutenir notre mission
                    <Heart size={20} />
                  </Link>
                </Button>
              </div>

              {/* Stats Animées */}
              <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-8">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/20">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                    <AnimatedCounter end={5000} suffix="+" />
                  </div>
                  <div className="text-gray-900 text-xs sm:text-sm">Filles autonomisées</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/20">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                    <AnimatedCounter end={15} suffix="+" />
                  </div>
                  <div className="text-gray-900 text-xs sm:text-sm">Projets actifs</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/20">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                    <AnimatedCounter end={30} suffix="+" />
                  </div>
                  <div className="text-gray-900 text-xs sm:text-sm">Partenaires</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Vision & Mission</h2>
              <p className="text-lg text-gray-900 max-w-2xl mx-auto">
                Guidées par des valeurs fortes, nous travaillons chaque jour pour créer un impact durable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
                <div className="h-2 bg-gradient-to-r from-pink-600 to-red-600"></div>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-rose-100 rounded-lg">
                      <Target className="w-6 h-6 text-rose-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Notre Mission</h3>
                  </div>
                  <p className="text-gray-900 leading-relaxed">
                    {orgConfig.mission}
                  </p>
                </div>
              </Card>

              {/* Vision */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
                <div className="h-2 bg-gradient-to-r from-rose-600 to-pink-600"></div>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-rose-100 rounded-lg">
                      <Eye className="w-6 h-6 text-rose-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Notre Vision</h3>
                  </div>
                  <p className="text-gray-900 leading-relaxed">
                    {orgConfig.vision}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Statistics Section - Nouveau composant professionnel */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Impact Chiffré</h2>
                <p className="text-lg text-gray-900 max-w-2xl mx-auto">
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
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-rose-600 font-semibold text-sm sm:text-base">NOS PRINCIPES</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">Les valeurs qui nous guident</h2>
              <p className="text-base sm:text-lg text-gray-900 max-w-2xl mx-auto">
                Six piliers fondamentaux qui structurent nos actions et notre engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {orgConfig.values.map((value, idx) => (
                <ValueCard key={idx} value={value} />
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages - Nouveau composant professionnel */}
        <section className="py-20 bg-gradient-to-b from-rose-50 to-pink-50">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages</h2>
                <p className="text-lg text-gray-900 max-w-2xl mx-auto">
                  Découvrez l'impact de nos programmes à travers les voix de celles qui en bénéficient.
                </p>
              </div>

              <TestimonialCarousel
                testimonials={[
                  {
                    id: 1,
                    name: 'Marie Kounarou',
                    role: 'Bénéficiaire du programme Éducation',
                    content: 'Grâce à FILLES+, j\'ai pu reprendre mes études et réaliser mon rêve de devenir enseignante. Cette organisation m\'a donné les moyens de croire en moi.',
                    image: '/images/testimonials/marie.jpg'
                  },
                  {
                    id: 2,
                    name: 'Clarisse Mensah',
                    role: 'Jeune entrepreneur',
                    content: 'Le programme d\'autonomisation financière m\'a permis de lancer ma petite entreprise. Aujourd\'hui, j\'emploie 3 personnes dans mon village.',
                    image: '/images/testimonials/clarisse.jpg'
                  },
                  {
                    id: 3,
                    name: 'Sophie Bernard',
                    role: 'Coordinatrice communautaire',
                    content: 'FILLES+ a transformé notre communauté. Les filles sont plus confiantes, plus éduquées, et prêtes à prendre leur avenir en main.',
                    image: '/images/testimonials/sophie.jpg'
                  }
                ]}
              />
            </FadeInSection>
          </div>
        </section>

        {/* Projets en Vedette */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
              <div>
                <span className="text-rose-600 font-semibold text-sm sm:text-base">NOS PROJETS</span>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2">Initiatives en cours</h2>
              </div>
              <Link href="/projects" className="text-rose-600 font-semibold hover:text-rose-700 flex items-center gap-2 whitespace-nowrap">
                Voir tous les projets
                <ChevronRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Actualités */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-16 gap-4">
              <div>
                <span className="text-rose-600 font-semibold text-sm sm:text-base">ACTUALITÉS</span>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2">Dernières nouvelles</h2>
              </div>
              <Link href="/news" className="text-rose-600 font-semibold hover:text-rose-700 flex items-center gap-2 whitespace-nowrap">
                Lire tous les articles
                <ChevronRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {latestNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Appel à Action Final */}
        <section className="py-12 sm:py-20 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-screen blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Rejoignez notre mission</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Ensemble, nous pouvons créer un avenir meilleur pour les filles et jeunes femmes du Bénin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-rose-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-2xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto"
              >
                <Link href="/contact">Faire un don</Link>
              </Button>
              <Button
                asChild
                className="bg-white/20 backdrop-blur-md text-white hover:bg-white/30 border border-white/50 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl transition-all hover:scale-105 w-full sm:w-auto"
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
