import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import PartnerCard from '@/components/PartnerCard';
import { partners, partnerTypeLabels } from '@/data/partners';
import { Sparkles, Zap, Lightbulb, Users, DollarSign } from 'lucide-react';

export default function Partners() {
  const partnerTypes = Object.keys(partnerTypeLabels) as Array<keyof typeof partnerTypeLabels>;

  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Partenaires', href: '/partners' }
        ]}
      />
      <main className="overflow-hidden">
        {/* Page Hero */}
        <section className="relative min-h-[45vh] flex items-center overflow-hidden py-12 sm:py-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
            </div>
          </div>

          <div className="relative container mx-auto px-4 z-10 text-center py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full px-6 py-3 mb-6 border border-rose-200">
              <Sparkles size={18} className="text-rose-600" />
              <span className="text-rose-700 font-bold text-sm">Nos Partenaires</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-gray-100 mb-6">
              Ensemble pour <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">l'Impact</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez les organisations et acteurs qui soutiennent notre mission d'empowerment.
            </p>
          </div>
        </section>

        {/* Partners by Type */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            {partnerTypes.map(type => {
              const typePartners = partners.filter(p => p.type === type);
              if (typePartners.length === 0) return null;

              return (
                <div key={type} className="mb-16 sm:mb-20">
                  <div className="flex items-center gap-3 mb-8 sm:mb-12">
                    <div className="p-2 bg-rose-100 rounded-lg">
                      <Zap size={24} className="text-rose-600" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                      {partnerTypeLabels[type]}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {typePartners.map(partner => (
                      <PartnerCard key={partner.id} partner={partner} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Devenir Partenaire</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Rejoignez nos efforts pour créer un impact durable</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Nous recherchons des partenaires</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-8 text-base sm:text-lg leading-relaxed">
                  L'ONG FILLES+ est toujours à la recherche de partenaires pour renforcer son impact
                  et élargir ses services. Si votre organisation partage nos valeurs et souhaite
                  contribuer à l'autonomisation des filles béninoises, nous aimerions discuter d'une
                  collaboration.
                </p>

                <div className="space-y-5 mb-8">
                  <div className="flex gap-4">
                    <Lightbulb size={32} className="text-rose-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-lg">Partenariat en ressources</h4>
                      <p className="text-gray-700 dark:text-gray-300">Fourniture de matériel, équipement ou expertise</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Users size={32} className="text-rose-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-lg">Partenariat en main-d'œuvre</h4>
                      <p className="text-gray-700 dark:text-gray-300">Mise à disposition de personnel ou bénévoles</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <DollarSign size={32} className="text-rose-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-lg">Partenariat financier</h4>
                      <p className="text-gray-700 dark:text-gray-300">Contribution financière pour des projets spécifiques</p>
                    </div>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:from-rose-700 hover:to-pink-700 transition-all hover:shadow-lg"
                >
                  Nous Contacter
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
