# 🚀 GUIDE DE DÉPLOIEMENT - ONG FILLES+

## Options de Déploiement

---

## 1️⃣ VERCEL (Recommandé - Plus facile)

### Avantages
✅ Déploiement automatique depuis GitHub
✅ Gratuit pour petits projets
✅ Domaine gratuit vercel.app
✅ SSL automatique
✅ CDN mondial
✅ Monitoring et logs
✅ Très facile à configurer

### Étapes

**1. Préparer le code**
```bash
cd /home/samson/filles-plus-platform
npm run build  # Vérifier que tout compile
git init
git add .
git commit -m "Initial commit"
```

**2. Créer un repository GitHub**
- Allez sur github.com
- Créez un nouveau repository
- Suivez les instructions pour pousser le code

**3. Déployer sur Vercel**
- Allez sur vercel.com
- Cliquez "New Project"
- Sélectionnez votre repository GitHub
- Vercel déploie automatiquement!

**4. Ajouter un domaine personnalisé**
- Dans Vercel: Project Settings → Domains
- Ajoutez votre domaine
- Configurez vos DNS records
- Vercel fournit les instructions

### Coût
- **Gratuit** pour site statique
- **$20/mois** pour pro (si nécessaire)

---

## 2️⃣ NETLIFY (Aussi très facile)

### Avantages
✅ Déploiement automatique GitHub
✅ Très facile pour débutants
✅ Gratuit pour petits projets
✅ CDN mondial
✅ SSL automatique

### Étapes

**1. Créer compte Netlify**
- Allez sur netlify.com
- Cliquez "Sign up"
- Connectez votre GitHub

**2. Déployer**
- Cliquez "New site from Git"
- Sélectionnez votre repository
- Netlify construit et déploie!

**3. Ajouter un domaine**
- Domain settings
- Ajoutez votre domaine
- Configurez DNS

---

## 3️⃣ SERVEUR PERSONNEL (Plus de contrôle)

### Serveurs Recommandés
- **Heroku** (Gratuit, mais limité)
- **Railway** (Simple et bon prix)
- **Render** (Bon pour Next.js)
- **AWS** (Puissant, complexe)
- **DigitalOcean** (Populaire, abordable)

### Étapes Générales

**1. Préparer le build**
```bash
npm run build
```

**2. Créer un fichier .npmrc (optionnel)**
```
auto-install-peers=true
```

**3. Créer un Procfile (si nécessaire)**
```
web: npm start
```

**4. Pousser sur le serveur**
- Chaque serveur a ses instructions
- Généralement: push GitHub + déploiement auto

---

## 🔐 AVANT DE DÉPLOYER

### Checklist Sécurité

- [ ] Vérifiez qu'il n'y a pas de secrets dans le code
- [ ] Utilisez des variables d'environnement pour les données sensibles
- [ ] Configurez HTTPS (automatique sur Vercel/Netlify)
- [ ] Testez localement avant de déployer
- [ ] Vérifiez les logs de déploiement

### Variables d'Environnement

Créez un fichier `.env.local` (local seulement):
```
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
NEXT_PUBLIC_GA_ID=votre-id-analytics
```

Pour le serveur, configurez dans les paramètres:
- Vercel: Project Settings → Environment Variables
- Netlify: Site settings → Build & deploy → Environment
- Autres: Selon le service

---

## ✅ VÉRIFICATIONS AVANT LANCER

```bash
# 1. Test local
npm run dev
# Visitez http://localhost:3000
# Testez toutes les pages

# 2. Build production
npm run build
# Vérifiez qu'il n'y a pas d'erreurs

# 3. Test production local
npm start
# Visitez http://localhost:3000 à nouveau

# 4. Lighthouse
# Chrome DevTools → Lighthouse
# Score doit être > 90

# 5. Responsive
# Testez sur mobile (F12)
```

---

## 📋 CONFIGURATION POST-DÉPLOIEMENT

### 1. Domaine
```
Pour Vercel:
1. Domain Settings
2. Ajoutez votre domaine
3. Vercel fournit les records DNS

Pour Netlify:
1. Domain management
2. Même processus
```

### 2. DNS Configuration (Exemple)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### 3. SSL/HTTPS
- Automatique sur Vercel/Netlify
- Generé dans 24h généralement

### 4. Email pour Contact
Intégrer un service d'email:

**Option 1: SendGrid**
```bash
npm install @sendgrid/mail
```

