import Grid from "components/grid";
import ProductGridItems from "components/layout/product-grid-items";
import { defaultSort, sorting } from "lib/constants";
import { getProducts } from "lib/shopify";

export const metadata = {
  title: "Produits",
  description: "Catalogue d’équipements professionnels MI TEMPS.",
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });

  return (
    <>
      {searchValue ? (
        <p className="mb-8 text-sm text-[#c8c8c8]">
          {products.length === 0
            ? "Aucun équipement ne correspond à "
            : `${products.length} résultat${products.length > 1 ? "s" : ""} pour `}
          <span className="text-white">&laquo; {searchValue} &raquo;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : searchValue ? null : (
        <div className="border border-white/10 p-8">
          <p className="text-[11px] tracking-[0.2em] text-[#7a7a7a] uppercase">
            Catalogue
          </p>
          <p className="mt-4 text-3xl tracking-[-0.04em]">
            Les produits seront publiés ici.
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#9a9a9a]">
            Cet espace affiche le catalogue MI TEMPS. Aucun produit fictif n’est
            présenté.
          </p>
        </div>
      )}
    </>
  );
}
