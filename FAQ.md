# ❓ FAQ - Questions et Solutions Courantes

## Installation et Configuration

### Q: npm install ne fonctionne pas
**R:** Vérifiez que Node.js est installé
```bash
node --version   # Doit montrer v18+
npm --version    # Doit montrer une version
```

### Q: Port 3000 déjà utilisé
**R:** Utilisez un autre port
```bash
npm run dev -- -p 3001
```

### Q: Module non trouvé '@/*'
**R:** Les alias sont configurés dans `tsconfig.json`. Redémarrez le serveur
```bash
npm run dev
```

---

## Modification du Contenu

### Q: Comment ajouter un nouveau projet?
**R:** Modifiez `src/data/projects.ts` et ajoutez:
```typescript
{
  id: 'nouveau-id',
  title: 'Titre',
  description: 'Description',
  category: 'education', // ou autre catégorie
  status: 'active',
  startDate: '2025-01-01',
  impact: 'Impact spécifique'
}
```

### Q: Comment changer les couleurs?
**R:** Les couleurs sont en Tailwind CSS:
- Rose primaire: `pink-600`
- Rouge: `red-600`

Modifiez dans les composants ou utilisez `globals.css`

### Q: Comment ajouter des images?
**R:** Mettez les images dans `public/` et référencez-les:
```tsx
<img src="/nom-image.png" alt="Description" />
```

### Q: Comment changer le logo?
**R:** Dans `Header.tsx`, remplacez le logo placeholder:
```tsx
{/* Remplacer par votre logo */}
<img src="/logo.png" alt="Logo" className="w-10 h-10" />
```

---

## Personnalisation

### Q: Comment personnaliser les infos ONG?
**R:** Modifiez `src/config/org.ts`:
```typescript
export const orgConfig = {
  name: 'FILLES+',
  mission: 'Votre mission...',
  contact: {
    email: 'votre@email.com',
    // ...
  }
};
```

### Q: Comment ajouter des réseaux sociaux?
**R:** Dans `src/config/org.ts`, modifiez:
```typescript
contact: {
  socialMedia: {
    facebook: 'https://facebook.com/votre-page',
    // ...
  }
}
```

### Q: Comment modifier les valeurs ONG?
**R:** Dans `src/config/org.ts`, éditez l'array `values`:
```typescript
values: [
  { title: 'Votre valeur', description: 'Description' },
  // ...
]
```

---

## Déploiement

### Q: Comment déployer sur Vercel?
**R:** 
1. Push votre code sur GitHub
2. Allez sur vercel.com
3. Connectez votre GitHub
4. Sélectionnez le repository
5. Vercel déploie automatiquement!

### Q: Comment ajouter un domaine personnalisé?
**R:** Dans Vercel:
1. Allez dans Project Settings
2. Cliquez sur Domains
3. Ajoutez votre domaine
4. Configurez vos DNS records

### Q: Erreur: "Build failed"
**R:** Vérifiez les logs et assurez-vous que:
- Tous les imports sont corrects
- `npm run build` fonctionne localement
- Aucune erreur TypeScript

---

## Performance

### Q: Le site est lent
**R:** 
1. Vérifiez la taille des images (optimisez-les)
2. Utilisez npm run build et npm start
3. Vérifiez les performances dans Lighthouse
4. Activez la mise en cache du navigateur

### Q: Lighthouse score faible
**R:**
1. Optimisez les images (utilisez WebP)
2. Minifiez le CSS/JS
3. Vérifiez les Core Web Vitals
4. Utilisez la compression gzip

---

## Design et Responsive

### Q: Le site n'est pas responsive sur mobile
**R:** Vérifiez que vous utilisez les classes Tailwind:
```tsx
<div className="grid md:grid-cols-2">
  {/* Sur mobile: 1 colonne, sur md+: 2 colonnes */}
</div>
```

### Q: Les couleurs ne s'affichent pas correctement
**R:** Vérifiez que Tailwind CSS est chargé:
1. Vérifiez `globals.css` a `@import "tailwindcss"`
2. Redémarrez le serveur
3. Videz le cache du navigateur

---

## Contact et Formulaire

### Q: Le formulaire de contact n'envoie rien
**R:** Actuellement, le formulaire affiche juste un message. Pour l'email:
1. Utilisez un service comme SendGrid ou Mailgun
2. Ou créez une API route `/api/contact`
3. Installez un package email comme `nodemailer`

