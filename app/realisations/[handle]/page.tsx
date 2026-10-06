import { QuoteBand } from "components/brand/quote-band";
import { CatalogMedia } from "components/catalog/media";
import { DemoMark } from "components/catalog/demo-mark";
import Footer from "components/layout/footer";
import { getProject, getProjects } from "lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getProjects().map((project) => ({ handle: project.handle }));
}

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const project = getProject(params.handle);
  if (!project) return notFound();
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const project = getProject(params.handle);
  if (!project) return notFound();
  const [cover, ...rest] = project.images;

  return (
    <>
      <article className="pt-16 xl:pt-[7.4rem]">
        <header className="px-5 py-8 md:px-10 lg:px-14">
          <p className="flex flex-wrap items-center gap-3 text-[11px] tracking-[0.22em] text-[#8a8a8a] uppercase">
            <span>Réalisation — {project.location}</span>
            {project.isDemo ? <DemoMark /> : null}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl tracking-[-0.05em] md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 text-[11px] tracking-[0.16em] text-[#aaa] uppercase">
            {project.categories.join(" · ")}
          </p>
        </header>
        {cover ? (
          <div className="relative mx-3 h-[58vh] min-h-[280px] overflow-hidden bg-[#111] md:mx-8">
            <CatalogMedia
              src={cover.src}
              alt={cover.alt}
              priority
              className="mt-product object-cover"
            />
          </div>
        ) : null}
        <div className="grid gap-10 px-5 py-14 md:grid-cols-12 md:px-10 lg:px-14">
          <p className="text-lg leading-relaxed text-[#e4e4e4] md:col-span-7">
            {project.summary}
          </p>
          <div className="md:col-span-5">
            <Link href="/devis" className="mt-btn">
              Demander un devis
            </Link>
          </div>
        </div>
        {rest.length ? (
          <div className="grid gap-4 px-5 pb-16 md:grid-cols-2 md:px-10 lg:px-14">
            {rest.map((image) => (
              <div key={image.src} className="relative h-[42vh] min-h-[220px] overflow-hidden bg-[#111]">
                <CatalogMedia
                  src={image.src}
                  alt={image.alt}
                  className="mt-product object-cover"
                />
              </div>
            ))}
          </div>
        ) : null}
      </article>
      <QuoteBand />
      <Footer />
    </>
  );
}
