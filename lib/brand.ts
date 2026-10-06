export const brand = {
  name: "MI TEMPS",
  company: "Oasis Group",
  description:
    "Équipements professionnels et solutions complètes pour les espaces sportifs.",
};

export const navigation = [
  { title: "Catalogue", path: "/catalogue" },
  { title: "Catégories", path: "/categories" },
  { title: "Solutions", path: "/solutions" },
  { title: "Réalisations", path: "/realisations" },
  { title: "Partenaires", path: "/partenaires" },
  { title: "À propos", path: "/a-propos" },
  { title: "Contact", path: "/contact" },
] as const;

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

export const contactFacts = [
  { label: "Téléphone", value: "À renseigner" },
  { label: "Email", value: "À renseigner" },
  { label: "Localisation", value: "À renseigner" },
  { label: "Horaires", value: "À renseigner" },
] as const;
