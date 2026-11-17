export interface ProjectMetaItem {
  label: string;
  value: string;
}

export interface ProjectExternalLink {
  url: string;
  label: string;
}

export interface ProjectStatItem {
  score: string;
  label: string;
}

export interface ProjectCardListItem {
  title: string;
  text: string;
}

export type SectionBlock =
  | { type: 'heading'; text: string; level?: 2 | 3 }
  | { type: 'paragraph'; text: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'cards-list'; items: ProjectCardListItem[] }
  | {
      type: 'image';
      src: string;
      alt: string;
      caption?: string;
      contrast?: boolean;
      maxWidth?: string;
    }
  | { type: 'code'; code: string; caption?: string }
  | { type: 'stats'; items: ProjectStatItem[]; caption?: string };

export interface ProjectSection {
  heading?: string;
  intro?: string;
  highlight?: boolean;
  left: SectionBlock[];
  right: SectionBlock[];
}

export interface ProjectClosing {
  title: string;
  text: string;
  cta?: {
    url: string;
    label: string;
    external?: boolean;
  };
}

export interface Project {
  slug: string;
  number: string;
  context: string;
  cardTitle: string;
  title: string;
  description: string;
  tech: string;
  image: string;
  tag: string;
  subtitle: string;
  note: string;
  externalLink?: ProjectExternalLink;
  meta: ProjectMetaItem[];
  sections: ProjectSection[];
  closing?: ProjectClosing;
}

