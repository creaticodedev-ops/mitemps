import { PageFrame } from "components/brand/page-frame";
import { EmptyState } from "components/catalog/empty";
import Footer from "components/layout/footer";
import { catalogMode, getPartners } from "lib/catalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partenaires",
  description: "L’écosystème de partenaires MI TEMPS.",
};

export default function PartnersPage() {
  const partners = getPartners();
  const demo = catalogMode === "demo" && partners.some((partner) => partner.isDemo);

  return (
    <>
      <PageFrame
        index="04"
        kicker="Écosystème"
        title="Partenaires."
        lede={
          demo
            ? "Ces marques sont fictives. Elles servent à juger la grille, le survol et le rythme. Aucun partenaire réel n’est cité."
            : "Les identités officielles sont présentées ici, en monochrome."
        }
      >
        {partners.length ? (
          <ul className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-3">
            {partners.map((partner) => (
              <li key={partner.id} className="group bg-[#050505]">
                <div className="flex h-40 flex-col items-center justify-center gap-3 px-4 text-center transition-colors duration-500 group-hover:bg-white group-hover:text-[#050505] md:h-52">
                  <span className="text-4xl tracking-[-0.04em] md:text-5xl">
                    {partner.mark}
                  </span>
                  <span className="text-[11px] tracking-[0.18em] uppercase">
                    {partner.name}
                    {partner.isDemo ? " — démo" : ""}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="px-5 pb-20 md:px-10 lg:px-14">
            <EmptyState
              index="—"
              kicker="Partenaires"
              title="Aucun partenaire publié."
              text="Les identités officielles seront présentées ici."
            />
          </div>
        )}
        <div className="h-16" />
      </PageFrame>
      <Footer />
    </>
  );
}