### Q: Comment intégrer des emails?
**R:** Créez `app/api/contact/route.ts`:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Envoyer email avec votre service
  return new Response(JSON.stringify({ success: true }));
}
```

---

## TypeScript et Code

### Q: Erreur TypeScript: "Type not found"
**R:** 
1. Vérifiez que vous importez correctement
2. Redémarrez le serveur
3. Exécutez `npm run lint`

### Q: Comment ajouter une nouvelle page?
**R:** Créez un dossier dans `app/`:
```
app/nouvelle-page/page.tsx
```

### Q: Erreur d'import '@/*'
**R:** L'alias est configuré dans `tsconfig.json`. Si ça ne fonctionne pas:
```json
"paths": {
  "@/*": ["./*"]
}
```

---

## Actualités et Projets

### Q: Comment ajouter une actualité à la une?
**R:** Dans `src/data/news.ts`, mettez `featured: true`:
```typescript
{
  id: 'news-id',
  title: 'Titre',
  featured: true,  // Affichera sur la page À la Une
  // ...
}
```

### Q: Comment catégoriser un projet?
**R:** Utilisez une catégorie existante:
- `'education'` - Éducation
- `'health'` - Santé
- `'leadership'` - Leadership
- `'economic'` - Économie
- `'social'` - Social

### Q: Comment changer le statut d'un projet?
**R:** Modifiez le champ `status`:
```typescript
status: 'active'      // Actif
status: 'completed'   // Terminé
status: 'ongoing'     // En cours
```

---

## Données et Contenus

### Q: Comment ajouter plus de partenaires?
**R:** Modifiez `src/data/partners.ts`:
```typescript
{
  id: 'partner-id',
  name: 'Nom du partenaire',
  description: 'Description',
  type: 'government', // government, ngo, corporate, international, educational
  website: 'https://exemple.com'
}
```

### Q: Comment modifier le nombre de projets affichés?
**R:** Dans les composants, modifiez le `.slice()`:
```tsx
projects.slice(0, 6)  // Affiche les 6 premiers
```

---

## Base de Données

### Q: Puis-je intégrer une base de données?
**R:** Oui! Vous pouvez:
1. Utiliser Supabase (PostgreSQL)
2. Utiliser MongoDB Atlas
3. Créer une API avec Next.js `/api/routes`
4. Intégrer un CMS comme Strapi

---

## SEO

### Q: Comment améliorer le SEO?
**R:**
1. Modifiez les métadonnées dans `app/layout.tsx`
2. Ajoutez des meta descriptions
3. Utilisez des titres H1 uniques
4. Optimisez les images
5. Ajoutez un sitemap.xml
6. Configurez robots.txt

---

## Erreurs Courantes

### Erreur: "Cannot find module"
**Solution:**
```bash
rm -rf node_modules
npm install
npm run dev
```

### Erreur: "Port 3000 is already in use"
**Solution:**
```bash
npm run dev -- -p 3001  # Utiliser port 3001
```

### Erreur: "next command not found"
**Solution:**
```bash
npm install
npx next dev  # Utiliser npx
```

### Erreur: "ENOENT: no such file or directory"
**Solution:**
1. Vérifiez les chemins des fichiers
2. Vérifiez `tsconfig.json` pour les alias
3. Créez le fichier s'il manque

---

## Maintenance et Mise à Jour

### Q: Comment mettre à jour les dépendances?
**R:**
```bash
npm outdated        # Voir les versions obsolètes
npm update          # Mettre à jour
npm update --save   # Mettre à jour et sauvegarder
```

### Q: Comment nettoyer les fichiers inutiles?
**R:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## Performance et Optimisation

### Q: Comment vérifier les performances?
**R:**
```bash
npm run build    # Voir la taille du build
npm start        # Tester en production

# Puis visitez
http://localhost:3000
# Et ouvrez Chrome DevTools > Lighthouse
```

---

## Besoin d'Aide Supplémentaire?

📚 **Documentation:**
- [QUICKSTART.md](./QUICKSTART.md)
- [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- [SPECIFICATIONS.md](./SPECIFICATIONS.md)

🌐 **Ressources Externes:**
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

📧 **Contact ONG:**
contact@fillesplus.org

---

**Dernière mise à jour:** Janvier 2025
**Version:** 1.0
