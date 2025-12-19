# Portfolio Mohamed DJIBRILA

Portfolio personnel moderne et performant développé avec NuxtJS 3, Tailwind CSS et GSAP.

## 🚀 Technologies utilisées

- **NuxtJS 3** - Framework Vue.js avec SSR pour un excellent SEO
- **TypeScript** - Type-safety et meilleure expérience développeur
- **Tailwind CSS** - Framework CSS utility-first
- **GSAP (GreenSock)** - Animations fluides et performantes
- **Vue 3 Composition API** - Architecture moderne et réactive

## 📋 Prérequis

- Node.js >= 18.0.0
- npm >= 9.0.0 ou yarn

## 🛠️ Installation

1. **Cloner le repository**

```bash
git clone https://github.com/votre-username/portfolio.git
cd portfolio
```

2. **Installer les dépendances**

```bash
npm install
# ou
yarn install
```

3. **Ajouter votre photo de profil**

   - Placez votre photo au format 9:16 dans `/public/images/profile.jpg`

4. **Lancer le serveur de développement**

```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible sur `http://localhost:3000`

## 📦 Build pour la production

```bash
# Build pour SSR
npm run build

# Génération statique
npm run generate

# Preview du build
npm run preview
```

## 🎨 Personnalisation

### Couleurs principales

Les couleurs sont définies dans `tailwind.config.js` :

- Primary: `#2a3257`
- Secondary: `#000000`

### Contenu à mettre à jour

1. **Informations personnelles** : Modifiez dans `components/Hero.vue`
2. **Projets** : Mettez à jour le tableau `projects` dans `components/Projects.vue`
3. **Expériences** : Déjà remplies depuis votre CV dans `components/Experience.vue`
4. **Compétences** : Modifiez dans `components/Skills.vue`

### Structure des dossiers

```
portfolio/
├── assets/
│   └── css/
│       └── main.css          # Styles globaux
├── components/
│   ├── Navbar.vue            # Navigation
│   ├── Hero.vue              # Section hero/accueil
│   ├── About.vue             # À propos
│   ├── Skills.vue            # Compétences
│   ├── Projects.vue          # Projets
│   ├── Experience.vue        # Expériences
│   ├── Contact.vue           # Formulaire contact
│   └── Footer.vue            # Pied de page
├── pages/
│   └── index.vue             # Page principale
├── public/
│   └── images/
│       └── profile.jpg       # Votre photo (à ajouter)
├── app.vue                   # Point d'entrée
├── nuxt.config.ts            # Configuration Nuxt
├── tailwind.config.js        # Configuration Tailwind
└── package.json              # Dépendances
```

## 🎯 Fonctionnalités

✅ Design moderne et responsive
✅ Animations GSAP fluides
✅ SEO optimisé (meta tags, sitemap)
✅ Performance optimisée
✅ Formulaire de contact
✅ Timeline d'expériences
✅ Grid de projets animé
✅ Navigation smooth scroll
✅ Mode SSR pour meilleur référencement

## 📱 Responsive

Le portfolio est entièrement responsive et optimisé pour :

- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 968px)
- 🖥️ Desktop (> 968px)

## 🔧 Configuration SEO

Les meta tags sont configurés dans `nuxt.config.ts`. N'oubliez pas de mettre à jour :

- URL du site
- Image OpenGraph
- Description
- Mots-clés

### Docker

```bash
# Build
docker build -t portfolio .

# Run
docker run -p 3000:3000 portfolio
```

## 📊 Performance

Le site est optimisé pour obtenir de hauts scores sur :

- Google Lighthouse
- PageSpeed Insights
- Core Web Vitals

## 📝 License

MIT © Mohamed DJIBRILA

## 📧 Contact

- Email: djibrilaibrahim14@gmail.com
- LinkedIn: [mohamed-ibrahim-djibrila](https://www.linkedin.com/in/mohamed-ibrahim-djibrila)
- Téléphone: +33 7 45 25 98 57

---

Développé avec ❤️ par Mohamed DJIBRILA
