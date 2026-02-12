# Digital CV Site (HTML/CSS/JS Vanilla)

Site CV/portfolio multi-page, bilingue (FR/EN), responsive, avec mode clair/sombre, filtres compétences/projets, animations légères et formulaire contact sans backend.

## Lancer en local
- Option rapide: ouvrir `index.html` en double-clic.
- Option recommandée: utiliser **Live Server** (VS Code) pour un rendu plus proche production.

## Mettre à jour le contenu
- Textes traduits: `js/i18n.js`.
- Expériences: `experience.html`.
- Compétences et tags de filtres: `skills.html`.
- Projets et détails modal: `projects.html`.
- Contact / réseaux: `contact.html`.
- Styles globaux et responsive: `css/styles.css`.

## Déploiement GitHub Pages
1. Pousser le dossier `digital-cv-site/` dans votre repo.
2. Dans GitHub > Settings > Pages.
3. Source: branche `main` (ou branche de votre choix), dossier racine ou `/docs` selon votre organisation.
4. Attendre l’URL générée et tester le switch FR/EN + thème.

## Déploiement Netlify
1. Créer un nouveau site (`Add new site` > `Import an existing project`) ou drag & drop du dossier.
2. Build command: vide.
3. Publish directory: `digital-cv-site`.
4. Déployer et vérifier les liens CV et formulaire.

## Formulaire de contact
### Option A (active par défaut)
- Implémenté en `mailto:` dans `js/form.js`.
- Validation front: champs requis + format email.

### Option B (optionnelle) – Formspree / EmailJS
- Remplacer la logique `mailto` dans `js/form.js` par un `fetch` vers Formspree ou le SDK EmailJS.
- Ajouter vos clés dans une section config en haut du fichier.
- Conserver la validation existante pour UX/accessibilité.

## Notes
- Les fichiers `assets/cv_fr.pdf` et `assets/cv_en.pdf` sont des placeholders à remplacer par vos CV finaux.
- Le lien LinkedIn est laissé en `À compléter` tant que l’URL exacte n’est pas fournie.
