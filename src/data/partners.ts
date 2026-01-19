// Partenaires de l'ONG FILLES+

export interface Partner {
  id: string;
  name: string;
  description: string;
  logo?: string;
  website?: string;
  type: 'government' | 'ngo' | 'corporate' | 'international' | 'educational';
}

export const partners: Partner[] = [
  {
    id: 'unicef',
    name: 'UNICEF Bénin',
    description: 'Fonds des Nations Unies pour l\'enfance - Partenaire pour les droits des enfants et l\'éducation des filles.',
    logo: 'https://www.unicef.org/benin/sites/unicef.org.benin/files/styles/logo/public/UNICEF-logo_0.png',
    type: 'international',
    website: 'https://unicef.org/benin'
  },
  {
    id: 'pnud',
    name: 'Programme des Nations Unies pour le Développement (PNUD)',
    description: 'Soutien au développement durable et à la réduction des inégalités au Bénin.',
    logo: 'https://www.bj.undp.org/sites/g/files/zskgke326/files/styles/logo/public/2023-01/UNDP_Logo_Blue_RGB.png',
    type: 'international',
    website: 'https://pnud.org/benin'
  },
  {
    id: 'unesco',
    name: 'UNESCO Bénin',
    description: 'Organisation des Nations Unies pour l\'éducation, la science et la culture.',
    logo: 'https://www.unesco.org/sites/default/files/styles/logo/public/2023-03/unesco-logo-en.png',
    type: 'international',
    website: 'https://unesco.org/benin'
  },
  {
    id: 'unfpa',
    name: 'Fonds des Nations Unies pour la Population (UNFPA)',
    description: 'Soutien à la santé reproductive et aux droits des femmes et des filles.',
    logo: 'https://www.unfpa.org/sites/default/files/styles/logo/public/2023-03/UNFPA-logo_0.png',
    type: 'international',
    website: 'https://unfpa.org/benin'
  },
  {
    id: 'plan-international',
    name: 'Plan International Bénin',
    description: 'ONG internationale spécialisée dans les droits des enfants et l\'égalité des filles.',
    logo: 'https://plan-international.org/wp-content/themes/plan/images/logo.svg',
    type: 'ngo',
    website: 'https://plan-international.org/benin'
  },
  {
    id: 'enabel',
    name: 'Enabel (Agence belge de développement)',
    description: 'Coopération belge au développement - Partenaire pour l\'éducation et l\'égalité des genres.',
    logo: 'https://www.enabel.be/sites/default/files/styles/logo/public/2023-03/enabel-logo.png',
    type: 'international',
    website: 'https://enabel.be'
  },
  {
    id: 'oif',
    name: 'Organisation Internationale de la Francophonie',
    description: 'Promotion de la langue française et soutien aux politiques éducatives.',
    logo: 'https://www.francophonie.org/sites/default/files/styles/logo/public/2023-03/logo-oif.png',
    type: 'international',
    website: 'https://francophonie.org'
  },
  {
    id: 'memp',
    name: 'Ministère de l\'Enseignement Maternel et Primaire (MEMP)',
    description: 'Ministère chargé de l\'éducation de base au Bénin.',
    logo: 'https://www.memp.bj/wp-content/themes/memp/images/logo.png',
    type: 'government',
    website: 'https://memp.bj'
  },
  {
    id: 'mesftfp',
    name: 'Ministère de l\'Enseignement Supérieur, de la Formation Technique et Professionnelle',
    description: 'Ministère responsable de l\'enseignement technique et de la formation professionnelle.',
    logo: 'https://www.mesftfp.bj/wp-content/uploads/2023/03/logo-mesftfp.png',
    type: 'government',
    website: 'https://mesftfp.bj'
  },
  {
    id: 'mffe',
    name: 'Ministère de la Famille, de la Femme et de l\'Enfant',
    description: 'Ministère dédié à la protection des droits de la femme et de l\'enfant.',
    logo: 'https://www.mffe.bj/wp-content/uploads/2023/03/logo-mffe.png',
    type: 'government',
    website: 'https://mffe.bj'
  }
];

export const partnerTypeLabels: Record<string, string> = {
  government: 'Gouvernement',
  ngo: 'ONG',
  corporate: 'Secteur Privé',
  international: 'International',
  educational: 'Éducation'
};
