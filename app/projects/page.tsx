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
        {/* Page Hero Modernisé */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </div>

          <div className="relative container mx-auto px-4 z-10 text-center py-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-8 border border-blue-200/50">
              <Sparkles size={18} className="text-blue-600" />
              <span className="text-blue-700 font-bold text-sm">Nos Initiatives</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Nos <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Projets</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez les initiatives majeures qui transforment des vies à travers l'éducation, la santé et le leadership au Bénin.
            </p>
          </div>
        </section>

        {/* Projects Grid Modernisé */}
        <section className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="mb-20 text-center">
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                L'ONG FILLES+ déploie des initiatives stratégiques pour atteindre sa mission d'autonomisation.
                Chaque projet répond à des besoins spécifiques et crée un impact durable dans les communautés.
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
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pb-0">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Impact Détaillé</h2>
              <p className="text-gray-900">Découvrez le potentiel et l'impact de chaque projet</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {projects.map(project => (
                <Card key={project.id} className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-rose-600 to-pink-600"></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                      <span className="text-xs font-bold bg-rose-100 text-rose-700 px-3 py-1 rounded-full">
                        {categoryNames[project.category]}
                      </span>
                    </div>
                    <p className="text-gray-900 mb-4 leading-relaxed">{project.description}</p>
                    {project.impact && (
                      <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-4 rounded-lg border-l-4 border-rose-600">
                        <p className="text-sm text-gray-900">
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
