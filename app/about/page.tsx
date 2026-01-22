import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ValueCard from '@/components/ValueCard';
import { orgConfig } from '@/config/org';
import { Card } from '@/components/ui/card';
import { CheckCircle, Target, Eye, Heart, Sparkles, BookOpen, Shield, Crown, Users, Globe, Scale } from 'lucide-react';

const valueIcons: Record<string, React.ComponentType<any>> = {
  'Éducation de qualité': BookOpen,
  'Protection des droits': Shield,
  'Leadership féminin': Crown,
  'Inclusion sociale': Users,
  'Approche communautaire': Globe,
  'Égalité de genre': Scale
};

export default function About() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'À propos', href: '/about' }
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
              <span className="text-rose-700 font-bold text-sm">Nos Racines</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              À propos de <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">FILLES+</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre histoire, notre mission et les valeurs qui guident chaque action pour l'autonomisation des filles béninoises.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
              {/* Mission */}
              <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="h-1 bg-gradient-to-r from-rose-600 to-pink-600"></div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-rose-100 rounded-lg">
                      <Target className="w-6 h-6 text-rose-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Notre Mission</h2>
                  </div>
                  <p className="text-gray-900 leading-relaxed mb-8 text-lg">
                    {orgConfig.mission}
                  </p>
                  <div className="space-y-3">
                    <p className="text-sm font-bold text-gray-900 mb-4">Nos axes d'action :</p>
                    {[
                      'Éducation et formation',
                      'Santé et hygiène féminine',
                      'Leadership et citoyenneté',
                      'Autonomisation économique',
                      'Inclusion sociale'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-rose-600 flex-shrink-0" />
                        <span className="text-gray-900">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Vision */}
              <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="h-1 bg-gradient-to-r from-pink-600 to-fuchsia-600"></div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-pink-100 rounded-lg">
                      <Eye className="w-6 h-6 text-pink-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Notre Vision</h2>
                  </div>
                  <p className="text-gray-900 leading-relaxed mb-8 text-lg">
                    {orgConfig.vision}
                  </p>
                  <div className="space-y-3">
                    <p className="text-sm font-bold text-gray-900 mb-4">Ce que nous construisons :</p>
                    {[
                      'Une société d\'égalité en éducation',
                      'Des filles autonomes et indépendantes',
                      'Un leadership féminin visible',
                      'Une économie inclusive et équitable',
                      'Une génération empowerée'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Heart size={18} className="text-pink-600 flex-shrink-0" />
                        <span className="text-gray-900">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs Fondamentales</h2>
              <p className="text-gray-900 max-w-2xl mx-auto text-lg">
                Nos 6 piliers guident chaque action et décision de l'ONG FILLES+
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {orgConfig.values.map((value, index) => (
                <ValueCard
                  key={index}
                  value={value}
                />
              ))}
            </div>
          </div>
        </section>

        {/* History & Achievements */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Notre Parcours</h2>
              <p className="text-gray-900">Une histoire de passion et d'engagement envers les filles béninoises</p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* Timeline Modern */}
              <div className="space-y-8 sm:space-y-10">
                {[
                  {
                    year: '2020',
                    title: 'Fondation de l\'ONG',
                    description: 'FILLES+ est créée avec la vision de transformer la vie des filles béninoises.'
                  },
                  {
                    year: '2021',
                    title: 'Premiers programmes',
                    description: 'Lancement des programmes de formation en éducation et santé féminine.'
                  },
                  {
                    year: '2022',
                    title: 'Expansion régionale',
                    description: 'Extension des programmes à de nouvelles régions du Bénin.'
                  },
                  {
                    year: '2023',
                    title: 'Partenariats stratégiques',
                    description: 'Signature d\'accords avec des partenaires nationaux et internationaux.'
                  },
                  {
                    year: '2024',
                    title: 'Centre Intégré',
                    description: 'Inauguration du Centre Intégré FILLES+ pour un soutien holistique.'
                  }
                ].map((event, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-rose-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                      {index < 4 && <div className="w-1 h-20 bg-gradient-to-b from-rose-300 to-transparent mt-2"></div>}
                    </div>
                    <div className="pb-8 flex-1">
                      <span className="inline-block bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm font-bold mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">{event.title}</h3>
                      <p className="text-gray-900 mt-3 text-base">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Premium */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-screen blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { stat: '500+', label: 'Filles formées' },
                { stat: '6', label: 'Domaines d\'action' },
                { stat: '5+', label: 'Partenaires' },
                { stat: '100%', label: 'Impact Bénin' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl sm:text-5xl font-black mb-3">{item.stat}</div>
                  <p className="text-base sm:text-lg font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