export const projects: Project[] = [
  {
    slug: '20-bornes',
    number: '01',
    context: "Mairie d'Andrésy",
    cardTitle: 'Refonte "Les 20 Bornes d\'Andrésy"',
    title: "Les 20 Bornes d'Andrésy",
    description:
      "Refonte complète adoptée par la mairie d'Andrésy. Modernisation UX et intégration responsive.",
    tech: 'HTML/CSS • Bootstrap • JS Vanilla',
    image: '/projects/accueil_20bornes.webp',
    tag: 'Projet Personnel · Adopté par la Mairie',
    subtitle:
      "Refonte complète et modernisation du portail web d'un événement sportif local majeur.",
    note: "Le site a été adopté par la mairie d'Andrésy et est désormais en ligne :",
    externalLink: {
      url: 'https://20bornesandresy.fr/',
      label: '20bornesandresy.fr',
    },
    meta: [
      { label: 'Rôle', value: 'Designer UI & Développeur Front-End' },
      { label: 'Stack Technique', value: 'Bootstrap 5.3, HTML5, CSS3, JS Vanilla' },
      { label: 'Performance', value: 'Score SEO : 100/100' },
    ],
    sections: [
      {
        left: [
          { type: 'heading', text: 'Le Défi', level: 2 },
          {
            type: 'paragraph',
            text: 'Ce projet est né d\'un constat simple : le site actuel de l\'événement des "20 Bornes" accusait le poids des années. Il n\'était pas responsive (illisible sur mobile), souffrait de problèmes de chargement CSS et renvoyait une image vieillissante qui ne correspondait plus au dynamisme de la course.',
          },
          {
            type: 'paragraph',
            text: "**Résultat :** La refonte a été présentée à la mairie d'Andrésy, qui l'a adoptée comme site officiel de l'événement. Le site est désormais accessible au public à l'adresse [20bornesandresy.fr](https://20bornesandresy.fr/).",
          },
        ],
        right: [
          {
            type: 'image',
            src: '/projects/mockup_pc_mobile.webp',
            alt: 'Mockup comparatif Mobile vs Desktop',
          },
        ],
      },
      {
        heading: 'Choix Graphiques & UX',
        intro:
          "Pour assurer une transition douce pour les habitués, j'ai conservé les codes couleurs de l'affiche officielle (Sarcelle, Orange, Magenta). Cependant, j'ai voulu rompre avec le côté statique des sites institutionnels classiques.",
        left: [
          {
            type: 'image',
            src: '/projects/accueil_20bornes.webp',
            alt: "Aperçu de la nouvelle page d'accueil 20bornesandresy.fr",
          },
        ],
        right: [
          {
            type: 'heading',
            text: "Géométrie inspirée de l'affiche 2026",
            level: 3,
          },
          {
            type: 'paragraph',
            text: "J'ai conçu un Hero encadré par des pans géométriques obliques latéraux à aplats francs (Magenta #B00058, Orange #FF8F6B, Sarcelle #009688) et trame diagonale, fidèles à l'affiche officielle 2026. Le titre laisse place au logotype officiel accompagné d'un compte à rebours typographique épuré, pensé dans un esprit dossard.",
          },
          {
            type: 'heading',
            text: "L'expérience utilisateur (UX) & Les Épreuves",
            level: 3,
          },
          {
            type: 'paragraph',
            text: "Les 5 distances (Semi-Marathon 21,1 km, 10 km, 5 km, 2 km et 1 km Famille) sont présentées sous forme de cartes en bornes kilométriques codées par couleur, intégrant le compteur de places disponibles en temps réel. Sur mobile, la grille se transforme en carrousel tactile fluide (`scroll-snap`) avec indicateurs de pagination.",
          },
        ],
      },
      {
        heading: 'Développement & Intégration',
        intro:
          "J'ai choisi **Bootstrap 5.3** pour sa fiabilité structurelle tout en développant une feuille de style CSS sur-mesure (variables CSS, `clip-path` géométriques, typographies Montserrat & Roboto) et des scripts JS dédiés.",
        highlight: true,
        left: [
          {
            type: 'heading',
            text: 'Focus : Navigation & Compteur temps réel',
            level: 3,
          },
          {
            type: 'paragraph',
            text: 'La barre de navigation fixe adopte des liens en pilules (`border-radius: 50px`) qui prennent la couleur primaire au survol et sur la page active, complétée sur mobile par un menu plein écran dédié (`custom-burger-btn` et `mobile-menu-overlay`).',
          },
          {
            type: 'paragraph',
            text: 'Un script léger (`places.js`) interroge dynamiquement les quotas pour afficher en direct les places restantes sur chaque épreuve, tandis que le balisage `Schema.org` (`SportsEvent`) optimise le référencement local.',
          },
        ],
        right: [
          {
            type: 'code',
            code: `<nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white border-bottom">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <img src="images/logo_primary.webp" alt="Logo Les 20 Bornes d'Andrésy" class="navbar-logo">
    </a>
    <button class="custom-burger-btn" aria-label="Menu" aria-expanded="false" aria-controls="mobileMenuOverlay">
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav gap-3">
        <li class="nav-item"><a class="nav-link active" href="index.html">Accueil</a></li>
        <li class="nav-item"><a class="nav-link" href="html/epreuves.html">Les Épreuves</a></li>
        <li class="nav-item"><a class="nav-link" href="html/inscriptions.html">Inscriptions</a></li>
      </ul>
    </div>
  </div>
</nav>`,
          },
        ],
      },
      {
        heading: 'Performance & SEO',
        left: [
          {
            type: 'paragraph',
            text: "Un site lent fait fuir les utilisateurs. J'ai donc optimisé chaque ressource :",
          },
          {
            type: 'bullets',
            items: [
              '**Format WebP :** Toutes les images ont été converties pour réduire leur poids sans perte de qualité visible.',
              '**Code minifié :** Utilisation des bonnes pratiques Bootstrap.',
              '**SEO technique :** Balisage sémantique rigoureux (header, nav, main, article).',
            ],
          },
          {
            type: 'paragraph',
            text: 'Le résultat est sans appel sur *Google PageSpeed Insights* :',
          },
        ],
        right: [
          {
            type: 'stats',
            items: [
              { score: '100', label: 'SEO' },
              { score: '99', label: 'Performance' },
              { score: '91', label: 'Accessibilité' },
            ],
            caption: 'Scores obtenus sur Desktop via PageSpeed Insights',
          },
        ],
      },
    ],
    closing: {
      title: 'Un projet devenu réalité',
      text: "Ce qui était au départ un exercice personnel est devenu le site officiel de l'événement, adopté par la mairie d'Andrésy. Le site est aujourd'hui en production à l'adresse [20bornesandresy.fr](https://20bornesandresy.fr/) et sera utilisé pour l'édition 2026 de la course (29 novembre). C'est une belle validation de mon travail de design et de développement.",
    },
  },
  {
    slug: 'dataviz',
    number: '02',
    context: 'SAÉ 401',
    cardTitle: 'DataViz - Logement & Démographie',
    title: 'DataViz - Logement & Démographie',
    description:
      "Dashboard interactif d'analyse territoriale et de visualisation des données du logement social en France.",
    tech: 'React • Symfony • Chart.js • Tailwind CSS',
    image: '/projects/dataviz_dashboard.webp',
    tag: 'Projet Universitaire · SAÉ 401',
    subtitle:
      "Tableau de bord interactif d'analyse territoriale et de visualisation des données du logement social en France.",
    note: "L'application est déployée et accessible en direct :",
    externalLink: {
      url: 'https://datavizsae401.netlify.app/',
      label: 'datavizsae401.netlify.app',
    },
    meta: [
      { label: 'Mon Rôle', value: 'Développeur Full-Stack & Data Visualisation' },
      { label: 'Cadre', value: 'Projet Universitaire (SAÉ 401)' },
      {
        label: 'Stack Technique',
        value: 'React 19, Symfony 7 (API REST), Chart.js, Tailwind CSS, MySQL',
      },
      { label: 'Hébergement', value: 'Netlify (Front) & Hostinger (API / BDD)' },
    ],
    sections: [
      {
        left: [
          { type: 'heading', text: 'Le Défi', level: 2 },
          {
            type: 'paragraph',
            text: "Comprendre la pression immobilière et anticiper les besoins en logements sociaux est un enjeu territorial majeur. Cependant, les données open data (INSEE, Ministère du Logement) se présentent sous forme de fichiers bruts très volumineux et difficilement interprétables pour les décideurs et citoyens.",
          },
          {
            type: 'paragraph',
            text: "L'objectif de cette **SAÉ 401** était de concevoir et développer une application web complète, capable de digérer ces données complexes et de les restituer sous la forme d'un **dashboard analytique réactif et intuitif**.",
          },
          {
            type: 'paragraph',
            text: "Le projet a été pensé de bout en bout : de la modélisation de la base de données SQL et la mise en place d'une API REST Symfony jusqu'au rendu interactif des graphiques en React avec **Chart.js**.",
          },
        ],
        right: [
          {
            type: 'image',
            src: '/projects/dataviz_dashboard.webp',
            alt: 'Tableau de bord DataViz avec graphiques et indicateurs',
            caption:
              'Interface interactive avec indicateurs clés régionaux et graphiques dynamiques',
          },
        ],
      },
      {
        heading: 'Architecture & Flux de Données',
        intro:
          'Pour assurer scalabilité, maintenabilité et fluidité, nous avons opté pour une **architecture découplée** avec séparation stricte des responsabilités entre le Frontend React et le Backend Symfony.',
        left: [
          {
            type: 'image',
            src: '/projects/dataviz_schema.webp',
            alt: 'Schéma de fonctionnement et flux de données React',
            caption:
              'Schéma de transmission réactive des données entre les composants',
          },
        ],
        right: [
          {
            type: 'heading',
            text: 'Un flux React unidirectionnel et optimisé',
            level: 3,
          },
          {
            type: 'paragraph',
            text: 'Le pilotage des données repose sur une logique claire et performante :',
          },
          {
            type: 'cards-list',
            items: [
              {
                title: 'Sélection & Filtrage',
                text: "L'utilisateur choisit une année et une région dans la `Sidebar`. Un hook `useEffect` écoute ces changements pour déclencher l'appel API.",
              },
              {
                title: "Gestion d'état centralisée",
                text: 'Le composant parent `App` stocke les statistiques régionales dans un `useState` et les redistribue via les props aux composants enfants.',
              },
              {
                title: 'Composants graphiques autonomes',
                text: 'Chaque type de visualisation (âge, chômage, densité, logements vacants) est isolé dans son propre composant, facilitant la mise en cache et évitant les re-rendus inutiles.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Visualisations de Données & Conception Métier',
        intro:
          "Chaque graphique a été rigoureusement choisi pour éclairer une problématique précise sans surcharger l'utilisateur :",
        highlight: true,
        left: [
          { type: 'heading', text: 'Les 5 visualisations clés :', level: 3 },
          {
            type: 'cards-list',
            items: [
              {
                title: 'Pyramide des âges (Donut Chart)',
                text: "Cible la nature de la demande : un territoire vieillissant n'a pas les mêmes besoins en infrastructures qu'un territoire jeune.",
              },
              {
                title: 'Corrélation chômage et pauvreté (Scatter Plot)',
                text: "Visualise la précarité économique déterminant le besoin d'un parc social fort pour compenser les barrières d'accès au parc privé.",
              },
              {
                title: 'Pression immobilière (Bubble Chart)',
                text: 'Met en relation la densité de population et le nombre de logements pour repérer instantanément les territoires sous tension.',
              },
              {
                title: 'Équilibre parc social & logements vacants (Bar Chart)',
                text: 'Met en évidence les déséquilibres entre offres vacantes et demande sociale non satisfaite.',
              },
              {
                title: 'Dynamique de construction neuve (Évolution temporelle)',
                text: "Compare les nouvelles constructions sur 10 ans pour évaluer l'effort public face à l'essor démographique.",
              },
            ],
          },
        ],
        right: [
          {
            type: 'code',
            code: `// Extrait de l'API REST Symfony (DatavizController)
#[Route('/api/stats/region/{nomRegion}/{annee}', methods: ['GET'])]
public function getStatsRegion(
    string $nomRegion,
    int $annee,
    EntityManagerInterface $em
): JsonResponse {
    $region = $em->getRepository(Region::class)
        ->findOneBy(['nomRegion' => $nomRegion]);

    if (!$region) {
        return new JsonResponse(['message' => 'Région introuvable'], 404);
    }

    $departements = $em->getRepository(Departement::class)
        ->findBy(['region' => $region]);

    $stats = $em->getRepository(StatistiquesDepartement::class)
        ->findBy(['departement' => $departements, 'annee' => $annee]);

    return $this->json($stats, context: ['groups' => ['stats:read']]);
}`,
            caption:
              'Contrôleur API Symfony : sérialisation sélective et routage REST',
          },
        ],
      },
      {
        heading: 'Traitement des Données & Pipeline ETL',
        left: [
          {
            type: 'paragraph',
            text: "Pour garantir des temps de réponse quasi-instantanés, nous avons conçu un **pipeline d'ingestion sur mesure** :",
          },
          {
            type: 'bullets',
            items: [
              "**Commande Symfony d'importation** : Développement de `ImportStatistiquesDepartementCommand` pour lire les fichiers CSV, valider les codes départements et alimenter MySQL par lots (batch processing).",
              '**Curation sélective des données** : Élimination des coordonnées géographiques polygonales trop lourdes (`geom`, `epci`) et des variables périphériques (passoires thermiques DPE, ventes physiques), pour ne retenir que les indicateurs directement actionnables.',
              '**Sérialisation optimisée** : Utilisation des `Serializer Groups` de Symfony pour ne renvoyer au client React que les champs strictement requis pour le rendu graphique.',
            ],
          },
        ],
        right: [
          {
            type: 'image',
            src: '/projects/dataviz_mobile.webp',
            alt: "Vue mobile responsive de l'application DataViz",
            caption:
              'Conception responsive soignée pour une consultation optimale sur mobile',
            maxWidth: '320px',
          },
        ],
      },
      {
        heading: 'Bilan & Chiffres Clés',
        highlight: true,
        left: [
          {
            type: 'paragraph',
            text: 'Ce projet illustre ma capacité à concevoir et livrer une application complète à forte valeur ajoutée analytique, combinant un backend robuste avec une interface front-end réactive, esthétique et accessible.',
          },
          {
            type: 'paragraph',
            text: "L'utilisation conjointe de **React 19**, **Tailwind CSS**, **DaisyUI** et **Chart.js** a permis d'obtenir une expérience fluide avec des transitions naturelles et un confort visuel immédiat.",
          },
        ],
        right: [
          {
            type: 'stats',
            items: [
              { score: '5', label: 'Graphiques Chart.js' },
              { score: '100+', label: 'Départements Gérés' },
              { score: '100%', label: 'API REST Découplée' },
              { score: 'Live', label: 'Sur Netlify' },
            ],
          },
        ],
      },
    ],
    closing: {
      title: "Explorer l'application",
      text: 'Le tableau de bord est entièrement déployé et interactif. Vous pouvez filtrer par année, région et département pour explorer les dynamiques territoriales en temps réel.',
      cta: {
        url: 'https://datavizsae401.netlify.app/',
        label: "Tester l'application en direct",
        external: true,
      },
    },
  },
  {
    slug: 'portfolio',
    number: '03',
    context: 'Projet Personnel',
    cardTitle: 'Portfolio Personnel',
    title: 'Portfolio Personnel',
    description:
      "Conception UX/UI et développement front-end d'un portfolio sur-mesure, moderne, fluide et accessible.",
    tech: 'HTML5/CSS3 • JS Vanilla • UX/UI Design',
    image: '/projects/portfolio_preview.webp',
    tag: 'Projet Personnel · Identité & Développement',
    subtitle:
      "Conception UX/UI et développement front-end d'un portfolio sur-mesure, moderne, fluide et accessible.",
    note: 'Le portfolio est accessible en ligne :',
    externalLink: {
      url: 'https://maxencecoste.fr/',
      label: 'maxencecoste.fr',
    },
    meta: [
      { label: 'Mon Rôle', value: 'Designer UX/UI & Développeur Front-End' },
      { label: 'Cadre', value: 'Projet Personnel & Identité de marque' },
      {
        label: 'Stack Technique',
        value: 'HTML5 sémantique, CSS3 moderne (Variables, Grid, Flou), JS Vanilla ES6+',
      },
      {
        label: 'Performance',
        value: '0 Dépendance lourde · 100/100 SEO & Vitesse',
      },
    ],
    sections: [
      {
        left: [
          { type: 'heading', text: 'La Démarche', level: 2 },
          {
            type: 'paragraph',
            text: "Pour un développeur et designer web, le portfolio personnel est le projet le plus exigeant : c'est la vitrine directe de son niveau technique, de son sens esthétique et de son exigence ergonomique.",
          },
          {
            type: 'paragraph',
            text: "Plutôt que d'utiliser un CMS préconfiguré ou un template tout fait, j'ai fait le choix délibéré de **tout coder à la main en Vanilla (HTML5, CSS3 pur, JavaScript moderne)**. Cette approche garantit une maîtrise absolue du rendu, un code ultra-léger exempt de dette technique, et une vitesse d'affichage instantanée.",
          },
          {
            type: 'paragraph',
            text: "Inspiré des interfaces minimalistes contemporaines, le design met en valeur mes compétences à la croisée de l'**UX/UI Design** et du **Développement Front-End**.",
          },
        ],
        right: [
          {
            type: 'image',
            src: '/projects/portfolio_preview.webp',
            alt: 'Aperçu du portfolio en mode sombre',
            caption:
              'Interface épurée et structurée en mode sombre avec typographie DM Sans',
          },
        ],
      },
      {
        heading: 'Conception Visuelle & Expérience Utilisateur',
        intro:
          "L'interface a été conçue pour offrir une lisibilité optimale et une sensation d'immersion continue grâce à des partis pris graphiques forts :",
        left: [
          {
            type: 'image',
            src: '/projects/portfolio_light.webp',
            alt: 'Aperçu du portfolio en mode clair',
            caption:
              'Déclinaison soignée en mode clair avec adaptation automatique des contrastes',
          },
        ],
        right: [
          {
            type: 'heading',
            text: 'Un système de design complet et cohérent',
            level: 3,
          },
          {
            type: 'cards-list',
            items: [
              {
                title: 'Double thème dynamique (Dark / Light)',
                text: 'Détection automatique des préférences du système utilisateur (`prefers-color-scheme`) avec mémorisation dans le `localStorage` et bascule instantanée sans scintillement. Les logos des entreprises (BNP Paribas, Société Générale) s\'adaptent automatiquement au contraste.',
              },
              {
                title: 'Bandeaux de flou directionnel immersif',
                text: 'Superposition de calques en haut et bas d\'écran exploitant `backdrop-filter: blur()` pour adoucir la lecture du contenu au fil du défilement.',
              },
              {
                title: 'Grille de cartes responsives',
                text: 'Présentation des réalisations sous forme de cartes aérées dotées d\'effets de zoom subtils au survol (hover) et de tags catégorisant la stack.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Micro-Interactions & Développement Sur-Mesure',
        intro:
          "L'expérience utilisateur repose sur une multitude de détails interactifs conçus pour rendre la navigation fluide et agréable :",
        highlight: true,
        left: [
          { type: 'heading', text: 'Les fonctionnalités phares :', level: 3 },
          {
            type: 'cards-list',
            items: [
              {
                title: 'Menu flottant en « gélules » (Side Menu Pill)',
                text: "Dès que l'utilisateur dépasse 50px de défilement, la barre de navigation principale s'estompe au profit d'un menu latéral discret et élégant. Il intègre un fil d'Ariane contextuel (ex. `PORT`, `20B`, `DVIZ`) et des infobulles informatives.",
              },
              {
                title: 'Copie d’email en un clic',
                text: "Bouton de contact avec survol révélant l'adresse email et copie immédiate via l'API `navigator.clipboard`, confirmée par une animation d'icône.",
              },
              {
                title: 'Animations au scroll & Ripples',
                text: "Défilement fluide animé (courbe d'accélération `easeInOutCubic`) et effet d'ondulation (Ripple Material Design) généré dynamiquement sur chaque clic.",
              },
            ],
          },
        ],
        right: [
          {
            type: 'code',
            code: `// Gestion intelligente du thème et persistance
function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  if (toggle) toggle.checked = theme === 'dark';
  if (toggleSide) toggleSide.checked = theme === 'dark';

  // Adaptation dynamique des logos partenaires
  const sgLogo = document.querySelector('.logo-sg-img');
  if (sgLogo) {
    sgLogo.src = theme === 'dark'
      ? 'images/logo-societe-generale-dark.webp'
      : 'images/logo-societe-generale.webp';
  }
}

// Détection de la préférence système
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
applyTheme(saved || (prefersDark.matches ? 'dark' : 'light'));`,
            caption:
              'Extrait JS : système de thème universel, réactif et persistant',
          },
        ],
      },
      {
        heading: 'Performance, Éco-conception & SEO',
        left: [
          {
            type: 'paragraph',
            text: "L'absence de frameworks tiers permet au portfolio d'afficher un niveau de performance irréprochable :",
          },
          {
            type: 'bullets',
            items: [
              '**Poids plume & Vitesse maximale** : Aucune librairie externe lourde. Seul le code nécessaire est exécuté, permettant un premier rendu (FCP) quasi instantané.',
              '**SEO & Sémantique HTML5** : Structure exemplaire balisée par des balises `header`, `nav`, `section`, `footer`, complétée par un fichier `sitemap.xml` et `robots.txt`.',
              '**Accessibilité & Ergonomie** : Contrastes rigoureusement validés, gestion du focus, navigation au clavier et menu burger mobile avec fermeture par touche Échap.',
            ],
          },
        ],
        right: [
          {
            type: 'image',
            src: '/projects/portfolio_mobile.webp',
            alt: 'Aperçu mobile du portfolio',
            caption:
              'Adaptabilité responsive mobile soignée avec burger menu ergonomique',
            maxWidth: '300px',
          },
        ],
      },
      {
        heading: 'Bilan & Chiffres Clés',
        highlight: true,
        left: [
          {
            type: 'paragraph',
            text: "Ce portfolio est le reflet fidèle de mon approche professionnelle : une alliance étroite entre rigueur technique, sens du design et souci permanent de l'expérience utilisateur.",
          },
          {
            type: 'paragraph',
            text: "Il constitue le socle évolutif sur lequel je présente l'ensemble de mes réalisations académiques et professionnelles.",
          },
        ],
        right: [
          {
            type: 'stats',
            items: [
              { score: '100%', label: 'Vanilla (0 Framework)' },
              { score: '100', label: 'Score SEO / Qualité' },
              { score: '2', label: 'Modes Sombre & Clair' },
              { score: '0ms', label: 'Latence de Rendu' },
            ],
          },
        ],
      },
    ],
    closing: {
      title: 'Visiter le portfolio',
      text: "Vous naviguez actuellement sur ce portfolio. N'hésitez pas à explorer les différentes pages projets ou à me contacter directement.",
      cta: {
        url: '/',
        label: "Retour à l'accueil",
        external: false,
      },
    },
  },
  {
    slug: 'decathlon',
    number: '04',
    context: 'Hackathon',
    cardTitle: "Decathlon Profiler - Nuit de l'Info",
    title: 'Decathlon Profiler',
    description:
      "Conception d'un outil de profilage sportif pour la prévention des blessures lors d'un hackathon.",
    tech: 'HTML/CSS • Bootstrap • JS Vanilla',
    image: '/projects/decathlon_accueil.webp',
    tag: "Hackathon · Nuit de l'Info",
    subtitle:
      "Conception et développement d'un outil de profilage sportif en moins de 2h.",
    note: "Ce projet a été réalisé lors de la Nuit de l'Info, un défi national étudiant de développement web du coucher au lever du soleil.",
    meta: [
      { label: 'Mon Rôle', value: 'Développeur Unique & Designer UI' },
      {
        label: "L'Équipe",
        value: '1 Développeur (Moi), 1 Chef de projet, 2 Créateurs de contenu',
      },
      { label: 'Stack Technique', value: 'HTML5, CSS3, JS Vanilla, Bootstrap 5' },
    ],
    sections: [
      {
        left: [
          { type: 'heading', text: 'Le Défi : CTO de votre Santé', level: 2 },
          {
            type: 'paragraph',
            text: "Le sujet de cette édition nous invitait à **connecter l'informatique au sport pour prévenir les blessures**.",
          },
          {
            type: 'paragraph',
            text: "L'objectif était de créer une interface permettant aux utilisateurs d'analyser leur pratique et d'obtenir des conseils posturaux adaptés. En tant que seul développeur de l'équipe, j'avais la charge de transformer les idées et contenus de mes camarades en un produit fonctionnel avant l'aube.",
          },
          {
            type: 'heading',
            text: 'Objectifs atteints (Niveaux)',
            level: 3,
          },
          {
            type: 'cards-list',
            items: [
              {
                title: 'Niveau 1 : Profilage Sportif',
                text: "Mise en place d'un algorithme de QCM pour déterminer le profil (A, B, C, D).",
              },
              {
                title: 'Niveau 2 : Instructions Personnalisées',
                text: 'Génération dynamique de conseils basés sur le résultat du test.',
              },
              {
                title: 'Niveau 3 : Visualisation',
                text: 'Intégration de schémas visuels pour illustrer les bonnes postures.',
              },
            ],
          },
        ],
        right: [
          {
            type: 'image',
            src: '/projects/decathlon_questionnaire.webp',
            alt: 'Interface du Questionnaire Decathlon',
            caption: 'Interface du questionnaire interactif',
          },
        ],
      },
      {
        heading: 'Design & Expérience Utilisateur',
        intro:
          "L'enjeu n'était pas seulement technique, mais aussi visuel. Il fallait respecter l'identité forte de **Decathlon** tout en guidant l'utilisateur de manière fluide.",
        left: [
          {
            type: 'image',
            src: '/projects/decathlon_accueil.webp',
            alt: "Page d'accueil Decathlon Profiler",
          },
        ],
        right: [
          { type: 'heading', text: 'Identité Visuelle', level: 3 },
          {
            type: 'paragraph',
            text: "J'ai intégré les codes graphiques de la marque (le bleu iconique, la typographie *Roboto Condensed*) pour créer une expérience immersive. L'utilisation de **Bootstrap 5** m'a permis de construire une grille responsive solide en un temps record.",
          },
          { type: 'heading', text: 'Une UX sans friction', level: 3 },
          {
            type: 'paragraph',
            text: 'Le questionnaire a été conçu comme une "Single Page Application" simulée : les questions défilent sans rechargement de page pour garder l\'utilisateur engagé, avant de le rediriger vers ses résultats personnalisés.',
          },
        ],
      },
      {
        heading: 'Architecture & Code',
        intro:
          'Contrainte de temps oblige, j\'ai opté pour une architecture **100% statique** (pas de base de données). Tout le "cerveau" de l\'application réside dans le navigateur client via JavaScript.',
        highlight: true,
        left: [
          { type: 'heading', text: 'Logique de Profilage (JS)', level: 3 },
          {
            type: 'paragraph',
            text: "Plutôt que d'envoyer les réponses à un serveur, j'ai développé un algorithme en JS Vanilla qui stocke les points (A, B, C, D) en mémoire.",
          },
          {
            type: 'paragraph',
            text: "À la fin du quiz, le script calcule le profil dominant et génère une redirection avec ancre (ex: `conseils.html#profil-c`). La page de destination lit cette ancre pour n'afficher que le contenu pertinent pour l'utilisateur.",
          },
          {
            type: 'paragraph',
            text: 'Cette approche "Low-Tech" garantit un site ultra-rapide et hébergeable n\'importe où.',
          },
        ],
        right: [
          {
            type: 'code',
            code: `// Exemple simplifié de la logique de résultat
function showResult() {
  // Calcul du profil majoritaire
  let maxScore = 0;
  let finalProfile = '';

  for (const [profile, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      finalProfile = profile;
    }
  }

  // Redirection vers la page conseils avec ancre
  // L'ancre #profil-X permet d'activer le CSS :target
  window.location.href = \`conseils.html#profil-\${finalProfile}\`;
}`,
          },
        ],
      },
      {
        heading: 'Bilan de la Nuit',
        left: [
          {
            type: 'paragraph',
            text: "Ce projet a été une excellente épreuve de gestion du stress et de priorisation. En tant que seul développeur pour trois créatifs, j'ai dû :",
          },
          {
            type: 'bullets',
            items: [
              '**Trancher rapidement** sur les choix techniques (Pas de React/Vue, rester sur du JS pur pour aller vite).',
              "**Coordonner** l'intégration des assets (textes et images) produits en temps réel par l'équipe.",
              '**Livrer** un produit fini et sans bug critique avant la deadline.',
            ],
          },
        ],
        right: [
          {
            type: 'stats',
            items: [
              { score: '2h', label: 'Durée Dev' },
              { score: '4', label: 'Niveaux Validés' },
              { score: '100%', label: 'Autonomie Tech' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'oishi',
    number: '05',
    context: 'Projet Universitaire',
    cardTitle: 'Oishi - Sushi Shop',
    title: 'Oishi - Sushi Shop',
    description:
      "Développement d'une plateforme e-commerce complète pour un restaurant.",
    tech: 'Angular • PHP • MySQL',
    image: '/projects/maquette_oishi.webp',
    tag: 'Projet SAE · Universitaire',
    subtitle:
      "Développement d'une plateforme e-commerce complète pour un établissement de restauration rapide.",
    note: 'Un projet ambitieux réalisé en groupe pour apprendre à connecter une interface moderne Angular à une base de données SQL.',
    meta: [
      { label: 'Mon Rôle', value: "Chef d'équipe & Fullstack" },
      { label: "L'Équipe", value: '4 Étudiants' },
      { label: 'Stack Technique', value: 'Angular, PHP (API), MySQL, Trello' },
    ],
    sections: [
      {
        left: [
          { type: 'heading', text: 'Le Concept', level: 2 },
          {
            type: 'paragraph',
            text: "**Oishi** est une application web destinée à la commande en ligne de sushis et de plateaux repas. L'objectif était de simuler un environnement professionnel réel où le client peut naviguer dans un catalogue, gérer son panier et passer commande.",
          },
          { type: 'heading', text: 'Challenges Techniques', level: 3 },
          {
            type: 'cards-list',
            items: [
              {
                title: 'Architecture API',
                text: 'Connecter le Frontend (Angular) au Backend via une API PHP RESTful créée sur mesure.',
              },
              {
                title: "Apprentissage d'Angular",
                text: 'Découverte et prise en main du framework (Composants, Services, Routing) en cours de développement.',
              },
              {
                title: 'Gestion des Données',
                text: "Modélisation de la base de données SQL pour gérer les utilisateurs, les produits et l'historique des commandes.",
              },
            ],
          },
        ],
        right: [
          {
            type: 'image',
            src: '/projects/maquette_oishi.webp',
            alt: 'Maquette du projet Oishi',
            caption: 'Maquette initiale du projet',
          },
        ],
      },
      {
        heading: 'Développement & Fonctionnalités',
        intro:
          "Le projet est actuellement en cours de finalisation, avec un focus particulier sur l'expérience utilisateur lors de l'inscription et de la commande.",
        left: [
          {
            type: 'image',
            src: '/projects/connexion_oishi.webp',
            alt: 'Page de connexion Oishi',
          },
        ],
        right: [
          {
            type: 'heading',
            text: 'Gestion Utilisateurs (Fini)',
            level: 3,
          },
          {
            type: 'paragraph',
            text: "Les modules d'inscription et de connexion sont totalement fonctionnels. Nous avons sécurisé les formulaires et géré la persistance de la session côté client.",
          },
          { type: 'heading', text: 'Architecture Backend', level: 3 },
          {
            type: 'paragraph',
            text: "Pour faire communiquer notre application Angular avec la base de données, nous avons développé une API légère en PHP. C'était un point crucial du projet : comprendre comment faire transiter les données (JSON) entre le serveur et le client.",
          },
          {
            type: 'code',
            code: `<?php
// API/boxes.php : Endpoint pour récupérer les produits
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'db.php';

// ... Logique de récupération SQL ...

if($num > 0){
    $boxes_arr = array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // Construction du JSON de réponse
        array_push($boxes_arr["records"], $item);
    }
    echo json_encode($boxes_arr);
}
?>`,
          },
        ],
      },
      {
        heading: 'Bilan Actuel',
        highlight: true,
        left: [
          {
            type: 'paragraph',
            text: "Ce projet de SAE est une excellente opportunité de monter en compétences sur des technologies très demandées (Angular). En tant que chef d'équipe, j'ai coordonné les tâches via **Trello** tout en assurant le versioning avec Git.",
          },
          {
            type: 'paragraph',
            text: "Le principal défi reste l'intégration complète de l'API avec tous les composants du frontend, mais les briques principales (Auth, Data Fetching) sont posées.",
          },
        ],
        right: [
          {
            type: 'stats',
            items: [
              { score: 'SAE', label: 'Projet Tuteuré' },
              { score: 'Angular', label: 'Framework' },
              { score: '100%', label: 'API Custom' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'webdoc',
    number: '06',
    context: 'Web-documentaire',
    cardTitle: 'Les Coulisses de la Gym',
    title: 'Les Coulisses de la Gym',
    description:
      "Web-documentaire immersif plongeant dans le quotidien d'un club de gymnastique.",
    tech: 'HTML/CSS • JS Vanilla • Multimédia',
    image: '/projects/webdoc_accueil.webp',
    tag: 'SAE · Web-documentaire',
    subtitle:
      "Immersion interactive au cœur d'un club de gymnastique préparant les championnats de France.",
    note: 'Projet réalisé en équipe dans le cadre de ma formation, visant à documenter la vie associative et sportive à travers une plateforme multimédia immersive.',
    meta: [
      {
        label: 'Mon Rôle',
        value: 'Développeur Full-stack & Photographe / Vidéaste',
      },
      {
        label: "L'Équipe",
        value: '5 Étudiants (Rédaction, Montage, Design, Développement)',
      },
      { label: 'Stack Technique', value: 'HTML5, CSS3, JavaScript Vanilla' },
    ],
    sections: [
      {
        left: [
          { type: 'heading', text: "Le Défi : Raconter l'effort", level: 2 },
          {
            type: 'paragraph',
            text: "L'objectif était de créer un **web-documentaire immersif** présentant le club de Courtry. Il fallait harmoniser des contenus hétérogènes : vidéos, galeries photos, podcasts et articles de fond pour offrir une expérience fluide sur tous les supports.",
          },
          {
            type: 'paragraph',
            text: "En tant que développeur unique, j'ai transformé la vision de l'équipe en un site interactif, tout en participant activement à la captation des médias sur le terrain (photos au Reflex et vidéos au smartphone).",
          },
          { type: 'heading', text: 'Contributions majeures', level: 3 },
          {
            type: 'bullets',
            items: [
              "**Développement intégral** : Programmation de l'interface et des interactions sans framework externe.",
              '**Captation Multimédia** : Réalisation de clichés techniques et artistiques lors des entraînements.',
              "**Rédaction** : Auteur de l'article de fond sur l'évolution réglementaire du justaucorps.",
            ],
          },
        ],
        right: [
          {
            type: 'image',
            src: '/projects/webdoc_accueil.webp',
            alt: 'Aperçu du Webdocumentaire',
            caption: 'Interface principale du web-documentaire',
          },
        ],
      },
      {
        heading: 'Architecture & Interactivité',
        intro:
          "Pour ce projet, j'ai mis l'accent sur une navigation intuitive et des composants JavaScript sur-mesure pour dynamiser le contenu statique.",
        highlight: true,
        left: [
          {
            type: 'code',
            code: `// Fonction générique de carrousel développée pour le projet
function setupCarousel(container, items, prevBtn, nextBtn) {
  let activeIndex = 0;
  // Gestion des classes 'active', 'prev', 'next'
  // pour l'effet Cover Flow
  updateCarousel();

  nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % items.length;
    updateCarousel();
  });
}`,
          },
        ],
        right: [
          { type: 'heading', text: 'Composants Custom JS', level: 3 },
          {
            type: 'paragraph',
            text: "J'ai développé plusieurs fonctionnalités clés pour enrichir l'UX :",
          },
          {
            type: 'bullets',
            items: [
              '**Carrousel "Cover Flow"** : Un système de navigation fluide pour la galerie photo et les articles, gérant dynamiquement les plans de profondeur en CSS.',
              '**Lecteur Audio Thématique** : Intégration d\'un lecteur interactif avec une animation de vinyle tournant pour les témoignages audio.',
              '**Système de Modales** : Pour permettre une lecture immersive des articles sans quitter la page principale.',
            ],
          },
        ],
      },
      {
        heading: 'Bilan du projet',
        left: [
          {
            type: 'paragraph',
            text: "Ce travail a été une excellente opportunité de lier mes compétences techniques en développement web à ma passion pour l'image. J'ai dû :",
          },
          {
            type: 'bullets',
            items: [
              "**Coordonner** l'intégration de médias produits par l'ensemble du groupe (5 personnes).",
              '**Optimiser** les performances pour garantir un chargement rapide malgré le poids des ressources visuelles.',
              "**Respecter** scrupuleusement l'identité visuelle définie par l'équipe design tout en l'enrichissant d'animations interactives.",
            ],
          },
        ],
        right: [
          {
            type: 'stats',
            items: [
              { score: '5', label: 'Pages Web' },
              { score: '100%', label: 'Vanilla JS' },
              { score: '12', label: 'Galerie Photo' },
            ],
          },
        ],
      },
    ],
  },
];
