# LamdaSoft

Site public de LamdaSoft, agence tunisienne de développement web, mobile et
digitalisation pour les PME.

Déployé automatiquement sur GitHub Pages à chaque push sur `main` :
<https://smairio.github.io>

## Développement

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build de production dans ./dist
npm run preview  # sert ./dist — utile pour une démo hors ligne en rendez-vous
npm run check    # astro check + ESLint + Prettier
```

Node.js >= 22.12.0 requis.

## Où modifier quoi

| Quoi                                 | Fichier                 |
| ------------------------------------ | ----------------------- |
| Téléphone, WhatsApp, e-mail          | `src/contact.ts`        |
| Menu, pied de page                   | `src/navigation.ts`     |
| Nom du site, métadonnées SEO, langue | `src/config.yaml`       |
| Contenu de la page d'accueil         | `src/pages/index.astro` |
| Articles de blog                     | `src/data/post/`        |

## Base technique

Construit sur [AstroWind](https://github.com/onwidget/astrowind) (Astro +
Tailwind CSS), licence MIT — voir `LICENSE.md`.