**Option 2: Mailgun**
```bash
npm install mailgun-js
```

**Option 3: Gmail SMTP**
- Créer un mot de passe d'application
- Utiliser nodemailer

---

## 📊 MONITORING POST-LANCEMENT

### Vercel
- Analytics: Project → Analytics
- Logs: Deployments → Logs
- Performance: Voir Core Web Vitals

### Google Analytics
1. Créer compte analytics.google.com
2. Ajouter le code GA dans `app/layout.tsx`
3. Attendre 24h pour les données

### Erreur Tracking
Utilisez Sentry (gratuit):
1. Créer compte sentry.io
2. Installer: `npm install @sentry/nextjs`
3. Configurer dans `sentry.config.js`

---

## 🔄 MISE À JOUR APRÈS LANCER

### Sur Vercel/Netlify (Automatique)
1. Modifiez le code localement
2. Committez sur GitHub
3. Vercel/Netlify déploie automatiquement!

### Commandes
```bash
# Voir l'historique
git log --oneline

# Revenir à une version précédente
git revert <commit-id>
git push
```

---

## 🐛 DÉBOGAGE EN PRODUCTION

### Vercel Logs
```bash
vercel logs  # Voir les logs en direct
```

### Logs Netlify
```
Site → Analytics → Functions
```

### Sentry
```bash
npm install @sentry/nextjs
# Puis configurez dans sentry.config.js
```

---

## 📈 OPTIMISATION PERFORMANCE

### Images
```tsx
import Image from 'next/image';
// Utiliser NextImage pour auto-optimization
<Image src="/image.png" width={800} height={600} />
```

### CSS
- Tailwind optimize automatiquement
- Code-splitting automatique

### Mise en Cache
```typescript
// Dans Next.js
export const revalidate = 3600; // Revalidate chaque heure
```

---

## 🎯 DOMAINE PERSONNALISÉ

### Acheter un Domaine
1. **Namecheap** (Bon marché)
2. **GoDaddy** (Populaire)
3. **Google Domains** (Simple)

### Configurer le Domaine

**Sur Vercel:**
1. Project Settings → Domains
2. Add domain
3. Vercel donne les DNS records
4. Configurez chez votre registrar

**Attendre 24-48h** pour la propagation DNS

---

## 💰 COÛTS ESTIMÉS

| Service | Coût | Notes |
|---------|-----|-------|
| Vercel | Gratuit | Pour site statique |
| Netlify | Gratuit | Pour site statique |
| Domaine | $10-15/an | Selon registrar |
| Email Service | $20-100/an | SendGrid, Mailgun, etc. |
| Analytics | Gratuit | Google Analytics |
| Total | $10-15/an | Minimum recommandé |

---

## ⚡ DÉPLOIEMENT RAPIDE RÉSUMÉ

### Vercel (30 min)
```bash
# 1. Préparer
git init
git add .
git commit -m "Initial"

# 2. Pousser GitHub

# 3. Vercel.com
# - Connect GitHub
# - Select repository
# - Deploy!

# 4. Ajouter domaine
# - Vercel Settings
# - Add domain
# - Configure DNS
```

---

## 📞 SUPPORT

**Vercel Support:** vercel.com/support
**Netlify Support:** netlify.com/support
**GitHub Pages:** pages.github.com

---

## ✅ CHECKLIST LANCEMENT

- [ ] Code testé localement
- [ ] `npm run build` sans erreur
- [ ] Variables d'environnement configurées
- [ ] Données ONG mises à jour
- [ ] Images optimisées
- [ ] Lien social correct
- [ ] Email contact configuré
- [ ] Repository GitHub créé
- [ ] Vercel/Netlify connecté
- [ ] Domaine acheté et configuré
- [ ] DNS configuré
- [ ] HTTPS vérifié
- [ ] Tous les pages testées en prod
- [ ] Mobile testé
- [ ] Lighthouse > 90
- [ ] Analytics installé
- [ ] Monitoring configuré
- [ ] Documentation mise à jour

---

## 🎉 VOUS ÊTES LIVE!

Bienvenue dans la production! Votre plateforme ONG FILLES+ est maintenant accessible à tous! 🌍

**Prochaines étapes:**
1. Partager le lien avec votre équipe
2. Promouvoir sur les réseaux sociaux
3. Monitorer les performances
4. Collecter le feedback
5. Améliorer continuellement

---

**Guide Déploiement - ONG FILLES+**
Janvier 2025
Version 1.0
