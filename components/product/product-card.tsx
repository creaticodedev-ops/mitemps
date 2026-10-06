import type { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

function excerpt(value: string) {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length <= 140) return clean;
  return `${clean.slice(0, 140).trim()}…`;
}

export function ProductCard({ product }: { product: Product }) {
  const image = product.featuredImage;
  const secondary = product.images[1];
  const category = product.tags[0] || "Équipement";
  const description = excerpt(product.description || "");
  const option = product.options.find(
    (item) => item.name !== "Title" && item.values.length > 0,
  );
  const spec =
    option?.values[0] && option.values[0] !== "Default Title"
      ? `${option.name} ${option.values[0]}`
      : null;

  return (
    <article className="group">
      <Link
        href={`/product/${product.handle}`}
        prefetch={true}
        className="block"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-[#0c0c0c]">
          <div className="pointer-events-none absolute inset-3 border border-white/10" />
          {image?.url ? (
            <Image
              src={image.url}
              alt={image.altText || product.title}
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
              className="mt-product object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="absolute inset-0 bg-[#141414]" />
          )}
          {secondary?.url ? (
            <Image
              src={secondary.url}
              alt={secondary.altText || product.title}
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
              className="mt-product object-contain p-6 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
          ) : null}
        </div>
        <div className="pt-5 transition-transform duration-500 ease-out group-hover:translate-y-1">
          <p className="text-[11px] tracking-[0.2em] text-[#8a8a8a] uppercase">
            {category}
          </p>
          <h3 className="mt-2 text-2xl tracking-[-0.03em] text-white">
            {product.title}
          </h3>
          <p className="mt-2 text-[11px] tracking-[0.16em] text-[#666] uppercase">
            Réf. {product.handle}
          </p>
          {spec ? (
            <p className="mt-2 text-[11px] tracking-[0.16em] text-[#9a9a9a] uppercase">
              {spec}
            </p>
          ) : null}
          {description ? (
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#cfcfcf]">
              {description}
            </p>
          ) : null}
          <span className="mt-link mt-5 inline-block text-[11px] tracking-[0.18em] text-white uppercase opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
            Voir le produit
          </span>
        </div>
      </Link>
      <Link
        href={`/devis?produit=${encodeURIComponent(product.title)}`}
        className="mt-link mt-4 inline-block text-[11px] tracking-[0.18em] text-[#d0d0d0] uppercase"
      >
        Demander un devis
      </Link>
    </article>
  );
}

export function ProductPlaceholder({ index }: { index: number }) {
  return (
    <article className="border border-white/10 bg-[#0c0c0c] p-6 md:p-8">
      <p className="text-[11px] tracking-[0.22em] text-[#7a7a7a] uppercase">
        Emplacement {String(index).padStart(2, "0")}
      </p>
      <h3 className="mt-8 text-3xl tracking-[-0.04em]">Produit à publier</h3>
      <p className="mt-3 text-[11px] tracking-[0.16em] text-[#666] uppercase">
        Catégorie — à classer
      </p>
      <p className="mt-2 text-[11px] tracking-[0.16em] text-[#666] uppercase">
        Référence — à renseigner
      </p>
      <p className="mt-6 max-w-xs text-sm leading-relaxed text-[#bdbdbd]">
        Cet emplacement affichera un produit du catalogue MI TEMPS. Aucune fiche
        fictive n’est présentée.
      </p>
      <Link
        href="/devis"
        className="mt-link mt-8 inline-block text-[11px] tracking-[0.18em] uppercase"
      >
        Demander un devis
      </Link>
    </article>
  );
}
