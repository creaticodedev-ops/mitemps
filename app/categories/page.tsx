import { EmptyState } from "components/catalog/empty";
import Footer from "components/layout/footer";
import { getCategories, productsIn } from "lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catégories",
  description: "Chapitres du catalogue MI TEMPS.",
};

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <>
      <article className="px-5 pt-28 pb-20 md:px-10 md:pt-36 lg:px-14">
        <p className="text-[11px] tracking-[0.24em] text-[#808080] uppercase">
          Chapitres
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl tracking-[-0.05em] md:text-7xl">
          Catégories.
        </h1>
        {categories.length ? (
          <ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {categories.map((category, index) => {
              const count = productsIn(category).length;
              return (
                <li key={category.id}>
                  <Link
                    href={`/categories/${category.handle}`}
                    className="group grid gap-3 py-8 md:grid-cols-12 md:items-baseline"
                  >
                    <span className="text-[11px] tracking-[0.18em] text-[#777] md:col-span-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-4xl tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-2 md:col-span-5 md:text-6xl">
                      {category.name}
                    </span>
                    <span className="text-sm leading-relaxed text-[#c6c6c6] md:col-span-4">
                      {category.description}
                    </span>
                    <span className="text-[11px] tracking-[0.16em] text-[#888] uppercase md:col-span-1 md:text-right">
                      {count > 0 ? String(count).padStart(2, "0") : "—"}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="mt-14">
            <EmptyState
              index="—"
              kicker="Catégories"
              title="Aucune catégorie publiée."
              text="Les chapitres du catalogue apparaissent ici dès qu’ils sont créés. Aucune famille de produits n’est inventée."
            />
          </div>
        )}
      </article>
      <Footer />
    </>
  );
}
