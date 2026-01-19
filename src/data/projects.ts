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
}

export const projects: Project[] = [
  {
    id: 'reinsertion-scolaire',
    title: 'Programme de Réinsertion Scolaire',
    description: 'Réinsertion des filles déscolarisées ou non scolarisées dans des parcours éducatifs adaptés, avec remise à niveau et alphabétisation.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    category: 'education',
    status: 'active',
    startDate: '2025-05-01',
    impact: 'Réinsertion progressive des filles déscolarisées'
  },
  {
    id: 'accompagnement-scolaire',
    title: 'Accompagnement Scolaire des Filles',
    description: 'Renforcement de la scolarisation, du maintien et de la réussite des filles dans le système éducatif formel avec suivi personnalisé.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    category: 'education',
    status: 'active',
    startDate: '2025-05-01',
    impact: 'Prévention du décrochage scolaire'
  },
  {
    id: 'protection-apprenties',
    title: 'Protection des Filles en Apprentissage',
    description: 'Outillage des filles placées ou en apprentissage en droits, leadership et compétences de vie, avec protection contre l\'exploitation.',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop',
    category: 'social',
    status: 'active',
    startDate: '2025-05-01',
    impact: 'Protection et autonomisation des apprenties'
  },
  {
    id: 'sensibilisation-communautaire',
    title: 'Sensibilisation Communautaire',
    description: 'Sensibilisation des familles, maîtres d\'apprentissage et leaders communautaires sur les droits des filles et l\'égalité de genre.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
    category: 'social',
    status: 'active',
    startDate: '2025-05-01',
    impact: 'Changement des mentalités communautaires'
  },
  {
    id: 'clubs-leadership',
    title: 'Clubs d\'Épanouissement Féminin',
    description: 'Création d\'espaces d\'expression et de leadership pour les filles, favorisant l\'estime de soi et le développement personnel.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    category: 'leadership',
    status: 'ongoing',
    startDate: '2025-06-01',
    impact: 'Développement du leadership féminin'
  },
  {
    id: 'formation-familles',
    title: 'Formation des Familles et Tuteurs',
    description: 'Formation des familles et tuteurs à la protection des filles, à l\'importance de l\'éducation et aux droits de l\'enfant.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
    category: 'social',
    status: 'active',
    startDate: '2025-05-01',
    impact: 'Implication familiale dans l\'émancipation des filles'
  }
];

export const categoryNames: Record<string, string> = {
  education: 'Éducation & Formation',
  health: 'Santé',
  leadership: 'Leadership',
  economic: 'Autonomisation Économique',
  social: 'Inclusion Sociale'
};
