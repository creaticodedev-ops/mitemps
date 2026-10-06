import * as live from "./data";
import * as demo from "./demo";
import { catalogMode } from "./mode";
import type { Availability, Category, Product } from "./types";

export type {
  Availability,
  Category,
  Partner,
  Product,
  ProductImage,
  Project,
  Specification,
  Variant,
} from "./types";

export { catalogMode } from "./mode";

function source() {
  return catalogMode === "demo" ? demo : live;
}

export function availabilityLabel(value: Availability) {
  if (value === "available") return "Disponible";
  if (value === "on-request") return "Sur demande";
  return "Indisponible";
}

export function getProducts() {
  return source().products;
}

export function getFeaturedProducts() {
  const featured = getProducts().filter((product) => product.featured);
  return featured.length ? featured : getProducts().slice(0, 5);
}

export function getProduct(handle: string) {
  return getProducts().find((product) => product.handle === handle);
}

export function getCategories() {
  return source().categories;
}

export function getCategory(handle: string) {
  return getCategories().find((category) => category.handle === handle);
}

export function categoryOf(product: Product) {
  return getCategories().find((category) => category.id === product.categoryId);
}

export function productsIn(category: Category) {
  return getProducts().filter((product) => product.categoryId === category.id);
}

export function searchProducts(query: string) {
  const products = getProducts();
  const needle = query.trim().toLowerCase();
  if (!needle) return products;

  return products.filter((product) => {
    const category = categoryOf(product)?.name ?? "";
    const specs = product.specifications
      .map((spec) => `${spec.label} ${spec.value}`)
      .join(" ");
    return [product.name, product.reference, product.description, category, specs]
      .join(" ")
      .toLowerCase()
      .includes(needle);
  });
}

export function relatedProducts(product: Product) {
  return product.relatedIds
    .map((id) => getProducts().find((item) => item.id === id))
    .filter((item): item is Product => Boolean(item));
}

export function chapters() {
  return getCategories()
    .map((category) => ({
      category,
      products: productsIn(category),
    }))
    .filter((chapter) => chapter.products.length > 0);
}

export function getProjects() {
  return source().projects;
}

export function getProject(handle: string) {
  return getProjects().find((project) => project.handle === handle);
}

export function getPartners() {
  return source().partners;
}

export function catalogIndex() {
  const current = source();
  return {
    mode: catalogMode,
    products: current.products.length,
    categories: current.categories.length,
    projects: current.projects.length,
    partners: current.partners.length,
  };
}
