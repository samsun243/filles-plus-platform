// Actualités et communiqués de l'ONG FILLES+

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  image?: string;
  category: 'news' | 'press-release' | 'event' | 'achievement';
  featured: boolean;
}

export const news: NewsItem[] = [
  {
    id: 'lancement-ong',
    title: 'Lancement Officiel de l\'ONG FILLES+',
    description: 'L\'ONG FILLES+ a été officiellement créée le 26 avril 2025 pour promouvoir l\'éducation, la protection et l\'émancipation des filles au Bénin.',
    image: '/images/IMG-20260118-WA0008.jpg',
    content: `L'ONG FILLES+ vient de voir le jour avec pour mission de favoriser l'accès équitable à l'éducation, à la protection, à l'épanouissement et au leadership des filles au Bénin.

Fondée par un éducateur expérimenté avec plus de 26 années d'expérience dans l'enseignement, l'ONG s'appuie sur un diagnostic de terrain approfondi pour proposer une approche holistique et inclusive.

Nos objectifs prioritaires :
- Réinsérer les filles déscolarisées dans des parcours éducatifs adaptés
- Renforcer la scolarisation et la réussite des filles dans le système formel
- Protéger et autonomiser les filles en apprentissage
- Sensibiliser les communautés aux droits des filles
- Former les familles et les tuteurs à la protection des filles

L'ONG FILLES+ intervient dans tout le Bénin, avec un siège social dans le département du Plateau.`,
    date: '2025-04-26',
    category: 'press-release',
    featured: true
  },
  {
    id: 'diagnostic-terrain',
    title: 'Diagnostic de Terrain : La Situation des Filles au Bénin',
    description: 'Analyse approfondie de la situation des filles au Bénin, base de notre action pour l\'éducation et la protection.',
    image: '/images/IMG-20260118-WA0009.jpg',
    content: `Fort de plus de 26 années d'expérience dans l'enseignement primaire et secondaire au Bénin, le fondateur de l'ONG FILLES+ a pu observer de près les difficultés spécifiques auxquelles les filles font face :

Problèmes identifiés :
- Abandons scolaires précoces dus à la pauvreté ou à la pression sociale
- Filles "placées" dans des familles ou chez des tutrices vivant dans la précarité
- Filles en apprentissage informel exposées à l'exploitation et au manque de protection
- Adolescentes scolarisées privées de suivi, d'orientation ou de soutien psychologique

Ces constats ont motivé la création de l'ONG FILLES+ pour une action ciblée, durable et inclusive, touchant les filles ignorées par les politiques publiques : non seulement les déscolarisées, mais aussi celles qui n'ont jamais été à l'école, celles placées comme aides, ou encore celles engagées très tôt dans des ateliers d'apprentissage informel.

Notre approche : holistique, communautaire et transversale, intégrant éducation, santé, droits, leadership et inclusion sociale.`,
    date: '2025-05-01',
    category: 'news',
    featured: true
  },
  {
    id: 'partenaires-recherches',
    title: 'Recherche de Partenaires pour le Développement',
    description: 'L\'ONG FILLES+ recherche des partenaires techniques et financiers pour déployer ses programmes dans tout le Bénin.',
    image: '/images/IMG-20260118-WA0010.jpg',
    content: `L'ONG FILLES+ est à la recherche de partenaires pour soutenir son développement et l'extension de ses programmes dans tout le territoire béninois.

Partenaires ciblés :
- Organisations internationales : UNICEF, PNUD, UNESCO, UNFPA, Plan International, Enabel, OIF
- Ministères nationaux : MEMP, MESFTFP, MFFE
- Acteurs locaux : Mairies, écoles, centres d'apprentissage, ONG sœurs
- Médias communautaires : Radios locales, associations de femmes

Notre stratégie de déploiement :
- Phase pilote dans le département du Plateau et de l'Ouémé
- Extension progressive vers d'autres localités
- Duplication dans tous les départements du Bénin

Nous proposons une approche communautaire ancrée dans les réalités locales, avec implication des familles, des maîtres d'apprentissage et des autorités communautaires.`,
    date: '2025-05-15',
    category: 'press-release',
    featured: false
  },
  {
    id: 'clubs-epanouissement',
    title: 'Création des Clubs d\'Épanouissement Féminin',
    description: 'Lancement des premiers clubs FILLES+ pour favoriser l\'expression et le leadership des filles.',
    image: '/images/IMG-20260118-WA0011.jpg',
    content: `L'ONG FILLES+ lance ses premiers "Clubs d'Épanouissement Féminin" dans le département du Plateau. Ces espaces d'expression et de leadership permettront aux filles de :

- Développer leur estime de soi et leur confiance
- Acquérir des compétences de leadership
- Participer à des activités culturelles et éducatives
- Bénéficier d'un suivi personnalisé
- Créer des réseaux de solidarité féminine

Les clubs FILLES+ seront animés par des femmes relais formées par l'ONG, issues des milieux modestes mais autonomisées et expérimentées dans l'accompagnement des filles.

Objectif : créer un réseau national d'ambassadrices FILLES+ pour assurer la pérennité et l'extension de nos actions.`,
    date: '2025-06-01',
    category: 'event',
    featured: false
  },
  {
    id: 'formation-familles',
    title: 'Programme de Formation des Familles',
    description: 'Lancement d\'un programme de formation destiné aux familles et tuteurs pour une meilleure protection des filles.',
    image: '/images/IMG-20260118-WA0012.jpg',
    content: `L'ONG FILLES+ lance un programme de formation destiné aux familles, aux tuteurs et aux maîtres d'apprentissage pour renforcer la protection des filles et promouvoir l'égalité des genres.

Contenu des formations :
- Droits des filles et égalité des genres
- Importance de l'éducation pour les filles
- Prévention des violences et exploitation
- Accompagnement scolaire et orientation
- Autonomisation économique des filles
- Santé et hygiène féminine

Ces formations seront dispensées par des équipes locales formées par l'ONG, avec l'appui des autorités communautaires et des leaders religieux.

Impact attendu : changement des mentalités et implication active des familles dans l'émancipation des filles.`,
    date: '2025-06-15',
    category: 'event',
    featured: false
  },
  {
    id: 'reinsertion-scolaire',
    title: 'Programme de Réinsertion Scolaire',
    description: 'Mise en place d\'un programme pilote de réinsertion des filles déscolarisées dans le système éducatif.',
    image: '/images/IMG-20260118-WA0013.jpg',
    content: `L'ONG FILLES+ lance un programme pilote de réinsertion scolaire pour les filles déscolarisées ou non scolarisées du département du Plateau.

Le programme comprend :
- Sessions de remise à niveau et alphabétisation
- Évaluation des acquis et orientation scolaire
- Accompagnement psychologique et social
- Suivi personnalisé des parcours
- Médiation avec les familles et les écoles

Ce programme s'adresse particulièrement aux filles qui ont abandonné l'école pour des raisons économiques, sociales ou familiales, ainsi qu'aux filles qui n'ont jamais été scolarisées.

Méthodologie : approche individualisée avec fiches de suivi, entretiens réguliers et visites à domicile.`,
    date: '2025-07-01',
    category: 'news',
    featured: false
  }
];

export const categoryLabels: Record<string, string> = {
  news: 'Actualité',
  'press-release': 'Communiqué',
  event: 'Événement',
  achievement: 'Réussite'
};
