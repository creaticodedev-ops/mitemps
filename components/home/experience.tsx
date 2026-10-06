import { CatalogChapters } from "components/home/catalog-chapters";
import { QuoteBand } from "components/brand/quote-band";
import { ProductCard } from "components/product/product-card";
import { contactFacts, reasons, solutions, statSlots } from "lib/brand";
import type { CatalogChapter } from "lib/stage";
import type { Product } from "lib/shopify/types";
import Link from "next/link";

export function HomeExperience({
  chapters,
  products,
  catalogCount,
  categoryCount,
}: {
  chapters: CatalogChapter[];
  products: Product[];
  catalogCount: number;
  categoryCount: number;
}) {
  return (
    <>
      <section className="grid items-end gap-10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-28 lg:px-14">
        <h2 className="text-[2.35rem] leading-[0.92] font-medium tracking-[-0.045em] md:col-span-8 md:text-7xl lg:text-8xl">
          <span className="mt-view block">Des équipements.</span>
          <span className="font-editorial mt-view block font-normal italic">
            Une vision.
          </span>
        </h2>
        <div className="md:col-span-4 md:pb-3">
          <p className="max-w-sm text-base leading-relaxed text-[#cfcfcf]">
            MI TEMPS réunit équipement, infrastructure et expertise pour les
            clubs, les académies, les hôtels et les institutions.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
            <div>
              <dt className="text-[10px] tracking-[0.18em] text-[#777] uppercase">
                Index catalogue
              </dt>
              <dd className="mt-2 text-3xl tracking-[-0.04em]">
                {catalogCount > 0 ? String(catalogCount).padStart(2, "0") : "—"}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.18em] text-[#777] uppercase">
                Catégories
              </dt>
              <dd className="mt-2 text-3xl tracking-[-0.04em]">
                {categoryCount > 0
                  ? String(categoryCount).padStart(2, "0")
                  : "—"}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <CatalogChapters chapters={chapters} />
      <Products products={products} />
      <Solutions />
      <Realisations />
      <Why />
      <Partners />
      <Story />
      <Statistics />
      <QuoteBand />
    </>
  );
}

function Products({ products }: { products: Product[] }) {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] tracking-[0.22em] text-[#7a7a7a] uppercase">
            Catalogue
          </p>
          <h2 className="mt-4 text-4xl tracking-[-0.04em] md:text-6xl">
            Équipez vos espaces.
          </h2>
        </div>
        <Link
          href="/search"
          className="mt-link text-[11px] tracking-[0.18em] uppercase"
        >
          Tout le catalogue
        </Link>
      </div>
      {products.length ? (
        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.handle} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-12 max-w-md border-t border-white/10 pt-8 text-sm leading-relaxed text-[#a0a0a0]">
          Le catalogue original s’affiche ici dès que la boutique est connectée.
        </p>
      )}
    </section>
  );
}

