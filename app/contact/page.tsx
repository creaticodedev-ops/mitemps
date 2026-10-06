import { PageFrame } from "components/brand/page-frame";
import { InquiryForm } from "components/contact/inquiry-form";
import Footer from "components/layout/footer";
import { contactFacts } from "lib/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacter MI TEMPS, Oasis Group.",
};

export default function ContactPage() {
  return (
    <>
      <PageFrame
        index="06"
        kicker="Contact"
        title="Parlons du projet."
        lede="Les coordonnées officielles seront publiées ici. Le formulaire prépare votre message sans inventer d’adresse, de téléphone ou de lieu."
      >
        <div className="grid gap-16 px-5 pb-20 md:px-10 lg:grid-cols-12 lg:px-14">
          <dl className="space-y-8 lg:col-span-4">
            {contactFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[11px] tracking-[0.2em] text-[#7a7a7a] uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-2xl tracking-[-0.03em]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="lg:col-span-8">
            <InquiryForm intent="contact" />
          </div>
        </div>
        <section
          className="px-5 pb-20 md:px-10 lg:px-14"
          aria-label="Localisation"
        >
          <div className="relative min-h-[340px] overflow-hidden border border-white/10 bg-[#0a0a0a]">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
            <div className="relative flex min-h-[340px] items-end p-6 md:p-10">
              <div>
                <p className="text-[11px] tracking-[0.22em] text-[#9a9a9a] uppercase">
                  Carte
                </p>
                <h2 className="mt-3 text-3xl tracking-[-0.04em] md:text-5xl">
                  Adresse à renseigner
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[#c8c8c8]">
                  L’intégration cartographique sera reliée à l’adresse
                  officielle de MI TEMPS. Aucun point fictif n’est placé.
                </p>
              </div>
            </div>
          </div>
        </section>
      </PageFrame>
      <Footer />
    </>
  );
}
