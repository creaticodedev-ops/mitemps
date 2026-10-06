import { atmosphereAt } from "lib/brand";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const image = atmosphereAt(0);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#050505]">
      {image ? (
        <div className="mt-hero-bg absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="mt-photo object-cover brightness-[0.62]"
          />
        </div>
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-[#050505]/70" />
      <div className="pointer-events-none absolute inset-3 hidden border border-white/10 md:block" />
      <div className="relative flex min-h-[100svh] flex-col justify-end px-5 pt-24 pb-8 md:px-10 md:pb-12 lg:px-14">
        <p className="mt-d1 text-[11px] tracking-[0.28em] text-white/70 uppercase">
          MI TEMPS — Oasis Group
        </p>
        <div className="mt-6 grid items-end gap-8 lg:grid-cols-12">
          <h1 className="mt-d2 text-[2.65rem] leading-[0.9] font-medium tracking-[-0.05em] text-white sm:text-6xl lg:col-span-8 lg:text-7xl xl:text-[6.6rem]">
            Équipez la performance.
          </h1>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="mt-d3 max-w-md text-sm leading-relaxed text-[#e8e8e8] md:text-base">
              Des équipements professionnels pour créer des espaces sportifs à
              la hauteur de vos ambitions.
            </p>
          </div>
        </div>
        <ul className="mt-d4 mt-8 grid grid-cols-3 gap-3 border-t border-white/15 pt-4 text-[10px] tracking-[0.14em] text-white/65 uppercase sm:text-[11px] sm:tracking-[0.18em]">
          <li>01 Équipement</li>
          <li>02 Solutions</li>
          <li>03 Infrastructure</li>
        </ul>
        <div className="mt-d5 mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/solutions" className="mt-btn">
            Découvrir nos solutions
          </Link>
          <Link href="/devis" className="mt-btn-ghost">
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}
