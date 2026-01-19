import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Sparkles, Users, UserCheck, Briefcase, GraduationCap, Heart, MonitorSpeaker, Calculator } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Marie Kounarou',
    role: 'Directrice Générale',
    bio: 'Passionnée par l\'autonomisation des femmes avec 15 ans d\'expérience',
    icon: UserCheck
  },
  {
    id: 2,
    name: 'Amma Traore',
    role: 'Coordinatrice des Projets',
    bio: 'Experte en gestion de projets d\'impact social au Bénin',
    icon: Briefcase
  },
  {
    id: 3,
    name: 'Fatima Diallo',
    role: 'Responsable Formation',
    bio: 'Éducatrice dédiée aux programmes de leadership féminin',
    icon: GraduationCap
  },
  {
    id: 4,
    name: 'Clarisse Mensah',
    role: 'Responsable Santé',
    bio: 'Infirmière avec spécialisation en santé féminine',
    icon: Heart
  },
  {
    id: 5,
    name: 'Jade Osei',
    role: 'Coordinatrice Communication',
    bio: 'Spécialiste en communication et marketing social',
    icon: MonitorSpeaker
  },
  {
    id: 6,
    name: 'Sophie Bernard',
    role: 'Trésorière',
    bio: 'Experte en gestion financière des organisations NGO',
    icon: Calculator
  },
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
              Les Femmes <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">Derrière l'Impact</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              Décourez l'équipe dévouée qui transforme des vies au quotidien.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {teamMembers.map((member) => (
                <Card
                  key={member.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden group"
                >
                  <div className="h-40 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <member.icon className="w-16 h-16 text-rose-600" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-rose-600 mb-3">{member.role}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </Card>
              ))}
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
