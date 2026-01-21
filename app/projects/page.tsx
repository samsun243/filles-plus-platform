import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ProjectCard from '@/components/ProjectCard';
import { projects, categoryNames } from '@/data/projects';
import { Card } from '@/components/ui/card';
import { Sparkles, Zap, Target } from 'lucide-react';

export default function Projects() {
  const categories = Object.keys(categoryNames) as Array<keyof typeof categoryNames>;

  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Projets', href: '/projects' }
        ]}
      />
      <main className="overflow-hidden">
        {/* Page Hero */}
        <section className="relative min-h-[45vh] flex items-center overflow-hidden py-12 sm:py-0">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop" 
              alt="ONG FILLES+ - Projets éducatifs et empowerment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-rose-900/80 via-pink-900/70 to-fuchsia-900/80"></div>
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
            </div>
          </div>

          <div className="relative container mx-auto px-4 z-10 text-center py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full px-6 py-3 mb-6 border border-rose-200">
              <Sparkles size={18} className="text-rose-600" />
              <span className="text-rose-700 font-bold text-sm">Nos Initiatives</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-gray-100 mb-6">
              Nos <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">Projets</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez les initiatives majeures qui transforment des vies à travers l'éducation, la santé et le leadership.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                L'ONG FILLES+ déploie des initiatives stratégiques pour atteindre sa mission d'autonomisation. 
                Chaque projet répond à des besoins spécifiques et crée un impact durable.
              </p>
            </div>

            {/* Projects by Category */}
            {categories.map(category => {
              const categoryProjects = projects.filter(p => p.category === category);
              if (categoryProjects.length === 0) return null;

              return (
                <div key={category} className="mb-16 sm:mb-20">
                  <div className="flex items-center gap-3 mb-8 sm:mb-12">
                    <div className="p-2 bg-rose-100 rounded-lg">
                      <Zap size={24} className="text-rose-600" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 pb-0">
                      {categoryNames[category]}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {categoryProjects.map(project => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Detailed Projects Info */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Impact Détaillé</h2>
              <p className="text-gray-600">Découvrez le potentiel et l'impact de chaque projet</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {projects.map(project => (
                <Card key={project.id} className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-rose-600 to-pink-600"></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
                      <span className="text-xs font-bold bg-rose-100 text-rose-700 px-3 py-1 rounded-full">
                        {categoryNames[project.category]}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    {project.impact && (
                      <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-4 rounded-lg border-l-4 border-rose-600">
                        <p className="text-sm text-gray-900 dark:text-gray-100">
                          <Target className="inline w-4 h-4 text-rose-600 mr-1" /> <span className="font-bold text-rose-600">Impact:</span> {project.impact}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
