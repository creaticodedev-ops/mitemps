import { getCategories, getProducts, getProjects } from "lib/catalog";
import { baseUrl } from "lib/utils";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/catalogue",
    "/categories",
    "/solutions",
    "/realisations",
    "/partenaires",
    "/a-propos",
    "/contact",
    "/devis",
    "/mentions-legales",
    "/confidentialite",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const categoryRoutes = getCategories().map((category) => ({
    url: `${baseUrl}/categories/${category.handle}`,
    lastModified: new Date().toISOString(),
  }));

  const productRoutes = getProducts().map((product) => ({
    url: `${baseUrl}/product/${product.handle}`,
    lastModified: new Date().toISOString(),
  }));

  const projectRoutes = getProjects().map((project) => ({
    url: `${baseUrl}/realisations/${project.handle}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...categoryRoutes, ...productRoutes, ...projectRoutes];
}
