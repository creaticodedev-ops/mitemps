import { PageFrame } from "components/brand/page-frame";
import Footer from "components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Politique de confidentialité de MI TEMPS.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageFrame
        index="09"
        kicker="Légal"
        title="Confidentialité."
        lede="La politique de confidentialité sera publiée avec les informations réelles de traitement des données. Aucun texte juridique fictif n’est affiché."
      >
        <p className="max-w-xl px-5 pb-24 text-sm leading-relaxed text-[#9a9a9a] md:px-10 lg:px-14">
          Emplacement réservé à la politique de confidentialité de MI TEMPS.
        </p>
      </PageFrame>
      <Footer />
    </>
  );
}
