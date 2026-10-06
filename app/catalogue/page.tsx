import { EmptyState } from "components/catalog/empty";
import { ProductCard } from "components/catalog/product-card";
import Footer from "components/layout/footer";
import { searchProducts } from "lib/catalog";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Catalogue",
  description: "Catalogue d’équipements professionnels MI TEMPS.",
};

export default async function CataloguePage(props: {
  searchParams?: Promise<{ q?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q?.toString() || "";
  const products = searchProducts(query);

  return (
    <>
      <article className="px-5 pt-28 pb-20 md:px-10 md:pt-36 lg:px-14">
        <p className="text-[11px] tracking-[0.24em] text-[#808080] uppercase">
          Catalogue
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl tracking-[-0.05em] md:text-7xl">
          Équipements.
        </h1>
        <form action="/catalogue" className="mt-8 max-w-xl">
          <label className="text-[11px] tracking-[0.18em] text-[#808080] uppercase" htmlFor="q">
            Recherche
          </label>
          <input
            id="q"
            name="q"
            defaultValue={query}
            placeholder="Nom, référence, catégorie"
            className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-lg text-white outline-none placeholder:text-[#666]"
          />
        </form>
        <Suspense>
          {query ? (
            <p className="mt-8 text-sm text-[#c8c8c8]">
              {products.length
                ? `${products.length} résultat${products.length > 1 ? "s" : ""} pour « ${query} »`
                : `Aucun équipement pour « ${query} »`}
            </p>
          ) : null}
        </Suspense>
        {products.length ? (
          <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index + 1} />
            ))}
          </div>
        ) : query ? null : (
          <div className="mt-14">
            <EmptyState
              index="—"
              kicker="Catalogue"
              title="Aucun produit publié."
              text="Le catalogue s’affiche ici dès que les fiches sont ajoutées depuis l’administration."
            />
          </div>
        )}
      </article>
      <Footer />
    </>
  );
}
