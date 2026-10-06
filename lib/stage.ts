import type { Product } from "lib/shopify/types";

export type StageProduct = {
  handle: string;
  title: string;
  description: string;
  category: string;
  image: string;
  alt: string;
  available: boolean;
  specLabel: string | null;
  specValue: string | null;
};

export type CatalogChapter = {
  title: string;
  handle: string;
  path: string;
  description: string;
  products: StageProduct[];
};

function excerpt(value: string) {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length <= 120) return clean;
  return `${clean.slice(0, 120).trim()}…`;
}

export function toStageProduct(product: Product): StageProduct {
  const option = product.options.find(
    (item) => item.name !== "Title" && item.values.length > 0,
  );
  const specValue = option?.values[0];

  return {
    handle: product.handle,
    title: product.title,
    description: excerpt(product.description || ""),
    category: product.tags[0] || "Catalogue",
    image: product.featuredImage?.url || "",
    alt: product.featuredImage?.altText || product.title,
    available: product.availableForSale,
    specLabel: option?.name ?? null,
    specValue:
      specValue && specValue !== "Default Title" ? specValue : null,
  };
}
