// Configuration de l'ONG FILLES+

export interface Value {
  title: string;
  name: string;
  description: string;
}

export const orgConfig = {
  name: 'FILLES+',
  fullName: 'FILLES+ : Éducation, Protection et Leadership pour toutes les filles au Bénin',
  slogan: 'Éducation, Protection et Leadership pour toutes les filles au Bénin',
  mission: `L'ONG FILLES+ porte un projet national visant à promouvoir l'éducation, la protection et l'émancipation des filles et adolescentes au Bénin, en ciblant à la fois les filles scolarisées, non scolarisées, déscolarisées, placées ou en apprentissage. Partant d'un diagnostic de terrain ancré dans 26 années d'expérience pédagogique du fondateur, le projet propose une approche holistique et inclusive qui intègre les communautés locales, les familles, les structures éducatives et les ateliers d'apprentissage.`,
  vision: `Contribuer à bâtir une société béninoise plus juste, inclusive et équitable, où chaque fille et chaque jeune femme dispose des mêmes opportunités d'éducation, de formation, de santé et d'autonomie, et peut pleinement participer au développement de sa communauté.`,
  values: [
    {
      title: 'Éducation de qualité',
      name: 'Éducation',
      description: 'Accès équitable à l\'éducation pour toutes les filles'
    },
    {
      title: 'Protection des droits',
      name: 'Protection',
      description: 'Protection contre les violences et exploitation'
    },
    {
      title: 'Leadership féminin',
      name: 'Leadership',
      description: 'Développement du leadership et de l\'autonomisation'
    },
    {
      title: 'Inclusion sociale',
      name: 'Inclusion',
      description: 'Aucune fille laissée de côté, scolarisée ou non'
    },
    {
      title: 'Approche communautaire',
      name: 'Communauté',
      description: 'Actions ancrées dans les réalités locales'
    },
    {
      title: 'Égalité de genre',
      name: 'Égalité',
      description: 'Égalité des chances pour tous les genres'
    }
  ],
  contact: {
    email: 'ongfillesplus@gmail.com',
    phone: '0197760992 / 0192404102',
    address: 'Pobè, Qtier: Ichèko, M/GANMENON, département du Plateau, RÉPUBLIQUE DU BÉNIN',
    socialMedia: {
      facebook: 'https://facebook.com/fillesplus',
      twitter: 'https://twitter.com/fillesplus',
      instagram: 'https://instagram.com/fillesplus',
      linkedin: 'https://linkedin.com/company/fillesplus'
    }
  }
};
