import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Sparkles, Users, Crown, UserCheck, Briefcase, Award } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  // Bureau Exécutif
  {
    id: 1,
    name: 'M. Adéotan Jean-Paul ADEBOLOU',
    role: 'Directeur Exécutif',
    category: 'Bureau Exécutif',
    image: '/images/équipe/Directeur Exécutif.jpg'
  },
  {
    id: 2,
    name: 'Monsieur Sègla Firmin HINDENOU',
    role: 'Secrétaire Exécutif',
    category: 'Bureau Exécutif',
    image: '/images/équipe/Secrétaire Exécutif.jpg'
  },
  {
    id: 3,
    name: 'Mme Fifamè Alphonsine AHLONSOU',
    role: 'Trésorière Exécutive',
    category: 'Bureau Exécutif',
    image: '/images/équipe/Trésorière Exécutif.jpg'
  },
  // Chargés de mission
  {
    id: 4,
    name: 'Sébastien ZANNOU',
    role: 'Chargé de programme',
    category: 'Chargés de Mission',
    image: '/images/équipe/Chargé de programme.jpg'
  },
  {
    id: 5,
    name: 'SARE Kadydjath',
    role: 'Chargée des Partenariats et des Relations Extérieures',
    category: 'Chargés de Mission',
    image: '/images/équipe/Chargée des Partenariats et des Relations Extérieures.jpg'
  },
  // Présidents de commission
  {
    id: 6,
    name: 'Chrytilla TCHANHOUN',
    role: 'Présidente de la Commission Jeunesse Sport et Leadership',
    category: 'Présidents de Commission',
    image: '/images/équipe/Présidente de la Commission Jeunesse Sport et Leadership.jpg'
  },
  {
    id: 7,
    name: 'WANDJI Hermann',
    role: 'Président de la Commission Développement Durable et Innovation',
    category: 'Présidents de Commission',
    image: '/images/équipe/Président de la Commission Développement Durable et Innovation.jpg'
  }
];

export default function Team() {
  return (
    <>
      <Header />
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
              <span className="text-rose-700 font-bold text-sm">Notre Équipe</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              L'Équipe <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">FILLES+</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              Découvrez l'équipe dévouée qui transforme des vies au quotidien.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Bureau Exécutif */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Crown className="w-8 h-8 text-rose-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Bureau Exécutif</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {teamMembers.filter(member => member.category === 'Bureau Exécutif').map((member) => (
                  <Card
                    key={member.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-rose-600 mb-3">{member.role}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Chargés de Mission */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <UserCheck className="w-8 h-8 text-rose-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Chargés de Mission</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {teamMembers.filter(member => member.category === 'Chargés de Mission').map((member) => (
                  <Card
                    key={member.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-rose-600 mb-3">{member.role}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Présidents de Commission */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-rose-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Présidents de Commission</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {teamMembers.filter(member => member.category === 'Présidents de Commission').map((member) => (
                  <Card
                    key={member.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-rose-600 mb-3">{member.role}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6">
                <Users size={32} className="text-rose-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs Collectifs</h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Chaque membre de l'équipe FILLES+ partage une vision commune : créer un monde où chaque fille 
                a accès aux opportunités d'éducation, de santé et de leadership qui lui permet de réaliser son plein potentiel.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: 'Dévouement', desc: 'Engagement total envers la mission' },
                  { title: 'Empathie', desc: 'Écoute et soutien aux filles' },
                  { title: 'Excellence', desc: 'Qualité en toutes nos actions' }
                ].map((value, idx) => (
                  <Card key={idx} className="border-2 border-rose-200 p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-700">{value.desc}</p>
                  </Card>
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
