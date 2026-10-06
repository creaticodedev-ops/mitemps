import { PageFrame } from "components/brand/page-frame";
import Footer from "components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partenaires",
  description: "L’écosystème de partenaires MI TEMPS.",
};

export default function PartnersPage() {
  return (
    <>
      <PageFrame
        index="04"
        kicker="Écosystème"
        title="Partenaires."
        lede="Cette section accueillera les marques et institutions associées à MI TEMPS. Aucun logo n’est affiché tant qu’il n’a pas été fourni."
      >
        <p className="max-w-xl px-5 pb-24 text-sm leading-relaxed text-[#9a9a9a] md:px-10 lg:px-14">
          Les identités officielles seront présentées ici, en monochrome, dès
          qu’elles sont fournies.
        </p>
      </PageFrame>
      <Footer />
    </>
  );
}
