import { PageFrame } from "components/brand/page-frame";
import { QuoteBand } from "components/brand/quote-band";
import Footer from "components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Portfolio des projets équipés par MI TEMPS.",
};

export default function RealisationsPage() {
  return (
    <>
      <PageFrame
        index="03"
        kicker="Portfolio"
        title="Nos réalisations."
        lede="Les projets publiés apparaîtront ici avec leur nom, leur lieu et les équipements réellement installés. Aucune réalisation fictive n’est affichée."
      >
        <div className="px-5 pb-20 md:px-10 lg:px-14">
          <p className="max-w-lg border-t border-white/15 pt-8 text-sm leading-relaxed text-[#a3a3a3]">
            Le portfolio est prêt. Dès qu’un projet MI TEMPS est documenté, il
            s’ouvre en pleine page : image, titre, lieu, catégories
            d’équipement.
          </p>
        </div>
      </PageFrame>
      <QuoteBand />
      <Footer />
    </>
  );
}
