import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Card } from '@/components/ui/card';
import { Sparkles, Users, Crown, UserCheck, Briefcase, Award, MapPin } from 'lucide-react';
import Image from 'next/image';
import TeamAvatar from '@/components/TeamAvatar';
import TeamGrid from '@/components/TeamGrid';

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
  },
  // Nouveaux membres
  {
    id: 8,
    name: 'Alice SARA KPERA',
    role: 'Présidente de la Commission Hygiène et Santé',
    category: 'Présidents de Commission',
    image: '/images/équipe/Présidente de la Commission Hygiène et Santé.jpg'
  },
  {
    id: 9,
    name: 'Z. Pacôme GBEDINHESSI',
    role: 'Président Commission Éducation',
    category: 'Présidents de Commission',
    image: '/images/équipe/Président Commission Éducation.jpg'
  },
  {
    id: 10,
    name: 'Jeannette FAKOREDE',
    role: 'Présidente de la Commission Autonomisation Économique',
    category: 'Présidents de Commission',
    image: '/images/équipe/Présidente de la Commission Autonomisation Économique.jpg'
  },
  {
    id: 11,
    name: 'Codjo Mathieu CAKPO',
    role: 'Coordonnateur Communal Akpro - Missérété',
    category: 'Coordonnateurs Communaux',
    image: '/images/équipe/Coordonnateur Communal Akpro - Missérété.jpg'
  },
  {
    id: 13,
    name: 'A. Alexis SOGNIGBE',
    role: 'Coordonnateur Porto-Novo',
    category: 'Coordonnateurs Communaux',
    image: '/images/équipe/Coordonnateur Porto-Novo.jpg'
  },
  {
    id: 12,
    name: 'ADEGBOLA Armelle',
    role: 'Coordonnateur Adja Ouèrè',
    category: 'Coordonnateurs Communaux',
    image: '/images/équipe/Coordonnateur Adja Ouèrè.jpg'
  }
  ,
  {
    id: 14,
    name: 'A. Paul KOSSOLOU',
    role: 'Coordonnateur Kétou',
    category: 'Coordonnateurs Communaux',
    image: '/images/équipe/Coordonnateur Kétou.jpg'
  }
];

export default function Team() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Équipe', href: '/team' }
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
              <span className="text-rose-700 font-bold text-sm">Notre Équipe</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              L'Équipe <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">FILLES+</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-900 max-w-2xl mx-auto">
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
              <TeamGrid members={teamMembers.filter(member => member.category === 'Bureau Exécutif')} />
            </div>

            {/* Chargés de Mission */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <UserCheck className="w-8 h-8 text-rose-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Chargés de Mission</h2>
              </div>
              <TeamGrid members={teamMembers.filter(member => member.category === 'Chargés de Mission')} />
            </div>

            {/* Présidents de Commission */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-rose-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Présidents de Commission</h2>
              </div>
              <TeamGrid members={teamMembers.filter(member => member.category === 'Présidents de Commission')} />
            </div>

            {/* Coordonnateurs Communaux */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-8 h-8 text-rose-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Coordonnateurs Communaux</h2>
              </div>
              <TeamGrid members={teamMembers.filter(member => member.category === 'Coordonnateurs Communaux')} />
            </div>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-r from-rose-50 via-pink-50 to-fuchsia-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Notre Impact Collectif</h2>
              <p className="text-lg text-gray-900 max-w-2xl mx-auto">
                Ensemble, nous transformons des vies et bâtissons un avenir meilleur pour les filles du Bénin
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="stat bg-white rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="stat-figure text-primary mb-2">
                  <Users className="w-8 h-8" />
                </div>
                <div className="stat-value text-2xl font-bold text-primary">5000+</div>
                <div className="stat-title text-sm font-semibold text-gray-900">Filles autonomisées</div>
                <div className="stat-desc text-xs text-gray-900 mt-1">Depuis 2025</div>
              </div>

              <div className="stat bg-white rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="stat-figure text-gray-700 mb-2">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div className="stat-value text-2xl font-bold text-gray-900">15+</div>
                <div className="stat-title text-sm font-semibold text-gray-900">Projets actifs</div>
                <div className="stat-desc text-xs text-gray-900 mt-1">Dans tout le Bénin</div>
              </div>

              <div className="stat bg-white rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="stat-figure text-gray-700 mb-2">
                  <Award className="w-8 h-8" />
                </div>
                <div className="stat-value text-2xl font-bold text-gray-900">30+</div>
                <div className="stat-title text-sm font-semibold text-gray-900">Partenaires</div>
                <div className="stat-desc text-xs text-gray-900 mt-1">Institutions & ONG</div>
              </div>

              <div className="stat bg-white rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 shadow-lg">
                <div className="stat-figure text-primary mb-2">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="stat-value text-2xl font-bold text-primary">12</div>
                <div className="stat-title text-sm font-semibold text-gray-900">Communes</div>
                <div className="stat-desc text-xs text-gray-900 mt-1">Couvertes</div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="alert bg-white text-gray-900 shadow-lg max-w-md mx-auto border border-gray-200 p-4 rounded-lg flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6 text-rose-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Rejoignez notre mission !</div>
                  <div className="text-sm text-gray-700">Chaque membre compte pour transformer des vies</div>
                </div>
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
              <p className="text-gray-900 text-lg mb-8 leading-relaxed">
                Chaque membre de l'équipe FILLES+ partage une vision commune : créer un monde où chaque fille 
                a accès aux opportunités d'éducation, de santé et de leadership qui lui permet de réaliser son plein potentiel.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="stat bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-4">
                  <div className="stat-figure text-primary">
                    <Sparkles className="inline-block w-8 h-8 stroke-current" />
                  </div>
                  <div className="stat-title text-gray-900">Dévouement</div>
                  <div className="stat-desc text-gray-900">Engagement total envers la mission</div>
                </div>
                <div className="stat bg-gradient-to-br from-pink-50 to-fuchsia-50 rounded-lg p-4">
                  <div className="stat-figure text-secondary">
                    <Users className="inline-block w-8 h-8 stroke-current" />
                  </div>
                  <div className="stat-title text-gray-900">Empathie</div>
                  <div className="stat-desc text-gray-900">Écoute et soutien aux filles</div>
                </div>
                <div className="stat bg-gradient-to-br from-fuchsia-50 to-rose-50 rounded-lg p-4">
                  <div className="stat-figure text-accent">
                    <Award className="inline-block w-8 h-8 stroke-current" />
                  </div>
                  <div className="stat-title text-gray-900">Excellence</div>
                  <div className="stat-desc text-gray-900">Qualité en toutes nos actions</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
