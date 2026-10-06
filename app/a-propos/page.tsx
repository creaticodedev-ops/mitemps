import { PageFrame } from "components/brand/page-frame";
import { QuoteBand } from "components/brand/quote-band";
import Footer from "components/layout/footer";
import { reasons } from "lib/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "MI TEMPS par Oasis Group. Équipements, solutions et expertise pour les espaces sportifs.",
};

export default function AboutPage() {
  return (
    <>
      <PageFrame
        index="05"
        kicker="Maison"
        title="Qui sommes-nous"
        lede="MI TEMPS est la marque d’Oasis Group dédiée à l’équipement professionnel et aux solutions pour les lieux de pratique."
      >
        <div className="grid gap-12 px-5 pb-16 md:grid-cols-12 md:px-10 lg:px-14">
          <div className="space-y-6 text-base leading-relaxed text-[#d4d4d4] md:col-span-6">
            <p>
              Clubs de fitness, clubs de football, académies, complexes, hôtels
              et institutions partagent le même besoin : un espace qui tient
              dans la durée et sert vraiment la performance.
            </p>
            <div>
              <h2 className="text-[11px] tracking-[0.2em] text-[#8a8a8a] uppercase">
                Mission
              </h2>
              <p className="mt-3">
                Fournir des équipements et des solutions complètes, du choix du
                matériel jusqu’à la mise en place.
              </p>
            </div>
            <div>
              <h2 className="text-[11px] tracking-[0.2em] text-[#8a8a8a] uppercase">
                Vision
              </h2>
              <p className="mt-3">
                Des infrastructures sportives précises, sobres et capables de
                porter l’ambition de ceux qui s’y entraînent.
              </p>
            </div>
            <div>
              <h2 className="text-[11px] tracking-[0.2em] text-[#8a8a8a] uppercase">
                Expertise
              </h2>
              <p className="mt-3">
                Lecture du site, sélection du matériel, installation et suivi.
                Le détail chiffré de l’entreprise sera publié lorsqu’il sera
                confirmé.
              </p>
            </div>
          </div>
          <div className="flex min-h-[36vh] flex-col justify-end border border-white/10 bg-[#0a0a0a] p-8 md:col-span-6 md:min-h-[48vh]">
            <p className="text-[11px] tracking-[0.22em] text-[#8a8a8a] uppercase">
              Oasis Group
            </p>
            <p className="mt-6 text-5xl leading-[0.9] tracking-[-0.05em] md:text-7xl">
              MI TEMPS
            </p>
          </div>
        </div>
        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.index}
              className="bg-[#050505] px-5 py-8 md:px-10"
            >
              <p className="text-[11px] tracking-[0.18em] text-[#666]">
                {reason.index}
              </p>
              <h2 className="mt-4 text-2xl">{reason.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#c8c8c8]">
                {reason.text}
              </p>
            </article>
          ))}
        </div>
      </PageFrame>
      <QuoteBand />
      <Footer />
    </>
  );
}
