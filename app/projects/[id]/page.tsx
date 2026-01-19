import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects, categoryNames } from '@/data/projects';
import Link from 'next/link';

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
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Projet Non Trouvé</h1>
            <Link href="/projects" className="text-pink-600 hover:text-pink-700 font-semibold">
              Retour aux projets →
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
              <Link href="/projects" className="text-pink-600 hover:text-pink-700">Projets</Link>
              <span>/</span>
              <span className="text-gray-600">{project.title}</span>
            </div>
          </div>
        </section>

        {/* Page Header */}
        <section className="bg-gradient-to-br from-pink-600 to-red-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg">{categoryNames[project.category]}</p>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Image */}
            <div className="h-96 bg-gradient-to-br from-pink-300 to-red-300 rounded-lg flex items-center justify-center mb-8">
              <span className="text-8xl">📚</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Info Cards */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">CATÉGORIE</h3>
                <p className="text-lg font-bold text-gray-800">{categoryNames[project.category]}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">STATUT</h3>
                <p className={`text-lg font-bold ${
                  project.status === 'active' ? 'text-green-600' :
                  project.status === 'completed' ? 'text-blue-600' :
                  'text-yellow-600'
                }`}>
                  {project.status === 'active' ? 'Actif' :
                   project.status === 'completed' ? 'Terminé' :
                   'En cours'}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">DATE DE DÉBUT</h3>
                <p className="text-lg font-bold text-gray-800">
                  {new Date(project.startDate).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long'
                  })}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>

              {project.impact && (
                <div className="bg-pink-50 border-l-4 border-pink-600 p-4">
                  <h3 className="font-bold text-gray-800 mb-2">Impact</h3>
                  <p className="text-gray-700">{project.impact}</p>
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Objectifs</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-pink-600 text-xl">✓</span>
                    <span className="text-gray-700">Améliorer l'accès à {categoryNames[project.category].toLowerCase()}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pink-600 text-xl">✓</span>
                    <span className="text-gray-700">Autonomiser les filles et jeunes femmes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pink-600 text-xl">✓</span>
                    <span className="text-gray-700">Créer un impact durable et transformateur</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Public Cible</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-pink-600 text-xl">👭</span>
                    <span className="text-gray-700">Filles scolarisées</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pink-600 text-xl">👭</span>
                    <span className="text-gray-700">Filles non scolarisées</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-pink-600 text-xl">👭</span>
                    <span className="text-gray-700">Jeunes femmes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-pink-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Vous souhaitez soutenir ce projet?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous pour en savoir plus sur comment contribuer à ce projet.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-pink-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Nous Contacter
            </Link>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Projets Similaires</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects
                .filter(p => p.category === project.category && p.id !== project.id)
                .slice(0, 3)
                .map(relatedProject => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="h-48 bg-gradient-to-br from-pink-300 to-red-300 flex items-center justify-center">
                      <span className="text-4xl">📚</span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-800 mb-2">{relatedProject.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{relatedProject.description}</p>
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
