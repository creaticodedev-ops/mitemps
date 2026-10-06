"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-28 flex max-w-xl flex-col border border-white/10 bg-[#0a0a0a] px-8 py-12">
      <p className="text-[11px] tracking-[0.22em] text-[#8a8a8a] uppercase">
        Interruption
      </p>
      <h2 className="mt-4 text-4xl tracking-[-0.04em]">
        Une erreur est survenue.
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-[#c8c8c8]">
        L’affichage n’a pas pu aboutir. Vous pouvez relancer la page.
      </p>
      <button className="mt-btn mt-8 w-fit" onClick={() => reset()}>
        Réessayer
      </button>
    </div>
  );
}
