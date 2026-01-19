# 🌸 ONG FILLES+ - Plateforme Web

Plateforme web moderne et responsive pour l'ONG FILLES+, dédiée à l'éducation, la protection et l'émancipation des filles au Bénin.

## ✨ Fonctionnalités

- **🎨 Design Moderne** : Interface élégante avec thème rose/féminin
- **📱 Responsive** : Optimisé pour tous les appareils
- **🚀 Performance** : Next.js 16 avec optimisation automatique
- **♿ Accessibilité** : Conformité aux standards d'accessibilité
- **📧 Contact** : Formulaires de contact et newsletter
- **🖼️ Galerie** : Présentation visuelle des projets
- **🌍 Multilingue** : Support français/anglais

## 🛠️ Technologies Utilisées

- **Framework** : Next.js 16.1.1
- **UI** : React 19, Tailwind CSS 4
- **Composants** : shadcn/ui, Radix UI
- **Icônes** : Lucide React
- **Déploiement** : Vercel
- **Email** : Resend (optionnel)

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <votre-repo>
cd filles-plus-platform

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
filles-plus-platform/
├── app/                    # Pages Next.js (App Router)
│   ├── api/               # API Routes
│   ├── about/             # Page À propos
│   ├── contact/           # Page Contact
│   ├── news/              # Actualités
│   ├── projects/          # Projets
│   └── partners/          # Partenaires
├── src/
│   ├── components/        # Composants réutilisables
│   ├── config/           # Configuration
│   └── data/             # Données statiques
├── public/               # Assets statiques
└── docs/                # Documentation
```

## 🎯 Pages Disponibles

- **🏠 Accueil** (`/`) : Présentation de l'ONG
- **👥 À propos** (`/about`) : Mission, vision, équipe
- **📋 Projets** (`/projects`) : Initiatives en cours
- **📰 Actualités** (`/news`) : Dernières nouvelles
- **🤝 Partenaires** (`/partners`) : Organisations partenaires
- **📞 Contact** (`/contact`) : Formulaire de contact
- **🖼️ Galerie** (`/gallery`) : Photos des activités
- **👨‍👩‍👧‍👦 Équipe** (`/team`) : Membres de l'équipe
- **📝 Blog** (`/blog`) : Articles et ressources

## 🚀 Déploiement

### Sur Vercel (Recommandé)

1. **Connectez votre repo GitHub à Vercel**
2. **Importez le projet** : Sélectionnez `filles-plus-platform`
3. **Configuration automatique** : Vercel détecte Next.js
4. **Déploiement** : Cliquez "Deploy"

Voir [`VERCEL_DEPLOYMENT.md`](VERCEL_DEPLOYMENT.md) pour les détails complets.

### Variables d'Environnement (Optionnel)

Pour activer l'envoi d'emails :

```env
RESEND_API_KEY=votre_cle_api_resend
FROM_EMAIL=contact@filles-plus.org
ADMIN_EMAIL=ongfillesplus@gmail.com
NEWSLETTER_FROM_EMAIL=newsletter@filles-plus.org
```

Voir [`EMAIL_SETUP.md`](EMAIL_SETUP.md) pour la configuration complète.

## 📊 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification du code
```

## 🎨 Personnalisation

### Couleurs
Le thème utilise une palette rose/féminin :
- Primaire : `rose-600`, `pink-600`
- Accent : `fuchsia-600`
- Dégradés : Combinaisons harmonieuses

### Images
- **Hero sections** : Images Unsplash optimisées
- **Cartes** : Images spécifiques par contenu
- **Fallback** : Icônes Lucide React

## 🤝 Contribution

1. Fork le projet
2. Créez une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez (`git commit -am 'Ajout nouvelle fonctionnalité'`)
4. Pushez (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE.txt` pour plus de détails.

## 📞 Contact

**ONG FILLES+**
- Email : ongfillesplus@gmail.com
- Téléphone : +229 01 97 67 60 99
- Site web : [filles-plus.org](https://filles-plus.org)

**Développement** : Conçu et développé par [PRIMS-TECH](https://prims-tech.com)

---

🌸 *Ensemble pour l'émancipation des filles au Bénin*
