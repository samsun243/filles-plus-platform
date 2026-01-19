# 🚀 Guide de Démarrage Rapide - ONG FILLES+

## Pour démarrer immédiatement

### 1️⃣ Installation

```bash
cd /home/samson/filles-plus-platform
npm install
```

### 2️⃣ Démarrer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) 🌐

### 3️⃣ Éditer le contenu

Modifiez facilement les fichiers de données:

**Informations ONG**: `src/config/org.ts`
```typescript
- Nom, slogan
- Mission, vision
- Valeurs
- Contact et réseaux sociaux
```

**Projets**: `src/data/projects.ts`
**Actualités**: `src/data/news.ts`
**Partenaires**: `src/data/partners.ts`

### 4️⃣ Personnaliser l'apparence

- **Couleurs**: Modifiez les valeurs dans les composants (pink-600, red-600)
- **Logo**: Remplacez le logo dans le Header
- **Images**: Ajoutez vos images dans `public/`

---

## 📁 Structure Essentielle

```
Pages Principales:
✅ / (Accueil)
✅ /about (À propos)
✅ /projects (Projets)
✅ /news (Actualités)
✅ /gallery (Galerie)
✅ /partners (Partenaires)
✅ /contact (Contact)

Fichiers Éditables:
📝 src/config/org.ts
📝 src/data/projects.ts
📝 src/data/news.ts
📝 src/data/partners.ts
```

---

## 🎨 Pages Disponibles

| Page | URL | Statut |
|------|-----|--------|
| Accueil | `/` | ✅ Prête |
| À propos | `/about` | ✅ Prête |
| Projets | `/projects` | ✅ Prête |
| Détail Projet | `/projects/[id]` | ✅ Prête |
| Actualités | `/news` | ✅ Prête |
| Détail Article | `/news/[id]` | ✅ Prête |
| Galerie | `/gallery` | ✅ Prête |
| Partenaires | `/partners` | ✅ Prête |
| Contact | `/contact` | ✅ Prête |
| 404 | `/404` | ✅ Prête |

---

## 📝 Exemples de Modification

### Ajouter un nouveau projet

Éditez `src/data/projects.ts`:

```typescript
{
  id: 'nouveau-projet',
  title: 'Nom du projet',
  description: 'Description courte',
  category: 'education',
  status: 'active',
  startDate: '2025-01-01',
  impact: 'Impact spécifique'
}
```

### Ajouter une actualité

Éditez `src/data/news.ts`:

```typescript
{
  id: 'news-005',
  title: 'Titre de l\'actualité',
  description: 'Description',
  content: 'Contenu complet',
  date: '2025-01-14',
  category: 'news',
  featured: true
}
```

---

## 🚀 Commandes Utiles

```bash
# Développement
npm run dev          # Démarrer le serveur de développement
npm run lint         # Vérifier le code

# Production
npm run build        # Créer la version production
npm start            # Lancer le serveur production
```

---

## 🌐 Déployer en Ligne

### Option 1: Vercel (Recommandé)

1. Créer compte sur [vercel.com](https://vercel.com)
2. Connecter votre GitHub
3. Importer le repository
4. Vercel déploie automatiquement!

### Option 2: Autre Serveur

```bash
npm run build
# Envoyer le dossier .next sur votre serveur
```

---

## 💡 Conseils Utiles

✨ **Rapide à mettre à jour**: Juste modifier les fichiers dans `src/data/`

✨ **Responsive par défaut**: Tous les composants s'adaptent aux appareils

✨ **Performance optimale**: Next.js gère automatiquement l'optimisation

✨ **TypeScript sécurisé**: Les erreurs sont détectées durant le développement

---

## 📞 Besoin d'Aide?

- Consultez [SETUP_GUIDE.md](./SETUP_GUIDE.md) pour plus de détails
- Consultez [SPECIFICATIONS.md](./SPECIFICATIONS.md) pour les spécifications complètes
- Vérifiez [README.md](./README.md) pour la documentation du projet

---

## ✅ Checklist Démarrage

- [ ] `npm install` - Installer les dépendances
- [ ] `npm run dev` - Lancer le serveur
- [ ] Visiter [http://localhost:3000](http://localhost:3000)
- [ ] Modifier `src/config/org.ts` avec infos ONG
- [ ] Vérifier chaque page (accueil, projets, etc.)
- [ ] Ajouter votre logo dans `public/`
- [ ] Mettre à jour contact et réseaux sociaux
- [ ] Tester sur mobile
- [ ] Préparer contenu pour projets/actualités
- [ ] Déployer sur Vercel ou serveur

---

**🎉 Vous êtes prêt à lancer votre plateforme ONG FILLES+!**

Pour toute question, contactez: contact@fillesplus.org
