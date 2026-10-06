import { availabilityLabel, categoryOf } from "lib/catalog";
import type { Product } from "lib/catalog";
import Link from "next/link";
import { optionsFromVariants } from "./options";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  const category = categoryOf(product);
  const options = optionsFromVariants(product.variants);

  return (
    <>
      <div className="mb-6 flex flex-col border-b border-neutral-700 pb-6">
        <p className="mb-3 text-sm tracking-wide text-neutral-400 uppercase">
          {category?.name || "Catalogue"}
          {product.isDemo ? " — Démo" : ""}
        </p>
        <h1 className="mb-4 text-5xl font-medium">{product.name}</h1>
        <div className="mr-auto w-auto rounded-full bg-white p-2 text-sm text-black">
          Réf. {product.reference}
        </div>
        <p className="mt-4 text-sm tracking-wide text-neutral-300 uppercase">
          {availabilityLabel(product.availability)}
        </p>
      </div>

      <VariantSelector options={options} variants={product.variants} />

      {product.specifications.length ? (
        <div className="mb-8">
          <p className="mb-4 text-sm tracking-wide uppercase">Spécifications</p>
          <dl>
            {product.specifications.map((spec) => (
              <div
                key={`${spec.label}-${spec.value}`}
                className="mb-2 flex items-baseline justify-between gap-4 border-b border-neutral-800 pb-2 text-sm"
              >
                <dt className="text-neutral-400">{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}

      {product.description ? (
        <p className="mb-6 text-sm leading-tight text-white/60">
          {product.description}
        </p>
      ) : null}

      <Link
        href={`/devis?produit=${encodeURIComponent(product.name)}`}
        className="relative flex w-full items-center justify-center rounded-full bg-white p-4 tracking-wide text-black hover:opacity-90"
      >
        Demander un devis
      </Link>
    </>
  );
}
