// Données des projets de l'ONG FILLES+

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: 'education' | 'health' | 'leadership' | 'economic' | 'social';
  status: 'active' | 'completed' | 'ongoing';
  startDate: string;
  impact?: string;
  beneficiaries?: string[];
}

export const projects: Project[] = [
  {
    id: 'reinsertion-scolaire',
    title: 'Programme de Réinsertion Scolaire',
    description: 'Réinsertion des jeunes filles déscolarisées et non scolarisées dans des parcours éducatifs adaptés, avec remise à niveau et alphabétisation.',
    image: '/images/IMG-20260118-WA0001.jpg',
    category: 'education',
    status: 'active',
    startDate: '2025-05-01',
    impact: 'Réinsertion progressive des filles déscolarisées',
    beneficiaries: ['Jeunes filles déscolarisées', 'Jeunes filles non scolarisées', 'Familles vulnérables']
  },
  {
    id: 'accompagnement-scolaire',
    title: 'Accompagnement Scolaire des Filles',
    description: 'Renforcement de la scolarisation, du maintien et de la réussite des filles dans le système éducatif formel avec suivi personnalisé.',
    image: '/images/IMG-20260118-WA0002.jpg',
    category: 'education',
    status: 'active',
    startDate: '2025-05-01',
    impact: 'Prévention du décrochage scolaire',
    beneficiaries: ['Filles scolarisées (Primaire/Secondaire)', 'Parents d\'élèves', 'Enseignants et éducateurs']
  },
  {
    id: 'protection-apprenties',
    title: 'Protection des Filles en Apprentissage',
    description: 'Outillage des filles en apprentissage en droits, leadership et compétences de vie, avec protection contre l\'exploitation.',
    image: '/images/IMG-20260118-WA0003.jpg',
    category: 'social',
    status: 'active',
    startDate: '2025-05-01',
    impact: 'Protection et autonomisation des apprenties',
    beneficiaries: ['Filles en apprentissage', 'Maîtres d\'apprentissage', 'Artisans locaux']
  },
  {
    id: 'sensibilisation-communautaire',
    title: 'Sensibilisation Communautaire',
    description: 'Sensibilisation des familles, maîtres d\'apprentissage et leaders communautaires sur les droits des filles et l\'égalité de genre.',
    image: '/images/IMG-20260118-WA0005.jpg',
    category: 'social',
    status: 'active',
    startDate: '2025-05-01',
    impact: 'Changement des mentalités communautaires',
    beneficiaries: ['Leaders communautaires', 'Chefs religieux', 'Population locale']
  },
  {
    id: 'clubs-leadership',
    title: 'Clubs d\'Épanouissement Féminin',
    description: 'Création d\'espaces d\'expression et de leadership pour les filles, favorisant l\'estime de soi et le développement personnel.',
    image: '/images/IMG-20260118-WA0006.jpg',
    category: 'leadership',
    status: 'ongoing',
    startDate: '2025-06-01',
    impact: 'Développement du leadership féminin',
    beneficiaries: ['Adolescentes et jeunes filles', 'Élèves et étudiantes', 'Mentors féminins']
  },
  {
    id: 'formation-familles',
    title: 'Formation des Familles et Tuteurs',
    description: 'Formation des familles et tuteurs à la protection des filles, à l\'importance de l\'éducation et aux droits de l\'enfant.',
    image: '/images/IMG-20260118-WA0007.jpg',
    category: 'social',
    status: 'active',
    startDate: '2025-05-01',
    impact: 'Implication familiale dans l\'émancipation des filles',
    beneficiaries: ['Parents et tuteurs', 'Grands-parents', 'Responsables de foyers']
  }
];

export const categoryNames: Record<string, string> = {
  education: 'Éducation & Formation',
  health: 'Santé',
  leadership: 'Leadership',
  economic: 'Autonomisation Économique',
  social: 'Inclusion Sociale'
};
