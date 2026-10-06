import type { Menu } from "lib/shopify/types";

export const brand = {
  name: "MI TEMPS",
  company: "Oasis Group",
  description:
    "Équipements professionnels et solutions complètes pour les espaces sportifs.",
};

export const navigation: Menu[] = [
  { title: "Solutions", path: "/solutions" },
  { title: "Produits", path: "/search" },
  { title: "Projets", path: "/realisations" },
  { title: "Partenaires", path: "/partenaires" },
  { title: "À propos", path: "/a-propos" },
  { title: "Contact", path: "/contact" },
];

export const solutions = [
  {
    slug: "fitness-club",
    title: "Fitness Club",
    text: "Cardio, force, sols et circulation pour une salle conçue comme un outil de performance.",
  },
  {
    slug: "football-club",
    title: "Football Club",
    text: "Matériel d’entraînement et infrastructures pour les clubs et les centres de formation.",
  },
  {
    slug: "academie",
    title: "Académie sportive",
    text: "Des espaces de progression, du travail athlétique jusqu’aux zones de pratique.",
  },
  {
    slug: "complexe",
    title: "Complexe sportif",
    text: "Une réponse globale pour les sites multi-disciplines et les grands volumes.",
  },
  {
    slug: "hotel",
    title: "Hôtel & Resort",
    text: "Des installations discrètes, précises et durables pour une clientèle exigeante.",
  },
  {
    slug: "corporate",
    title: "Salle corporate",
    text: "Un environnement professionnel pour les institutions et les entreprises.",
  },
] as const;

export const reasons = [
  {
    index: "01",
    title: "Expertise",
    text: "Une lecture des usages, des niveaux de pratique et du volume d’exploitation.",
  },
  {
    index: "02",
    title: "Qualité",
    text: "Des équipements professionnels choisis pour un usage intensif.",
  },
  {
    index: "03",
    title: "Performance",
    text: "Des espaces pensés pour l’entraînement, la compétition et la progression.",
  },
  {
    index: "04",
    title: "Installation",
    text: "Un accompagnement jusqu’à la mise en place sur site.",
  },
  {
    index: "05",
    title: "Support",
    text: "Un suivi après livraison, à la mesure d’un projet professionnel.",
  },
  {
    index: "06",
    title: "Solutions",
    text: "Du matériel seul à l’infrastructure sportive complète.",
  },
] as const;

export const categorySlots = [
  "Fitness",
  "Football",
  "Basketball",
  "Volleyball",
  "Tennis",
  "Cross Training",
  "Athlétisme",
  "Sols sportifs",
  "Accessoires",
  "Autres équipements",
] as const;

export const statSlots = [
  "Projets",
  "Clients",
  "Partenaires",
  "Années",
] as const;

export const contactFacts = [
  { label: "Téléphone", value: "À renseigner" },
  { label: "Email", value: "À renseigner" },
  { label: "Localisation", value: "À renseigner" },
  { label: "Horaires", value: "À renseigner" },
] as const;

export const atmosphere = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=80",
    alt: "Salle professionnelle, lumière rasante sur les équipements",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2000&q=80",
    alt: "Volume d’entraînement et machines alignées",
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=2000&q=80",
    alt: "Ligne de machines cardio dans un espace sombre",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2000&q=80",
    alt: "Détail métallique d’un rack d’haltères",
  },
  {
    src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=2000&q=80",
    alt: "Zone de force et racks professionnels",
  },
  {
    src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=2000&q=80",
    alt: "Intérieur de salle, contraste et profondeur",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2000&q=80",
    alt: "Architecture intérieure d’un espace fitness",
  },
] as const;

export function atmosphereAt(index: number) {
  const image =
    atmosphere[Math.abs(index) % atmosphere.length] ?? atmosphere[0];
  return image;
}
