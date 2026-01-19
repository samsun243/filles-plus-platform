# 🌟 Plateforme Web ONG FILLES+

Bienvenue sur la plateforme web de l'ONG **FILLES+**, une organisation béninoise dédiée à l'autonomisation, à la protection et à l'épanouissement des filles et jeunes femmes.

## 📋 Table des matières

- [Vue d'ensemble](#vue-densemble)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Pages disponibles](#pages-disponibles)
- [Configuration](#configuration)
- [Déploiement](#déploiement)

## 🎯 Vue d'ensemble

La plateforme ONG FILLES+ est un site web moderne construit avec:
- **Next.js 16** - Framework React pour une performance optimale
- **Tailwind CSS** - Système de design responsif
- **TypeScript** - Typage statique pour une meilleure fiabilité

### Objectifs
- Présenter la mission, vision et valeurs de l'ONG
- Mettre en avant les projets et initiatives
- Partager actualités et réalisations
- Faciliter le contact et les partenariats
- Offrir une plateforme évolutive pour des fonctionnalités futures

## 🏗️ Structure du projet

```
filles-plus-platform/
├── app/                          # Pages et layout principal
│   ├── page.tsx                  # Page d'accueil
│   ├── about/page.tsx            # À propos
│   ├── projects/page.tsx         # Projets
│   ├── news/page.tsx             # Actualités
│   ├── gallery/page.tsx          # Galerie
│   ├── partners/page.tsx         # Partenaires
│   ├── contact/page.tsx          # Contact
│   ├── layout.tsx                # Layout global
│   └── globals.css               # Styles globaux
├── src/
│   ├── components/               # Composants React réutilisables
│   │   ├── Header.tsx            # En-tête/navigation
│   │   ├── Footer.tsx            # Pied de page
│   │   ├── ProjectCard.tsx       # Carte de projet
│   │   ├── NewsCard.tsx          # Carte d'actualité
│   │   ├── PartnerCard.tsx       # Carte de partenaire
│   │   └── ValueCard.tsx         # Carte de valeur
│   ├── config/
│   │   └── org.ts                # Configuration de l'ONG
│   └── data/
│       ├── projects.ts           # Données des projets
│       ├── news.ts               # Données des actualités
│       └── partners.ts           # Données des partenaires
├── public/                       # Fichiers statiques (logos, images)
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

## 💻 Installation

### Prérequis
- Node.js 18+
- npm ou yarn

### Étapes

1. **Cloner le repository**
```bash
cd /home/samson/filles-plus-platform
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement** (si nécessaire)
```bash
cp .env.example .env.local
```

4. **Démarrer le serveur de développement**
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le site en action.

## 🚀 Utilisation

### Développement
```bash
npm run dev          # Démarrer le serveur de développement
npm run lint         # Vérifier le code avec ESLint
```

### Production
```bash
npm run build        # Compiler le projet
npm start            # Démarrer le serveur de production
```

## 📄 Pages disponibles

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Page d'accueil avec présentation générale |
| À propos | `/about` | Mission, vision, valeurs et historique |
| Projets | `/projects` | Tous les projets organisés par catégorie |
| Actualités | `/news` | Actualités et communiqués de l'ONG |
| Galerie | `/gallery` | Photos et vidéos des activités |
| Partenaires | `/partners` | Liste des partenaires et info de partenariat |
| Contact | `/contact` | Formulaire de contact et informations |

## ⚙️ Configuration

### Informations de l'ONG

Modifiez le fichier `src/config/org.ts` pour mettre à jour:
- Nom et slogan
- Mission et vision
- Valeurs
- Informations de contact
- Réseaux sociaux

```typescript
export const orgConfig = {
  name: 'FILLES+',
  mission: '...',
  // ...
};
```

### Données

#### Projets (`src/data/projects.ts`)
- Ajouter/modifier les projets
- Organiser par catégories

#### Actualités (`src/data/news.ts`)
- Gérer les actualités et communiqués
- Catégoriser les articles

#### Partenaires (`src/data/partners.ts`)
- Ajouter/modifier les partenaires
- Organiser par type

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont:
- **Rose primaire**: `#EC1159` (rose-600)
- **Rouge accentuation**: `#DC2626` (red-600)

Modifiez dans les composants ou `globals.css`

### Polices
Le projet utilise les polices de Google Fonts:
- Sans-serif: Geist
- Monospace: Geist Mono

### Breakpoints Tailwind
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 📱 Responsive Design

Le site est entièrement responsive:
- Mobile (< 640px)
- Tablette (640px - 1024px)
- Desktop (> 1024px)

## 🔮 Fonctionnalités futures

- [ ] Formulaire de don intégré
- [ ] Espace membres/bénévoles
- [ ] Blog avec articles détaillés
- [ ] Téléchargement de documents (rapports, brochures)
- [ ] Intégration calendrier événements
- [ ] Système de notifications
- [ ] Multi-langue (FR/EN)
- [ ] CMS pour gestion facile du contenu
- [ ] Analytics et statistiques
- [ ] Intégration paiements en ligne

## 🚀 Déploiement

### Déployer sur Vercel (recommandé)

1. Pousser le code sur GitHub
2. Connecter le repository à Vercel
3. Vercel déploiera automatiquement

```bash
# Ou déployer manuellement
npm install -g vercel
vercel
```

### Déployer ailleurs

```bash
npm run build
# Le dossier .next contient le build prêt pour production
```

## 🤝 Contribution

Pour contribuer:
1. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalité`)
2. Commiter vos changements (`git commit -m 'Ajouter nouvelle fonctionnalité'`)
3. Pousser la branche (`git push origin feature/nouvelle-fonctionnalité`)
4. Ouvrir une Pull Request

## 📧 Support

Pour toute question ou problème:
- Email: contact@fillesplus.org
- Téléphone: +229 XXXX XXXX

## 📄 Licence

Ce projet est privé et propriété de l'ONG FILLES+.

---

**Dernière mise à jour**: Janvier 2025
