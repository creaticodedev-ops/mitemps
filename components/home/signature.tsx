import { EmptyState } from "components/catalog/empty";
import { ProductCard } from "components/catalog/product-card";
import { DemoMark } from "components/catalog/demo-mark";
import { CatalogMedia } from "components/catalog/media";
import { Chapters, type Chapter } from "components/home/chapters";
import { QuoteBand } from "components/brand/quote-band";
import { reasons, solutions } from "lib/brand";
import type { Partner, Product, Project } from "lib/catalog";
import { catalogMode } from "lib/catalog";
import Link from "next/link";

export function Signature({
  chapters,
  products,
  projects,
  partners,
  catalogCount,
  categoryCount,
}: {
  chapters: Chapter[];
  products: Product[];
  projects: Project[];
  partners: Partner[];
  catalogCount: number;
  categoryCount: number;
}) {
  return (
    <>
      <section className="grid items-end gap-8 border-t border-white/10 px-5 py-14 md:grid-cols-12 md:px-10 md:py-24 lg:px-14">
        <h2 className="text-[2.2rem] leading-[0.92] font-medium tracking-[-0.045em] md:col-span-7 md:text-6xl">
          Des espaces de performance.
        </h2>
        <div className="md:col-span-5">
          <p className="max-w-sm text-base leading-relaxed text-[#cfcfcf]">
            MI TEMPS, par Oasis Group, équipe les clubs, les académies, les
            hôtels et les institutions.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
            <div>
              <dt className="text-[10px] tracking-[0.18em] text-[#777] uppercase">
                Index catalogue
              </dt>
              <dd className="mt-2 text-4xl tracking-[-0.04em]">
                {catalogCount > 0 ? String(catalogCount).padStart(2, "0") : "—"}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.18em] text-[#777] uppercase">
                Catégories
              </dt>
              <dd className="mt-2 text-4xl tracking-[-0.04em]">
                {categoryCount > 0
                  ? String(categoryCount).padStart(2, "0")
                  : "—"}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {chapters.length ? (
        <Chapters chapters={chapters} />
      ) : (
        <section className="px-5 pb-8 md:px-10 lg:px-14">
          <EmptyState
            index="01"
            kicker="Chapitres"
            title="Les catégories ouvrent ici."
            text="Chaque catégorie publiée devient un chapitre, avec ses produits réels. Aucune catégorie n’est inventée."
          />
        </section>
      )}

      <section className="px-5 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-4xl tracking-[-0.04em] md:text-6xl">Catalogue.</h2>
          <Link
            href="/catalogue"
            className="mt-link text-[11px] tracking-[0.18em] uppercase"
          >
            Tout voir
          </Link>
        </div>
        {products.length ? (
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index + 1}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <EmptyState
              index="02"
              kicker="Produits"
              title="Aucun produit publié."
              text="Les fiches du catalogue apparaissent ici dès qu’elles sont ajoutées. Aucun équipement fictif n’est affiché."
            />
          </div>
        )}
      </section>

      <section className="border-t border-white/10 px-5 py-16 md:px-10 md:py-24 lg:px-14">
        <p className="text-[11px] tracking-[0.22em] text-[#7a7a7a] uppercase">
          Solutions
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl leading-[0.95] tracking-[-0.045em] md:text-6xl">
          MI TEMPS construit des espaces.
        </h2>
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {solutions.map((solution, index) => (
            <Link
              key={solution.slug}
              href={`/solutions#${solution.slug}`}
              className="group grid gap-3 py-6 md:grid-cols-12 md:items-baseline"
            >
              <span className="text-[11px] tracking-[0.18em] text-[#777] md:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-2xl tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-2 md:col-span-4 md:text-3xl">
                {solution.title}
              </span>
              <span className="text-sm leading-relaxed text-[#c6c6c6] md:col-span-7">
                {solution.text}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 lg:px-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-[#7a7a7a] uppercase">
              Réalisations
            </p>
            <h2 className="mt-3 text-4xl tracking-[-0.04em] md:text-6xl">
              Projets.
            </h2>
          </div>
          <Link
            href="/realisations"
            className="mt-link text-[11px] tracking-[0.18em] uppercase"
          >
            Portfolio
          </Link>
        </div>
        {projects.length ? (
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => {
              const image = project.images[0];
              return (
                <Link
                  key={project.id}
                  href={`/realisations/${project.handle}`}
                  className={`group relative min-h-[52vh] overflow-hidden bg-[#111] ${
                    index === 0 ? "md:col-span-2 md:min-h-[68vh]" : "min-h-[46vh]"
                  }`}
                >
                  {image ? (
                    <CatalogMedia
                      src={image.src}
                      alt={image.alt}
                      className="mt-product object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    {project.isDemo ? <DemoMark /> : null}
                    <h3 className="mt-4 text-3xl tracking-[-0.04em]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#ddd]">{project.location}</p>
                    <p className="mt-1 text-[11px] tracking-[0.16em] text-white/70 uppercase">
                      {project.categories.join(" · ")}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-10">
            <EmptyState
              index="03"
              kicker="Réalisations"
              title="Aucun projet publié."
              text="Les réalisations documentées s’ouvriront ici."
            />
          </div>
        )}
      </section>

      <section className="border-t border-white/10 px-5 py-16 md:px-10 lg:px-14">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-4xl tracking-[-0.04em] md:text-6xl">Partenaires.</h2>
          <Link
            href="/partenaires"
            className="mt-link text-[11px] tracking-[0.18em] uppercase"
          >
            Écosystème
          </Link>
        </div>
        {partners.length ? (
          <>
            <p className="mt-4 max-w-xl text-sm text-[#9a9a9a]">
              {catalogMode === "demo"
                ? "Identités fictives, marquées démo. Aucune maison réelle n’est citée."
                : "Identités officielles."}
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-3">
              {partners.map((partner) => (
                <li key={partner.id} className="group bg-[#050505]">
                  <div className="flex h-36 flex-col items-center justify-center gap-3 transition-colors duration-500 group-hover:bg-white group-hover:text-[#050505]">
                    <span className="text-3xl tracking-[-0.04em]">{partner.mark}</span>
                    <span className="text-[10px] tracking-[0.18em] uppercase">
                      {partner.name}
                      {partner.isDemo ? " — démo" : ""}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="mt-10">
            <EmptyState
              index="04"
              kicker="Partenaires"
              title="Aucun partenaire publié."
              text="Les identités officielles seront présentées ici."
            />
          </div>
        )}
      </section>

      {catalogMode === "demo" ? (
        <section className="border-t border-white/10 px-5 py-14 md:px-10 lg:px-14">
          <p className="text-[11px] tracking-[0.22em] text-[#7a7a7a] uppercase">
            Repères — démonstration
          </p>
          <p className="mt-3 max-w-xl text-sm text-[#9a9a9a]">
            Ces chiffres comptent le jeu de démonstration. Ce ne sont pas des
            résultats de l’entreprise.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["Produits", catalogCount],
              ["Catégories", categoryCount],
              ["Projets", projects.length],
              ["Partenaires", partners.length],
            ].map(([label, value]) => (
              <div key={String(label)} className="border-t border-white/15 pt-4">
                <dt className="text-[11px] tracking-[0.16em] text-[#888] uppercase">
                  {label}
                </dt>
                <dd className="mt-3 text-5xl tracking-[-0.05em]">
                  {String(value).padStart(2, "0")}
                </dd>
                <p className="mt-2 text-[10px] tracking-[0.16em] text-[#666] uppercase">
                  Démo
                </p>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <section className="border-t border-white/10 px-5 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="text-4xl tracking-[-0.04em] md:col-span-5 md:text-6xl">
            Précision.
          </h2>
          <ul className="divide-y divide-white/10 border-y border-white/10 md:col-span-7">
            {reasons.map((reason) => (
              <li key={reason.index} className="grid grid-cols-[3rem_1fr] gap-4 py-5">
                <span className="text-[11px] tracking-[0.16em] text-[#777]">
                  {reason.index}
                </span>
                <div>
                  <h3 className="text-xl tracking-[-0.03em]">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#c8c8c8]">
                    {reason.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
