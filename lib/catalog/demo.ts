import type {
  Category,
  Partner,
  Product,
  ProductImage,
  Project,
} from "./types";

function shot(id: string, alt: string): ProductImage {
  return {
    src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=80`,
    alt: `${alt}. Visuel de démonstration.`,
  };
}

const demo = true;

export const categories: Category[] = [
  {
    id: "fitness",
    handle: "fitness",
    name: "Fitness",
    description:
      "Chapitre de démonstration. Cardio, force et racks pour une salle professionnelle.",
    isDemo: demo,
  },
  {
    id: "football",
    handle: "football",
    name: "Football",
    description:
      "Chapitre de démonstration. Buts, modules d’entraînement et accessoires de terrain.",
    isDemo: demo,
  },
  {
    id: "sports",
    handle: "autres-sports",
    name: "Autres sports",
    description:
      "Chapitre de démonstration. Structures pour le basket, le tennis et le volley.",
    isDemo: demo,
  },
];

export const products: Product[] = [
  {
    id: "demo-fit-01",
    handle: "demo-tapis-de-course",
    name: "Tapis de course",
    reference: "DÉMO-FIT-01",
    categoryId: "fitness",
    description:
      "Fiche de démonstration. Un tapis professionnel présenté comme une pièce d’ingénierie : bande longue, inclinaison progressive, usage intensif.",
    images: [
      shot("photo-1576678927484-cc907957088c", "Ligne de tapis de course"),
      shot("photo-1534438327276-14e5300c3a48", "Salle cardio"),
      shot("photo-1540497077202-7c8a3999166f", "Alignement de machines"),
    ],
    specifications: [
      { label: "Bande", value: "152 cm" },
      { label: "Inclinaison", value: "0 – 15 %" },
      { label: "Usage", value: "Intensif" },
    ],
    variants: [
      { id: "fit-01-a", name: "Largeur de bande", value: "50 cm", available: true },
      { id: "fit-01-b", name: "Largeur de bande", value: "56 cm", available: true },
    ],
    availability: "available",
    relatedIds: ["demo-fit-02", "demo-fit-04"],
    featured: true,
    isDemo: demo,
  },
  {
    id: "demo-fit-02",
    handle: "demo-velo-stationnaire",
    name: "Vélo stationnaire",
    reference: "DÉMO-FIT-02",
    categoryId: "fitness",
    description:
      "Fiche de démonstration. Un vélo d’entraînement pour une salle où le cardio doit rester silencieux et précis.",
    images: [
      shot("photo-1518611012118-696072aa579a", "Vélos d’entraînement"),
      shot("photo-1571902943202-507ec2618e8f", "Volume d’une salle"),
    ],
    specifications: [
      { label: "Résistance", value: "Magnétique" },
      { label: "Usage", value: "Collectif" },
    ],
    variants: [
      { id: "fit-02-a", name: "Console", value: "Standard", available: true },
      { id: "fit-02-b", name: "Console", value: "Étendue", available: false },
    ],
    availability: "on-request",
    relatedIds: ["demo-fit-01", "demo-fit-03"],
    featured: true,
    isDemo: demo,
  },
  {
    id: "demo-fit-03",
    handle: "demo-station-musculation",
    name: "Station de musculation",
    reference: "DÉMO-FIT-03",
    categoryId: "fitness",
    description:
      "Fiche de démonstration. Une station guidée pour le travail de force en salle, présentée avec sa charge et son emprise.",
    images: [
      shot("photo-1599058917212-d750089bc07e", "Haltères alignés"),
      shot("photo-1583454110551-21f2fa2afe61", "Détail d’haltères"),
    ],
    specifications: [
      { label: "Charge", value: "Jusqu’à 120 kg" },
      { label: "Postes", value: "4" },
    ],
    variants: [
      { id: "fit-03-a", name: "Finition", value: "Acier", available: true },
    ],
    availability: "available",
    relatedIds: ["demo-fit-04", "demo-fit-01"],
    isDemo: demo,
  },
  {
    id: "demo-fit-04",
    handle: "demo-rack-de-force",
    name: "Rack de force",
    reference: "DÉMO-FIT-04",
    categoryId: "fitness",
    description:
      "Fiche de démonstration. Un rack pour les mouvements libres, avec une hauteur et une charge de travail lisibles.",
    images: [
      shot("photo-1517963879433-6ad2b056d712", "Zone de force"),
      shot("photo-1534438327276-14e5300c3a48", "Salle de musculation"),
    ],
    specifications: [
      { label: "Hauteur", value: "230 cm" },
      { label: "Charge", value: "300 kg" },
    ],
    variants: [
      { id: "fit-04-a", name: "Largeur", value: "120 cm", available: true },
      { id: "fit-04-b", name: "Largeur", value: "150 cm", available: true },
    ],
    availability: "available",
    relatedIds: ["demo-fit-03", "demo-fit-02"],
    featured: true,
    isDemo: demo,
  },
  {
    id: "demo-ftb-01",
    handle: "demo-but-professionnel",
    name: "But professionnel",
    reference: "DÉMO-FTB-01",
    categoryId: "football",
    description:
      "Fiche de démonstration. Un but de terrain présenté dans sa dimension réglementaire et son ancrage.",
    images: [
      shot("photo-1575361204480-aadea25e6e68", "But de football"),
      shot("photo-1574629810360-7efbbe195018", "Terrain de football"),
    ],
    specifications: [
      { label: "Dimensions", value: "7,32 × 2,44 m" },
      { label: "Structure", value: "Acier" },
    ],
    variants: [
      { id: "ftb-01-a", name: "Fixation", value: "Scellement", available: true },
      { id: "ftb-01-b", name: "Fixation", value: "Mobile", available: true },
    ],
    availability: "available",
    relatedIds: ["demo-ftb-02", "demo-ftb-03"],
    featured: true,
    isDemo: demo,
  },
  {
    id: "demo-ftb-02",
    handle: "demo-module-entrainement",
    name: "Module d’entraînement",
    reference: "DÉMO-FTB-02",
    categoryId: "football",
    description:
      "Fiche de démonstration. Un module pour les ateliers techniques, pensé comme un outil de séance et non comme un accessoire isolé.",
    images: [
      shot("photo-1431324155629-1a6deb1dec8d", "Terrain d’entraînement"),
      shot("photo-1574629810360-7efbbe195018", "Surface de jeu"),
    ],
    specifications: [
      { label: "Format", value: "Atelier" },
      { label: "Usage", value: "Centre de formation" },
    ],
    variants: [
      { id: "ftb-02-a", name: "Couleur", value: "Neutre", available: true },
    ],
    availability: "on-request",
    relatedIds: ["demo-ftb-01", "demo-ftb-03"],
    isDemo: demo,
  },
  {
    id: "demo-ftb-03",
    handle: "demo-kit-terrain",
    name: "Kit d’accessoires terrain",
    reference: "DÉMO-FTB-03",
    categoryId: "football",
    description:
      "Fiche de démonstration. Un ensemble d’accessoires de terrain pour compléter un but et un module d’entraînement.",
    images: [
      shot("photo-1489944440615-453fc2b6a9a9", "Ballon de football"),
      shot("photo-1575361204480-aadea25e6e68", "Abords de but"),
    ],
    specifications: [
      { label: "Contenu", value: "Plots, haies, ballons" },
      { label: "Usage", value: "Entraînement" },
    ],
    variants: [],
    availability: "available",
    relatedIds: ["demo-ftb-01", "demo-ftb-02"],
    isDemo: demo,
  },
  {
    id: "demo-spt-01",
    handle: "demo-structure-basket",
    name: "Structure de basket",
    reference: "DÉMO-SPT-01",
    categoryId: "sports",
    description:
      "Fiche de démonstration. Une structure de basket pour un plateau intérieur ou extérieur.",
    images: [
      shot("photo-1546519638-68e109498ffc", "Panier de basket"),
      shot("photo-1519861531473-9200262188bf", "Terrain de basket"),
    ],
    specifications: [
      { label: "Hauteur", value: "305 cm" },
      { label: "Panneau", value: "Transparent" },
    ],
    variants: [
      { id: "spt-01-a", name: "Implantation", value: "Murale", available: true },
      { id: "spt-01-b", name: "Implantation", value: "Sur pied", available: true },
    ],
    availability: "available",
    relatedIds: ["demo-spt-02", "demo-spt-03"],
    featured: true,
    isDemo: demo,
  },
  {
    id: "demo-spt-02",
    handle: "demo-filet-tennis",
    name: "Filet de tennis",
    reference: "DÉMO-SPT-02",
    categoryId: "sports",
    description:
      "Fiche de démonstration. Un filet et ses poteaux, présentés comme un ensemble de court.",
    images: [
      shot("photo-1554068865-24cecd4e34b8", "Court de tennis"),
      shot("photo-1595435934249-5df7ed86e1c0", "Détail de court"),
    ],
    specifications: [
      { label: "Largeur", value: "12,8 m" },
      { label: "Hauteur au centre", value: "91,4 cm" },
    ],
    variants: [
      { id: "spt-02-a", name: "Poteaux", value: "Fixes", available: true },
    ],
    availability: "on-request",
    relatedIds: ["demo-spt-01", "demo-spt-03"],
    isDemo: demo,
  },
  {
    id: "demo-spt-03",
    handle: "demo-ensemble-volley",
    name: "Ensemble volley",
    reference: "DÉMO-SPT-03",
    categoryId: "sports",
    description:
      "Fiche de démonstration. Filet, antennes et poteaux pour un terrain de volley.",
    images: [
      shot("photo-1612872087720-bb876e2e67d1", "Terrain de volley"),
      shot("photo-1461896836934-ffe607ba6851", "Surface sportive"),
    ],
    specifications: [
      { label: "Hauteur", value: "2,43 m" },
      { label: "Usage", value: "Salle et extérieur" },
    ],
    variants: [],
    availability: "unavailable",
    relatedIds: ["demo-spt-01", "demo-spt-02"],
    isDemo: demo,
  },
];

export const projects: Project[] = [
  {
    id: "demo-project-01",
    handle: "demo-projet-01",
    title: "Projet de démonstration 01",
    location: "Lieu — démo",
    summary:
      "Aperçu d’une salle de fitness équipée. Cette fiche montre le rythme visuel d’une réalisation, pas un chantier réel.",
    categories: ["Fitness"],
    images: [
      shot("photo-1534438327276-14e5300c3a48", "Salle de démonstration"),
      shot("photo-1571902943202-507ec2618e8f", "Volume intérieur"),
    ],
    isDemo: demo,
  },
  {
    id: "demo-project-02",
    handle: "demo-projet-02",
    title: "Projet de démonstration 02",
    location: "Lieu — démo",
    summary:
      "Aperçu d’un terrain de football. Le lieu et le client ne sont pas renseignés.",
    categories: ["Football"],
    images: [
      shot("photo-1574629810360-7efbbe195018", "Terrain de démonstration"),
      shot("photo-1575361204480-aadea25e6e68", "But sur le terrain"),
    ],
    isDemo: demo,
  },
  {
    id: "demo-project-03",
    handle: "demo-projet-03",
    title: "Projet de démonstration 03",
    location: "Lieu — démo",
    summary:
      "Aperçu d’un plateau multi-sports. Les métadonnées restent des emplacements de démonstration.",
    categories: ["Autres sports", "Fitness"],
    images: [
      shot("photo-1519861531473-9200262188bf", "Plateau de démonstration"),
      shot("photo-1554068865-24cecd4e34b8", "Court de démonstration"),
    ],
    isDemo: demo,
  },
];

export const partners: Partner[] = [
  { id: "demo-partner-01", name: "Atelier Nord", mark: "AN", isDemo: demo },
  { id: "demo-partner-02", name: "Ligne Studio", mark: "LS", isDemo: demo },
  { id: "demo-partner-03", name: "Maison Cendre", mark: "MC", isDemo: demo },
  { id: "demo-partner-04", name: "Bureau Est", mark: "BE", isDemo: demo },
  { id: "demo-partner-05", name: "Atelier Seuil", mark: "AS", isDemo: demo },
  { id: "demo-partner-06", name: "Studio Nuit", mark: "SN", isDemo: demo },
];
