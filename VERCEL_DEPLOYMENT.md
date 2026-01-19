# 🚀 Déploiement sur Vercel

## Prérequis

1. **Compte Vercel** : [Créer un compte](https://vercel.com/signup)
2. **GitHub** : Repository GitHub connecté à Vercel
3. **Variables d'environnement** (optionnel pour les emails)

## Méthode 1 : Déploiement Automatique (Recommandé)

### Via GitHub (Intégration Continue)

1. **Connectez votre repository GitHub à Vercel** :
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez "New Project"
   - Importez votre repository `filles-plus-platform`

2. **Configuration du projet** :
   - **Framework Preset** : Next.js (auto-détecté)
   - **Root Directory** : `./` (racine du projet)
   - **Build Command** : `npm run build` (auto-détecté)
   - **Output Directory** : `.next` (auto-détecté)

3. **Variables d'environnement** (si vous voulez activer les emails) :
   ```
   RESEND_API_KEY=votre_cle_api_resend
   FROM_EMAIL=contact@filles-plus.org
   ADMIN_EMAIL=ongfillesplus@gmail.com
   NEWSLETTER_FROM_EMAIL=newsletter@filles-plus.org
   ```

4. **Déploiement** :
   - Cliquez "Deploy"
   - Vercel détecte automatiquement Next.js
   - Déploiement en ~2-3 minutes

## Méthode 2 : Déploiement Manuel

### Via Vercel CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Pour la production
vercel --prod
```

## Configuration Avancée

### Variables d'Environnement

Si vous voulez activer l'envoi d'emails, ajoutez ces variables dans Vercel :

1. Allez dans votre projet Vercel
2. Onglet "Settings" → "Environment Variables"
3. Ajoutez :
   - `RESEND_API_KEY`
   - `FROM_EMAIL`
   - `ADMIN_EMAIL`
   - `NEWSLETTER_FROM_EMAIL`

### Domaines Personnalisés

1. Dans les settings du projet Vercel
2. Onglet "Domains"
3. Ajoutez votre domaine (ex: `filles-plus.org`)

## Fonctionnalités Activées

### ✅ Fonctionnalités de Base (Toujours Actives)
- Pages statiques et dynamiques
- API Routes (`/api/contact`, `/api/newsletter`)
- Optimisation d'images automatiques
- CDN global
- SSL automatique

### 🔧 Fonctionnalités Avancées (Avec Configuration)
- Envoi d'emails (avec clé API Resend)
- Analytics (avec Google Analytics)
- Domaines personnalisés

## URLs de Production

Après déploiement, votre site sera accessible sur :
- **URL Vercel** : `https://filles-plus-platform.vercel.app`
- **Domaine personnalisé** : `https://filles-plus.org` (si configuré)

## Commandes Utiles

```bash
# Vérifier le statut du déploiement
vercel ls

# Voir les logs
vercel logs

# Redéployer
vercel --prod
```

## Dépannage

### Build qui échoue
- Vérifiez les logs dans Vercel Dashboard
- Assurez-vous que toutes les dépendances sont dans `package.json`

### APIs qui ne fonctionnent pas
- Vérifiez les variables d'environnement
- Les APIs Next.js fonctionnent automatiquement sur Vercel

### Images qui ne se chargent pas
- Vercel optimise automatiquement les images externes
- Pas de configuration supplémentaire requise

## Performance

Vercel optimise automatiquement :
- ✅ Code splitting
- ✅ Image optimization
- ✅ CDN global
- ✅ Compression gzip/brotli
- ✅ HTTP/2

## Coûts

- **Hobby Plan** (gratuit) : 100GB bandwidth/mois
- **Pro Plan** : À partir de $20/mois pour plus de ressources

---

🎉 **Votre site ONG FILLES+ est maintenant prêt pour le déploiement sur Vercel !**