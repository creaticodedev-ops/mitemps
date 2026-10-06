import { EmptyState } from "components/catalog/empty";
import { ProductCard } from "components/catalog/product-card";
import Footer from "components/layout/footer";
import { getCategories, getCategory, productsIn } from "lib/catalog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getCategories().map((category) => ({ handle: category.handle }));
}

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const category = getCategory(params.handle);
  if (!category) return notFound();
  return {
    title: category.name,
    description: category.description || category.name,
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const category = getCategory(params.handle);
  if (!category) return notFound();
  const products = productsIn(category);

  return (
    <>
      <article className="px-5 pt-28 pb-20 md:px-10 md:pt-36 lg:px-14">
        <p className="text-[11px] tracking-[0.24em] text-[#808080] uppercase">
          Chapitre
        </p>
        <h1 className="mt-4 max-w-[10ch] text-5xl leading-[0.9] tracking-[-0.05em] uppercase md:text-8xl">
          {category.name}
        </h1>
        {category.description ? (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#c8c8c8]">
            {category.description}
          </p>
        ) : null}
        {products.length ? (
          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index + 1} />
            ))}
          </div>
        ) : (
          <div className="mt-14">
            <EmptyState
              index="—"
              kicker={category.name}
              title="Aucun produit dans ce chapitre."
              text="Les équipements de cette catégorie s’afficheront ici dès qu’ils seront publiés."
            />
          </div>
        )}
      </article>
      <Footer />
    </>
  );
}
