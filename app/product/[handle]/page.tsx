import { GridTileImage } from "components/grid/tile";
import Footer from "components/layout/footer";
import { Gallery } from "components/product/gallery";
import { ProductDescription } from "components/product/product-description";
import {
  availabilityLabel,
  getProduct,
  getProducts,
  relatedProducts,
} from "lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export function generateStaticParams() {
  return getProducts().map((product) => ({ handle: product.handle }));
}

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = getProduct(params.handle);
  if (!product) return notFound();
  const image = product.images[0];

  return {
    title: product.name,
    description:
      product.description || `${product.name}. Réf. ${product.reference}.`,
    openGraph: image
      ? { images: [{ url: image.src, alt: image.alt || product.name }] }
      : undefined,
  };
}

export default async function ProductPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const product = getProduct(params.handle);
  if (!product) return notFound();
  const image = product.images[0];

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.reference,
    image: image?.src,
    offers: {
      "@type": "Offer",
      availability:
        product.availability === "unavailable"
          ? "https://schema.org/OutOfStock"
          : "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="mx-auto max-w-(--breakpoint-2xl) px-4 pt-28 pb-8">
        <div className="flex flex-col rounded-lg border border-neutral-800 bg-black p-8 md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              <Gallery
                images={product.images.slice(0, 5).map((item) => ({
                  src: item.src,
                  altText: item.alt || product.name,
                }))}
              />
            </Suspense>
          </div>
          <div className="basis-full lg:basis-2/6">
            <Suspense fallback={null}>
              <ProductDescription product={product} />
            </Suspense>
          </div>
        </div>
        <RelatedProducts handle={product.handle} />
      </div>
      <Footer />
    </>
  );
}

function RelatedProducts({ handle }: { handle: string }) {
  const product = getProduct(handle);
  if (!product) return null;
  const related = relatedProducts(product);
  if (!related.length) return null;

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Produits associés</h2>
      <ul className="flex w-full max-w-full gap-4 overflow-x-auto pt-1">
        {related.map((item) => (
          <li
            key={item.handle}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link
              className="relative block h-full w-full"
              href={`/product/${item.handle}`}
              prefetch
            >
              <GridTileImage
                alt={item.name}
                label={{
                  title: item.name,
                  amount: item.reference,
                  currencyCode: availabilityLabel(item.availability),
                }}
                src={item.images[0]?.src || ""}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
