import { PageFrame } from "components/brand/page-frame";
import Footer from "components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de MI TEMPS.",
};

export default function LegalPage() {
  return (
    <>
      <PageFrame
        index="08"
        kicker="Légal"
        title="Mentions légales."
        lede="Le texte légal officiel — éditeur, hébergeur, forme sociale — sera publié ici. Aucune information juridique n’est inventée."
      >
        <p className="max-w-xl px-5 pb-24 text-sm leading-relaxed text-[#9a9a9a] md:px-10 lg:px-14">
          Emplacement réservé aux mentions légales de MI TEMPS, Oasis Group.
        </p>
      </PageFrame>
      <Footer />
    </>
  );
}
