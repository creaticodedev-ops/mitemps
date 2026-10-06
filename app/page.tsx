import { Signature } from "components/home/signature";
import { Stage } from "components/home/stage";
import Footer from "components/layout/footer";
import {
  catalogIndex,
  chapters,
  getFeaturedProducts,
  getPartners,
  getProducts,
  getProjects,
} from "lib/catalog";

export const metadata = {
  description:
    "MI TEMPS par Oasis Group. Équipements professionnels pour créer des espaces sportifs à la hauteur de vos ambitions.",
  openGraph: {
    type: "website" as const,
  },
};

export default function HomePage() {
  const index = catalogIndex();

  return (
    <>
      <Stage products={getFeaturedProducts()} />
      <Signature
        chapters={chapters()}
        products={getProducts().slice(0, 6)}
        projects={getProjects()}
        partners={getPartners()}
        catalogCount={index.products}
        categoryCount={index.categories}
      />
      <Footer />
    </>
  );
}
