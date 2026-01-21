import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Sparkles, Image as ImageIcon, Play } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Activités éducatives', category: 'Éducation', image: '/images/IMG-20260118-WA0001.jpg' },
  { id: 2, title: 'Formation professionnelle', category: 'Formation', image: '/images/IMG-20260118-WA0002.jpg' },
  { id: 3, title: 'Sensibilisation communautaire', category: 'Communauté', image: '/images/IMG-20260118-WA0003.jpg' },
  { id: 4, title: 'Ateliers leadership', category: 'Leadership', image: '/images/IMG-20260118-WA0003(1).jpg' },
  { id: 5, title: 'Réunion partenaires', category: 'Partenariats', image: '/images/IMG-20260118-WA0005.jpg' },
  { id: 6, title: 'Activités culturelles', category: 'Culture', image: '/images/IMG-20260118-WA0006.jpg' },
  { id: 7, title: 'Événements spéciaux', category: 'Événements', image: '/images/IMG-20260118-WA0007.jpg' },
  { id: 8, title: 'Actions terrain', category: 'Action', image: '/images/IMG-20260118-WA0008.jpg' },
  { id: 9, title: 'Témoignages', category: 'Impact', image: '/images/IMG-20260118-WA0009.jpg' },
  { id: 10, title: 'Formations familles', category: 'Familles', image: '/images/IMG-20260118-WA0010.jpg' },
  { id: 11, title: 'Clubs filles', category: 'Clubs', image: '/images/IMG-20260118-WA0011.jpg' },
  { id: 12, title: 'Projets communautaires', category: 'Communauté', image: '/images/IMG-20260118-WA0012.jpg' },
];

export default function Gallery() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Galerie', href: '/gallery' }
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
              <span className="text-rose-700 font-bold text-sm">Notre Galerie</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-gray-100 mb-6">
              Galerie de <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">Moments</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez nos actions en images. Les moments qui changent des vies.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {galleryItems.map(item => (
                <Card
                  key={item.id}
                  className="border-0 shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-4">
                    <span className="inline-block text-xs font-bold bg-rose-100 text-rose-700 px-3 py-1 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                  </div>
                </Card>
              ))}
            </div>

            {/* Gallery Info */}
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50 p-8">
                <div className="flex gap-4 mb-6">
                  <ImageIcon size={32} className="text-rose-600 flex-shrink-0" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 self-center">Notre Galerie</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-base sm:text-lg">
                  La galerie de photos de l'ONG FILLES+ montre la diversité de nos activités
                  et l'impact tangible de nos actions auprès des filles et jeunes femmes du Bénin.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                  Pour accéder à notre galerie complète avec vidéos HD et photos haute résolution,
                  <span className="font-semibold text-rose-600"> consultez nos réseaux sociaux</span> ou 
                  <span className="font-semibold text-rose-600"> contactez-nous directement</span>.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Vidéos Récentes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Regardez nos dernières vidéos d'impact et de témoignages</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {[1, 2].map(i => (
                <Card key={i} className="border-0 shadow-lg hover:shadow-xl overflow-hidden group cursor-pointer">
                  <div className="relative h-64 sm:h-72 bg-gradient-to-br from-rose-300 via-pink-300 to-fuchsia-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Play size={64} className="text-white opacity-75 group-hover:opacity-100 transition" fill="white" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2 text-lg">Vidéo {i}: Nos initiatives en action</h3>
                    <p className="text-sm text-gray-600">
                      Découvrez l'impact de notre travail auprès des filles du Bénin.
                    </p>
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
