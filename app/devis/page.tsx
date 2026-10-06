import { PageFrame } from "components/brand/page-frame";
import { InquiryForm } from "components/contact/inquiry-form";
import Footer from "components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demander un devis",
  description: "Décrire un projet d’équipement sportif à MI TEMPS.",
};

export default async function QuotePage(props: {
  searchParams?: Promise<{ produit?: string }>;
}) {
  const searchParams = await props.searchParams;
  const product = searchParams?.produit;

  return (
    <>
      <PageFrame
        index="07"
        kicker="Devis"
        title="Votre projet commence ici."
        lede="Décrivez l’espace, l’usage et le niveau d’équipement. MI TEMPS répond avec une proposition professionnelle, sans prix affiché par défaut."
      >
        <div className="px-5 pb-24 md:px-10 lg:px-14">
          <InquiryForm intent="devis" product={product} />
        </div>
      </PageFrame>
      <Footer />
    </>
  );
}
