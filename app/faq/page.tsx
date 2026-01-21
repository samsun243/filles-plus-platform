import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FAQ } from '@/components/Accordion';
import FadeInSection from '@/components/FadeInSection';
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const faqItems = [
  {
    question: "Qu'est-ce que l'ONG FILLES+ ?",
    answer: "FILLES+ est une organisation non gouvernementale béninoise dédiée à l'autonomisation, l'éducation et la protection des filles et jeunes femmes. Nous travaillons depuis plusieurs années pour créer un impact durable dans les communautés du Bénin."
  },
  {
    question: "Quels sont vos domaines d'intervention ?",
    answer: "Nous intervenons dans six domaines principaux : l'éducation de qualité, la protection des droits des filles, le leadership féminin, l'inclusion sociale, l'approche communautaire et l'égalité de genre. Chaque domaine est traité de manière holistique pour assurer un impact durable."
  },
  {
    question: "Comment puis-je soutenir votre mission ?",
    answer: "Vous pouvez nous soutenir de plusieurs manières : faire un don financier, devenir bénévole, parrainer un projet spécifique, organiser une collecte de fonds, ou encore nous aider à sensibiliser votre entourage à notre cause. Contactez-nous pour discuter des possibilités."
  },
  {
    question: "Comment devenir partenaire de FILLES+ ?",
    answer: "Nous travaillons avec différents types de partenaires : gouvernements, ONG internationales, secteur privé, organisations éducatives et communautaires. Si vous souhaitez devenir partenaire, contactez notre chargée des partenariats pour discuter des opportunités de collaboration."
  },
  {
    question: "Quels sont vos critères pour sélectionner les bénéficiaires ?",
    answer: "Nous sélectionnons nos bénéficiaires selon des critères d'équité et d'impact : situation de vulnérabilité économique, âge (principalement 12-25 ans), motivation personnelle, et potentiel d'impact positif sur leur communauté. Chaque candidature est étudiée individuellement."
  },
  {
    question: "Comment mesurer l'impact de vos programmes ?",
    answer: "Nous utilisons plusieurs indicateurs : taux de scolarisation, taux d'insertion professionnelle, niveau d'autonomie financière, participation communautaire, et évolution des mentalités. Nous publions régulièrement nos rapports d'impact et travaillons avec des évaluateurs externes."
  },
  {
    question: "Proposez-vous des stages ou du bénévolat ?",
    answer: "Oui, nous accueillons régulièrement des stagiaires et bénévoles motivés. Les opportunités varient selon les saisons et les projets en cours. Si vous êtes intéressé, contactez-nous avec votre CV et vos motivations."
  },
  {
    question: "Comment puis-je faire un don ?",
    answer: "Vous pouvez faire un don en ligne via notre site web, par virement bancaire, ou en espèces lors de nos événements. Tous les dons sont déductibles fiscalement. Pour les dons importants, nous pouvons établir des conventions de mécénat."
  },
  {
    question: "Où sont situés vos bureaux ?",
    answer: "Notre siège social est situé à Pobè, quartier Ichèko, M/GANMENON, département du Plateau au Bénin. Nous avons également des antennes dans plusieurs communes et travaillons dans tout le pays à travers nos partenaires locaux."
  },
  {
    question: "Comment suivre l'actualité de FILLES+ ?",
    answer: "Suivez-nous sur nos réseaux sociaux (Facebook, Twitter, Instagram, LinkedIn), abonnez-vous à notre newsletter, et consultez régulièrement notre site web. Nous publions des actualités, témoignages, et rapports d'impact."
  }
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center overflow-hidden py-12 sm:py-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
            </div>
          </div>

          <div className="relative container mx-auto px-4 z-10 text-center py-16 sm:py-20">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-rose-200">
              <HelpCircle size={20} className="text-rose-600" />
              <span className="text-rose-700 font-medium">Questions Fréquentes</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Vous avez des <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">questions</span> ?
            </h1>
            <p className="text-lg sm:text-xl text-gray-900 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur notre mission, nos programmes et comment nous soutenir.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <FAQ items={faqItems} />
            </FadeInSection>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Vous n'avez pas trouvé votre réponse ?
                </h2>
                <p className="text-lg text-gray-900 max-w-2xl mx-auto">
                  Notre équipe est là pour vous aider. N'hésitez pas à nous contacter directement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {/* Email */}
                <Card className="p-6 text-center hover:shadow-lg transition-all border-0 bg-white/80 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-rose-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-900 mb-4">Réponse sous 24h</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="mailto:ongfillesplus@gmail.com">Écrire</Link>
                  </Button>
                </Card>

                {/* Téléphone */}
                <Card className="p-6 text-center hover:shadow-lg transition-all border-0 bg-white/80 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Téléphone</h3>
                  <p className="text-gray-900 mb-4">Lun-Ven 8h-17h</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="tel:+22997760992">Appeler</Link>
                  </Button>
                </Card>

                {/* Chat */}
                <Card className="p-6 text-center hover:shadow-lg transition-all border-0 bg-white/80 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-fuchsia-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Chat en ligne</h3>
                  <p className="text-gray-900 mb-4">Réponse immédiate</p>
                  <Button asChild className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700">
                    <Link href="/contact">Commencer</Link>
                  </Button>
                </Card>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}