# Configuration des Emails

## Services d'Email Recommandés

### 1. Resend (Recommandé pour Next.js)
```bash
npm install resend
```

Configuration dans `.env.local` :
```
RESEND_API_KEY=votre_cle_api_resend
```

### 2. SendGrid (Alternative)
```bash
npm install @sendgrid/mail
```

Configuration dans `.env.local` :
```
SENDGRID_API_KEY=votre_cle_api_sendgrid
```

### 3. Mailgun (Alternative)
```bash
npm install mailgun.js
```

Configuration dans `.env.local` :
```
MAILGUN_API_KEY=votre_cle_api_mailgun
MAILGUN_DOMAIN=votre_domaine.mailgun.org
```

## Configuration Requise

1. Copiez `.env.example` vers `.env.local`
2. Remplissez les variables d'environnement appropriées
3. Décommentez et configurez le service d'email choisi dans les fichiers API :
   - `app/api/contact/route.ts`
   - `app/api/newsletter/route.ts`

## Test des Emails

Après configuration, testez :
- Formulaire de contact : `/contact`
- Abonnement newsletter : Section newsletter sur `/contact`

Les emails seront envoyés à l'adresse configurée dans `ADMIN_EMAIL`.