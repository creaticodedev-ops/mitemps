import { CatalogMedia } from "components/catalog/media";
import { DemoMark } from "components/catalog/demo-mark";
import { availabilityLabel, categoryOf } from "lib/catalog";
import type { Product } from "lib/catalog";
import Link from "next/link";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const image = product.images[0];
  const category = categoryOf(product);
  const spec = product.specifications[0];

  return (
    <article className="group">
      <Link href={`/product/${product.handle}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#0b0b0b]">
          <span className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="text-[11px] tracking-[0.18em] text-white/80">
              {String(index).padStart(2, "0")}
            </span>
            {product.isDemo ? <DemoMark /> : null}
          </span>
          {image ? (
            <CatalogMedia
              src={image.src}
              alt={image.alt || product.name}
              className="mt-product object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
          ) : null}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-4 bottom-4 h-px origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100"
          />
        </div>
        <div className="pt-5">
          <p className="text-[11px] tracking-[0.2em] text-[#8a8a8a] uppercase">
            {category?.name || "Catalogue"}
          </p>
          <h3 className="mt-2 text-2xl tracking-[-0.035em] text-white transition-transform duration-500 group-hover:translate-x-1">
            {product.name}
          </h3>
          <p className="mt-2 text-[11px] tracking-[0.16em] text-[#666] uppercase">
            Réf. {product.reference}
          </p>
          {spec ? (
            <p className="mt-2 text-[11px] tracking-[0.14em] text-[#9a9a9a] uppercase">
              {spec.label} — {spec.value}
            </p>
          ) : null}
          <p className="mt-3 text-[11px] tracking-[0.16em] text-[#cfcfcf] uppercase">
            {availabilityLabel(product.availability)}
          </p>
          <span className="mt-link mt-5 inline-flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase">
            Voir le produit
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
