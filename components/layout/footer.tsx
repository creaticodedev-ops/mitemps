import { Wordmark } from "components/brand/wordmark";
import { navigation, solutions } from "lib/brand";
import Link from "next/link";

export default async function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050505] text-[#d8d8d8]">
      <div className="px-5 pt-16 pb-10 md:px-10 lg:px-14">
        <Wordmark size="footer" />
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Navigation">
            {navigation.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="mt-link block py-1 text-sm"
              >
                {item.title}
              </Link>
            ))}
          </FooterColumn>
          <FooterColumn title="Solutions">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions#${solution.slug}`}
                className="mt-link block py-1 text-sm"
              >
                {solution.title}
              </Link>
            ))}
          </FooterColumn>
          <FooterColumn title="Maison">
            <Link href="/a-propos" className="mt-link block py-1 text-sm">
              Qui sommes-nous
            </Link>
            <Link href="/realisations" className="mt-link block py-1 text-sm">
              Réalisations
            </Link>
            <Link href="/partenaires" className="mt-link block py-1 text-sm">
              Partenaires
            </Link>
            <Link href="/search" className="mt-link block py-1 text-sm">
              Produits
            </Link>
          </FooterColumn>
          <FooterColumn title="Contact">
            <Link href="/contact" className="mt-link block py-1 text-sm">
              Écrire
            </Link>
            <Link href="/devis" className="mt-link block py-1 text-sm">
              Demander un devis
            </Link>
            <p className="pt-3 text-sm text-[#8a8a8a]">
              Téléphone — à renseigner
            </p>
            <p className="text-sm text-[#8a8a8a]">Email — à renseigner</p>
            <p className="text-sm text-[#8a8a8a]">Lieu — à renseigner</p>
            <p className="pt-4 text-[11px] tracking-[0.16em] text-[#666] uppercase">
              Réseaux — liens à renseigner
            </p>
          </FooterColumn>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-6 text-xs text-[#8a8a8a] md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
        <p>© {year} Oasis Group. MI TEMPS. Tous droits réservés.</p>
        <div className="flex gap-5">
          <Link href="/mentions-legales" className="mt-link">
            Mentions légales
          </Link>
          <Link href="/confidentialite" className="mt-link">
            Confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-4 text-[11px] tracking-[0.22em] text-[#7a7a7a] uppercase">
        {title}
      </p>
      {children}
    </div>
  );
}
