export type Availability = "available" | "on-request" | "unavailable";

export type ProductImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Specification = {
  label: string;
  value: string;
};

export type Variant = {
  id: string;
  name: string;
  value: string;
  available: boolean;
};

export type Product = {
  id: string;
  handle: string;
  name: string;
  reference: string;
  categoryId: string;
  description: string;
  images: ProductImage[];
  specifications: Specification[];
  variants: Variant[];
  availability: Availability;
  relatedIds: string[];
  featured?: boolean;
  isDemo?: boolean;
};

export type Category = {
  id: string;
  handle: string;
  name: string;
  description: string;
  isDemo?: boolean;
};

export type Project = {
  id: string;
  handle: string;
  title: string;
  location: string;
  summary: string;
  categories: string[];
  images: ProductImage[];
  isDemo?: boolean;
};

export type Partner = {
  id: string;
  name: string;
  mark: string;
  logo?: ProductImage;
  isDemo?: boolean;
};
