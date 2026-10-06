import { AddToCart } from "components/cart/add-to-cart";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import Link from "next/link";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  const category = product.tags.filter(Boolean).join(" · ") || "À classer";
  const detailedOptions = product.options.filter(
    (option) => option.values.length > 1 || option.name !== "Title",
  );

  return (
    <div className="flex flex-col lg:sticky lg:top-28 lg:max-h-[calc(100svh-8rem)] lg:overflow-y-auto lg:pr-2">
      <p className="text-[11px] tracking-[0.22em] text-[#8a8a8a] uppercase">
        {category}
      </p>
      <h1 className="mt-4 text-4xl tracking-[-0.045em] text-white md:text-5xl">
        {product.title}
      </h1>
      <p className="mt-4 text-[11px] tracking-[0.18em] text-[#777] uppercase">
        Réf. {product.handle}
      </p>
      <Link
        href={`/devis?produit=${encodeURIComponent(product.title)}`}
        className="mt-btn mt-8"
      >
        Demander un devis
      </Link>
      <div className="mt-3">
        <AddToCart product={product} />
      </div>
      <div className="mt-8">
        <VariantSelector
          options={product.options}
          variants={product.variants}
        />
      </div>
      <div className="mt-8 border-t border-white/10 pt-8">
        <h2 className="text-[11px] tracking-[0.2em] text-[#8a8a8a] uppercase">
          Description
        </h2>
        {product.descriptionHtml ? (
          <Prose
            className="mt-4 max-w-none text-sm leading-relaxed text-[#d5d5d5]"
            html={product.descriptionHtml}
          />
        ) : (
          <p className="mt-4 text-sm text-[#8a8a8a]">
            Description technique à compléter.
          </p>
        )}
      </div>
      <dl className="mt-8 space-y-7 border-t border-white/10 pt-8">
        <Spec
          label="Spécifications"
          value={
            detailedOptions.length
              ? detailedOptions
                  .map(
                    (option) => `${option.name} — ${option.values.join(", ")}`,
                  )
                  .join(" · ")
              : "À compléter dans la fiche produit."
          }
        />
        <Spec label="Dimensions" value="À compléter dans la fiche produit." />
        <Spec label="Matières" value="À compléter dans la fiche produit." />
        <Spec
          label="Disponibilité"
          value={product.availableForSale ? "Disponible" : "Indisponible"}
        />
        <Spec
          label="Documents"
          value="Aucun document publié pour ce produit."
        />
      </dl>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] tracking-[0.2em] text-[#8a8a8a] uppercase">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-relaxed text-[#e4e4e4]">{value}</dd>
    </div>
  );
}
