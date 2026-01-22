import { BookOpen, MessageCircle, Pill, Star, TrendingUp, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    icon: LucideIcon;
    image?: string;
    content?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'L\'importance de l\'éducation des filles',
        excerpt: 'Découvrez pourquoi l\'accès à l\'éducation est crucial pour l\'autonomisation des filles au Bénin.',
        author: 'Marie Kounarou',
        date: '12 janvier 2025',
        category: 'Éducation',
        icon: BookOpen,
        image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1920&h=1080&fit=crop',
        content: `L'éducation des filles est l'un des investissements les plus puissants que nous puissions réaliser pour notre avenir collectif. Au Bénin, comme dans de nombreux pays d'Afrique de l'Ouest, les filles font face à des barrières uniques qui entravent leur accès et leur maintien à l'école.

    Pourtant, les bénéfices de l'éducation des filles sont immenses et prouvés :
    
    1. **Santé et Bien-être** : Les filles éduquées sont plus susceptibles de prendre soin de leur santé et de celle de leur famille. Elles se marient plus tard et ont des enfants en meilleure santé.
    
    2. **Autonomisation Économique** : Chaque année supplémentaire d'école secondaire augmente le revenu potentiel futur d'une fille de 15 à 25%. Cela lui permet de briser le cycle de la pauvreté pour elle-même et sa communauté.
    
    3. **Leadership et Participation** : L'éducation donne aux filles la confiance et les compétences nécessaires pour devenir des leaders dans leurs communautés et participer aux prises de décision.
    
    À l'ONG FILLES+, nous travaillons sans relâche pour :
    - Sensibiliser les communautés à l'importance de l'école.
    - Fournir un soutien matériel et financier aux familles démunies.
    - Créer des environnements sûrs et inclusifs pour l'apprentissage.
    
    Ensemble, nous pouvons garantir que chaque fille au Bénin a la chance d'apprendre, de grandir et de réaliser son plein potentiel.`
    },
    {
        id: 2,
        title: 'Témoignage : La vie après le programme FILLES+',
        excerpt: 'Rencontrez Ama, une jeune femme dont la vie a changé grâce à nos programmes de formation.',
        author: 'Clarisse Mensah',
        date: '8 janvier 2025',
        category: 'Témoignages',
        icon: MessageCircle,
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=600&fit=crop',
        content: `Ama avait 14 ans lorsqu'elle a dû quitter l'école pour aider sa famille. Pendant deux ans, son rêve de devenir infirmière semblait brisé. C'est alors qu'elle a rencontré l'équipe de l'ONG FILLES+.

    Grâce à notre programme de réinsertion et de soutien scolaire, Ama a pu reprendre le chemin des classes. "Au début, j'avais peur d'être en retard, de ne pas y arriver," confie-t-elle. "Mais les tuteurs de FILLES+ m'ont encouragée chaque jour."
    
    Aujourd'hui, à 19 ans, Ama vient d'obtenir son baccalauréat avec mention. Elle s'apprête à entrer à l'école de soins infirmiers, réalisant ainsi son rêve d'enfant.
    
    "Ce n'est pas seulement l'école qu'ils m'ont rendue," dit Ama. "C'est ma confiance en moi. J'ai compris que mon avenir m'appartenait et que je pouvais être un modèle pour mes petites sœurs."
    
    L'histoire d'Ama n'est pas unique. Elle représente le potentiel immense de chaque fille qui attend juste une opportunité pour briller.`
    },
    {
        id: 3,
        title: 'Les défis de la santé féminine en Afrique de l\'Ouest',
        excerpt: 'Une analyse approfondie des enjeux de santé auxquels font face les filles et jeunes femmes.',
        author: 'Fatima Diallo',
        date: '5 janvier 2025',
        category: 'Santé',
        icon: Pill,
        image: 'https://images.unsplash.com/photo-1576091160550-217358c7db81?w=800&h=600&fit=crop',
        content: `La santé des femmes et des filles est un pilier fondamental du développement. En Afrique de l'Ouest, les défis restent nombreux, allant de l'accès aux soins de base à la santé reproductive.
    
    L'ONG FILLES+ s'engage à briser les tabous et à fournir des informations vitales. Nos ateliers sur l'hygiène menstruelle, par exemple, permettent aux jeunes filles de ne pas manquer l'école pendant leurs règles et de gérer leur santé avec dignité.
    
    Nous abordons également les questions de nutrition, cruciales pour le développement physique et cognitif des adolescentes. Une fille en bonne santé est une fille qui peut apprendre et s'épanouir.`
    },
    {
        id: 4,
        title: 'Leadership féminin : Créer le changement',
        excerpt: 'Comment les femmes leaders transforment leurs communautés et créent un impact durable.',
        author: 'Amma Traore',
        date: '2 janvier 2025',
        category: 'Leadership',
        icon: Star,
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
        content: `Le leadership ne se décrète pas, il se cultive. C'est la conviction qui anime nos programmes de mentorat "Jeunes Leaders".
    
    Nous croyons que chaque fille a la capacité d'influencer positivement son environnement. En leur donnant des outils de communication, de gestion de projet et de plaidoyer, nous voyons émerger une nouvelle génération de femmes fortes et engagées.
    
    Ces jeunes leaders initient déjà des changements dans leurs villages : clubs de lecture, campagnes de propreté, soutien aux plus jeunes. Elles sont la preuve vivante que l'investissement dans le leadership féminin a un effet multiplicateur sur toute la société.`
    },
    {
        id: 5,
        title: 'Entrepreneuriat au féminin : Success stories',
        excerpt: 'Inspirez-vous de jeunes femmes entrepreneurs qui réussissent grâce à nos programmes.',
        author: 'Jade Osei',
        date: '28 décembre 2024',
        category: 'Économie',
        icon: TrendingUp,
        image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&h=600&fit=crop',
        content: `L'autonomisation économique est la clé de la liberté. À travers nos micro-crédits et nos formations en gestion, nous soutenons l'esprit d'entreprise des jeunes femmes.
    
    Découvrez l'histoire de Sarah, qui a lancé sa coopérative de transformation de manioc, ou celle de Binta, qui a ouvert un atelier de couture moderne employant déjà trois apprenties. Ces entreprises ne créent pas seulement des revenus, elles créent de l'espoir et de la stabilité dans leurs communautés.`
    },
    {
        id: 6,
        title: 'Comment vous pouvez soutenir notre mission',
        excerpt: 'Les différentes façons de contribuer à l\'autonomisation des filles béninoises.',
        author: 'Sophie Bernard',
        date: '25 décembre 2024',
        category: 'Impact',
        icon: Heart,
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop',
        content: `Chacun peut agir à son niveau. Que vous soyez un particulier, une entreprise ou une institution, votre soutien est précieux.
    
    - **Le Parrainage** : Accompagnez la scolarité d'une fille sur le long terme.
    - **Le Don Ponctuel** : Financez l'achat de kits scolaires ou de matériel pédagogique.
    - **Le Bénévolat** : Mettez vos compétences au service de nos projets (enseignement, communication, santé...).
    - **Le Partenariat** : Construisons ensemble des projets d'envergure.
    
    Rejoignez le mouvement FILLES+ et soyez acteur du changement !`
    },
];
