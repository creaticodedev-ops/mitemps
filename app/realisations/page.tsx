import { PageFrame } from "components/brand/page-frame";
import { QuoteBand } from "components/brand/quote-band";
import { CatalogMedia } from "components/catalog/media";
import { DemoMark } from "components/catalog/demo-mark";
import { EmptyState } from "components/catalog/empty";
import Footer from "components/layout/footer";
import { getProjects } from "lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Portfolio des projets équipés par MI TEMPS.",
};

export default function RealisationsPage() {
  const projects = getProjects();

  return (
    <>
      <PageFrame
        index="03"
        kicker="Portfolio"
        title="Nos réalisations."
        lede={
          projects.some((project) => project.isDemo)
            ? "Les projets affichés sont des fiches de démonstration. Le lieu et le client ne sont pas réels."
            : "Les projets publiés apparaissent ici avec leur lieu et les équipements installés."
        }
      >
        {projects.length ? (
          <div className="grid gap-4 px-5 pb-16 md:px-10 lg:px-14">
            {projects.map((project) => {
              const image = project.images[0];
              return (
                <Link
                  key={project.id}
                  href={`/realisations/${project.handle}`}
                  className="group relative block min-h-[58vh] overflow-hidden bg-[#111]"
                >
                  {image ? (
                    <CatalogMedia
                      src={image.src}
                      alt={image.alt}
                      className="mt-product object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                    {project.isDemo ? <DemoMark /> : null}
                    <h2 className="mt-4 text-4xl tracking-[-0.045em] md:text-6xl">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-sm text-[#e5e5e5]">{project.location}</p>
                    <p className="mt-1 text-[11px] tracking-[0.16em] text-white/70 uppercase">
                      {project.categories.join(" · ")}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="px-5 pb-20 md:px-10 lg:px-14">
            <EmptyState
              index="—"
              kicker="Portfolio"
              title="Aucun projet publié."
              text="Les réalisations documentées s’ouvriront ici."
            />
          </div>
        )}
      </PageFrame>
      <QuoteBand />
      <Footer />
    </>
  );
}
