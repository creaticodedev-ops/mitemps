import { HomeExperience } from "components/home/experience";
import { HeroStage } from "components/home/hero-stage";
import Footer from "components/layout/footer";
import { toStageProduct, type CatalogChapter } from "lib/stage";
import {
  getCollectionProducts,
  getCollections,
  getProducts,
} from "lib/shopify";
import type { Product } from "lib/shopify/types";

export const metadata = {
  description:
    "MI TEMPS par Oasis Group. Équipements professionnels pour créer des espaces sportifs à la hauteur de vos ambitions.",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  const collections = await getCollections().catch(() => []);
  let products: Product[] = [];

  try {
    products = await getCollectionProducts({
      collection: "hidden-homepage-featured-items",
    });
  } catch {
    products = [];
  }

  if (!products.length) {
    try {
      products = await getProducts({});
    } catch {
      products = [];
    }
  }

  const realCollections = collections.filter(
    (collection) =>
      collection.handle && !collection.handle.startsWith("hidden"),
  );

  const chapters: CatalogChapter[] = (
    await Promise.all(
      realCollections.map(async (collection) => {
        let items: Product[] = [];
        try {
          items = await getCollectionProducts({
            collection: collection.handle,
          });
        } catch {
          items = [];
        }
        return {
          title: collection.title,
          handle: collection.handle,
          path: collection.path,
          description: collection.description,
          products: items.slice(0, 4).map(toStageProduct),
        };
      }),
    )
  ).filter((chapter) => chapter.products.length > 0);

  if (!chapters.length && products.length) {
    chapters.push({
      title: "Catalogue",
      handle: "catalogue",
      path: "/search",
      description: "",
      products: products.slice(0, 6).map(toStageProduct),
    });
  }

  return (
    <>
      <HeroStage products={products.slice(0, 5).map(toStageProduct)} />
      <HomeExperience
        chapters={chapters}
        products={products.slice(0, 6)}
        catalogCount={products.length}
        categoryCount={realCollections.length}
      />
      <Footer />
    </>
  );
}
