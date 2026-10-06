import Footer from "components/layout/footer";
import { ProductLaunch } from "components/product/launch";
import { getProduct, getProducts } from "lib/catalog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
    description: product.description || `${product.name}. Réf. ${product.reference}.`,
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

  return (
    <>
      <ProductLaunch product={product} />
      <Footer />
    </>
  );
}
