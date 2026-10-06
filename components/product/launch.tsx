import { ProductCard } from "components/catalog/product-card";
import { DemoMark } from "components/catalog/demo-mark";
import { Plate } from "components/catalog/plate";
import { LaunchGallery } from "components/product/launch-gallery";
import { availabilityLabel, categoryOf, relatedProducts } from "lib/catalog";
import type { Product } from "lib/catalog";
import Link from "next/link";

export function ProductLaunch({ product }: { product: Product }) {
  const category = categoryOf(product);
  const image = product.images[0];
  const lead = product.specifications[0];
  const related = relatedProducts(product);
  const quote = `/devis?produit=${encodeURIComponent(product.name)}`;

  return (
    <article className="pt-16 xl:pt-[7.4rem]">
      <header className="grid gap-6 px-5 py-6 md:px-10 lg:grid-cols-12 lg:px-14 lg:py-8">
        <div className="lg:col-span-7">
          <p className="flex flex-wrap items-center gap-3 text-[11px] tracking-[0.22em] text-[#8a8a8a] uppercase">
            <span>
              {category?.name || "Catalogue"} — Réf. {product.reference}
            </span>
            {product.isDemo ? <DemoMark /> : null}
          </p>
          <h1 className="mt-3 max-w-[12ch] text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.88] font-medium tracking-[-0.05em]">
            {product.name}
          </h1>
          {product.isDemo ? (
            <p className="mt-3 text-sm text-[#9a9a9a]">Fiche de démonstration.</p>
          ) : null}
        </div>
        <div className="flex flex-col justify-end gap-4 lg:col-span-5">
          <p className="text-[11px] tracking-[0.18em] text-white uppercase">
            {availabilityLabel(product.availability)}
          </p>
          {lead ? (
            <p className="text-sm text-[#d0d0d0]">
              <span className="tracking-[0.16em] text-[#888] uppercase">
                {lead.label}
              </span>
              <span className="mt-1 block text-2xl tracking-[-0.03em] text-white">
                {lead.value}
              </span>
            </p>
          ) : null}
          <Link href={quote} className="mt-btn w-full sm:w-auto">
            Demander un devis
          </Link>
        </div>
      </header>

      <div className="mx-3 h-[58vh] min-h-[280px] border border-white/10 md:mx-8 lg:mx-14">
        <Plate src={image?.src} alt={image?.alt || product.name} priority>
          <div className="pointer-events-none absolute inset-x-5 bottom-4 flex justify-between text-[10px] tracking-[0.16em] text-white/70 uppercase">
            <span>Réf. {product.reference}</span>
            <span>{availabilityLabel(product.availability)}</span>
          </div>
        </Plate>
      </div>

      {product.description ? (
        <section className="grid gap-8 px-5 py-16 md:grid-cols-12 md:px-10 lg:px-14">
          <h2 className="text-[11px] tracking-[0.22em] text-[#808080] uppercase md:col-span-4">
            Lecture
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-[#e4e4e4] md:col-span-8">
            {product.description}
          </p>
        </section>
      ) : null}

      {product.specifications.length ? (
        <section className="border-t border-white/10 px-5 py-16 md:px-10 lg:px-14">
          <h2 className="text-[11px] tracking-[0.22em] text-[#808080] uppercase">
            Spécifications
          </h2>
          <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {product.specifications.map((spec) => (
              <div
                key={`${spec.label}-${spec.value}`}
                className="grid gap-2 py-5 md:grid-cols-12"
              >
                <dt className="text-[11px] tracking-[0.18em] text-[#888] uppercase md:col-span-4">
                  {spec.label}
                </dt>
                <dd className="text-2xl tracking-[-0.03em] md:col-span-8">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {product.variants.length ? (
        <section className="border-t border-white/10 px-5 py-16 md:px-10 lg:px-14">
          <h2 className="text-[11px] tracking-[0.22em] text-[#808080] uppercase">
            Options
          </h2>
          <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {product.variants.map((variant) => (
              <li
                key={variant.id}
                className="flex items-baseline justify-between gap-4 py-4"
              >
                <span>
                  <span className="text-[11px] tracking-[0.16em] text-[#888] uppercase">
                    {variant.name}
                  </span>
                  <span className="mt-1 block text-xl">{variant.value}</span>
                </span>
                <span className="text-[11px] tracking-[0.16em] text-[#cfcfcf] uppercase">
                  {variant.available ? "Disponible" : "Sur demande"}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <LaunchGallery images={product.images} />

      {related.length ? (
        <section className="border-t border-white/10 px-5 py-16 md:px-10 lg:px-14">
          <h2 className="text-4xl tracking-[-0.04em] md:text-5xl">
            Associés.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <ProductCard key={item.id} product={item} index={index + 1} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-t border-white/10 px-5 py-16 md:px-10 lg:px-14">
        <p className="text-[11px] tracking-[0.22em] text-[#808080] uppercase">
          Devis
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl tracking-[-0.045em] md:text-6xl">
          Demander {product.name}.
        </h2>
        <Link href={quote} className="mt-btn mt-8">
          Préparer un devis
        </Link>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#050505]/90 px-4 py-3 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <p className="truncate text-sm">{product.name}</p>
          <Link href={quote} className="mt-btn shrink-0">
            Devis
          </Link>
        </div>
      </div>
      <div className="h-20 lg:hidden" />
    </article>
  );
}
