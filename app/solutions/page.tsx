import { PageFrame } from "components/brand/page-frame";
import { QuoteBand } from "components/brand/quote-band";
import Footer from "components/layout/footer";
import { solutions } from "lib/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "MI TEMPS crée des espaces de performance pour clubs, académies, complexes, hôtels et institutions.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageFrame
        index="02"
        kicker="Solutions"
        title="Nous créons des espaces de performance."
        lede="MI TEMPS ne se limite pas à une liste de produits. Chaque solution couvre l’équipement, l’infrastructure et l’accompagnement d’un projet sportif."
      >
        <div className="px-5 pb-8 md:px-10 lg:px-14">
          {solutions.map((solution, index) => (
            <article
              key={solution.slug}
              id={solution.slug}
              className="grid gap-6 border-t border-white/10 py-12 md:grid-cols-12 md:py-16"
            >
              <p className="text-[11px] tracking-[0.22em] text-[#777] md:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="text-4xl tracking-[-0.04em] md:col-span-4 md:text-5xl">
                {solution.title}
              </h2>
              <div className="md:col-span-6">
                <p className="max-w-md text-base leading-relaxed text-[#d0d0d0]">
                  {solution.text}
                </p>
                <p className="mt-6 text-sm text-[#8a8a8a]">
                  Le détail de chaque projet — lieu, programme, images — sera
                  publié lorsqu’il existera. Aucun cas client n’est inventé.
                </p>
              </div>
            </article>
          ))}
        </div>
      </PageFrame>
      <QuoteBand />
      <Footer />
    </>
  );
}