function Solutions() {
  return (
    <section className="border-t border-white/10 px-5 py-20 md:px-10 md:py-28 lg:px-14">
      <p className="text-[11px] tracking-[0.22em] text-[#7a7a7a] uppercase">
        Solutions
      </p>
      <h2 className="mt-5 max-w-4xl text-4xl leading-[0.95] tracking-[-0.045em] md:text-6xl">
        Nous ne vendons pas seulement du matériel.
      </h2>
      <p className="font-editorial mt-4 text-3xl italic md:text-5xl">
        Nous créons des espaces de performance.
      </p>
      <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
        {solutions.map((solution, index) => (
          <Link
            key={solution.slug}
            href={`/solutions#${solution.slug}`}
            className="group grid gap-4 py-8 md:grid-cols-12 md:items-center"
          >
            <span className="text-[11px] tracking-[0.2em] text-[#777] md:col-span-2">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-3xl tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-2 md:col-span-4 md:text-4xl">
              {solution.title}
            </span>
            <span className="text-sm leading-relaxed text-[#c6c6c6] md:col-span-6">
              {solution.text}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Realisations() {
  return (
    <section className="border-t border-white/10 px-5 py-16 md:px-10 md:py-24 lg:px-14">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-4xl tracking-[-0.04em] md:text-6xl">
          Nos réalisations.
        </h2>
        <Link
          href="/realisations"
          className="mt-link text-[11px] tracking-[0.18em] uppercase"
        >
          Portfolio
        </Link>
      </div>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#b5b5b5]">
        Les projets publiés apparaîtront ici, avec leur lieu et les équipements
        réellement installés. Aucune réalisation fictive n’est affichée.
      </p>
    </section>
  );
}

function Why() {
  return (
    <section className="border-t border-white/10 px-5 py-20 md:px-10 md:py-28 lg:px-14">
      <h2 className="max-w-3xl text-4xl tracking-[-0.04em] md:text-6xl">
        Pourquoi MI TEMPS.
      </h2>
      <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <article key={reason.index} className="bg-[#050505] p-6 md:p-8">
            <p className="text-4xl tracking-[-0.05em] text-[#2c2c2c]">
              {reason.index}
            </p>
            <h3 className="mt-8 text-2xl tracking-[-0.03em]">{reason.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#c8c8c8]">
              {reason.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="border-t border-white/10 px-5 py-20 md:px-10 md:py-28 lg:px-14">
      <h2 className="text-4xl tracking-[-0.04em] md:text-6xl">Partenaires.</h2>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#b5b5b5]">
        Les identités officielles seront présentées ici, en monochrome. Aucun
        partenaire n’est inventé.
      </p>
    </section>
  );
}

function Story() {
  return (
    <section className="grid gap-10 border-t border-white/10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-28 lg:px-14">
      <div className="md:col-span-5">
        <p className="text-[11px] tracking-[0.22em] text-[#7a7a7a] uppercase">
          Maison
        </p>
        <h2 className="mt-4 text-4xl tracking-[-0.04em] md:text-6xl">
          Qui sommes-nous
        </h2>
      </div>
      <div className="max-w-xl space-y-5 text-base leading-relaxed text-[#d2d2d2] md:col-span-7">
        <p>
          MI TEMPS, par Oasis Group, équipe les organisations sportives et les
          lieux qui accueillent la pratique : clubs, académies, complexes,
          hôtels et institutions.
        </p>
        <p>
          La mission est de fournir des équipements professionnels et des
          solutions complètes, de la sélection du matériel jusqu’à l’espace de
          performance.
        </p>
        <p>
          La vision est celle d’infrastructures précises, durables et à la
          hauteur des ambitions de ceux qui s’entraînent.
        </p>
        <Link
          href="/a-propos"
          className="mt-link inline-block text-[11px] tracking-[0.18em] uppercase"
        >
          La maison
        </Link>
      </div>
    </section>
  );
}

function Statistics() {
  return (
    <section className="border-t border-white/10 px-5 py-16 md:px-10 md:py-24 lg:px-14">
      <p className="text-[11px] tracking-[0.22em] text-[#7a7a7a] uppercase">
        Indicateurs — à renseigner
      </p>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#9a9a9a]">
        Ces repères ne sont pas des chiffres de l’entreprise. Ils seront
        remplacés par les données réelles de MI TEMPS.
      </p>
      <dl className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
        {statSlots.map((label) => (
          <div key={label} className="border-t border-white/15 pt-5">
            <dt className="text-[11px] tracking-[0.18em] text-[#8a8a8a] uppercase">
              {label}
            </dt>
            <dd className="mt-4 text-5xl tracking-[-0.05em] md:text-6xl">—</dd>
            <p className="mt-2 text-xs text-[#666]">À renseigner</p>
          </div>
        ))}
      </dl>
      <dl className="mt-16 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {contactFacts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-[11px] tracking-[0.18em] text-[#7a7a7a] uppercase">
              {fact.label}
            </dt>
            <dd className="mt-2 text-lg">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
