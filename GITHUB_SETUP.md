# 🚀 Guide Complet : Envoyer sur GitHub

## ✅ Prérequis
- Compte GitHub : [Créer un compte](https://github.com/signup)
- Repository Git initialisé (fait ✓)

## 📋 Étapes Détaillées

### **Étape 1 : Créer le Repository GitHub**

1. **Allez sur GitHub.com** et connectez-vous
2. **Cliquez le bouton "+"** (en haut à droite) → "New repository"
3. **Remplissez les informations** :
   ```
   Repository name: filles-plus-platform
   Description: Plateforme web ONG FILLES+ - Éducation et émancipation des filles au Bénin
   Visibility: Public
   ```
4. **⚠️ IMPORTANT** : NE COCHEZ PAS "Initialize with README"
5. **Cliquez "Create repository"**

### **Étape 2 : Connecter votre Repository Local**

Remplacez `VOTRE_USERNAME` par votre nom d'utilisateur GitHub :

```bash
git remote add origin https://github.com/VOTRE_USERNAME/filles-plus-platform.git
```

### **Étape 3 : Pousser le Code**

```bash
git push -u origin main
```

### **Étape 4 : Vérifier**

1. **Allez sur votre repository GitHub**
2. **Vérifiez que tous les fichiers sont présents**
3. **Vous devriez voir le commit initial**

## 🔧 Commandes Alternatives

### Si vous voulez utiliser SSH (plus sécurisé) :

```bash
# Générer une clé SSH (si pas déjà fait)
ssh-keygen -t ed25519 -C "ongfillesplus@gmail.com"

# Ajouter au GitHub (Settings → SSH Keys)
cat ~/.ssh/id_ed25519.pub

# Utiliser SSH pour le remote
git remote set-url origin git@github.com:VOTRE_USERNAME/filles-plus-platform.git

# Pousser
git push -u origin main
```

### Si vous voulez changer l'URL plus tard :

```bash
git remote set-url origin https://github.com/NOUVEAU_USERNAME/filles-plus-platform.git
```

## 🎯 Prochaines Étapes

Une fois poussé sur GitHub :

1. **Déploiement Vercel** :
   - Allez sur [vercel.com](https://vercel.com)
   - "New Project" → Importez votre repo GitHub
   - Déploiement automatique !

2. **Activation Emails** (optionnel) :
   - Service : [Resend](https://resend.com) ou [SendGrid](https://sendgrid.com)
   - Variables dans Vercel Settings

## 🆘 Dépannage

### Erreur "Repository not found" :
- Vérifiez le nom d'utilisateur dans l'URL
- Assurez-vous que le repository existe sur GitHub

### Erreur "Permission denied" :
- Utilisez HTTPS au lieu de SSH, ou configurez SSH correctement

### Erreur "fatal: remote origin already exists" :
```bash
git remote remove origin
git remote add origin https://github.com/VOTRE_USERNAME/filles-plus-platform.git
```

## 📞 Support

Si vous avez des problèmes :
1. Vérifiez les messages d'erreur
2. Consultez [GitHub Docs](https://docs.github.com/en/get-started)
3. Contactez-moi pour de l'aide

---

🎉 **Votre code est prêt à être déployé dans le cloud !**