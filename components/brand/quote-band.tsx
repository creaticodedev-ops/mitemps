import Link from "next/link";

export function QuoteBand() {
  return (
    <section className="border-t border-white/10 px-5 py-24 md:px-10 md:py-36 lg:px-14">
      <p className="text-[11px] tracking-[0.28em] text-[#7a7a7a] uppercase">
        Projet
      </p>
      <h2 className="mt-6 max-w-5xl text-[2.5rem] leading-[0.92] font-medium tracking-[-0.045em] md:text-7xl">
        Votre projet commence ici.
      </h2>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/devis" className="mt-btn">
          Demander un devis
        </Link>
        <Link href="/contact" className="mt-btn-ghost">
          Contacter notre équipe
        </Link>
      </div>
    </section>
  );
}
